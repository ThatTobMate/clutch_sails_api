--
-- Database: `clutch`
--

-- --------------------------------------------------------

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `firstName`, `lastName`, `photo`, `socialProfiles`, `createdAt`, `updatedAt`) VALUES
(1, 'ThatTobMate', '$2a$10$t31Hwhqh4UD1MA8EB8JMwemf29TV6zR/l/Wyv3xWkt0vRu9BL3pwK', 'thale.android@gmail.com', 'Tobias', 'Hale', NULL, NULL, '2015-01-22 16:40:24', '2015-01-22 16:40:24'),
(2, 'Josh', '$2a$10$t31Hwhqh4UD1MA8EB8JMwemf29TV6zR/l/Wyv3xWkt0vRu9BL3pwK', 'josh08h@hotmail.co.uk', 'Joshua', 'Hale', NULL, NULL, '2015-01-22 16:40:24', '2015-01-22 16:40:24'),
(3, 'AxAs23', '$2a$10$t31Hwhqh4UD1MA8EB8JMwemf29TV6zR/l/Wyv3xWkt0vRu9BL3pwK', 'axas@gmail.com', 'Alex', 'Adams', NULL, NULL, '2015-01-22 16:40:24', '2015-01-22 16:40:24');

-- --------------------------------------------------------

--
-- Dumping data for table `consoles`
--

INSERT INTO `consoles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Xbox One', '2015-01-22 16:40:24', '2015-01-22 16:40:24'),
(2, 'PS4', '2015-01-22 16:40:24', '2015-01-22 16:40:24');

-- --------------------------------------------------------

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`id`, `title`, `gameCode`, `console`, `createdAt`, `updatedAt`) VALUES
(1, 'Call Of Duty Black Ops III', 'COD-BO-III', 1, '2015-01-22 16:40:24', '2015-01-22 16:40:24'),
(2, 'Call Of Duty Black Ops III', 'COD-BO-III', 2, '2015-01-22 16:40:24', '2015-01-22 16:40:24'),
(3, 'FIFA 16', 'FIFA-16', 1, '2015-01-22 16:40:24', '2015-01-22 16:40:24'),
(4, 'FIFA 16', 'FIFA-16', 2, '2015-01-22 16:40:24', '2015-01-22 16:40:24');

-- --------------------------------------------------------

--
-- Dumping data for table `leagues`
--

INSERT INTO `leagues` (`id`, `type`, `game`, `createdAt`, `updatedAt`) VALUES
(1, '2 v 2', 1, '2015-01-22 16:40:24', '2015-01-22 16:40:24'),
(2, '2 v 2', 2, '2015-01-22 16:40:24', '2015-01-22 16:40:24'),
(3, '1 v 1', 3, '2015-01-22 16:40:24', '2015-01-22 16:40:24'),
(4, '1 v 1', 4, '2015-01-22 16:40:24', '2015-01-22 16:40:24');


-- --------------------------------------------------------
