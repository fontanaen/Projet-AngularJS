-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  Dim 14 juin 2020 à 04:49
-- Version du serveur :  10.4.10-MariaDB
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `angular_test`
--

-- --------------------------------------------------------

--
-- Structure de la table `exp_pro`
--

CREATE TABLE `exp_pro` (
  `id` int(11) NOT NULL,
  `nom_entreprise` varchar(100) NOT NULL,
  `lieu` varchar(30) NOT NULL,
  `debut` date NOT NULL,
  `fin` date NOT NULL,
  `details` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `exp_pro`
--

INSERT INTO `exp_pro` (`id`, `nom_entreprise`, `lieu`, `debut`, `fin`, `details`) VALUES
(1, 'Sweetair France', 'St Jean de Moirans', '2019-05-28', '2019-07-31', 'Stage de BTS SIO de 1ère année d\'une durée de 5 semaines + CDD de 1 mois.\r\nMise en place d\'un logiciel de facturation, formation des employés et développement du site Web (WordPress).'),
(2, 'Hardis Group', 'Grenoble, Presquîle', '2020-01-06', '2020-02-14', 'Stage de BTS SIO 2ème année d\'une durée de 6 semaines.\r\nMise en place d\'une solution de packaging Windows Installer (WixToolSet). Développement C# et XML.\r\n'),
(3, 'Commissariat à l\'Energie Atomique et aux énergie alternatives', 'Minatec, Grenoble', '2014-10-13', '2014-10-17', 'Stage d\'observation d\'une durée d\'une semaine');

-- --------------------------------------------------------

--
-- Structure de la table `formations`
--

CREATE TABLE `formations` (
  `id` int(11) NOT NULL,
  `nom` varchar(60) NOT NULL,
  `option` varchar(40) NOT NULL,
  `mention` varchar(30) NOT NULL,
  `annee_obtention` year(4) NOT NULL,
  `ville` varchar(30) NOT NULL,
  `etablissement` varchar(40) NOT NULL,
  `details` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `formations`
--

INSERT INTO `formations` (`id`, `nom`, `option`, `mention`, `annee_obtention`, `ville`, `etablissement`, `details`) VALUES
(1, 'Certificat de compétences de citoyen de sécurité civile - PS', '', '', 2015, 'Tullins', '', 'Brevet de secourisme'),
(2, 'Brevet des collèges', '', 'Mention bien', 2015, 'Tullins', 'Collège Condorcet', ''),
(3, 'Baccalauréat Scientifique', 'option Mathématiques', '', 2018, 'Moirans', 'Lycée Pierre Beghin', ''),
(4, 'BTS Services Informatiques aux organisations', 'option Solution Logiciel et Application ', '', 2020, 'Seyssinet-Parriset', 'Lycée Aristide Bergès', 'en cours d\'obtention');

-- --------------------------------------------------------

--
-- Structure de la table `languages`
--

CREATE TABLE `languages` (
  `id` int(11) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `details` varchar(80) NOT NULL,
  `niv_maitrise` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `languages`
--

INSERT INTO `languages` (`id`, `nom`, `details`, `niv_maitrise`) VALUES
(1, 'JavaScript', 'JQuery, Chart.js', 8),
(2, 'NodeJs', 'Express.js, Socket.io', 8),
(3, 'AngularJs', '', 5),
(4, 'C#', '', 6),
(5, 'Python', '', 5),
(6, 'HTML5/CSS3', 'Bootstrap', 7),
(7, 'SQL', '', 7);

-- --------------------------------------------------------

--
-- Structure de la table `liens`
--

CREATE TABLE `liens` (
  `id_user` int(11) NOT NULL,
  `id_lien` int(11) NOT NULL,
  `lien` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `liens`
--

INSERT INTO `liens` (`id_user`, `id_lien`, `lien`) VALUES
(1, 1, 'https://www.linkedin.com/in/enzo-fontana-a5587aa1a5/'),
(1, 2, 'https://github.com/fontanaen');

-- --------------------------------------------------------

--
-- Structure de la table `list_liens`
--

CREATE TABLE `list_liens` (
  `id` int(11) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `img` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `list_liens`
--

INSERT INTO `list_liens` (`id`, `nom`, `img`) VALUES
(1, 'Linkedin', 'img/linkedin.png'),
(2, 'Github', 'img/github.png');

-- --------------------------------------------------------

--
-- Structure de la table `logiciels`
--

CREATE TABLE `logiciels` (
  `id` int(11) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `details` varchar(80) NOT NULL,
  `niv_maitrise` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `logiciels`
--

INSERT INTO `logiciels` (`id`, `nom`, `details`, `niv_maitrise`) VALUES
(1, 'Visual Studio', '', 6),
(2, 'Unity', '', 6),
(3, 'Atom, Sublime Text, Notepad++', '', 9),
(4, 'Wamp Server, XAMPP', 'MariaDB, MySQL', 8),
(5, 'Github', 'Desktop', 8),
(6, 'Office', '', 7),
(7, 'Adobe Creative Cloud', '', 8);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `date_naissance` date NOT NULL,
  `tel` varchar(15) NOT NULL,
  `email` varchar(40) NOT NULL,
  `img` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `nom`, `prenom`, `date_naissance`, `tel`, `email`, `img`) VALUES
(1, 'FONTANA', 'Enzo', '2000-04-25', '07.71.20.06.69', 'enzo.fontana00@hotmail.com', 'img/profil.jpg');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `exp_pro`
--
ALTER TABLE `exp_pro`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `formations`
--
ALTER TABLE `formations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `liens`
--
ALTER TABLE `liens`
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_lien` (`id_lien`);

--
-- Index pour la table `list_liens`
--
ALTER TABLE `list_liens`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `logiciels`
--
ALTER TABLE `logiciels`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `exp_pro`
--
ALTER TABLE `exp_pro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `formations`
--
ALTER TABLE `formations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `languages`
--
ALTER TABLE `languages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `list_liens`
--
ALTER TABLE `list_liens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `logiciels`
--
ALTER TABLE `logiciels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `liens`
--
ALTER TABLE `liens`
  ADD CONSTRAINT `liens_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `liens_ibfk_2` FOREIGN KEY (`id_lien`) REFERENCES `list_liens` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
