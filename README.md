# project-3

before running backend, ensure that dependencies have been installed - npm install
log into psql - psql -U postgres 
create database - create database project3;
create .env file in root - back-end/.env
copy and paste below and use your own password. TOKEN_KEY can be any string
  POSTGRES_PASSWORD=your_password
  PORT=3001
  TOKEN_KEY=SDIC4GROUP5
run the backend - npm run dev
use your API client (yarc/postman) and send a POST request to http://localhost:3001/register with JSON body of
{
    "email": "a@a.com",
    "password": "a"
}
