DROP DATABASE IF EXISTS TaskController;

CREATE SCHEMA TaskController;

CREATE TABLE `TaskController`.`Tasks` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `titleTask` VARCHAR(45) NULL,
    `contentTask` VARCHAR(125) NULL,
    `statusTask` VARCHAR(15) NULL,
    PRIMARY KEY (`id`));

SET SQL_SAFE_UPDATES = 0;

INSERT INTO TaskController.Tasks (titleTask, contentTask, statusTask) VALUES
    ("titulo", "Conteudo", "pendente");

