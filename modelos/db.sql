-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: compras_db
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `compras`
--

DROP TABLE IF EXISTS `compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compras` (
  `idCompra` int NOT NULL AUTO_INCREMENT,
  `codUsuario` int NOT NULL,
  `codProduto` int NOT NULL,
  `quant` int NOT NULL,
  `dataCompra` varchar(255) NOT NULL,
  `precoUnitario` decimal(10,2) NOT NULL,
  `descontoAplicado` int DEFAULT NULL,
  `precoFinal` decimal(10,2) NOT NULL,
  `formaPagamento` varchar(255) NOT NULL,
  `statusCompra` varchar(255) NOT NULL,
  PRIMARY KEY (`idCompra`),
  KEY `codUsuario` (`codUsuario`),
  KEY `codProduto` (`codProduto`),
  CONSTRAINT `compras_ibfk_1` FOREIGN KEY (`codUsuario`) REFERENCES `usuarios` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `compras_ibfk_2` FOREIGN KEY (`codProduto`) REFERENCES `produtos` (`idProduto`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras`
--

LOCK TABLES `compras` WRITE;
/*!40000 ALTER TABLE `compras` DISABLE KEYS */;
INSERT INTO `compras` VALUES (1,23,11,1,'2025-08-06',1899.99,0,1899.99,'PIX','Entregue'),(2,4,20,1,'2025-07-04',4.99,0,4.99,'Boleto','Enviado');
/*!40000 ALTER TABLE `compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `idProduto` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `categoria` varchar(255) NOT NULL,
  `preco` decimal(10,2) NOT NULL,
  `porcentagemDesconto` int DEFAULT NULL,
  `estoque` int NOT NULL,
  `marca` varchar(255) DEFAULT NULL,
  `ft_produto` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idProduto`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,'Powder Canister','The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.','beauty',14.99,10,89,'Velvet Touch','https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp'),(2,'Red Lipstick','The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.','beauty',12.99,12,91,'Chic Cosmetics','https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp'),(3,'Eyeshadow Palette with Mirror','The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it\'s convenient for on-the-go makeup application.','beauty',19.99,18,34,'Glamour Beauty','https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp'),(4,'Red Nail Polish','The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.','beauty',8.99,11,79,'Nail Couture','https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp'),(5,'Essence Mascara Lash Princess','The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.','beauty',9.99,10,99,'Essence','https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp'),(6,'Calvin Klein CK One','CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It\'s a versatile fragrance suitable for everyday wear.','fragrances',49.99,2,29,'Calvin Klein','https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp'),(7,'Chanel Coco Noir Eau De','Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.','fragrances',129.99,17,58,'Chanel','https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp'),(8,'Dior J\'adore','J\'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.','fragrances',89.99,15,98,'Dior','https://cdn.dummyjson.com/product-images/fragrances/dior-j\'adore/thumbnail.webp'),(9,'Dolce Shine Eau de','Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It\'s a joyful and youthful scent.','fragrances',69.99,1,4,'Dolce & Gabbana','https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp'),(10,'Gucci Bloom Eau de','Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It\'s a modern and romantic scent.','fragrances',79.99,14,91,'Gucci','https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp'),(11,'Annibale Colombo Bed','The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.','furniture',1899.99,9,88,'Annibale Colombo','https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp'),(12,'Annibale Colombo Sofa','The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.','furniture',2499.99,14,60,'Annibale Colombo','https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp'),(13,'Bedside Table African Cherry','The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.','furniture',299.99,19,64,'Furniture Co.','https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp'),(14,'Knoll Saarinen Executive Conference Chair','The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.','furniture',499.99,2,26,'Knoll','https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp'),(15,'Wooden Bathroom Sink With Mirror','The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.','furniture',799.99,9,7,'Bath Trends','https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp'),(16,'Apple','Fresh and crisp apples, perfect for snacking or incorporating into various recipes.','groceries',1.99,13,8,NULL,'https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp'),(17,'Beef Steak','High-quality beef steak, great for grilling or cooking to your preferred level of doneness.','groceries',12.99,10,86,NULL,'https://cdn.dummyjson.com/product-images/groceries/beef-steak/thumbnail.webp'),(18,'Cat Food','Nutritious cat food formulated to meet the dietary needs of your feline friend.','groceries',8.99,10,46,NULL,'https://cdn.dummyjson.com/product-images/groceries/cat-food/thumbnail.webp'),(19,'Chicken Meat','Fresh and tender chicken meat, suitable for various culinary preparations.','groceries',9.99,14,97,NULL,'https://cdn.dummyjson.com/product-images/groceries/chicken-meat/thumbnail.webp'),(20,'Cooking Oil','Versatile cooking oil suitable for frying, sautéing, and various culinary applications.','groceries',4.99,9,10,NULL,'https://cdn.dummyjson.com/product-images/groceries/cooking-oil/thumbnail.webp'),(21,'Cucumber','Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.','groceries',1.49,0,84,NULL,'https://cdn.dummyjson.com/product-images/groceries/cucumber/thumbnail.webp'),(22,'Dog Food','Specially formulated dog food designed to provide essential nutrients for your canine companion.','groceries',10.99,10,71,NULL,'https://cdn.dummyjson.com/product-images/groceries/dog-food/thumbnail.webp'),(23,'Eggs','Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.','groceries',2.99,11,9,NULL,'https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp'),(24,'Fish Steak','Quality fish steak, suitable for grilling, baking, or pan-searing.','groceries',14.99,4,74,NULL,'https://cdn.dummyjson.com/product-images/groceries/fish-steak/thumbnail.webp'),(25,'Green Bell Pepper','Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.','groceries',1.29,0,33,NULL,'https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/thumbnail.webp'),(26,'Green Chili Pepper','Spicy green chili pepper, ideal for adding heat to your favorite recipes.','groceries',0.99,1,3,NULL,'https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/thumbnail.webp'),(27,'Honey Jar','Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.','groceries',6.99,14,34,NULL,'https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp'),(28,'Ice Cream','Creamy and delicious ice cream, available in various flavors for a delightful treat.','groceries',5.49,9,27,NULL,'https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp'),(29,'Juice','Refreshing fruit juice, packed with vitamins and great for staying hydrated.','groceries',3.99,12,50,NULL,'https://cdn.dummyjson.com/product-images/groceries/juice/thumbnail.webp'),(30,'Kiwi','Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.','groceries',2.49,15,99,NULL,'https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) NOT NULL,
  `sobrenome` varchar(100) NOT NULL,
  `idade` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `endereco` varchar(255) NOT NULL,
  `cidade` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL,
  `dataNascimento` varchar(255) NOT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Emily','Johnson',28,'emily.johnson@x.dummyjson.com','+81 965-431-3024','626 Main Street','Phoenix','Mississippi','1996-5-30'),(2,'Michael','Williams',35,'michael.williams@x.dummyjson.com','+49 258-627-6644','385 Fifth Street','Houston','Alabama','1989-8-10'),(3,'James','Davis',45,'james.davis@x.dummyjson.com','+49 614-958-9364','238 Jefferson Street','Seattle','Pennsylvania','1979-5-4'),(4,'Emma','Miller',30,'emma.miller@x.dummyjson.com','+91 759-776-1614','607 Fourth Street','Jacksonville','Colorado','1994-6-13'),(5,'Sophia','Brown',42,'sophia.brown@x.dummyjson.com','+81 210-652-2785','1642 Ninth Street','Washington','Alabama','1982-11-6'),(6,'Olivia','Wilson',22,'olivia.wilson@x.dummyjson.com','+91 607-295-6448','547 First Street','Fort Worth','Tennessee','2002-4-20'),(7,'Alexander','Jones',38,'alexander.jones@x.dummyjson.com','+61 260-824-4986','664 Maple Street','Indianapolis','Delaware','1986-10-20'),(8,'Ava','Taylor',27,'ava.taylor@x.dummyjson.com','+1 458-853-7877','1197 First Street','Fort Worth','Rhode Island','1997-8-25'),(9,'Ethan','Martinez',33,'ethan.martinez@x.dummyjson.com','+92 933-608-5081','466 Pine Street','San Antonio','Louisiana','1991-2-12'),(10,'Isabella','Anderson',31,'isabella.anderson@x.dummyjson.com','+49 770-658-4885','1964 Oak Street','New York','Utah','1993-6-10'),(11,'Liam','Garcia',29,'liam.garcia@x.dummyjson.com','+92 870-217-6201','576 Fifth Street','Denver','South Dakota','1995-6-6'),(12,'Mia','Rodriguez',24,'mia.rodriguez@x.dummyjson.com','+49 989-461-8403','1627 Sixth Street','Jacksonville','West Virginia','2000-8-4'),(13,'Noah','Hernandez',40,'noah.hernandez@x.dummyjson.com','+49 393-605-6968','1413 Maple Street','New York','North Dakota','1984-6-5'),(14,'Charlotte','Lopez',36,'charlotte.lopez@x.dummyjson.com','+44 373-953-5028','208 Second Street','Columbus','Ohio','1988-6-8'),(15,'William','Gonzalez',32,'william.gonzalez@x.dummyjson.com','+81 905-252-7319','31 Maple Street','San Jose','Utah','1992-3-27'),(16,'Avery','Perez',25,'avery.perez@x.dummyjson.com','+61 731-431-3457','1125 First Street','Columbus','Iowa','1999-3-10'),(17,'Evelyn','Sanchez',37,'evelyn.sanchez@x.dummyjson.com','+1 623-880-6871','1170 Lincoln Street','San Diego','Wyoming','1987-10-13'),(18,'Logan','Torres',31,'logan.torres@x.dummyjson.com','+81 507-434-8733','907 Seventh Street','Columbus','Arkansas','1993-10-26'),(19,'Abigail','Rivera',28,'abigail.rivera@x.dummyjson.com','+91 228-363-7806','996 Oak Street','Chicago','New Mexico','1996-10-11'),(20,'Jackson','Evans',34,'jackson.evans@x.dummyjson.com','+44 468-628-6686','1873 Main Street','New York','Arkansas','1990-11-30'),(21,'Madison','Collins',26,'madison.collins@x.dummyjson.com','+81 259-957-5711','1892 Lincoln Street','Philadelphia','New Jersey','1998-3-7'),(22,'Elijah','Stewart',33,'elijah.stewart@x.dummyjson.com','+44 468-357-7872','1701 Eighth Street','Columbus','Illinois','1991-10-22'),(23,'Chloe','Morales',39,'chloe.morales@x.dummyjson.com','+92 468-541-7133','401 Fourth Street','Dallas','New Jersey','1985-4-21'),(24,'Mateo','Nguyen',30,'mateo.nguyen@x.dummyjson.com','+1 341-597-6694','1578 Fourth Street','Columbus','Missouri','1994-6-2'),(25,'Harper','Kelly',27,'harper.kelly@x.dummyjson.com','+92 518-863-2863','1591 Adams Street','Philadelphia','New York','1997-3-3'),(26,'Evelyn','Gonzalez',35,'evelyn.gonzalez@x.dummyjson.com','+61 708-508-4638','1065 Lincoln Street','Dallas','Maine','1989-2-5'),(27,'Daniel','Cook',41,'daniel.cook@x.dummyjson.com','+44 254-761-6843','1163 Pine Street','Los Angeles','Nevada','1983-12-25'),(28,'Lily','Lee',29,'lily.lee@x.dummyjson.com','+1 808-757-9867','1946 Oak Street','Phoenix','Massachusetts','1995-12-3'),(29,'Henry','Hill',38,'henry.hill@x.dummyjson.com','+1 240-833-4680','1837 Maple Street','Indianapolis','Delaware','1986-8-19'),(30,'Addison','Wright',32,'addison.wright@x.dummyjson.com','+1 514-384-3300','568 Tenth Street','San Francisco','Montana','1992-1-3');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-28 22:53:31
