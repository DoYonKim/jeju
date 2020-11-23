CREATE TABLE `jeju`.`cardHolder` (
  `card_holder_id` INT NOT NULL auto_increment,
  `card_holder_date` DATE NULL,
  `card_holder_category` VARCHAR(50) NULL,
  `card_holder_location` VARCHAR(100) NULL,
  PRIMARY KEY (`card_holder_id`));


  CREATE TABLE `jeju`.`card` (
  `card_id` INT NOT NULL AUTO_INCREMENT,
  `card_holder_id` INT NOT NULL,
  `card_order` INT NULL,
  `card_type` VARCHAR(45) NULL,
  `card_contents_1` text NULL,
  `card_contents_2` text NULL,
  `card_contents_3` text NULL,
  `card_contents_4` text NULL,
  `card_contents_5` text NULL,
  `card_contents_6` text NULL,
  `card_contents_7` text NULL,
  `card_contents_8` text NULL,
  `card_contents_9` text NULL,
  `card_contents_10` text NULL,
  PRIMARY KEY (`card_id`),
  FOREIGN KEY (`card_holder_id`) REFERENCES cardHolder(`card_holder_id`));