INSERT INTO Users (
	`userId`,
	`username`,
	`name`,
	`surnames`,
	`avatar`,
	`phone`,
	`followers`,
	`following`
)
    VALUES
	(1, '@maria_rc', 'Maria', 'Romero Camacho', './images/avatars/pf0.jpg', 654567839, 78, 124),
	(2, '@juanms01', 'Juan', 'Macho Sanchez', './images/avatars/pf1.jpg', 654567839, 48, 62),
	(3, '@pjm1', 'Pedro', 'Camacho Oliva', './images/avatars/pf2.jpg', 654567839, 18, 71),
	(4, '@john99', 'Jhon', 'Gibson Gonzalez', './images/avatars/pf3.jpg', 654567839, 8, 30),
	(5, '@mari_', 'Maria', 'Magdalena Ramirez', './images/avatars/pf4.jpg', 654567839, 118, 110),
	(6, '@ivangrm', 'Ivan', 'Gallardo Retamal', './images/avatars/pf5.jpg', 654567839, 780, 120),
	(7, '@rob80', 'Robert', 'Marin Montes', './images/avatars/pf6.jpg', 654567839, 2, 120),
	(8, '@jiaopin', 'Jiao', 'Ping Ho', './images/avatars/pf7.jpg', 654567839, 123, 23),
	(9, '@she_is', 'Sheila', 'Rodriguez Benitez', './images/avatars/pf8.jpg', 654567839, 235, 2),
	(10, '@sabrinacp', 'Sabrina', 'Carpenter Peterson', './images/avatars/pf9.jpg', 654567839, 500, 560),
	(11, '@Macmacvic', 'Macarena', 'Castro Garcia', './images/avatars/pf10.jpg', 654567839, 7, 10),
	(12, '@ezegonmac', 'Ezequiel', 'Gonzalez Macho', './images/avatars/pf11.jpg', 654567839, 80, 20),
	(13, '@albagm', 'Alba', 'Gonzalez Macho', './images/avatars/pf12.jpg', 654567839, 78, 124),
	(14, '@AleDJ', 'Alejandro', 'Helios Camacho', './images/avatars/pf13.jpg', 654567839, 781, 124),
	(15, '@martamm2001', 'Marta', 'Muñoz Macho', './images/avatars/pf14.jpg', 654567839, 72, 124),
	(16, '@HannaG', 'Hanna', 'Gutierrez Marin', './images/avatars/pf15.jpg', 654567839, 83, 124),
	(17, '@AleDJ', 'Alejandro', 'Helios Camacho', './images/avatars/pf16.jpg', 654567839, 8, 124),
	(18, '@AleDJ', 'Alejandro', 'Helios Camacho', './images/avatars/pf17.jpg', 654567839, 8, 124),
	(19, '@AleDJ', 'Alejandro', 'Helios Camacho', './images/avatars/pf18.jpg', 654567839, 18, 124),
	(20, '@AleDJ', 'Alejandro', 'Helios Camacho', './images/avatars/pf19.jpg', 654567839, 28, 14),
	(21, '@AleDJ', 'Alejandro', 'Helios Camacho', './images/avatars/pf20.jpg', 654567839, 7, 1234),
	(22, '@AleDJ', 'Alejandro', 'Helios Camacho', './images/avatars/pf21.jpg', 654567839, 8, 1),
	(23, '@AleDJ', 'Alejandro', 'Helios Camacho', './images/avatars/pf22.jpg', 654567839, 18, 24),
	(24, '@AleDJ', 'Alejandro', 'Helios Camacho','./images/avatars/pf23.jpg', 654567839, 2, 62),
	(25, '@AleDJ', 'Alejandro', 'Helios Camacho','./images/avatars/pf24.jpg', 654567839, 8, 62),
	(26, '@AleDJ', 'Alejandro', 'Helios Camacho','./images/avatars/pf25.jpg', 654567839, 678, 2),
	(27, '@albagm', 'Alba', 'Gonzalez Macho',  './images/avatars/pf26.jpg', 654567839, 12, 622),
	(28, '@albagm', 'Alba', 'Gonzalez Macho',  './images/avatars/pf27.jpg', 654567839, 38, 6),
	(29, '@albagm', 'Alba', 'Gonzalez Macho',  './images/avatars/pf28.jpg', 654567839, 67, 62),
	(30, '@albagm', 'Alba', 'Gonzalez Macho',  './images/avatars/pf29.jpg', 654567839, 12, 35),
	(31, '@albagm', 'Alba', 'Gonzalez Macho',  './images/avatars/pf30.jpg', 654567839, 145, 22);



INSERT INTO Photos (
	`photoId`,
	`title`,
	`description`,
	`url`,
	`userId`,
	`valoration`,
	`date`
)
	VALUES
	(1,'Path to the sky...','Last trip to australia.','./images/posts/p0.jpg',1,4.3,'2019-08-01'),
	(2,'Sturbucks','Gran dia paseando por el centro de la ciudad','./images/posts/p2.jpg',1,1.5,'2018-01-01'),
	(3,'1980','Portrait of a Radio','./images/posts/p3.jpg',3,4.0,'2020-01-01'),
	(4,'Selfie','One of today. Recording and inspiring.','./images/posts/p4.jpg',4,3.5,'2020-01-01'),
	(5,'Music','Good moments with frinds.','./images/posts/p5.jpg',5,1.5,'2020-01-01'),
	(6,'Palm Tree','Beautiful palm tree in the middel of the street','./images/posts/p6.jpg',6,2.3,'2020-01-01'),
	(7,'Olay','My new set of face care creams','./images/posts/p7.jpg',7,3.5,'2020-01-01'),
	(8,'GLO','Making art with simple things.','./images/posts/p8.jpg',8,3.3,'2020-01-01'),
	(9,'MIKE','Taking a walk with my hommie','./images/posts/p9.jpg',9,4.5,'2020-01-01'),
	(10,'Palm Tree','Beautiful palm tree in the middel of the street','./images/posts/p10.jpg',10,5.0,'2020-01-01'),
	(11,'Architecture','Some inspirational structures','./images/posts/p11.jpg',11,4.2,'2020-01-01'),
	(12,'Fly','fly to another place','./images/posts/p12.jpg',12,4.1,'2020-01-01'),
	(13,'Capture the moment','My old camera from 1990','./images/posts/p13.jpg',1,3.0,'2020-06-06'),
	(14,'Capture the moment','My old camera from 1990','./images/posts/p14.jpg',4,4.1,'2020-01-01'),
	(15,'Riverdale','Beautiful landscape from floor level','./images/posts/p15.jpg',5,1.5,'2020-01-01'),
	(16,'At a glance','Making progress','./images/posts/p16.jpg',10,0.5,'2020-01-01'),
	(17,'Space','Antenna in the sky','./images/posts/p17.jpg',2,3.0,'2020-01-01'),
	(18,'Flora','Nature around us','./images/posts/p18.jpg',3,5.0,'2020-01-01'),
	(19,'Perfect company','Working on my own','./images/posts/p19.jpg',4,4.0,'2020-11-01'),
	(20,'Perfect company','Working on my own','./images/posts/p20.jpg',10,1.5,'2018-01-01'),
	(21,'Perfect company','Working on my own','./images/posts/p21.jpg',21,3.5,'2019-05-20'),
	(22,'Perfect company','Working on my own','./images/posts/p22.jpg',21,1.5,'2018-05-01'),
	(23,'Perfect company','Working on my own','./images/posts/p23.jpg',23,2.5,'2019-01-01'),
	(24,'Perfect company','Working on my own','./images/posts/p24.jpg',21,1.5,'2018-02-02'),
	(25,'Perfect company','Working on my own','./images/posts/p25.jpg',18,0.5,'2019-04-01'),
	(26,'Perfect company','Working on my own','./images/posts/p26.jpg',28,2.5,'2018-01-01'),
	(27,'Flora','Nature around us','./images/posts/p27.jpg',27,3.5,'2019-12-24'),
	(28,'Flora','Nature around us','./images/posts/p28.jpg',26,0.5,'2018-01-18'),
	(29,'Flora','Nature around us','./images/posts/p29.jpg',25,1.5,'2018-01-01'),
	(30,'Flora','Nature around us','./images/posts/p30.jpg',3,4.0,'2020-01-01'),
	(31,'Flora','Nature around us','./images/posts/p31.jpg',2,4.0,'2020-01-19'),
	(32,'Flora','Nature around us','./images/posts/p32.jpg',13,4.0,'2017-01-01'),
	(33,'Flora','Nature around us','./images/posts/p33.jpg',23,2.0,'2020-10-10'),
	(34,'Perfect company','Working on my own','./images/posts/p34.jpg',1,1.0,'2021-01-12'),
	(35,'Fly','fly to another place','./images/posts/p35.jpg',15,4.0,'2020-11-01'),
	(36,'Fly','fly to another place','./images/posts/p36.jpg',19,2.0,'2020-01-01'),
	(37,'Fly','fly to another place','./images/posts/p37.jpg',30,4.0,'2017-01-20'),
	(38,'Fly','fly to another place','./images/posts/p38.jpg',3,3.0,'2020-02-01'),
	(39,'Fly','fly to another place','./images/posts/p39.jpg',1,1.2,'2020-01-14'),
	(40,'Fly','fly to another place','./images/posts/p40.jpg',1,1.2,'2020-01-14');
	
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
	(16,6,5,'Comentario de ejemplo 1',4.5,'2020-01-01'),
	(17,1,13,'Comentario de ejemplo 1',5,'2020-01-01'),
	(18,3,12,'Comentario de ejemplo 1',4.5,'2020-01-01'),
	(19,2,11,'Comentario de ejemplo 1',4.5,'2020-01-01'),
	(20,2,8,'Comentario de ejemplo 1',4.5,'2020-01-01'),
	(21,4,9,'Comentario de ejemplo 1',0.5,'2020-01-01'),
	(22,6,7,'Comentario de ejemplo 1',4.5,'2020-01-01'),
	(23,2,2,'Comentario de ejemplo 1',2.5,'2020-01-01'),
	(24,7,6,'Comentario de ejemplo 1',3.5,'2020-01-01'),
	(25,9,6,'Comentario de ejemplo 1',2.5,'2020-01-01'),
	(26,10,3,'Comentario de ejemplo 1',4.5,'2020-01-01'),
	(27,12,4,'Comentario de ejemplo 1',1.5,'2020-01-01'),
	(28,5,7,'Comentario de ejemplo 1',1.5,'2020-01-01'),
	(29,3,7,'Comentario de ejemplo 1',1,'2020-01-01'),
	(30,7,9,'Comentario de ejemplo 1',2,'2020-01-01');