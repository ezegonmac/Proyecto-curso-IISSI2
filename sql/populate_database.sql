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
	(1, '@usuario1', 'nombre1', 'surnombre', './images/avatars/pf0.jpg', 654567839, 78, 124),
	(2, '@usuario2', 'nombre2', 'surnombre', './images/avatars/pf1.jpg', 654567839, 48, 62),
	(3, '@usuario3', 'nombre3', 'surnombre', './images/avatars/pf2.jpg', 654567839, 18, 71),
	(4, '@usuario4', 'nombre4', 'surnombre', './images/avatars/pf3.jpg', 654567839, 8, 30),
	(5, '@usuario5', 'nombre5', 'surnombre', './images/avatars/pf4.jpg', 654567839, 118, 110),
	(6, '@usuario6', 'nombre6', 'surnombre', './images/avatars/pf5.jpg', 654567839, 780, 120),
	(7, '@usuario7', 'nombre7', 'surnombre', './images/avatars/pf6.jpg', 654567839, 2, 120),
	(8, '@usuario8', 'nombre8', 'surnombre', './images/avatars/pf7.jpg', 654567839, 123, 23),
	(9, '@usuario9', 'nombre9', 'surnombre', './images/avatars/pf8.jpg', 654567839, 235, 2),
	(10, '@usuario10', 'nombre10', 'surnombre', './images/avatars/pf9.jpg', 654567839, 500, 560),
	(11, '@usuario11', 'nombre11', 'surnombre', './images/avatars/pf10.jpg', 654567839, 7, 10),
	(12, '@usuario12', 'nombre12', 'surnombre', './images/avatars/pf11.jpg', 654567839, 80, 20);


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
	(1,'titulo1','descripcion1','./images/posts/p0.jpg',1,4.5,'2019-08-01'),
	(2,'titulo2','descripcion2','./images/posts/p2.jpg',1,1.5,'2018-01-01'),
	(3,'titulo3','descripcion3','./images/posts/p3.jpg',3,4.0,'2020-01-01'),
	(4,'titulo4','descripcion4','./images/posts/p4.jpg',4,3.5,'2020-01-01'),
	(5,'titulo5','descripcion5','./images/posts/p5.jpg',5,1.5,'2020-01-01'),
	(6,'titulo6','descripcion6','./images/posts/p6.jpg',6,2.3,'2020-01-01'),
	(7,'titulo7','descripcion7','./images/posts/p7.jpg',7,3.5,'2020-01-01'),
	(8,'titulo8','descripcion8','./images/posts/p8.jpg',8,3.3,'2020-01-01'),
	(9,'titulo9','descripcion9','./images/posts/p9.jpg',9,4.5,'2020-01-01'),
	(10,'titulo10','descripcion10','./images/posts/p10.jpg',10,5.0,'2020-01-01'),
	(11,'titulo11','descripcion11','./images/posts/p11.jpg',11,4.5,'2020-01-01'),
	(12,'titulo12','descripcion12','./images/posts/p12.jpg',12,4.1,'2020-01-01'),
	(13,'titulo13','descripcion13','./images/posts/p13.jpg',1,3.0,'2020-06-06'),
	(14,'titulo14','descripcion14','./images/posts/p14.jpg',4,4.5,'2020-01-01'),
	(15,'titulo15','descripcion15','./images/posts/p15.jpg',5,1.5,'2020-01-01'),
	(16,'titulo16','descripcion16','./images/posts/p16.jpg',10,0.5,'2020-01-01'),
	(17,'titulo17','descripcion17','./images/posts/p17.jpg',2,3.0,'2020-01-01'),
	(18,'titulo18','descripcion18','./images/posts/p18.jpg',3,5.0,'2020-01-01'),
	(19,'titulo19','descripcion19','./images/posts/p19.jpg',4,4.0,'2020-01-01');
	
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