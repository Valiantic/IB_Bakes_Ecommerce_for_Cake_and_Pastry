-- DATABASE AND TABLE SCHEMA FOR IBBakes Ecommerce

-- CREATE DATABASE 
CREATE DATABASE db_ibbakes;

-- TABLE FOR ACCOUNTS
CREATE TABLE tbl_users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  reset_token VARCHAR(255),
  reset_token_expires BIGINT,
  PRIMARY KEY (id)
);


-- ADD ADMIN ACCOUNT
INSERT INTO tbl_users (username, email, password)
VALUES ('Admin', 'admin@bakes.com', '$2y$10$wN5tfyWg9iLg0XfT6ZmpLeEd1jSyQipO/1kDhY.FSAIYosGv97G2C');



