# Game of War

## Default Overview:
Backend application that plays the card game of War. This is a RESTful service with two endpoints. One endpoint starts the game - two simulated players will play out the game.
The second endpoint retrieves wins for each player stored in a database

### Installing Dependencies
The application currently connects to local postgres at port  `5432` statically via `database.js`.
#### Install Postgres and Create Tables
- [Install postgres](https://www.postgresql.org/download/)
- Using your favorite tools create database called `gameofwar` (or update the static value in `database.js`) and a table in that database called `wins` with a primary key column and a `player_id` column

### Steps to Run the Application
- Run `npm i`
- Run `npm run watch:dev`
- The server should now be running on `localhost:3000` and will watch for changes in the `/server` folder.
- Test routes via api testing application like Postman ([my postman schema](https://www.getpostman.com/collections/8f1e4adff90b5b98ae56))

### Endpoints
#### Start a Game
  - `POST /games`
#### Retrieve wins
- `GET /games/wins`

### Featured Tech & Frameworks
Javascript, Express, PosgreSQL, Postman, Mocha.

###
### Running test-specs
- `npm run test`
### Future Developments *Forthcoming
UI walk-through, automatic database setup and cloud deployment.
