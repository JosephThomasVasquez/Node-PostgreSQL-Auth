import { Strategy } from "passport-local";
import pool from "./dbConfig.js";
import bcrypt from "bcrypt";
import passport from "passport";

function initialize(passport) {
  const authenticateUser = (email, password, done) => {
    // Send query to postgres database matching user email
    pool.query(
      `SELECT * FROM users WHERE email = $1`,
      [email],
      (error, results) => {
        if (error) {
          console.log("postgres error: ", error);
          throw error;
        }
        console.log("postgres results: ", results.rows);

        if (results.rows.length > 0) {
          // Set user as the first result found in postgres database
          const user = results.rows[0];

          // Compare password from session if it matches users stored password
          bcrypt.compare(password, user.password, (error, isMatch) => {
            if (error) {
              console.log("postgres error: ", error);
              throw error;
            }

            if (isMatch) {
              // If password matches
              return done(null, user);
              // If password does not match
            } else {
              return done(null, false, { message: "Incorrect Password!" });
            }
          });
        } else {
          return done(null, false, {
            message: "No registered user found with that email.",
          });
        }
      }
    );
  };

  passport.use(
    new Strategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      authenticateUser
    )
  );

  // Store user id in the session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // Get user details from postgres database
  passport.deserializeUser((id, done) => {
    pool.query(`SELECT * FROM users WHERE id = $1`, [id], (error, results) => {
      if (error) {
        console.log("postgres error: ", error);
        throw error;
      }
      return done(null, results.rows[0]);
    });
  });
}

export { initialize };
