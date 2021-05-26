-- RN-C01
-- insert photo limit
DELIMITER //
CREATE OR REPLACE TRIGGER triggerPhotoLimit
BEFORE INSERT ON Photos
FOR EACH ROW
	BEGIN
	
	DECLARE numPhotos INT;
	
	SET numPhotos = (SELECT COUNT(*) FROM Photos P WHERE P.userId = new.userId);
	
	IF((numPhotos) > 50) THEN
		SIGNAL SQLSTATE '45000' SET message_text =
		'Un mismo usuario no puede subir mas de 50 fotos';
	END IF;
END //
DELIMITER ;

-- insert followers
DELIMITER //
CREATE OR REPLACE TRIGGER triggerInsertFollowers
AFTER INSERT ON Followers
FOR EACH ROW
BEGIN
	DECLARE `followers` INT;
	DECLARE `following` INT;
	SET `followers` = (SELECT U.`followers` FROM Users U WHERE U.userId = new.followerId);
	SET `following` = (SELECT U.`following` FROM Users U WHERE U.userId = new.followingId);
	
	SET `followers` = `followers` + 1;
	SET `following` = `following` + 1;
	
	UPDATE Users U SET U.`followers`=`followers` WHERE userId = new.followersId;
	UPDATE Users U SET U.`following`=`following` WHERE userId = new.followingId;
END //
DELIMITER ;

-- update followers
DELIMITER //
CREATE OR REPLACE TRIGGER triggerDeleteFollowers
AFTER DELETE ON Followers
FOR EACH ROW
BEGIN
	DECLARE `followers` INT;
	DECLARE `following` INT;
	SET `followers` = (SELECT U.`followers` FROM Users U WHERE U.userId = old.followerId);
	SET `following` = (SELECT U.`following` FROM Users U WHERE U.userId = old.followingId);
	
	SET `followers` = `followers` - 1;
	SET `following` = `following` - 1;
	
	UPDATE Users U SET U.`followers`=`followers` WHERE userId = old.followersId;
	UPDATE Users U SET U.`following`=`following` WHERE userId = old.followingId;
END //
DELIMITER ;

-- insert comment valoration
DELIMITER //
CREATE OR REPLACE TRIGGER triggerInsertCommentValoration
AFTER INSERT ON Comments
FOR EACH ROW
BEGIN
	DECLARE `valorationsSum` DOUBLE;
	DECLARE `n` INT;
	DECLARE `newValoration` DOUBLE;
	
	SET `valorationsSum` = (SELECT SUM(C.valoration) FROM Comments C WHERE C.photoId = new.photoId);
	SET `n` = (SELECT COUNT(*) FROM Comments C WHERE C.photoId = new.photoId);
	
	SET `valorationsSum` = `valorationsSum` + new.valoration;
	SET `n` = `n` + 1;
	
	SET `newValoration` = `valorationsSum` / `n`;
	
	UPDATE Photos P SET P.`valoration`=`newValoration` WHERE P.photoId = new.photoId;
END //
DELIMITER ;

-- update photo valoration
DELIMITER //
CREATE OR REPLACE TRIGGER triggerUpdatePhotoValoration
AFTER UPDATE ON Photos
FOR EACH ROW
BEGIN
	DECLARE `valorationsSum` DOUBLE;
	DECLARE `n` INT;
	DECLARE `newValoration` DOUBLE;
	
	SET `valorationsSum` = (SELECT SUM(P.valoration) FROM Photos P WHERE P.userId = new.userId);
	SET `n` = (SELECT COUNT(*) FROM Photos P WHERE P.userId = new.userId);
	
	SET `valorationsSum` = `valorationsSum` + new.valoration;
	SET `n` = `n` + 1;
	
	SET `newValoration` = `valorationsSum` / `n`;
	
	UPDATE Users U SET U.`valoration`=`newValoration` WHERE U.userId = new.userId;
END //
DELIMITER ;

-- insert number of comments
DELIMITER //
CREATE OR REPLACE TRIGGER triggerInsertComments
AFTER INSERT ON Comments
FOR EACH ROW
BEGIN
	DECLARE n INT;
	SET n = (SELECT P.`comments` FROM Photos P WHERE P.photoId = new.photoId);

	SET n = n + 1;
	
	UPDATE Photos P SET P.`comments`=`n` WHERE photoId = new.photoId;
END //
DELIMITER ;