-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 25, 2023 at 10:18 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `km_geronimo_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admin`
--

CREATE TABLE `tbl_admin` (
  `adminID` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_admin`
--

INSERT INTO `tbl_admin` (`adminID`, `username`, `password`) VALUES
(1, 'admin', '123');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_appointments`
--

CREATE TABLE `tbl_appointments` (
  `appointmentID` int(11) NOT NULL,
  `patientID` int(11) NOT NULL,
  `appointmentDate` date NOT NULL,
  `appointmentTime` time NOT NULL,
  `appointmentCase` varchar(255) NOT NULL,
  `appointmentStatus` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_appointments`
--

INSERT INTO `tbl_appointments` (`appointmentID`, `patientID`, `appointmentDate`, `appointmentTime`, `appointmentCase`, `appointmentStatus`) VALUES
(1, 1, '2015-02-12', '13:15:07', 'Orthodontics', 'Pending'),
(2, 2, '2015-04-29', '14:02:00', 'Cleaning', 'Approved'),
(3, 3, '2014-07-31', '11:59:19', 'Pasta', 'Pending'),
(4, 4, '2028-09-08', '18:14:39', 'Cleaning', 'Pending'),
(5, 5, '2017-09-28', '00:00:00', 'Orthodontics', 'Approved');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_patient`
--

CREATE TABLE `tbl_patient` (
  `patientID` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `middlename` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `email` varchar(255) NOT NULL,
  `contactNumber` varchar(11) NOT NULL,
  `age` int(11) NOT NULL,
  `birthday` date NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(60) NOT NULL,
  `blocked` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_patient`
--

INSERT INTO `tbl_patient` (`patientID`, `firstname`, `middlename`, `lastname`, `address`, `email`, `contactNumber`, `age`, `birthday`, `username`, `password`, `blocked`) VALUES
(1, 'Hans Vincent', 'T', 'Aguilar', '', 'aguilarhans100701@gmail.com', '09183746252', 21, '2013-06-29', 'kukis', '123', 0),
(2, 'Jhon Lloyd', 'N.', 'Babon', 'Malabon', 'jlbabon10@gmail.com', '09183746587', 22, '2012-10-30', 'bossbabon', '123', 1),
(3, 'Michael Jhericho', 'M', 'Merka', 'Valenzuela', 'mjmerka69@yahoo.com', '09982719000', 23, '2015-08-21', 'merks', '123', 1),
(4, 'Johnlerry', 'N', 'Castillo', 'Quiapo', 'lerry77@hotmail.com', '09019283117', 25, '2012-02-20', 'lerry', '123', 0),
(5, 'Jhon Mark', 'R', 'Arnaiz', 'Navotas', 'scarnaiz@yahoo.com', '09183791822', 21, '2013-03-13', 'makmak', '123', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_payments`
--

CREATE TABLE `tbl_payments` (
  `paymentID` int(11) NOT NULL,
  `patientID` int(11) NOT NULL,
  `paymentStatus` varchar(100) NOT NULL,
  `paymentType` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_payments`
--

INSERT INTO `tbl_payments` (`paymentID`, `patientID`, `paymentStatus`, `paymentType`) VALUES
(1, 1, 'Downpayment', 'Gcash'),
(2, 2, 'Paid', 'Cash'),
(3, 3, 'Paid', 'Cash'),
(4, 4, 'Paid', 'Gcash'),
(5, 5, 'Pending', 'Gcash');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  ADD PRIMARY KEY (`adminID`);

--
-- Indexes for table `tbl_appointments`
--
ALTER TABLE `tbl_appointments`
  ADD PRIMARY KEY (`appointmentID`),
  ADD KEY `patientID` (`patientID`);

--
-- Indexes for table `tbl_patient`
--
ALTER TABLE `tbl_patient`
  ADD PRIMARY KEY (`patientID`);

--
-- Indexes for table `tbl_payments`
--
ALTER TABLE `tbl_payments`
  ADD PRIMARY KEY (`paymentID`),
  ADD KEY `patientID` (`patientID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  MODIFY `adminID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_appointments`
--
ALTER TABLE `tbl_appointments`
  MODIFY `appointmentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_patient`
--
ALTER TABLE `tbl_patient`
  MODIFY `patientID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_payments`
--
ALTER TABLE `tbl_payments`
  MODIFY `paymentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_appointments`
--
ALTER TABLE `tbl_appointments`
  ADD CONSTRAINT `tbl_appointments_ibfk_1` FOREIGN KEY (`patientID`) REFERENCES `tbl_patient` (`patientID`);

--
-- Constraints for table `tbl_payments`
--
ALTER TABLE `tbl_payments`
  ADD CONSTRAINT `tbl_payments_ibfk_1` FOREIGN KEY (`patientID`) REFERENCES `tbl_patient` (`patientID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
