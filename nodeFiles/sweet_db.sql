--Constructing Initial Database

DROP DATABASE sweet_db; 

CREATE DATABASE sweet_db; 

USE sweet_db;

CREATE TABLE types (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type CHAR(10)

);

CREATE TABLE person_info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Fname CHAR(45),
    Lname CHAR(45),
    email CHAR(50),
    st_address VARCHAR(30),
    city_town CHAR(35),
    province CHAR(40),
    country CHAR(40), 
    zip CHAR(5)
);

CREATE TABLE product_list (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title CHAR(30),
    typeId INT,
    country text,
    description mediumtext,
    price DECIMAL(4,2),
    available INT,
    image text,
    CONSTRAINT fk_typeId FOREIGN KEY (typeId) REFERENCES types(id)
);

CREATE TABLE card_info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    card_type CHAR(10),
    card_num CHAR(16),
    cvv CHAR(3),
    expire_mth CHAR(2),
    expire_yr CHAR(4)
);

CREATE TABLE order_list (
    id INT AUTO_INCREMENT PRIMARY KEY,
    person_id INT,
    card_id INT,
    created_at datetime,
    CONSTRAINT fk_person_id FOREIGN KEY (person_id) REFERENCES person_info(id),
    CONSTRAINT fk_card_id FOREIGN KEY (card_id) REFERENCES card_info(id)
);

-- Creating Dummy Info

INSERT INTO types (type) values 
    ('large'), 
    ('small'), 
    ('drinks');

INSERT INTO product_list (title, typeId, country, description, price, available, image) 
    VALUES 
    (
        'Pineapple Poke Cake', 
        1, 
        'Windhoek, Namibia',
        "This ooey-gooey poke cake is packed with pineapple flavor and topped with a pineapple syrup glaze! The secret? We'll never know...",
        40.00, 
        10,
        '/cra-sweet-sailings/media/sweetFillNs/Pineapple_Poke_Cake_With_Pineapple_Glaze.jpg'
    ),

    (
        'Mango Lime Cheesecake', 
        1, 
        'Maputo, Mozambique',
        'This tropical cheesecake has a graham cracker and coconut crust, mango- and lime-infused cream cheese filling, mango-citrus glaze, whipped cream and toasted coconut. A treat like this gives off major island vibes.',
        17.50, 
        20,
        '/cra-sweet-sailings/media/sweetFillNs/Mango_Lime_Cheesecake.jpg'
    ),

    (
        'Banoffee Pie', 
        1, 
        'Teluk Intan, Malaysia',
        "A dessert that'll certainly to take you to sweet heaven! A combination of banana and toffee are what make this absolutely to die for. Coffee and dark chocolate flavors are also included for a more robust taste.",
        20.50, 
        25,
        '/cra-sweet-sailings/media/sweetFillNs/Banoffee-pie.jpg'
    ),

    (
        'Coconut-Mango Tart', 
        1, 
        'La Ceiba, Honduras',
        'How mesmerizing is this tart? This coconut custard is adorned with sliced mango and sprinkled with toasted coconut chips. Crafted into a beautifully huge floral shape, this dessert is almost too pretty to eat!',
        40.50, 
        20,
        '/cra-sweet-sailings/media/sweetFillNs/Coconut_Mango_Tart.jpg'
    ),

    (
        'Maple Baklava Cheesecake', 
        1, 
        'Merv, Turkmenistan',
        'A creamy classic cheesecake topped with a crunchy baklava cake and drizzled with rich maple syrup!',
        36.50, 
        5,
        '/cra-sweet-sailings/media/sweetFillNs/maple_baklava_cheesecake.jpg'
    ),    

    (
        'Exotic Fruit Pavlova', 
        1, 
        'Ljubljana, Slovenia',
        'A a meringue-based dessert with a crispy crust and a light and fruity filling topped with whipped cream. It combines mango, pineapple, kiwi, pomegranate and passion fruit for a tangy and tasty treat.',
        22.50, 
        0,
        '/cra-sweet-sailings/media/sweetFillNs/fruit_pavlova.jpg'
    ),

    (
        'Apricot Tart', 
        1, 
        'Kosovo Polje, Serbia',
        'A flaky pastry filled with fresh apricot slices then baked until golden brown',
        35.10, 
        20,
        '/cra-sweet-sailings/media/sweetFillNs/apricot_pie.jpg'
    ), 

    (
        'Coconut Roll', 
        1, 
        'Timaru, New Zealand',
        'A crunchy roll filled with light brown sugar and rolled in coconut flakes and powdered sugar',
        20.36, 
        0,
        '/cra-sweet-sailings/media/sweetFillNs/coconut_roll.jpg'
    ),  

        (
        'Exotic Fruit Tart', 
        1, 
        'Punta Arenas, Chile',
        'A cream cheese fruit tart topped with dried mango slices, fresh kiwi slices bright red currants and sweet starfruit slices',
        25.70, 
        40,
        '/cra-sweet-sailings/media/sweetFillNs/Exotic-fruit-tart.jpg'
    ),          

    (
        'Chocolate Dragonfruit Cupcakes', 
        2, 
        'Cebu, Philippines',
        "It's always delicious when chocolate and fruits come together, and this delight is indeed no acception! These chocolate cupcakes frosted with light, airy dragon fruit meringue buttercream by Sugar & Charm, are certainly no exception. 20 per box",
        40.00, 
        30,
        '/cra-sweet-sailings/media/sweetFillNs/Chocolate_Cupcakes_With_Dragon_Fruit_Buttercream.jpg'
    ),

    (
        'Tropical Sunrise Fruit Salad', 
        2, 
        'Toliara, Madagascar',
        "Looking for a light, healthy dessert? Try this delightful fruit salad! It's packed with sliced bananas, pineapple chunks and oranges, Then, covered with a luscious coconut-chia cream. 2 per box",
        14.30, 
        40,
        '/cra-sweet-sailings/media/sweetFillNs/Tropical_Sunrise_Fruit_Salad_With_Coconut_Chia_Cream.jpg'
    ),

    (
        'Dragon Fruit Cheesecake Bars', 
        2, 
        'Dili, East Timor',
        "These cheesecake bars are too amazing for words...but we'll try to. The crust of this cheesecake is a raw brownie base made out of walnuts, dates, and cocoa, and the topping is a mix of dragonfruit & raspberry, all combined to give these bars a little more exotic feel! 10 per box",
        20.50, 
        10,
        '/cra-sweet-sailings/media/sweetFillNs/Vegan_Dragon_Fruit_Cheesecake_Bars.jpg'
    ),

    (
        'Mini Guava Cheesecakes', 
        2, 
        'Yangon, Myanmar',
        "A tangy cheesecake topped with mint leaves, chunks of guava, and a smooth guava glaze. One bite of this, and you'll think you're on a cruise! 15 per box",
        25.00, 
        15,
        '/cra-sweet-sailings/media/sweetFillNs/Mini_Guava_Cheesecake.jpg'
    ),

    (
        'Star Fruit Tartlets', 
        2, 
        'Choibalsan, Mongolia',
        'These single-serving tartlets are made with a honey dipped crust and stuffed with starfruit infused cream cheese. A treat like this is best enjoyed with a side of starfruit ice-cream! 15 per box',
        18.00, 
        0,
        '/cra-sweet-sailings/media/sweetFillNs/Star_Fruit_Tartlets.jpg'
    ),

    (
        'Exotic Fruit Tartlets', 
        2, 
        'Nahariya, Israel',
        'Nothing says summer like bright colors and fresh flavors. These exotic fruit tartlets are topped with papaya, dragon fruit, gooseberries, star fruit, pomegranate seeds and edible flowers. A flavor combination garunteed to send you to the tropics. 5 per box',
        23.56, 
        0,
        '/cra-sweet-sailings/media/sweetFillNs/exotic_fruit_tartlet.jpg'
    ),

    (
        'Basil Panna Cotta', 
        2, 
        'Stanley, Falkland Islands',
        'A panna cotta flavored with hints of basil and drizzled with a light berry syrup all atop a thin and crunchy chocolate cake base. 7 per box',
        18.50, 
        12,
        '/cra-sweet-sailings/media/sweetFillNs/basil_pannacotta.jpg'
    ),    

    (
        'Caramelised Pineapples', 
        2, 
        'Naha, Japan',
        'Pineapple slices caramelized, then topped with lime and apple syrup. 10 per box',
        19.50, 
        17,
        '/cra-sweet-sailings/media/sweetFillNs/caramelised-pineapple.jpg'
    ),

    (
        'Almond toffee apples', 
        2, 
        'Surrey, Canada',
        'Large, juicy granny smith apples mixed with an almond and toffee crumble then baked in a honey flavored crust. 10 per box',
        12.50, 
        10,
        '/cra-sweet-sailings/media/sweetFillNs/apples_almond_toffee.jpg'
    ),

    (
        'Falooda Smoothie', 
        3, 
        'Siem Reap, Cambodia',
        "A colourful, yummy beverage infused with basil seeds, sweetened milk, falooda sev, ice cream and rose syrup. It's both delicious and nutritous! 4 per box",
        28.00, 
        0,
        '/cra-sweet-sailings/media/sweetFillNs/falooda.jpg'
    ),

    (
        'Vitamina Tropical Smoothie', 
        3, 
        'Vientiane, Laos',
        "An exotic drink that's full of freshly diced mangoes, chunks of bananas, sliced papayas, minced strawberries and plenty more delicious fruits! Also very helpful for a boost in energy! 3 per box",
        34.00, 
        45,
        '/cra-sweet-sailings/media/sweetFillNs/vitamina_tropical.jpg'
    ),

    (
        'Redcurrant Juice', 
        3, 
        'Manado, Indonesia',
        "A fruity red currant drink that's served with a thin slice of rye bread",
        13.64, 
        48,
        '/cra-sweet-sailings/media/sweetFillNs/redcurrant-ryebread.jpg'
    ),
    
    (
        'Lime and Coconut Ice Tea', 
        3, 
        'Badulla, Sri Lanka',
        'An Earl Grey Tea mixed with mint leaves, cardamom berries, cinnamon bark, and of course, lime and coconut!',
        12.99, 
        32,
        '/cra-sweet-sailings/media/sweetFillNs/lime-coconut.jpg'
    ),

    (
        'Krambambuli Tea', 
        3, 
        'Savannakhet, Thailand',
        "Seeped tea leaves mixed with mint leaves, cinnamon sticks, lemon zest, and cane sugar, red wine and cognac. It's a tea with a kick! 4 per box. WARNING: this drink has alcohol.",
        10.50, 
        35,
        '/cra-sweet-sailings/media/sweetFillNs/krambambuli.jpg'
    ),

    (
        'Caramel Iced Coffee', 
        3, 
        'Da Lat, Vietnam',
        'An iced espresso bleneded with almond milk, dark honey syrup and vanilla ice cream. 10 per box',
        32.76, 
        0,
        '/cra-sweet-sailings/media/sweetFillNs/caramel-ice.jpg'
    ),

    (
        'Lingonberry Juice', 
        3, 
        'Kitakyushu, Japan',
        'Freshly made lingonberry drink is a treat for people of all ages. Drink it ice-cold or heat it up and sip on a chilly day. 15 per box',
        34.99, 
        48,
        '/cra-sweet-sailings/media/sweetFillNs/lingonberry_drink.jpg'
    ),

    (
        'Exotic Island Cocktail', 
        3, 
        'Las Tablas, Panama',
        'Made with honeydew melon, diced papayas, sliced kiwi fruit, shredded coconut, and a splash of vodka. A relaxing cocktail fit for breezy afternoons and cool evenings. 4 per box. WARNING: this drink has alcohol.',
        28.50, 
        39,
        '/cra-sweet-sailings/media/sweetFillNs/exotic_cocktail.jpg'
    ),

    (
        'Creamy Avacado Smoothie', 
        3, 
        'Khorugh, Tajikistan',
        'A rich smoothie packed with avacado, lime juice, vanilla yogurt, and natural sugar. 10 per box',
        50.80, 
        0,
        '/cra-sweet-sailings/media/sweetFillNs/avacado_drink.jpg'
    );

-- Dummy Data
INSERT INTO card_info (card_type, card_num, cvv, expire_mth, expire_yr) VALUES (
    'Credit', 1234567890123456, 123, 01, 23

);

-- Websites Used:
-- https://recipechart.com/
-- https://www.yummly.com/
-- https://www.dansukker.co.uk/
--https://www.sheknows.com/

