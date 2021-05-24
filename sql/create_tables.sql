DROP TABLE IF EXISTS Comments;
DROP TABLE IF EXISTS Photos;
DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
	`userId` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`username` VARCHAR(50) NOT NULL,
	`name` VARCHAR(30) NOT NULL,
	`surnames` VARCHAR(50) NOT NULL,
	`avatar` VARCHAR(250),
	`phone` INT,
	`followers` INT DEFAULT 0,
	`following` INT DEFAULT 0,
	`valoration` DOUBLE DEFAULT 0
);

CREATE TABLE Photos (
	`photoId` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`title` VARCHAR(50) NOT NULL,
	`description` VARCHAR(250),
	`url` VARCHAR(250) NOT NULL,
	`userId` INT NOT NULL,
	`valoration` DOUBLE DEFAULT 0 NOT NULL,
	`date` DATETIME DEFAULT NOW() NOT NULL,
	`comments` INT DEFAULT 0,
	`visibility` BOOLEAN DEFAULT 1,
	FOREIGN KEY (`userId`) REFERENCES Users (`userId`) ON DELETE CASCADE
);

CREATE TABLE Comments (
	`commentId` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`userId` INT NOT NULL,
	`photoId` INT NOT NULL,
	`comment` VARCHAR(300) NOT NULL,
	`valoration` DOUBLE NOT NULL,
	`date` DATETIME NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES Users (`userId`) ON DELETE CASCADE,
	FOREIGN KEY (`photoId`) REFERENCES Photos (`photoId`) ON DELETE CASCADE
);