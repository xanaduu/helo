DROP TABLE users_helo;

CREATE TABLE users_helo (
  id SERIAL PRIMARY KEY NOT NULL,
   first varchar(20),
   last TEXT
 );

 CREATE TABLE users_helo_app (
  id SERIAL,
  auth0_id TEXT,
  email TEXT,
  name TEXT
);

SELECT * FROM users_helo