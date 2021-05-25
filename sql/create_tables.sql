DROP TABLE IF EXISTS InapropiateWords;
DROP TABLE IF EXISTS Followers;
DROP TABLE PhotosCategories;
DROP TABLE IF EXISTS Categories;
DROP TABLE IF EXISTS Comments;
DROP TABLE IF EXISTS Photos;
DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
	`userId` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`username` VARCHAR(50) UNIQUE NOT NULL,
	`name` VARCHAR(30) NOT NULL,
	`surnames` VARCHAR(50) NOT NULL,
	`avatar` VARCHAR(250) DEFAULT "./images/profile_photo.png",
	`password` VARCHAR(250),
	`email` VARCHAR(100),
	`phone` INT,
	`followers` INT DEFAULT 0,
	`following` INT DEFAULT 0,
	`valoration` DOUBLE DEFAULT 0,
	UNIQUE (`name`, `surnames`)
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
	`visibility` ENUM('PUBLIC', 'PRIVATE') DEFAULT 'PUBLIC',
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
	FOREIGN KEY (`photoId`) REFERENCES Photos (`photoId`) ON DELETE CASCADE,
	UNIQUE (`userId`, `photoId`)
);

CREATE TABLE Categories (
	`categorieId` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`name`VARCHAR(250) NOT NULL
);

CREATE TABLE PhotosCategories (
	`photosCategoriesId` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`photoId` INT NOT NULL,
	`categorieId` INT NOT NULL,
	FOREIGN KEY (`photoId`) REFERENCES Photos (`photoId`) ON DELETE CASCADE,
	FOREIGN KEY (`categorieId`) REFERENCES Categories (`categorieId`) ON DELETE CASCADE,
	UNIQUE (`photoId`, `categorieId`)
	
);

CREATE TABLE Followers (
	`followersId` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`followerId` INT NOT NULL,
	`followingId` INT NOT NULL,
	FOREIGN KEY (`followerId`) REFERENCES Users (`userId`) ON DELETE CASCADE,
	FOREIGN KEY (`followingId`) REFERENCES Users (`userId`) ON DELETE CASCADE,
	UNIQUE (`followerId`, `followingId`)
);

CREATE TABLE InapropiateWords (
	`inapropiateWordId` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`word` VARCHAR(50) UNIQUE NOT NULL
);