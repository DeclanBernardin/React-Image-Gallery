CREATE TABLE pictures (
    id SERIAL PRIMARY KEY,
    image VARCHAR(150),
    description VARCHAR(100) NOT NULL,
    likes INTEGER
);


INSERT INTO pictures (image, description, likes)	
VALUES ('https://raw.githubusercontent.com/DeclanBernardin/react-gallery/master/public/images/1566150627355blob.png?token=ALYA5RL3Z6ABNW6J3WPUXNC5MMLDI', 'Me and my great grandma.', '0');

INSERT INTO pictures (image, description, likes)
VALUES ('https://raw.githubusercontent.com/DeclanBernardin/react-gallery/master/public/images/thumbnail.png?token=ALYA5RPL4K6RHOQGJU4S7UC5MMJDC', 'Me and my great grandpa going to work in his big truck.', '0');

INSERT INTO pictures (image, description, likes)
VALUES ('https://raw.githubusercontent.com/DeclanBernardin/react-gallery/master/public/images/thumbnail%20(1).png?token=ALYA5RI6RVIG6P65PMPOGDC5MMLOS', 'Me my brother and my cousin.', '0');

INSERT INTO pictures (image, description, likes)
VALUES ('https://raw.githubusercontent.com/DeclanBernardin/react-gallery/master/public/images/thumbnail%20(2).png?token=ALYA5RJWBCDBK3HVOFLO7F25MMZFY', 'Me and my first pet lizard Zelda.', '0');

INSERT INTO pictures (image, description, likes)
VALUES ('https://raw.githubusercontent.com/DeclanBernardin/react-gallery/master/public/images/thumbnail%20(3).png?token=ALYA5RJJIV7ECRGRYHVUAOS5MMZL6', 'Me my first Jiu Jitsu instructor and my teammates when I got accepted onto the competetion team.', '0');

INSERT INTO pictures (image, description, likes)
VALUES ('https://raw.githubusercontent.com/DeclanBernardin/react-gallery/master/public/images/thumbnail%20(4).png?token=ALYA5RKD2ZMM766Z4UQZQ6S5MMZ3K', 'Me and my dad at his first Jiu Jitsu tournament I got first and second he got third.', '0');

INSERT INTO pictures (image, description, likes)
VALUES ('https://raw.githubusercontent.com/DeclanBernardin/react-gallery/master/public/images/thumbnail%20(5).png?token=ALYA5RKJPLBTECLOYSVSXLC5MM2JS', 'Me looking studius. I dont know who took this photo of me but it was when i was in the amazon.', '0');

INSERT INTO pictures (image, description, likes)
VALUES ('https://raw.githubusercontent.com/DeclanBernardin/react-gallery/master/public/images/thumbnail%20(6).png?token=ALYA5RMPJ3NIXEIPHDTGBRC5MM2SG', 'First time going hunting with my grandpa.', '0');

