CREATE TABLE jeju.card (
    id int NOT NULL auto_increment,
    type varchar(10) DEFAULT NULL,
    category varchar(20) DEFAULT NULL,
    date date DEFAULT NULL,
    location varchar(20) DEFAULT NULL,
    contents1 text DEFAULT NULL,
    contents2 text DEFAULT NULL,
    contents3 text DEFAULT NULL,
    contents4 text DEFAULT NULL,
    contents5 text DEFAULT NULL,
    contents6 text DEFAULT NULL,
    contents7 text DEFAULT NULL,
    contents8 text DEFAULT NULL,
    contents9 text DEFAULT NULL,
    contents text DEFAULT NULL,
    timestamp datetime DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
)