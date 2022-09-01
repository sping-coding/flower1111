CREATE SCHEMA `projectDB` ;

-- 회원 테이블
CREATE TABLE IF NOT EXISTS `projectDB`.`user_tbl` (
  `user_num` INT NOT NULL AUTO_INCREMENT,
  `id` VARCHAR(12) NOT NULL,
  `pw` VARCHAR(12) NOT NULL,
  `nickname` VARCHAR(20) NOT NULL,
  `addr` TEXT NOT NULL,
  `tel` INT NOT NULL,
  PRIMARY KEY (`user_num`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `nickname_UNIQUE` (`nickname` ASC) VISIBLE,
  UNIQUE INDEX `user_num_UNIQUE` (`user_num` ASC) VISIBLE)
ENGINE = InnoDB;

-- 게시판 테이블 
CREATE TABLE IF NOT EXISTS `projectDB`.`board_tbl` (
  `board_num` INT NOT NULL auto_increment,
  `title` VARCHAR(30) NOT NULL,
  `contents` TEXT NOT NULL,
  `time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `writer` VARCHAR(30) NOT NULL,
  `board_image` TEXT NULL,
  PRIMARY KEY (`board_num`))
ENGINE = InnoDB;

-- 꽃 테이블
CREATE TABLE IF NOT EXISTS `projectDB`.`flower_tbl` (
  `num` INT NOT NULL,
  `irum` VARCHAR(30) NOT NULL,
  `S_name` VARCHAR(25) NULL DEFAULT NULL,
  `F_langauge` VARCHAR(30) NOT NULL,
  `flowering` VARCHAR(30) NULL DEFAULT NULL,
  `contents` TEXT NULL DEFAULT NULL,
  `price` VARCHAR(15) NOT NULL,
  `image_url` TEXT NOT NULL,
  PRIMARY KEY (`num`))
ENGINE = InnoDB;

-- 꽃 데이터 
insert into flower_tbl values(1,"해바라기", "Helianthus annuus", "프라이드","8월~9월",null,'30000',"https://roseonly.co.kr/web/product/big/202110/a6a0673bb3b7ebe14aee1dfe01589d0c.jpg");
insert into flower_tbl values(2,"금어초", "Antirrhinum majus L", "수다쟁이, 욕망, 오만","8월~9월",null,'30000',"https://roseonly.co.kr/web/product/big/202106/25ecfa6b47b48c5a7845df76d1e7443f.jpg");
insert into flower_tbl values(10,"스토크", "Matthiola incana", "영원한 아름다움","10월~5월",null,'30000',"https://roseonly.co.kr/web/product/big/202110/cd45c3f6de83140ea3caec9185f229c3.jpg");
insert into flower_tbl values(11,"작약", "Paeoniaceae", "수줍음","5월~6월",null,'30000',"https://roseonly.co.kr/web/product/big/202106/thumbnail_peony_one.jpg");
insert into flower_tbl values(16,"미니거베라", "Gerbera jamesonii", "숭고한 아름다움, 신비, 희망, 찬란한 빛","5월~10월",null,'30000',"https://roseonly.co.kr/web/product/big/202109/aaa282b2b349d323a0086236f3a826fe.jpg");
insert into flower_tbl values(19,"카네이션", "Dianthus caryophyllus L", "모정, 사랑, 부인의 애정","7월~8월",null,'30000',"https://roseonly.co.kr/web/product/big/202110/76e8dd66b6d74e83571f1b7addbadf4b.jpg");
insert into flower_tbl values(22,"하젤 장미", "Gerbera jamesonii", "불안한 나를 진정시켜주세요, 사랑의 맹세","8월~9월",null,'30000',"https://roseonly.co.kr/web/product/big/202106/daily_03_2.jpg");
insert into flower_tbl values(23,"빅토리아 장미", "Lilium", "행복한 사랑","8월~9월",null,'30000',"https://roseonly.co.kr/web/product/big/202106/daily_12_2.jpg");
insert into flower_tbl values(24,"아지자 장미", "Gerbera jamesonii", "행복한 사랑","8월~9월",null,'30000',"https://roseonly.co.kr/web/product/big/202106/daily_04_2.jpg");
insert into flower_tbl values(25,"키위 장미", "Gerbera jamesonii", "애정,미덕,사랑","8월~9월",null,'30000',"https://roseonly.co.kr/web/product/big/202106/daily_05_2.jpg");
insert into flower_tbl values(26,"샤만트 장미", "Rosa hybride", "영원한 사랑","8월~9월",null,'30000',"https://roseonly.co.kr/web/product/big/202106/daily_06_2.jpg");
insert into flower_tbl values(27,"파스텔 장미", "Gerbera jamesonii", "희망","8월~9월",null,'30000',"https://roseonly.co.kr/web/product/big/202106/daily_29_2.jpg");
insert into flower_tbl values(28,"어피니트 장미", "Gerbera jamesonii", "완벽한 성취","8월~9월",null,'30000',"https://roseonly.co.kr/web/product/big/202106/daily_02_2.jpg");
insert into flower_tbl values(29,"마르시아 장미", "Dianthus caryophyllus L", "존경","8월~9월",null,'30000',"https://roseonly.co.kr/web/product/big/202106/daily_01_2.jpg");
insert into flower_tbl values(30,"아리아나 장미","Gerbera jamesonii", "행복한 사랑","8월~9월",null,'30000',"https://roseonly.co.kr/web/product/big/202111/03a8f143db603e0beca1f7abc3fd78bf.jpg");
insert into flower_tbl values(31,"젤다 장미", "Gerbera jamesonii", "행복한 사랑, 사랑의 맹세","8월~9월",null,'30000',"https://roseonly.co.kr/web/product/big/202206/5914e0c69389446499473b3c410bf232.jpg");
insert into flower_tbl values(32,"돌세토 장미", "Gerbera jamesonii", "영원한 사랑","8월~9월",null,'30000',"https://roseonly.co.kr/web/product/big/202106/special_13.jpg");
insert into flower_tbl values(33,"스위트 스킨 장미", "Rosa hybride", "추억,즐거움","8월~9월",null,'30000',"https://roseonly.co.kr/web/product/big/202110/942426329bbeba6c2021b3cfdcd6b87a.jpg");
insert into flower_tbl values(34,"부부젤라 장미", "Eustoma russelianum", "행복한 사랑","8월~9월",null,'30000',"https://roseonly.co.kr/web/product/big/202106/daily_28_2.jpg");
insert into flower_tbl values(35,"사이다 장미", "Rosa hybride", "우리함께 지내요, 언약, 불멸성","8월~9월",null,'30000',"https://roseonly.co.kr/web/product/big/202110/536b49636753aec12a7898148ab42be0.jpg");
insert into flower_tbl values(36,"마담굴리아 장미", "Gomphrena globosa L", "수줍음","8월~9월",null,'30000',"https://roseonly.co.kr/web/product/big/202106/special_06.jpg");
insert into flower_tbl values(37,"캔디스 장미", "Rosa hybride", "바람, 욕구, 갈망","8월~9월",null,'30000',"https://roseonly.co.kr/web/product/big/202106/special_05.jpg");
insert into flower_tbl values(38,"리젠트 파크 장미", "Paeoniaceae", "사랑의 맹세, 믿음, 행복","8월~9월",null,'30000',"https://roseonly.co.kr/web/product/big/202110/8a5f5d4c1adab8d0fc24ab7a78a3f5ab.jpg");
insert into flower_tbl values(39,"줄리엣 장미","Rosa hybride", "사랑의 맹세","8월~9월",null,'30000',"https://roseonly.co.kr/web/product/big/202104/62f3845c2ab36ad86242137aab42673d.jpg");
insert into flower_tbl values(40,"캄파넬라 장미", "Rosa hybride", "축복","8월~9월",null,'30000',"https://roseonly.co.kr/web/product/big/202106/special_20.jpg");

-- 풀잎 테이블
CREATE TABLE IF NOT EXISTS `projectDB`.`pulip_tbl` (
  `num` INT NOT NULL,
  `irum` VARCHAR(30) NOT NULL,
  `contents` TEXT NULL,
  `price` varchar(30) NOT NULL,
  `image_url` TEXT NOT NULL,
  PRIMARY KEY (`num`))
ENGINE = InnoDB;

-- 풀잎 데이터
insert into pulip_tbl values(41,"유스가스", "루스커스라고도 불리는 유스가스는 무난한 화형으로 어느 꽃과도 조화를 이루어 다양하게 사용이 가능하고 강한 생명력으로 오래오래 두고 볼 수 있습니다.", '10000', "https://kukka-2-media-123.s3.amazonaws.com/media/catalog/product/images/d2b63430-4ebb-4aca-be04-1b35ff7e47d8.jpg");
insert into pulip_tbl values(42,"파블로 유칼립투스", "유칼립투스의 꽃말은 '추억'입니다. 그리스어로 '덮여있다'라는 뜻 때문인데 추억은 시간으로 덮여있다는 철학적이고 아련한 뜻이 담겨있습니다.", '10000', "https://kukka-2-media-123.s3.amazonaws.com/media/catalog/product/images/e0c936b6-ddba-41b4-9e21-9410d132fc5a.jpg");
insert into pulip_tbl values(43,"보리사초", "살랑살랑 옅은 바람에도 휘날릴듯한 보리사초는한여름 보리가 넓게 펼쳐진 시골의 어느 밭이 그려지게 합니다.", '10000', "https://kukka-2-media-123.s3.amazonaws.com/media/catalog/product/images/3a8f84c1-acb1-4a4d-9cb4-949530dba569.jpg");
insert into pulip_tbl values(44,"블랙잭 유칼립투스", "자연의 향기를 즐기는 분이라면 블랙잭 유칼립투스를 추천합니다. 코알라가 즐겨 먹기도 하는 유칼립투스는 허브와 같은 향으로 당신의 삶을 더 프레시하게 만들어줍니다.", '10000',"https://kukka-2-media-123.s3.amazonaws.com/media/catalog/product/images/5d2ac700-1279-45f9-8f16-f844a2cc8b23.jpg");
insert into pulip_tbl values(45,"불노초", "둥글둥글하지만 독특한 각이 미세하게 있는 도톰한 잎이 매력적으로 느껴질 거예요.", '10000', "https://kukka-2-media-123.s3.amazonaws.com/media/catalog/product/images/b56aa728-356b-4b6d-a139-ddb7908b6b3b.jpg");
insert into pulip_tbl values(46,"기린초", "마치 기린의 뿔처럼 보이지만, 소녀의 사랑이라는 낭만적인 꽃말을 담고 있는 기린초입니다. 만개했을 때는 노란빛의 별모양 꽃이 흐드러지게 피어 상큼한 느낌이 듭니다.", '10000',"https://kukka-2-media-123.s3.amazonaws.com/media/catalog/product/images/c48c7e53-5722-4690-9475-a1c4f1209359.jpg");

-- 상품 테이블
CREATE TABLE IF NOT EXISTS `projectDB`.`product_list` (
  `num` INT NOT NULL auto_increment,
  `irum` VARCHAR(30) NOT NULL,
  `price` INT NOT NULL,
  `image_url` TEXT NOT NULL,
  PRIMARY KEY (`num`))
ENGINE = InnoDB;

-- 상품 데이터
insert into product_list values(null,"해바라기",30000,"https://roseonly.co.kr/web/product/big/202110/a6a0673bb3b7ebe14aee1dfe01589d0c.jpg");
insert into product_list values(null,"금어초",30000,"https://roseonly.co.kr/web/product/big/202106/25ecfa6b47b48c5a7845df76d1e7443f.jpg");
insert into product_list values(null,"라넌큘러스",30000,"https://roseonly.co.kr/web/product/big/202105/7ef4877550b9e38e2396fdcbce979190.jpg");
insert into product_list values(null,"미니델피늄", 30000,"https://roseonly.co.kr/web/product/big/202105/7ef4877550b9e38e2396fdcbce979190.jpg");
insert into product_list values(null,"미니델피늄-파란색", 30000,"https://roseonly.co.kr/web/product/big/202105/7ef4877550b9e38e2396fdcbce979190.jpg");
insert into product_list values(null,"미니델피늄-하늘색", 30000,"https://roseonly.co.kr/web/product/big/202105/7ef4877550b9e38e2396fdcbce979190.jpg");
insert into product_list values(null,"미니델피늄-하얀색", 30000,"https://roseonly.co.kr/web/product/big/202105/7ef4877550b9e38e2396fdcbce979190.jpg");
insert into product_list values(null,"미니델피늄-분홍색", 30000,"https://roseonly.co.kr/web/product/big/202105/7ef4877550b9e38e2396fdcbce979190.jpg");
insert into product_list values(null,"미니델피늄-보라색", 30000,"https://roseonly.co.kr/web/product/big/202105/7ef4877550b9e38e2396fdcbce979190.jpg");
insert into product_list values(null,"스토크", 30000,"https://roseonly.co.kr/web/product/big/202110/cd45c3f6de83140ea3caec9185f229c3.jpg");
insert into product_list values(null,"작약", 30000,"https://roseonly.co.kr/web/product/big/202106/thumbnail_peony_one.jpg");
insert into product_list values(null,"천일홍", 30000,"https://roseonly.co.kr/web/product/big/202105/b44442346e75fb3742279a38551013dd.jpg");
insert into product_list values(null,"스프레이 카네이션", 30000,"https://roseonly.co.kr/web/product/big/202105/5aac2aef4a4e3121b8d4932e8f99482c.jpg");
insert into product_list values(null,"프리지아",30000,"https://roseonly.co.kr/web/product/big/202105/f6b2950d1b29a8d1230398306f908a39.jpg");
insert into product_list values(null,"왁스플라워",30000,"https://roseonly.co.kr/web/product/big/202106/thumbnail_waxflower_one.jpg");
insert into product_list values(null,"미니거베라",30000,"https://roseonly.co.kr/web/product/big/202109/aaa282b2b349d323a0086236f3a826fe.jpg");
insert into product_list values(null,"리시안셔스", 30000,"https://roseonly.co.kr/web/product/big/202105/4f8d926f4e848454d1b5fd4d15e511ab.jpg");
insert into product_list values(null,"백합", 30000,"https://roseonly.co.kr/web/product/big/202106/thumbnail_lily_one.jpg");
insert into product_list values(null,"카네이션", 30000,"https://roseonly.co.kr/web/product/big/202110/76e8dd66b6d74e83571f1b7addbadf4b.jpg");
insert into product_list values(null,"소국", 30000,"https://roseonly.co.kr/web/product/big/202106/c8a4bc50820d84b19a5e159608d45021.jpg");
insert into product_list values(null,"디스버드", 30000,"https://roseonly.co.kr/web/product/big/202106/9ce4789745a8c10c60f86e2f85054072.jpg");
insert into product_list values(null,"하젤 장미", 30000,"https://roseonly.co.kr/web/product/big/202106/daily_03_2.jpg");
insert into product_list values(null,"빅토리아 장미", 30000,"https://roseonly.co.kr/web/product/big/202106/daily_12_2.jpg");
insert into product_list values(null,"아지자 장미", 30000,"https://roseonly.co.kr/web/product/big/202106/daily_04_2.jpg");
insert into product_list values(null,"키위 장미", 30000,"https://roseonly.co.kr/web/product/big/202106/daily_05_2.jpg");
insert into product_list values(null,"샤만트 장미", 30000,"https://roseonly.co.kr/web/product/big/202106/daily_06_2.jpg");
insert into product_list values(null,"파스텔 장미", 30000,"https://roseonly.co.kr/web/product/big/202106/daily_29_2.jpg");
insert into product_list values(null,"어피니트 장미", 30000,"https://roseonly.co.kr/web/product/big/202106/daily_02_2.jpg");
insert into product_list values(null,"마르시아 장미", 30000,"https://roseonly.co.kr/web/product/big/202106/daily_01_2.jpg");
insert into product_list values(null,"아리아나 장미",30000,"https://roseonly.co.kr/web/product/big/202111/03a8f143db603e0beca1f7abc3fd78bf.jpg");
insert into product_list values(null,"젤다 장미", 30000,"https://roseonly.co.kr/web/product/big/202206/5914e0c69389446499473b3c410bf232.jpg");
insert into product_list values(null,"돌세토 장미", 30000,"https://roseonly.co.kr/web/product/big/202106/special_13.jpg");
insert into product_list values(null,"스위트 스킨 장미", 30000,"https://roseonly.co.kr/web/product/big/202110/942426329bbeba6c2021b3cfdcd6b87a.jpg");
insert into product_list values(null,"부부젤라 장미", 30000,"https://roseonly.co.kr/web/product/big/202106/daily_28_2.jpg");
insert into product_list values(null,"사이다 장미",30000,"https://roseonly.co.kr/web/product/big/202110/536b49636753aec12a7898148ab42be0.jpg");
insert into product_list values(null,"마담굴리아 장미",30000,"https://roseonly.co.kr/web/product/big/202106/special_06.jpg");
insert into product_list values(null,"캔디스 장미", 30000,"https://roseonly.co.kr/web/product/big/202106/special_05.jpg");
insert into product_list values(null,"리젠트 파크 장미", 30000,"https://roseonly.co.kr/web/product/big/202110/8a5f5d4c1adab8d0fc24ab7a78a3f5ab.jpg");
insert into product_list values(null,"줄리엣 장미",30000,"https://roseonly.co.kr/web/product/big/202104/62f3845c2ab36ad86242137aab42673d.jpg");
insert into product_list values(null,"캄파넬라 장미",30000,"https://roseonly.co.kr/web/product/big/202106/special_20.jpg");


insert into product_list values(null,"유스가스", 5000, "https://kukka-2-media-123.s3.amazonaws.com/media/catalog/product/images/d2b63430-4ebb-4aca-be04-1b35ff7e47d8.jpg");
insert into product_list values(null,"파블로 유칼립투스", 5000, "https://kukka-2-media-123.s3.amazonaws.com/media/catalog/product/images/e0c936b6-ddba-41b4-9e21-9410d132fc5a.jpg");
insert into product_list values(null,"보리사초", 5000, "https://kukka-2-media-123.s3.amazonaws.com/media/catalog/product/images/3a8f84c1-acb1-4a4d-9cb4-949530dba569.jpg");
insert into product_list values(null,"블랙잭 유칼립투스", 5000,"https://kukka-2-media-123.s3.amazonaws.com/media/catalog/product/images/5d2ac700-1279-45f9-8f16-f844a2cc8b23.jpg");
insert into product_list values(null,"불노초",  5000, "https://kukka-2-media-123.s3.amazonaws.com/media/catalog/product/images/b56aa728-356b-4b6d-a139-ddb7908b6b3b.jpg");
insert into product_list values(null,"기린초", 5000,"https://kukka-2-media-123.s3.amazonaws.com/media/catalog/product/images/c48c7e53-5722-4690-9475-a1c4f1209359.jpg");


-- 장바구니 테이블
CREATE TABLE IF NOT EXISTS `projectDB`.`order_list` (
  `num` INT NOT NULL,
  `irum` VARCHAR(30) NOT NULL,
  `price` VARCHAR(30) NOT NULL,
  `image_url` TEXT NOT NULL,
  `quantity` INT NOT NULL,
  PRIMARY KEY (`num`))
ENGINE = InnoDB;


-- 결제 테이블
CREATE TABLE IF NOT EXISTS `projectDB`.`payment_tbl` (
  `num` INT NOT NULL,
  `irum` VARCHAR(30) NOT NULL,
  `price` INT NOT NULL,
  `image_url` TEXT NOT NULL,
  `quantity` INT NOT NULL,
  `user_num` INT NULL,
  PRIMARY KEY (`num`),
  INDEX `fk_payment_tbl_user_tbl_idx` (`user_num` ASC) VISIBLE,
  CONSTRAINT `fk_payment_tbl_user_tbl`
    FOREIGN KEY (`user_num`)
    REFERENCES `projectDB`.`user_tbl` (`user_num`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


