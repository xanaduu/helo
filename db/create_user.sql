INSERT INTO users_helo_app (auth0_id, email) values ($1, $2)
RETURNING *;