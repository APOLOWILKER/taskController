DROP DATABASE IF EXISTS TaskController;

CREATE SCHEMA TaskController;

CREATE TABLE `TaskController`.`Tasks` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `createdAt` DATE,
    `titleTask` VARCHAR(45) NULL,
    `contentTask` VARCHAR(125) NULL,
    `statusTask` VARCHAR(15) NULL,
    PRIMARY KEY (`id`));

SET SQL_SAFE_UPDATES = 0;

INSERT INTO TaskController.Tasks (createdAt, titleTask, contentTask, statusTask) VALUES
    ("2006-12-30 00:38:54.840" ,"titulo", "Conteudo", "pendente");

