CREATE TABLE profile (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30)
);


INSERT INTO profile (name, email) VALUES
('Jerry', 'jerry@example.com'),
('George', 'george@example.com');