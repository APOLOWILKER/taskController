DROP DATABASE IF EXISTS TaskController;

CREATE DATABASE TaskController;

USE TaskController;

CREATE TABLE tasks (
    id INT NOT NULL auto_increment,
    titleTask VARCHAR(70) NOT NULL,
    contentTask VARCHAR(120) NOT NULL,
    statusTask VARCHAR(15) NOT NULL,
) ENGINE=INNODB;

SET SQL_SAFE_UPDATES = 0;

-- INSERT INTO StoreManager.tasks (titleTask, contentTask, statusTask) VALUES
--     ("", "", "pendente"),
--     ("", "", "pendente"),

