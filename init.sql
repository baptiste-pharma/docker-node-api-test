SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

DROP TABLE IF EXISTS `Apples`;

CREATE TABLE `Apples` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `color` VARCHAR(255) NOT NULL,
  `variety` VARCHAR(255) NOT NULL,
  `weight` INT NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `Apples` (`id`, `color`, `variety`, `weight`) VALUES
(1, 'blue', 'Green Smith', 3),
(2, 'red', 'Fuji', 4),
(3, 'blue', 'Granny Smith', 5),
(4, 'yellow', 'Golden Delicious', 6),
(5, 'pink', 'Pink Lady', 7),
(6, 'orange', 'Honeycrisp', 8),
(7, 'purple', 'Braeburn', 4),
(8, 'brown', 'Cripps Pink', 5),
(9, 'white', 'Jonagold', 6),
(10, 'black', 'Gala', 7),
(11, 'gold', 'Ambrosia', 8);