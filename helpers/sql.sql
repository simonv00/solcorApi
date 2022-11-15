CREATE SCHEMA proyecto3;
USE proyecto3;

CREATE TABLE IF NOT EXISTS `Consultas` (
  `tipoSector` varchar(100) default NULL,
  `direccion` varchar(100) NOT NULL,
  `area` DOUBLE NOT NULL,
  `tipoTecho` varchar(100) default NULL,
  `tipoMaterial` varchar(100) default NULL,
  `arrayConsumoMensual` varchar(2000) NOT NULL,
  `latitud` varchar(50) NOT NULL,
  `longitud` varchar(50) NOT NULL,
  `diasActividad` INT default NULL,
  `perfilUso`varchar(100) default NULL,
  `arrayEsm` varchar(2000) NOT NULL,
  `potenciaOptima` DOUBLE NOT NULL,
  `precioPanel` DOUBLE NOT NULL,
  `netoAnualMax` DOUBLE NOT NULL,
  `idConsulta` int unsigned NOT NULL AUTO_INCREMENT unique,
  PRIMARY KEY (`idConsulta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

-- Try de database
USE proyecto3;
SHOW TABLES;
SELECT * FROM Consultas;

/*drop table Consultas; 
