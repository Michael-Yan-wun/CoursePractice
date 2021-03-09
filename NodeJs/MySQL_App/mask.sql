-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 
-- 伺服器版本： 10.4.6-MariaDB-log
-- PHP 版本： 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `mask`
--

-- --------------------------------------------------------

create database Mask default character set utf8;

use Mask;

--
-- 資料表結構 `inventory`
--

CREATE TABLE `inventory` (
  `id` int(11) NOT NULL,
  `name` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `adult_mask` int(11) NOT NULL,
  `child_mask` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 傾印資料表的資料 `inventory`
--

INSERT INTO `inventory` (`id`, `name`, `phone`, `address`, `adult_mask`, `child_mask`) VALUES
(1, '穎川藥局', '(02)296606', '新北市板橋區民權路202巷4弄1號', 0, 458),
(2, '順儷民權藥局', '(02)296095', '新北市板橋區民權路234號1樓', 0, 2065),
(3, '大昌藥局', '(02)896825', '新北市板橋區北門街28號', 0, 925),
(4, '瑞明藥局', '(02)227284', '新北市板橋區文化路1段17號', 0, 6),
(5, '常仁藥局', '(02)296749', '新北市板橋區中正路1巷4號', 549, 696),
(6, '日生大藥局', '(02)296752', '新北市板橋區中正路1巷16弄16號', 0, 2096),
(7, '一誠藥局', '(02)296739', '新北市板橋區府中路62號', 0, 1096),
(8, '中山大藥局', '(02)295750', '新北市板橋區中山路1段107號', 552, 1451),
(9, '華傳綜合大藥局', '(02)296700', '新北市板橋區大智街40號', 546, 195),
(10, '順儷府中藥局', '(02)295411', '新北市板橋區中山路1段96號（1樓）', 0, 1402),
(11, '府中藥局', '(02)296567', '新北市板橋區府中路110號', 506, 2062),
(12, '友虹藥師藥局', '(02)296911', '新北市板橋區國光路16號', 0, 1235),
(13, '杏澤藥局', '(02)296579', '新北市板橋區國光路55號', 0, 875),
(14, '文德藥局', '(02)227287', '新北市板橋區國光路43號Ｂ1', 1, 2306),
(15, '光澤醫美藥局', '(02)295512', '新北市板橋區四川路1段21號（1樓）', 0, 2410),
(16, '信美藥局', '(02)295261', '新北市板橋區新民街7巷18號1樓', 0, 1046),
(17, '皇慶藥局', '(02)296553', '新北市板橋區南門街81、83號1、2樓及館前西路112巷7號', 2, 1646),
(18, '安佑藥局', '(02)296702', '新北市板橋區館前西路152-2號', 0, 2362),
(19, '廣泰藥師藥局', '(02)896983', '新北市板橋區館前西路150號1樓', 0, 2220),
(20, '福澤館前藥局', '(02)296683', '新北市板橋區館前西路132號（1樓）', 0, 2629),
(21, '國光藥師藥局', '(02)296982', '新北市板橋區國光路172號', 2, 1011),
(22, '台安藥局', '(02)296636', '新北市板橋區中正路204號1樓、2樓、3樓', 3, 0),
(23, '景好藥師藥局', '(02)227247', '新北市板橋區國光路182號1樓', 0, 1417),
(24, '利安藥師藥局', '(02)296669', '新北市板橋區南雅西路2段117號及119號1樓', 507, 668),
(25, '醫安藥局', '(02)296925', '新北市板橋區南雅南路1段11號1樓及2樓', 598, 1436),
(26, '翰林藥局', '(02)296027', '新北市板橋區中正路240號', 21, 36),
(27, '快安藥局', '(02)296035', '新北市板橋區漢生西路31號1樓', 1, 2279),
(28, '可安藥局', '(02)296501', '新北市板橋區南雅南路1段8之6號（1樓）', 492, 1865);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `inventory`
--
ALTER TABLE `inventory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
