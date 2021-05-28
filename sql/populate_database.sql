INSERT INTO Users (
	`userId`,
	`username`,
	`name`,
	`surnames`,
	`avatar`,
	`phone`
)
    VALUES
	(1, 'maria_rc', 'Maria', 'Romero Camacho', './images/avatars/pf0.jpg', 654567839),
	(2, 'juanms01', 'Juan', 'Macho Sanchez', './images/avatars/pf1.jpg', 654567839),
	(3, 'pjm1', 'Pedro', 'Camacho Oliva', './images/avatars/pf2.jpg', 654567839),
	(4, 'john99', 'Jhon', 'Gibson Gonzalez', './images/avatars/pf3.jpg', 654567839),
	(5, 'mari_', 'Maria', 'Magdalena Ramirez', './images/avatars/pf4.jpg', 654567839),
	(6, 'ivangrm', 'Ivan', 'Gallardo Retamal', './images/avatars/pf5.jpg', 654567839),
	(7, 'rob80', 'Robert', 'Marin Montes', './images/avatars/pf6.jpg', 654567839),
	(8, 'jiaopin', 'Jiao', 'Ping Ho', './images/avatars/pf7.jpg', 654567839),
	(9, 'se_is', 'Sheila', 'Rodriguez Benitez', './images/avatars/pf8.jpg', 654567839),
	(10, 'sabrinacp', 'Sabrina', 'Carpenter Peterson', './images/avatars/pf9.jpg', 654567839),
	(11, 'Macmacvic', 'Macarena', 'Castro Garcia', './images/avatars/pf10.jpg', 654567839),
	(12, 'ezegonmac', 'Ezequiel', 'Gonzalez Macho', './images/avatars/pf11.jpg', 654567839),
	(13, 'albagm0', 'Alba', 'Gonzalez Macho', './images/avatars/pf12.jpg', 654567839),
	(14, 'AleDJ', 'Alejandro', 'Helios Camacho', './images/avatars/pf13.jpg', 654567839),
	(15, 'martamm2001', 'Marta', 'Muñoz Macho', './images/avatars/pf14.jpg', 654567839),
	(16, 'HannaG', 'Hanna', 'Gutierrez Marin', './images/avatars/pf15.jpg', 654567839),
	(17, 'AleDJ0', 'Alejandro0', 'Helios Camacho', './images/avatars/pf16.jpg', 654567839),
	(18, 'AleDJ1', 'Alejandro1', 'Helios Camacho', './images/avatars/pf17.jpg', 654567839),
	(19, 'AleDJ2', 'Alejandro2', 'Helios Camacho', './images/avatars/pf18.jpg', 654567839),
	(20, 'AleDJ3', 'Alejandro3', 'Helios Camacho', './images/avatars/pf19.jpg', 654567839),
	(21, 'AleDJ4', 'Alejandro4', 'Helios Camacho', './images/avatars/pf20.jpg', 654567839),
	(22, 'AleDJ5', 'Alejandro5', 'Helios Camacho', './images/avatars/pf21.jpg', 654567839),
	(23, 'AleDJ6', 'Alejandro6', 'Helios Camacho', './images/avatars/pf22.jpg', 654567839),
	(24, 'AleDJ7', 'Alejandro7', 'Helios Camacho','./images/avatars/pf23.jpg', 654567839),
	(25, 'AleDJ8', 'Alejandro8', 'Helios Camacho','./images/avatars/pf24.jpg', 654567839),
	(26, 'AleDJ9', 'Alejandro9', 'Helios Camacho','./images/avatars/pf25.jpg', 654567839),
	(27, 'albagm1', 'Alba1', 'Gonzalez Macho',  './images/avatars/pf26.jpg', 654567839),
	(28, 'albagm2', 'Alba2', 'Gonzalez Macho',  './images/avatars/pf27.jpg', 654567839),
	(29, 'albagm3', 'Alba3', 'Gonzalez Macho',  './images/avatars/pf28.jpg', 654567839),
	(30, 'albagm4', 'Alba4', 'Gonzalez Macho',  './images/avatars/pf29.jpg', 654567839),
	(31, 'albagm5', 'Alba5', 'Gonzalez Macho',  './images/avatars/pf30.jpg', 654567839);
	
INSERT INTO USERS (
	`userId`,
	`username`,
	`name`,
	`surnames`,
	`avatar`,
	`password`,
	`email`,
	`phone`
)
VALUES 
	(32, 'ezegonmac2', 'Ezequiel', 'Macho', './images/profile_photo.png', 'pbkdf2:sha256:150000$mkyP4LPf$1dbe7d01b040aedca49310885aed1f66079b8dddca7fe7d133825e6f696af244', 'ezquielgon2@gmail.com', 626425195);	


INSERT INTO Photos (
	`photoId`,
	`title`,
	`description`,
	`url`,
	`userId`,
	`date`
)
	VALUES
	(1,'Path to the sky...','Last trip to australia.','./images/posts/p0.jpg',1,'2019-08-01'),
	(2,'Sturbucks','Gran dia paseando por el centro de la ciudad','./images/posts/p2.jpg',1,'2018-01-01'),
	(3,'1980','Portrait of a Radio','./images/posts/p3.jpg',3,'2020-01-01'),
	(4,'Selfie','One of today. Recording and inspiring.','./images/posts/p4.jpg',4,'2020-01-01'),
	(5,'Music','Good moments with frinds.','./images/posts/p5.jpg',5,'2020-01-01'),
	(6,'Palm Tree','Beautiful palm tree in the middel of the street','./images/posts/p6.jpg',6,'2020-01-01'),
	(7,'Olay','My new set of face care creams','./images/posts/p7.jpg',7,'2020-01-01'),
	(8,'GLO','Making art with simple things.','./images/posts/p8.jpg',8,'2020-01-01'),
	(9,'MIKE','Taking a walk with my hommie','./images/posts/p9.jpg',9,'2020-01-01'),
	(10,'Palm Tree','Beautiful palm tree in the middel of the street','./images/posts/p10.jpg',10,'2020-01-01'),
	(11,'Architecture','Some inspirational structures','./images/posts/p11.jpg',11,'2020-01-01'),
	(12,'Fly','fly to another place','./images/posts/p12.jpg',12,'2020-01-01'),
	(13,'Capture the moment','My old camera from 1990','./images/posts/p13.jpg',1,'2020-06-06'),
	(14,'Capture the moment','My old camera from 1990','./images/posts/p14.jpg',4,'2020-01-01'),
	(15,'Riverdale','Beautiful landscape from floor level','./images/posts/p15.jpg',5,'2020-01-01'),
	(16,'At a glance','Making progress','./images/posts/p16.jpg',10,'2020-01-01'),
	(17,'Space','Antenna in the sky','./images/posts/p17.jpg',2,'2020-01-01'),
	(18,'Flora','Nature around us','./images/posts/p18.jpg',3,'2020-01-01'),
	(19,'Perfect company','Working on my own','./images/posts/p19.jpg',4,'2020-11-01'),
	(20,'Perfect company','Working on my own','./images/posts/p20.jpg',10,'2018-01-01'),
	(21,'Perfect company','Working on my own','./images/posts/p21.jpg',21,'2019-05-20'),
	(22,'Perfect company','Working on my own','./images/posts/p22.jpg',21,'2018-05-01'),
	(23,'Perfect company','Working on my own','./images/posts/p23.jpg',23,'2019-01-01'),
	(24,'Perfect company','Working on my own','./images/posts/p24.jpg',21,'2018-02-02'),
	(25,'Perfect company','Working on my own','./images/posts/p25.jpg',18,'2019-04-01'),
	(26,'Perfect company','Working on my own','./images/posts/p26.jpg',28,'2018-01-01'),
	(27,'Flora','Nature around us','./images/posts/p27.jpg',27,'2019-12-24'),
	(28,'Flora','Nature around us','./images/posts/p28.jpg',26,'2018-01-18'),
	(29,'Flora','Nature around us','./images/posts/p29.jpg',25,'2018-01-01'),
	(30,'Flora','Nature around us','./images/posts/p30.jpg',3,'2020-01-01'),
	(31,'Flora','Nature around us','./images/posts/p31.jpg',2,'2020-01-19'),
	(32,'Flora','Nature around us','./images/posts/p32.jpg',13,'2017-01-01'),
	(33,'Flora','Nature around us','./images/posts/p33.jpg',23,'2020-10-10'),
	(34,'Perfect company','Working on my own','./images/posts/p34.jpg',1,'2021-01-12'),
	(35,'Fly','fly to another place','./images/posts/p35.jpg',15,'2020-11-01'),
	(36,'Fly','fly to another place','./images/posts/p36.jpg',19,'2020-01-01'),
	(37,'Fly','fly to another place','./images/posts/p37.jpg',30,'2017-01-20'),
	(38,'Fly','fly to another place','./images/posts/p38.jpg',3,'2020-02-01'),
	(39,'Fly','fly to another place','./images/posts/p39.jpg',1,'2020-01-14'),
	(40,'Fly','fly to another place','./images/posts/p40.jpg',1,'2020-01-14');
	
INSERT INTO Comments (
	`commentId`,
	`userId`,
	`photoId`,
	`comment`,
	`valoration`,
	`date`
)
	VALUES
	(1,1,2,'Comentario de ejemplo 1',0,'2020-01-01'),
	(2,2,1,'Comentario de ejemplo 1',1,'2020-01-01'),
	(3,3,3,'Comentario de ejemplo 1',2,'2020-01-01'),
	(4,4,5,'Comentario de ejemplo 1',2,'2020-01-01'),
	(5,5,2,'Comentario de ejemplo 1',4,'2020-01-01'),
	(6,6,5,'Comentario de ejemplo 1',4.5,'2020-01-01'),
	(7,2,6,'Comentario de ejemplo 1',5,'2020-01-01'),
	(8,3,8,'Comentario de ejemplo 1',4,'2020-01-01'),
	(9,1,8,'Comentario de ejemplo 1',4.5,'2020-01-01'),
	(10,2,9,'Comentario de ejemplo 1',4.5,'2020-01-01'),
	(11,12,10,'Comentario de ejemplo 1',4.5,'2020-01-01'),
	(12,5,13,'Comentario de ejemplo 2',2,'2020-01-01'),
	(13,2,14,'Comentario de ejemplo 1',4.5,'2020-01-01'),
	(14,3,19,'Comentario de ejemplo 1',4.5,'2020-01-01'),
	(15,2,2,'Comentario de ejemplo 1',4,'2020-01-01'),
	(16,6,12,'Comentario de ejemplo 1',4.5,'2020-01-01'),
	(17,1,13,'Comentario de ejemplo 1',5,'2020-01-01'),
	(18,3,12,'Comentario de ejemplo 1',4.5,'2020-01-01'),
	(19,2,11,'Comentario de ejemplo 1',4.5,'2020-01-01'),
	(20,2,8,'Comentario de ejemplo 1',4.5,'2020-01-01'),
	(21,4,9,'Comentario de ejemplo 1',0.5,'2020-01-01'),
	(22,6,7,'Comentario de ejemplo 1',4.5,'2020-01-01'),
	(23,2,12,'Comentario de ejemplo 1',2.5,'2020-01-01'),
	(24,7,6,'Comentario de ejemplo 1',3.5,'2020-01-01'),
	(25,9,6,'Comentario de ejemplo 1',2.5,'2020-01-01'),
	(26,10,3,'Comentario de ejemplo 1',4.5,'2020-01-01'),
	(27,12,4,'Comentario de ejemplo 1',1.5,'2020-01-01'),
	(28,5,7,'Comentario de ejemplo 1',1.5,'2020-01-01'),
	(29,3,7,'Comentario de ejemplo 1',1,'2020-01-01'),
	(30,7,9,'Comentario de ejemplo 1',2,'2020-01-01');

	INSERT INTO Categories (
	`categorieId`,
	`name`
	)
	VALUES
		( 1,  "Nature"),
		( 2,  "Pets"),
		( 3,  "Joy"),
		( 4,  "Happiness"),
		( 5,  "Fear"),
		( 6,  "Peaceful"),
		( 7,  "Sun"),
		( 8,  "Family"),
		( 9,  "Dog"),
		(10,  "Cat");

	INSERT INTO PhotosCategories(
	`photosCategoriesId` ,
	`photoId` ,
	`categorieId`
	)
	VALUES
		(1, 1, 1),
		(2, 1, 2),
		(3, 1, 3),
		(4, 1, 4),
		(5, 1, 5),
		(6, 1, 7),
		(7, 1, 8),
		(8, 1, 9),
		(9, 1, 10),
		(10, 2, 1),
		(11, 2, 2),
		(12, 2, 3),
		(13, 2, 4),
		(14, 2, 5),
		(15, 2, 7),
		(16, 2, 8),
		(17, 3, 1),
		(18, 3, 2),
		(19, 3, 3),
		(20, 3, 4),
		(21, 4, 5),
		(22, 4, 6),
		(23, 4, 7),
		(24, 4, 8),
		(25, 4, 9),
		(26, 5, 2),
		(27, 5, 3),
		(28, 5, 4),
		(29, 6, 5);

INSERT INTO InapropiateWords(
	`inapropiateWordId`,
	`word`
)
VALUES
	(1, "puta"),
	(2, "polla"),
	(3, "cabron"),
	(4, "mierda"),
	(5, "joder"),
	(6, "gilipollas"),
	(7, "puto"),
	(8, "cabrona");
	
	
	INSERT INTO Followers(
	`followersId`,
	`followerId`,
	`followingId`
)	
	VALUES 
		(1 ,1 ,2),
		(2 ,1 ,3),
		(3 ,1 ,4),
		(4 ,1 ,5),
		(5 ,1 ,6),
		(6 ,1 ,7),
		(7 ,1 ,8),
		(8 ,1 ,9),
		(9 ,1 ,10),
		(10,2 ,1),
		(11,2 ,3),
		(12,2 ,4),
		(13,2 ,5),
		(14,2 ,6),
		(15,3 ,1),
		(16,3 ,2),
		(17,3 ,20),
		(18,3 ,4),
		(19,3 ,5),
		(20,3 ,6),
		(21,3 ,8),
		(22,3 ,7),
		(23,3 ,9),
		(24,3 ,10),
		(25,3 ,11),
		(26,3 ,12),
		(27,3 ,13),
		(28,3 ,14),
		(29,3 ,15);