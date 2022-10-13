-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-06-2022 a las 21:01:18
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `aplicacionguttmann`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resultados_luces`
--

CREATE TABLE `resultados_luces` (
  `id` int(11) NOT NULL,
  `id_sesion` int(11) NOT NULL,
  `trial_superado` tinyint(1) NOT NULL,
  `ronda_maxima` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `serie_luces`
--

CREATE TABLE `serie_luces` (
  `id` int(11) NOT NULL,
  `id_sesion` int(11) NOT NULL,
  `ronda` int(11) NOT NULL,
  `coordenadas_presentadas` varchar(255) NOT NULL,
  `coordenadas_usuario` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sesion`
--

CREATE TABLE `sesion` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `dispositivo` varchar(200) NOT NULL,
  `fecha` datetime NOT NULL,
  `version` varchar(200) NOT NULL,
  `identificador_session` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `LastName` varchar(200) NOT NULL,
  `Email` varchar(200) NOT NULL,
  `Password` varchar(200) NOT NULL,
  `anioNacimiento` int(4) NOT NULL,
  `Estudios` varchar(200) NOT NULL,
  `Sexo` varchar(100) NOT NULL,
  `ROL` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `resultados_luces`
--
ALTER TABLE `resultados_luces`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_sesion` (`id_sesion`);

--
-- Indices de la tabla `serie_luces`
--
ALTER TABLE `serie_luces`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_sesion` (`id_sesion`);

--
-- Indices de la tabla `sesion`
--
ALTER TABLE `sesion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `resultados_luces`
--
ALTER TABLE `resultados_luces`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `serie_luces`
--
ALTER TABLE `serie_luces`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sesion`
--
ALTER TABLE `sesion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `resultados_luces`
--
ALTER TABLE `resultados_luces`
  ADD CONSTRAINT `resultados_luces_ibfk_1` FOREIGN KEY (`id_sesion`) REFERENCES `sesion` (`id`);

--
-- Filtros para la tabla `serie_luces`
--
ALTER TABLE `serie_luces`
  ADD CONSTRAINT `serie_luces_ibfk_1` FOREIGN KEY (`id_sesion`) REFERENCES `sesion` (`id`);

--
-- Filtros para la tabla `sesion`
--
ALTER TABLE `sesion`
  ADD CONSTRAINT `sesion_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
