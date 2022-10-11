-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 06-Dez-2021 às 14:01
-- Versão do servidor: 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `need`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbl_avaliacao`
--

CREATE TABLE IF NOT EXISTS `tbl_avaliacao` (
  `ava_id` int(11) NOT NULL,
  `ava_avaliacao` int(11) NOT NULL,
  `usu_id` int(11) NOT NULL,
  `ava_avaliador` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbl_chat`
--

CREATE TABLE IF NOT EXISTS `tbl_chat` (
  `cha_id` int(11) NOT NULL,
  `cha_completo` tinyint(4) DEFAULT '0',
  `usu_id` int(11) NOT NULL,
  `ser_id` int(11) NOT NULL,
  `usu_id2` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `tbl_chat`
--

INSERT INTO `tbl_chat` (`cha_id`, `cha_completo`, `usu_id`, `ser_id`, `usu_id2`) VALUES
(1, 0, 16, 1, 1),
(2, 0, 1, 33, 16);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbl_mensagem`
--

CREATE TABLE IF NOT EXISTS `tbl_mensagem` (
  `men_id` int(11) NOT NULL,
  `men_texto` longtext NOT NULL,
  `men_data` date NOT NULL,
  `cha_id` int(11) NOT NULL,
  `usu_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `tbl_mensagem`
--

INSERT INTO `tbl_mensagem` (`men_id`, `men_texto`, `men_data`, `cha_id`, `usu_id`) VALUES
(1, 'Bom dia professor', '2021-12-06', 1, 16),
(2, 'aaaaaa', '2021-12-06', 1, 16),
(3, 'cajcajajdjjnsajsajndjdj', '2021-12-06', 1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbl_portfolio`
--

CREATE TABLE IF NOT EXISTS `tbl_portfolio` (
  `prt_id` int(11) NOT NULL,
  `prt_imagens` longtext,
  `usu_id` int(11) NOT NULL,
  `prt_tags` longtext
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `tbl_portfolio`
--

INSERT INTO `tbl_portfolio` (`prt_id`, `prt_imagens`, `usu_id`, `prt_tags`) VALUES
(1, 'https://neilpatel.com/wp-content/uploads/2017/12/portfolio.jpg', 1, 'WebDesign'),
(2, 'https://neilpatel.com/wp-content/uploads/2017/12/portfolio.jpg', 5, 'Social Media');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbl_servico`
--

CREATE TABLE IF NOT EXISTS `tbl_servico` (
  `ser_id` int(11) NOT NULL,
  `ser_titulo` varchar(50) NOT NULL,
  `ser_desc` longtext,
  `ser_imagens` longtext,
  `ser_prazo` date DEFAULT NULL,
  `ser_aceito` tinyint(4) DEFAULT '0',
  `usu_id` int(11) NOT NULL,
  `ser_tags` longtext
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `tbl_servico`
--

INSERT INTO `tbl_servico` (`ser_id`, `ser_titulo`, `ser_desc`, `ser_imagens`, `ser_prazo`, `ser_aceito`, `usu_id`, `ser_tags`) VALUES
(1, 'Necessito de uma Logo ', 'Necessito de uma Logo ', 'https://cdn.criar.io/blog_posts/42/cover.jpg', '2021-06-23', 1, 1, 'Logo'),
(2, 'Necessidade ', 'um banner para votação popular num site.', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUFBgVFRUYGBUaHBwdGxsbGxobHRwcGRocGhsbHhkgIC0kGyMrIBsdJTclKS4wNDQ1GyM5PzsxPi0yNDABCwsLEA8QHRISHjIrJCsyMjIyMjYyPjYwNTI4MjI1MjIwMDI1MjIwMjIyMjIyMjIyMjUyNTIyMjI0MjIyMjI7Mv/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYCAwQHAQj/xABIEAACAQIEAgcEBwUGAwkBAAABAhEAAwQSITEFQQYTIlFhcYEykaGxBxRCUsHR8CNicoKSFaKywuHxM0NjJCVTc4OTo7TiFv/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAtEQACAgECBAMHBQAAAAAAAAAAAQIRAyExBBJBURNhcYGRobHB0fAFFCIy8f/aAAwDAQACEQMRAD8A9ZpVQwP0hYR9Lme0f3lzD3pPxAqzYLHWry5rVxHXvVg3vjauZNM6Z4pw/smjppSlSUFKUoBSlKAUpSgFKUoBSlKAUpSgFaL9tz7Lhf5ZPzrfSqzgpKn8HQTojn4c7e1eY+Qy/Jq0PwBDuZ8wT82qXivtYPg8T3XxNPFmtmQo4Co2yf0//qtOJ4ISNI9D+cR7zVgpWUv0/C9k16MLPNFLbgz21YsGyAEmCNgJ8a7ug2AtJYa5a1652YkzMISoWTrpBMfvGrHfthlZTswIPqIrzPhvHL2AuPhygdVYnKSRlnXstGgPke/nU4+HjglzczdnXFy4jFJKk1Truj0rFWQ6Mh2II99VviKZsI6HUqhn/wBN1j+6xro4T0wwt8hc/V3D9l4EnuDbH4Gt92zNx7f38/8Aftk/NaZknNSXVNfVHBelHHib/WYTDXfutaLfysuf/CRXR0N0w3Vn/l3Lqei3GI+BqJwT5uGXUG9suAB49oR6vUh0Iv8AWW7zcjfdh5Olt/8ANWmN3K+6TK1rZZKUpXSWPzxWdm6yMHRmRxsykqw/mGtYUrA+qouHB+n+ItQt4C+nforj+YCG9RPjXoPBekOHxY/ZP2wJKN2XXzXmPESPGvDqyRypDKSrAyGUkEHvBGoNWU2jizcBjnrHR/D3H6FpXm/Rrp8RFvF6jYXQNR/Go3/iHqNzXotq4GUMpDKRIIIIIOxBG4rRNM8bNglidSX2M6UpUmYpSlAKUpQClKUApSlAKUpQClKUBy429dUDq0DHnLBQPTc/Cq5xDjGNt/Ytg8lKtrHd2tattY3LYYQRINc+XHkk7jKvLoXhOK0krKVhemGIBi7h1P8ACSp+M1jw7D/XL1+6BlAKgBt5M6SJiAF99WDFcGzTBBHcd/fXN0IVfq2cCC9xy3mHKDy7KiuXGsuVuGVUvX5M64SjjxylB66L06/Qhcf0JDyQsE/dIPwpgnu4K0ucNda2/ZGoJQgiNeYzNHkKvYri4lhQ5tkxCuJB5gggj5H0q74WUKcZN09n9zn8VSf8kvVFW6OX1YYlFnKyhwCIICkggjkdVrv6DoFS+o2F3Ty6u2B8q5cdZ6rF9Wgy51hSDuGXVWB9qSD8K7uiFvL1+oIa4GEdxWNuW1Rgm1kSkqdNeTrsZzgt4u18UWSlKV6BQ/PFKy6tonKY74NYmsD6q0KV9VCdgT5CjoRuCPMUJ5kfKsHRfpTdwbZTL2Ce0nNZ3ZJ2PhsfA61AIpJAAknYCpG5wS8IhCx00HtCfCpV9DHM8TXLOte57ZgMZbv21uW2DIwkEfEEbgjYg6iumvJOiWKxeEux1Tmyx7akR4Z1J0DD4jQ8iPVreIRtmB+B9xrWLtHg58SxzpO10NtKUqTEUpSgFKUoBSlKAUpSgFKUoBSlKAxcwCe4VVvo/uHqbyHZMRcA8mIcf4vjVi4heCJJBIJUQNzJAAHnt61B4DPh7t0C3Idg+jRBKhTyM6Ae6ueeVRnrskdGJXikuulfntLLXxlB3E7H1GoqOTi6/aR18YzD4a/Cu2xiUuCUYN5bjzG4q8M2Oezs52qK30zUo1i8N0b5EOPkffWHQsAXcWBtntn+6w/CpPpZYz4Z+9SG+OU/BjUJ0DuTcv8Ailo+7OD86zqsxXqXSlKV0liu4fC2E0tgAd1YYlLRGttH8Cg/KoL+0GUdkT3HsqPPWSBXDicfdbXO3krGP6pArekZ87u7LVhsRaT2bar4QBWF/E2m7JRG12hao6YzY9YSWMBc73Cf6uyPQ1IYa0W1Yz4SBz5xlHxpSJ53udfE7No/8K2qMDJZUAkd0xpVUfF3bbgEkahV11AJgHxgxpVwNgojEKC2WB+e2lVPGW7nXWsuUB17TwrARyhuZMRGtEktiJSb3ZaeE8eJCrd9uCG1+0DFSbcQ5jKR5z66bVTXVRfYr3idNZ17tql7eIKjUx4k/jsKkqWqxxw+fxrtsccttvp/pVLbimEJAOMTOfZAK+Qgz310KgzQGzr3ncHXTN7vjVXFMm2Xq3ikbZh8q31SsI42zab6Efr/AGqYw3EinZbtL38x/pVHDsWUidpWizikfQMJ7udb6oSKUpQsKUpQClKUApURxLpBZs6SXf7qa+8/71X8T0ixVwxbQW179z7zXPPiYR3ZaOOUtkXK7bVspb7JDDukAwT7591Q9rFpev3FTtFQssCI1kb+nwqoNZvXCS1xmI1liToN4FWnoRggmG6yZa4zMTvorFVE89if5jWHPDibht1dHY8SxYudvV6JdiU+pk8h61h/Zms5oPIgEEeszUlSrLgMS7v2nJ4jOK5h3a29t2DBlIB2Oo58jVM6CP8A9qcfetH3o6/g4r0CqNwW11fE3XbS4B4gkN/lFayjyyj7jNuy80pSuigeU8QtwJlpnQTz8dCfSohrZP8AxCTJ0EZm033zAfMeFd2JUsxOY+UgDbckAR7634ZUTtMWY7gMQqgd8ASfXu2roMjLAYEmStvIp9pmkk+s6+Q0qZwiKIPLlB0M+mtQOLx73CFVjHkAsb69w0Ou9duHvMDkViSPabYk7zH2fLnIJ8QLYroAFMa7+XOoHiuNt6raRZ5MdY0jTu+fdXNicUNg+v5/P9cq4GugSS2flyA8Y3PvJO4oDZw7AgMSxGmuogeLa8/Gpa5hLToVdQykajw8aifrUabCNdht5/oV8xeOAiDpA38Yj5fjQFL4n0KvC4RZZXtEkgyBAPIr3/rSp/orwy/bBW4/ZX2Zkx67EEdx0rsGMyzpJJ0gHaPhP41IYbFzoAFHh+H50B1JcCATvy/PxrZa4ipkGYg+Q8fjXBiXB0k6845z5amuZwoBjvI0B57yNv16UBZLDqwkHX9eHKpXBcSuLo8svxA8Dz0POqLhscbbDXs/l6+vLnU/b4kGiIjn8j8qhpMlOi723DAFTIPOs6r3A+IqWyzoTHdrVhrKSpl07FKUqpYVw4vBvcMF8qfdUanzP4bV3UqkoKSp7BNp2iLtcBsryJPeT+UVv/su1EZfi35120rP9ti6xXuLvLN9WcQ4bbAMKJII1k7jxNUHo/0nODJsXUJsq7AON0liTp9pZk9+vPavS6824rZtvir1kfe9zESddue1ZZVHBUoJJdaOrhm8kZwlrs9fL/T0TC4lLiC5bYOjahhqDW2vKeHYrEcOuEqC9kntpyPiPut416Xw3iFu/bW5bbMje8HmpHIit8WWM1aZxyg4umjrql8Rfq+KWm++VH9a5PnV0qi9PW6u/h7vdH/xvm/GmVaJ9mVZeqV9zr3ilX5geN4m+tvtHttynRZ0HZXdvPx3jSuK7ji2hMvuQPZHdmOwiNht7q47t1iZ0J5bk+47nnyHPas8FayAM2uvs+0SRssDswDJIHdyB06jIl0fIm/ayg92+xP3fDnz10lhrkAqDrsSBGmgYjX0GvPma5GdnaI1nXnLTp5xE/yqKzU5VZjEDTv23PkCNO8gHlQG3EXBoz6E6he/xI3AANcv1o5gWEaQoGn8oEjKPHQmNK0u+7OO193aFA7NvwjSfGe6udbh25x9kHWeS8/Xc+A3A7nunWQC0DSTlH4Aa7beHIkYO5YmTrLHnpqdTp+vGuazqe1Eb5Vgz+6Ttp58jX20/a1E89JA7/y1O/KgO9bpA9kRsJ9xgcvyiY1rab5QeenOSfPu8uXnXCcQQe0TI9InbwHPSZ8Sa5MTiiRO4017jyiflrvvQHdc4p1Z0MknWI03kAzA7u7fnXI/EZbv5QFYx7wJ91RS23JPLvO7HwGwA8PftpsS2x0zELG257paeys6aa8tKAnkvSBAEt3wPSBqI/XdX29xi3YUlyZ5AdqfUd/jXLawTOmxKjmPHX2uZ7hVY4+DnjkP1vzoCVw3Tm8LkwApMgDl3V7xwLH/AFjDWr22dA3qd/jX5j4dBuAMJGug01iv09wXBizh7NoTFu2i679lQNazyF4nbSlKzLilKUApSlAK8rbEEcQxI73PpGxr1SvKOIWyvE8T/FP9Sqfxrl4pXB+hpik1JJHozYS3ftq7DVlBkb6jXzqFscPfBXC9uWtN7ajY+MfZYfHau3oZiTcwiE7qzqfRiR8CKnSKj9umlKOj79/YPE6PVdjG1cDAMplSJB7wapv0np+wtv8AduEf1LP+WrhYsKgIXQSTHITvHcJ19ar30g4fPgn/AHSrfHL8mreVuP8AIyddCg//ANle+6ffX2qj9aNKpylSYUliTMiPL0zc/TxMzt2YS2CQd2GigaRO8A7fADnqajnxQ0VYAA1J2HPRdp03Px0mVsOqqWII2gcyRy/DuAnWZrvKGeIBRcq+2xyr4A7sT5SfSuLGYgAQpAURDGdI208PiT795vTLHtO8wOSjYwO7SPEA1E45Cz5YnLvJ0k6yeROnkNZ8QMr75VGrSd2MdqeW+s9wrBb0DU5RzkCY7tfZB8dTXPcvnNAPec3f5eGnwqPuXYBaSTOhO8nx1oCaOKn2AT3sTIjvjQHyIjwrP6yAOQEjU6E+m5Pn7qrhxxiNAPeSe+vtnGhZbc8uev4elAT7uiiSNI5jf03Pl4elcb4rMZMsdlWNp10Gw8f1MY2MJkk5m5nkO4DvitBvM3h4frvoCew7ht9ANd5nTedAfy7hvI4ewmhfUEk9WNWY/vNy8dzrqO6uYO6VGmp+Qjl8p84qRwONGcZiNN9DsOXlzidaAsjBspJImICwci89uQG5J1gVWOKYcTruY5RpOUmB5/A1YcVjR1cjUQSeUmATPLUx76p2KxXWMAZZpiBqTrJMegoCa+j3gIxONQMP2adtx4JrHq0DyNfoOvOfol4NctrdxFxGQPCJmBUsoOZng6wTAH8JPOvRqym7ZpFaClKVQsKUpQClKUArzvpTh+rxxucnW2fgU/yfGvRKqPT/AALPbW4oJySGjkpKtmPgMp/qrHiI80Gi+N1Kzb0CXLaup3XSR6on5Vaar3Q4fs7jd7j/AAIfxqw0wO4JlZqpNCo7pBY6zC3k77bfAT+FSNYXLeZSp2II94itZK4tFD855f3TSrj/AGU33PgKVx+J5AqFtyIY6kajuncfHl4T3V1PiTABJJ+0fPkO8n3Ad4qLtXiSJnw1knu08/j5V9xd2IA1YzJ7p0P+/hXqmZNcOxMsXPIafkO6BHoB41hiWBluWbKfMnUd5+761E4LFlUbXtHby748x8x3VuLxbVRyzMeeyyPM6z6UBpuvOZubGAPAH8gPWuC+0DXet2MaIHh8SP8AWuC+4Jnlt+H4UBpd6+I55b0t2yzBRuTFTPD+HZTmcToCPAyZ+VVlJRVs1xYZZJKMRw7CAgM405DapBrVsA/s10nv+fOtlFtlyFG7EKPNtB865ZZJN6HvYeBxQjTVvq2em4T6NsCyKzdbLKpgXIAlRIAj5zWV36MsH/y3uJ5lXHnBGvvq7qsAAbDT3V9rbmZ4LSPMMX9FVxyQmNKITt1Z257XB+hVx6J9GLXD7XV2yzuxzPcaMzHb0AGw/Op6q1i+nGBtu1vrs7r7Qto9zLEzJRSNIMwdOdLbISRZaVw8L4rZxKdZZcMoJU7gqy7qymCpHcRzFd1VLClKRQClK4LHF7L3msK5N1QxZSjjRMgYhioU+2uxPPuMAd9Kj7HGbD37mGRyb1uM65Hhcy5l7eXLqPHvqQoBWu/aV0ZG1VgVPkwg/A1sitd66qKXdlVQJLMQoA7yToKAiuitgphwre3ncN4sjZGPvSpmuPh3ELN9S1l0dQ0EoZGYgN8QwM8wwNdlVjHlSQbt2KUpVgcv1G392ldVKryrsQfmBCQc3cN/SKzbUDx2HcB+f4Gvl0zzEfrYc6xNzWZ0AgD8K6jIW7ZBPhp5n8gP13fRd7OUazE+4D8PnRcWoBA31+O7ef51yu8AkacvXWfdMUBlibknfYL8pmuMtqY50zVvwFnM690ihKV6EvwzBC2A7CXIkfu/712kzRjOtK4pycnZ9Pw/DxxQSW/VipPozhusxmHT/qKx8k7Z+CGoyrn9GGCz4l7p2tpA/iuGB/dVv6qhK2W4mfLjk/I9UpSlbHzZVvpFxbW8E+Rymc5Sw3ChHc6c5yQRzBI51Wei3RGxisJeDZ87EBS7TkuPYt3A0/ay51XWdVbvETf0p3MuDU/Z6xg3cc2Gvqk/zlPWK6/o9ZDhSUKsC5MqZBMBd/AKB6VboQc/Qbo5iMGXN7qhmGX9mztnjKELhlEFFUqNTOcz3mudL+MPb4vZYMy2rRto7EnJr+1ZQJjMVJExzA2r1SK8U4txCxevYtXuQ73v2YAJzANct3GnYfs1SPFKLVklo+knF4u3cQWsQ9qy1skhDlbMtzttmHaAyMoEEakd9RvGej+IsYZcWuMZwVQkDrLTDPGRldbhZjJVYJA7UnaK6OldwX+HYe+/tdXcsv5rle5/9V4PiO+tHDeD43ilhM+JRMEOzbCe2UQlBmQKO1AiS+ndqSZRBsxXSTGf2fbbOwxCYo2GcQOsEAB4iDOdeUGJ5ipPHAWeNrcOmcW1JPNbqtaVAf8AzLYNYdJeEWsNbwOHtr2BfLGdSSiaE9/aCDyArH6VsO6C1iLZysodJ/eVkxCH06p/6qAdBnL4viGMb2Q9xAf3FuMy6/wr8q7Po96QXsbbxAvPNxWGUgKhCODlEKBEFSdZMEGdRUJwAizwPFXCxAuG4itzAfLZG27Z2fbma19BeJWhjUa00i8gt3NIC3RbDwDzAa2yg/8AU0o0CL4Pw6/fwt7Fti7/AFthkhXuOJUIjmXz9kyWgwdRzFXS/jPrvBmuXRJKguPvdVcUnb7wSdPvVRMdwy7cOPRHKpbftWpOV8l65bDtGwEIfInURNel4Jbd3hRXDrlRrDqqNurhWDK4+8Lkg+M0ZJ5x9HHSD6rfy3WK272RGDaBcs20cTsFK5GnWGBM5DHtleJ4bADE4V74ADWbdjPqq5rdxC7upOgYXCx1gEjWYg3/AKDccNxDhrn/ABbagodRnt6ANB1lTAIOolZ1kBIFtpSlUApSlAflLEXQWgbfqaxNz/Qd1c5NK6DE3ZqzczA/W9c9Z2/yoDFqleEJ+0BHKT8NR4j8xUcVqU4RcGaDoSCB7tKrLZmmGnON90S1KUriPrRXsH0fcN6nBqxEPdPWHyYAIP6Ap8ya8x6O8KOLxKWvsE5nPci6t5Too8WFe6AAaAQBsKvBdTyv1LLVQXqz7SlK0PJIvpHwsYrDvagEkaSSBMFSJHsypYTymdYrzHo7xe/w4G09o2yQRcDWmaLiQqsGDZYIB1ZgsAEaRXsVYsgPdPIxqPKpTB5F9HPR/FLcfFlWBS3cFssCpu3HQZRLAFlB5nsgxGsxaOgfRUWsK6YmwBce4/thHcW4UIM4J8W0OhY1H9E8HexvWXLmMxIywpQXHgPmdXgBhsUge/nXd0uwdyzbwdu3dusBdyMzXGLMrnMWcz2ioBjNMaVZkHzAdFsUmCvYa71bk3VuW8rSGHZ6xWzKAueHneOsOulS/QjhN/CYbqb2QlSMpVidMoWCIhfZGxMkk6bVs4Z0YtYa82IW5dZ8jKQ7ArBIJbKFGum/iap1zpLxS+tzE2gtrD2wrZT1chTrLllbNoCTBWAfs1G4LR0uwBu3cKwu2UW2+Z+sfIxTPbZsgg5jCEakDWsOmV/DYnC3LP1vCpcIlDcuoAGHfrIEEiYO9c2J4KnFbaYjrShKdWVCI65kdtRnBKmSfQ+E1UugHAlxi30vN7KWjosN+2RnIzAg6DKJ8D4UBZ+IdD778Ks4G29oXFILtmcI2rtIYJJOdlbUCYNTnH+j31g2Gt3FsvZuKynJmlVZWyQGWJKL36TprVV6ZY23fsYe9hLyuyM1oPAnOES7BBUQYtgkCPho6fYpcTe4dbQSLh60aBpDZAog6QQzU1BO4Low6Y/FX7jI+GxCMhtmSe2LcgiIjsvz1zCt3RXhYwzX7H1tb0sG6vKA9uRkBchjJZVWdFBImBJqv/Sfxi7Yu4ZbNx0Cku+V2RSCyogfLuJBgHTfQ1I8O7HF7jBpTE2xcUciGRAp9Oob/wBwd1OgPNehvAG4mer60W0RQz9nMSAEQBVkAfa7U6ZzoZNWXpTw27w17N207PlINtyAJcaPZdVEZXBOULzmAO09T/Q/oZeweLe8z2+r6s2lVcxZlBTIzE6AxbXQTzOkxV6qXLUk4+FY0X7KXQrpnWcjqVdTsVKkA6EHXY7jQ12UpVAKUpQH5lfg6HZiPjWxOE2xvmPwrvpWfiS7nvrgMKd0ROM4YqrKTodQddO+mH4ftpUsDW6yABpy2/Kt8eS9GeXx3CeG+aK0+RX8ZhSprXgHhh5j5xUtjlzRUSUKsNOdas4IunZPV8Jr7Vr6CdHPrN3rXX9hbPPZ2GoXxUbn0HMxwpWfVZMsccOd7Fv+j7gX1ex1riLt6CQd1QeysciZzHzA5VbaUrZKj5vJNzk5S6ilKUKigpSgPMOjXRm1jDf6x7qZLjpltvkB/a3dSIMmB8TU10xwa2MLYtWyVRBcRGLEkRYcIS25IMGrNw7hFmwztaUq1wy0u7SZLbEkDUnbvqM6bcFuYywlu2QGW6jmTl7AkOB3kgxB01q16gdH+C4qzcdsRjGvoUyhDmgGQS0sxk6R61WbPCuI8PNy3YRL+FYQJti5CrKqGTrEcnJAOUPMaDWrFwbC8SW+GxF5HshWzKOrJLGMvs2lIA1O/vqvdKOO4zAY5rzZrmGZQEQlwkFUGhAKhxcVpmTlcRM6CCb6C9K7eND28i27qa5UkK6ZsudVIDLruDtI17oj6NEK38TO2W0B/Iir8J+JrR9F/Cb31jEY64htpdzZEIIkvcNxiJAOVdgdjm8K7ugtxTjMRBnRgR3FHVD6yDR9QVrgmG/7txzET1OL66BvkRlVx4TbVx5GnQ/EPieI4frIY2Lb2p8LLu4YLykPbQ+vhU79HNkXP7SsPqhvPbPkxuIR7vnXD9F+EIxuLZxD21yEQQM7vNzlqQbaifUb1PcHP014raPEL9tw7xat21CiYuKRcVjqIQdY2YidxpW1cQy2sDill/qzmy6pBZkRgbYHKTZctGkmKuPRvgFzDYrGX7jo31h1ZApaVCtcJzSBydRpPs10dHeAHBvfIu57d1w6pky9XEiM2Y5uzkXYewO+osGfBOMPiGfNhrllAFKM8gsSTmGUqAI0iC0ydoqZr4xjU6CsVuAmAfHzB5jvHjVSTOlKUApSlAfnilKVgfViskaPKsaVKdalJwU4uMtmbBakExtJ+UfhUbj06tc0b1MYDVo8D8BXXwzorex75U7FsN27hEhViQFGzsRy9THPrjNONnzGfC8WRxfs9D50V4FcxrqqyLYALv8AdB5DvY8h6mva8Bg0sW1t21ARRAH5nmSdSeZNaODcJtYSytiyuVFHPUk82Y8yf1pXfWKikbZuIllpPZClKVJgKUpQCsWYAEnYan0rC80RrAJgnTTQxvoJMD1rTaY5iAZ5Bj9oDXcc1JI8e/Q0BtfEAEjTSAdROoB0XnoRWVtyZkQJIGs7EidtNqwt4cABZJEAHxgRr6ADx51tyiCORn46n50Bit0HvAOxPPn6aa6xWSODsQR4Ga1PbYiJnbcRMEHU+QjQczpXxrZZp1UaTrB7Obcg97Dn9n0oQdFRfDOj+Gw9x7lq3luXCxdsztmLtmbRmIGo5V1LJbRoCht9d2gazt2D7xX0YnnEbTJI3AJA0g799CTcltVkhQCTJgASe899ZzWoXecHL97SNOe+3jXxr8bq3gNJOoHfpuN4oDdSobpHxh8HbW91We2HUXiGM20YwbgXL2wp3Gnf3xTcZjsXjbNi9lvXMN12JW4mEbI7KpKWGBkFlBBJ1jWTyiUipZ+P8TsXWfAlHu3cqsyhGa3bI/aWxfcdlUYoJB3WZ0NQPQBsYbjJfXEBQvb64Qtu4sKosSoWG7TZU7CqFGsydnCeg73bKPjLt5b1y2i4pEdct4W3Jti40ElggRWIOsHXUk36p2ApSlVLClKUB+eKUookgDUnQAaknuA51gfVigHLmdB4k7CrNwfoRir8F16i2ftODm9Le/8AVlr0PgXRTD4WGVc9z/xHgt/LyX0HmTVlFs48/HY4aJ2/L7lN6L9B7lwrdxM27e4TZ2/i+4PD2v4a9Lw2HS2gS2oRF0CgQBW2laJUeJmzSyy5pClKVJmKUpQClKUApSlAKUpQClKUB8ImsTbEzr37mDHeNuVZ0oDULQ2kxr2dI15bTGu018XDAd+0ch8hqa3UoDC5bDKVYBlYEEESCCIII5gisMLhktIEtoiIuyooVR5KNBW6lAVbinT3A4e49q5cfrEMMFR2gxMZog799Q7/AEqYY3FW1Yv3Egl2VRmXXcJPaHfqN+ddHGPo3w+KuNee5ct3HJL5CpViQJMMums86k+jPQ+1gGzWWdmcZbjXCCWAMgAAALz28JmraEFjtXAyqwmGAIkEGCJ1B1B8KzpSqkilKUBSMB9HFhYN249w9whFPoJb+9Vo4bwXD4cfsbSodpAlj5sZY+prvpUJJGmTPkn/AGb/ADyFKUqTMUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgP/2Q==', '2021-06-29', 0, 5, 'Banner'),
(4, 'Necessito de uma Logo ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'https://cdn.criar.io/blog_posts/42/cover.jpg', '2021-06-23', 0, 1, 'Logo'),
(5, 'Necessito de uma animação', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'https://source.unsplash.com/collection/528639/', '2021-06-23', 0, 1, 'Motion Design'),
(6, 'Necessito de uma Logo ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'https://source.unsplash.com/collection/528639/', '2021-06-23', 0, 1, 'Logo'),
(7, 'Necessito de uma Logo ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'https://source.unsplash.com/collection/528639/', '2021-06-23', 0, 1, 'Logo'),
(8, 'Necessito de um flyer ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'https://source.unsplash.com/collection/528639/', '2021-06-23', 0, 1, 'Flyer'),
(9, 'Necessito de uma Logo ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'https://source.unsplash.com/collection/528639/', '2021-06-23', 0, 1, 'Logo , Social Media'),
(10, 'Necessito de uma Logo ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'https://source.unsplash.com/collection/528639/', '2021-06-23', 0, 1, 'Logo'),
(11, 'Necessito de um site ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'https://source.unsplash.com/collection/528639/', '2021-06-23', 0, 1, 'Web Design'),
(12, 'Necessito de uma Logo ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'https://source.unsplash.com/collection/528639/', '2021-06-23', 0, 1, 'Logo'),
(13, 'Necessito de um flyer ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'https://source.unsplash.com/collection/528639/', '2021-06-23', 0, 1, 'Flyer'),
(14, 'Necessito de uma Logo ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'https://source.unsplash.com/collection/528639/', '2021-06-23', 0, 1, 'Logo'),
(15, 'Necessito de uma Logo ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'https://source.unsplash.com/collection/528639/', '2021-06-23', 0, 1, 'Logo'),
(16, 'Necessito de uma Logo ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'https://source.unsplash.com/collection/528639/', '2021-06-23', 0, 1, 'Logo'),
(17, 'Necessito de um flyer ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'https://source.unsplash.com/collection/528639/', '2021-06-23', 0, 1, 'Flyer'),
(18, 'Necessito de uma Logo ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'https://source.unsplash.com/collection/528639/', '2021-06-23', 0, 1, 'Logo'),
(19, 'Necessito de um site ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'https://source.unsplash.com/collection/528639/', '2021-06-23', 0, 1, 'Web Design'),
(20, 'Necessito de uma Logo ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'https://source.unsplash.com/collection/528639/', '2021-06-23', 0, 1, 'Logo'),
(21, 'Necessito de uma Logo ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'https://source.unsplash.com/collection/528639/', '2021-06-23', 0, 1, 'Logo'),
(22, 'Necessito de um flyer ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'https://source.unsplash.com/collection/528639/', '2021-06-23', 0, 1, 'Flyer'),
(23, 'Necessito de uma Logo ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'https://source.unsplash.com/collection/528639/', '2021-06-23', 0, 1, 'Logo'),
(24, 'Necessito de uma Logo ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'https://source.unsplash.com/collection/528639/', '2021-06-23', 0, 1, 'Logo'),
(25, 'Necessito de um site ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'https://source.unsplash.com/collection/528639/', '2021-06-23', 0, 1, 'Web Design'),
(26, 'Necessito de uma Logo ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'https://source.unsplash.com/collection/528639/', '2021-06-23', 0, 1, 'Logo'),
(27, 'Necessito de uma Logo ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'https://source.unsplash.com/collection/528639/', '2021-06-23', 0, 1, 'Logo'),
(28, 'Necessito de uma Logo ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'https://source.unsplash.com/collection/528639/', '2021-06-23', 0, 1, 'Logo'),
(29, 'Necessito de uma Logo ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'https://source.unsplash.com/collection/528639/', '2021-06-23', 0, 1, 'Logo'),
(30, 'Necessito de uma Logo ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'https://source.unsplash.com/collection/528639/', '2021-06-23', 0, 1, 'Logo'),
(31, 'Necessito de uma Logo ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'https://source.unsplash.com/collection/528639/', '2021-06-23', 0, 1, 'Logo'),
(32, 'Necessito de uma Logo ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'https://source.unsplash.com/collection/528639/', '2021-06-23', 0, 1, 'Logo'),
(33, 'Dionisio', 'dionisio', 'http://ied.edu.br/100porcentodesign/wp-content/uploads/2020/10/o_que_e_design_ied_grad.jpg', '2021-12-31', 1, 16, 'Banner');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbl_tag`
--

CREATE TABLE IF NOT EXISTS `tbl_tag` (
  `tag_id` int(11) NOT NULL,
  `tag_nome` varchar(45) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `tbl_tag`
--

INSERT INTO `tbl_tag` (`tag_id`, `tag_nome`) VALUES
(1, 'Banner'),
(2, 'Logo'),
(3, 'Web Design'),
(4, 'Social Media'),
(5, 'Motion Design'),
(6, 'Flyer'),
(7, 'Outros');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbl_usuario`
--

CREATE TABLE IF NOT EXISTS `tbl_usuario` (
  `usu_id` int(11) NOT NULL,
  `usu_nome` varchar(65) DEFAULT NULL,
  `usu_email` varchar(65) NOT NULL,
  `usu_senha` varchar(45) NOT NULL,
  `usu_biografia` longtext,
  `usu_imagem` varchar(300) DEFAULT '/uploads/default.jpg'
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `tbl_usuario`
--

INSERT INTO `tbl_usuario` (`usu_id`, `usu_nome`, `usu_email`, `usu_senha`, `usu_biografia`, `usu_imagem`) VALUES
(1, 'Thiago', 'thiago@gmail.com', '123', 'Olá!', '/uploads/default.jpg'),
(5, 'Luiz Gustavo', 'luiz@gmail.com', '12345', 'Sou novo aqui', '/uploads/default.jpg'),
(10, 'Thigss', 'thiago2@gmail.com', '123', 'Sou novo aqui', '/uploads/default.jpg'),
(11, 'Georgia Francis', 'georgia@gmail.com', '123', 'Sou novo aqui', '/uploads/default.jpg'),
(12, 'Thiago', 'thiago@gmail.com', '123', 'Sou novo aqui', '/uploads/default.jpg'),
(13, 'Jorge Rosa', 'jorginhopqt@gmail.com', '123', 'Sou novo aqui', '/uploads/default.jpg'),
(14, 'Priscilla Cabett', 'pri@gmail.com', '123', 'Sou novo aqui', '/uploads/default.jpg'),
(15, 'Johnson', 'johnson@gmail.com', '123', 'Sou novo aqui', '/uploads/default.jpg'),
(16, 'Dionisio', 'dionisio@gmail.com', '123', 'Sou novo aqui', '/uploads/default.jpg'),
(17, 'Luiz Dois', 'luizdois@gmail.com', '123', 'Sou novo aqui', '/uploads/default.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_avaliacao`
--
ALTER TABLE `tbl_avaliacao`
  ADD PRIMARY KEY (`ava_id`), ADD KEY `fk_TBL_AVALIACAO_TBL_USUARIO1_idx` (`usu_id`);

--
-- Indexes for table `tbl_chat`
--
ALTER TABLE `tbl_chat`
  ADD PRIMARY KEY (`cha_id`), ADD KEY `fk_TBL_CHAT_TBL_USUARIO1_idx` (`usu_id`), ADD KEY `fk_TBL_CHAT_TBL_SERVICO1_idx` (`ser_id`), ADD KEY `fk_TBL_CHAT_TBL_USUARIO2_idx` (`usu_id2`);

--
-- Indexes for table `tbl_mensagem`
--
ALTER TABLE `tbl_mensagem`
  ADD PRIMARY KEY (`men_id`), ADD KEY `fk_TBL_MENSAGEM_TBL_CHAT1_idx` (`cha_id`), ADD KEY `fk_TBL_MENSAGEM_TBL_USUARIO1_idx` (`usu_id`);

--
-- Indexes for table `tbl_portfolio`
--
ALTER TABLE `tbl_portfolio`
  ADD PRIMARY KEY (`prt_id`), ADD KEY `fk_TBL_PORTFOLIO_TBL_USUARIO1_idx` (`usu_id`);

--
-- Indexes for table `tbl_servico`
--
ALTER TABLE `tbl_servico`
  ADD PRIMARY KEY (`ser_id`), ADD KEY `fk_TBL_SERVICO_TBL_USUARIO1_idx` (`usu_id`);

--
-- Indexes for table `tbl_tag`
--
ALTER TABLE `tbl_tag`
  ADD PRIMARY KEY (`tag_id`);

--
-- Indexes for table `tbl_usuario`
--
ALTER TABLE `tbl_usuario`
  ADD PRIMARY KEY (`usu_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_avaliacao`
--
ALTER TABLE `tbl_avaliacao`
  MODIFY `ava_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tbl_chat`
--
ALTER TABLE `tbl_chat`
  MODIFY `cha_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tbl_mensagem`
--
ALTER TABLE `tbl_mensagem`
  MODIFY `men_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `tbl_portfolio`
--
ALTER TABLE `tbl_portfolio`
  MODIFY `prt_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tbl_servico`
--
ALTER TABLE `tbl_servico`
  MODIFY `ser_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=34;
--
-- AUTO_INCREMENT for table `tbl_tag`
--
ALTER TABLE `tbl_tag`
  MODIFY `tag_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `tbl_usuario`
--
ALTER TABLE `tbl_usuario`
  MODIFY `usu_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=18;
--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `tbl_avaliacao`
--
ALTER TABLE `tbl_avaliacao`
ADD CONSTRAINT `fk_TBL_AVALIACAO_TBL_USUARIO1` FOREIGN KEY (`usu_id`) REFERENCES `tbl_usuario` (`usu_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `tbl_chat`
--
ALTER TABLE `tbl_chat`
ADD CONSTRAINT `fk_TBL_CHAT_TBL_SERVICO1` FOREIGN KEY (`ser_id`) REFERENCES `tbl_servico` (`ser_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_TBL_CHAT_TBL_USUARIO1` FOREIGN KEY (`usu_id`) REFERENCES `tbl_usuario` (`usu_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_TBL_CHAT_TBL_USUARIO2` FOREIGN KEY (`usu_id2`) REFERENCES `tbl_usuario` (`usu_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `tbl_mensagem`
--
ALTER TABLE `tbl_mensagem`
ADD CONSTRAINT `fk_TBL_MENSAGEM_TBL_CHAT1` FOREIGN KEY (`cha_id`) REFERENCES `tbl_chat` (`cha_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_TBL_MENSAGEM_TBL_USUARIO1` FOREIGN KEY (`usu_id`) REFERENCES `tbl_usuario` (`usu_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `tbl_portfolio`
--
ALTER TABLE `tbl_portfolio`
ADD CONSTRAINT `fk_TBL_PORTFOLIO_TBL_USUARIO1` FOREIGN KEY (`usu_id`) REFERENCES `tbl_usuario` (`usu_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `tbl_servico`
--
ALTER TABLE `tbl_servico`
ADD CONSTRAINT `fk_TBL_SERVICO_TBL_USUARIO1` FOREIGN KEY (`usu_id`) REFERENCES `tbl_usuario` (`usu_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
