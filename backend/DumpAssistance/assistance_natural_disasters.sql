CREATE DATABASE  IF NOT EXISTS `assistance` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `assistance`;
-- MySQL dump 10.13  Distrib 8.0.36, for macos14 (arm64)
--
-- Host: localhost    Database: assistance
-- ------------------------------------------------------
-- Server version	8.3.0

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
-- Table structure for table `natural_disasters`
--

DROP TABLE IF EXISTS `natural_disasters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `natural_disasters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text,
  `date_occurred` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `natural_disasters`
--

LOCK TABLES `natural_disasters` WRITE;
/*!40000 ALTER TABLE `natural_disasters` DISABLE KEYS */;
INSERT INTO `natural_disasters` VALUES (9,'Hurricane Nora','A category 5 hurricane that caused significant damage across the coastline.','2023-08-15'),(10,'Wildfire Ashmont','A severe wildfire that spread rapidly due to dry conditions and high winds.','2024-06-01'),(11,'Earthquake Delta','A 7.8 magnitude earthquake that affected large urban areas, resulting in numerous casualties and structural damages.','2024-04-20'),(12,'Tornado Sigma','A powerful tornado that swept through rural farmland, causing extensive damage to properties and crops.','2024-05-10'),(13,'Flood Riverbend','Major flooding along the Riverbend area following a week of continuous heavy rainfall.','2023-11-15'),(14,'Blizzard Whiteout','An intense blizzard with record snowfall and high winds, leading to widespread power outages and transportation disruptions.','2024-01-07'),(15,'Volcanic Eruption Mount Zenith','A violent eruption from Mount Zenith, spewing ash and lava over nearby communities.','2023-09-03'),(17,'Super Typhoon Atlas','Super Typhoon Atlas, a category 5 typhoon, struck the eastern coastal regions with winds exceeding 200 km/h, leading to massive evacuations, widespread destruction of property, and significant flooding. The typhoon affected millions, disrupting power supply and causing substantial ecological damage.','2024-05-09');
/*!40000 ALTER TABLE `natural_disasters` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-07 18:38:31
