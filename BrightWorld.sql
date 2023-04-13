DROP DATABASE IF EXISTS BrightWorld
GO

CREATE DATABASE BrightWorld
GO

USE BrightWorld
GO

--Create Table
CREATE TABLE [Customer] (
	customerID integer NOT NULL,
	customerName varchar(50) NOT NULL,
	customerEmail varchar(50) NOT NULL,
	customerPassword varchar(50) NOT NULL,
	customerAddress varchar(100) NOT NULL,
	customerPhone integer NOT NULL,
  CONSTRAINT [PK_CUSTOMER] PRIMARY KEY CLUSTERED
  (
  [customerID] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
CREATE TABLE [Order] (
	orderID integer NOT NULL,
	customerID integer NOT NULL,
	orderDate datetime NOT NULL,
	orderStatus integer NOT NULL,
  CONSTRAINT [PK_ORDER] PRIMARY KEY CLUSTERED
  (
  [orderID] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
CREATE TABLE [Order_detail] (
	orderID integer NOT NULL,
	productID integer NOT NULL,
	soldPrice money NOT NULL,
	soldQty integer NOT NULL,
  CONSTRAINT [PK_ORDER_DETAIL] PRIMARY KEY CLUSTERED
  (
  [orderID], [productID] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
CREATE TABLE [Product] (
	productID integer NOT NULL,
	productName varchar(255) NOT NULL,
	productDescription varchar(255) NOT NULL,
	productUnit varchar(50) NOT NULL,
	productPrice money NOT NULL,
	productQty integer NOT NULL,
	productStatus integer NOT NULL,
  CONSTRAINT [PK_PRODUCT] PRIMARY KEY CLUSTERED
  (
  [productID] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO

alter table [Product] alter column productDescription text NOT NULL

CREATE TABLE [Admin] (
	adminID integer NOT NULL,
	adminName varchar(50) NOT NULL,
	adminEmail varchar(50) NOT NULL,
	adminPassword varchar(50) NOT NULL,
  CONSTRAINT [PK_ADMIN] PRIMARY KEY CLUSTERED
  (
  [adminID] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO

ALTER TABLE [Order] WITH CHECK ADD CONSTRAINT [Order_fk0] FOREIGN KEY ([customerID]) REFERENCES [Customer]([customerID])
ON UPDATE CASCADE
GO
ALTER TABLE [Order] CHECK CONSTRAINT [Order_fk0]
GO

ALTER TABLE [Order_detail] WITH CHECK ADD CONSTRAINT [Order_detail_fk0] FOREIGN KEY ([orderID]) REFERENCES [Order]([orderID])
ON UPDATE CASCADE
GO
ALTER TABLE [Order_detail] CHECK CONSTRAINT [Order_detail_fk0]
GO
ALTER TABLE [Order_detail] WITH CHECK ADD CONSTRAINT [Order_detail_fk1] FOREIGN KEY ([productID]) REFERENCES [Product]([productID])
ON UPDATE CASCADE
GO
ALTER TABLE [Order_detail] CHECK CONSTRAINT [Order_detail_fk1]
GO

--insert data
INSERT INTO Customer VALUES
(1, 'phutam54', 'phutam@gmail.com', '@Aa123456' , 'Tu Son - Bac Ninh', '0987654321'),
(2, 'tranthuy99', 'tranthuy@gmail.com', '@Aa78910' , 'Ha Noi', '0123456789'),
(3, 'tamthuy04', 'tamthuy04@gmail.com', '@Aa2004' , 'Ha Noi', '0999999999')
GO

INSERT INTO [Admin] VALUES
(1, 'phutam99', 'phutam99@gmail.com', '@Aa9954')
GO

INSERT INTO Product VALUES
(1, 'Christmas Party Light Auto Rotating Red Green Blue LED Projector Stage', 'Laser source: 532nm blue light laser, 650nm . red light laser
Laser power: (green light 50mW, red light 100mW)
LED light source: red, green, blue
Power adapter: DC5V/2A
Use environment: 10-30�C
Control mode: manual, remote control
Working mode: voice control, automatic, strobe
Product size: 155*127*60mm
Product net weight: 650g
Total product weight: 700g', 'unit' , '19.99', '123', 4),
(2, '2700K Yellow Light (Nanoco NST1202 8W Led String Light)', 'Input voltage: 220V-230V
Number of chips: 120 LED chips/m
Dimensions: 18x8mm
Weight: 9kg
Roll length: 50m
Degree of protection: IP65
Material: PVC anti-UV
Lifespan: 30,000h', 'unit' , '15.99', '260', 4),
(3, '18W LED Bulb - SBNL518', 'Power: 18W
Cap type: E27
Dimensions xH (mm): 105�175
Voltage: 220V/50Hz
Light: 3000K/6500K
Luminance: 2100lm
HSCS: 0.9
Color rendering index (CRI): >85
IP: 44
Warranty: 2 years', 'unit' , '18.99', '199', 4)
GO

INSERT INTO [Order] VALUES
(1, 1, '11-4-2023', '4'),
(2, 1, '11-4-2023', '3'),
(3, 2, '10-4-2023', '4')
GO

INSERT INTO Order_detail VALUES
(1, 2, '10.55', '2'),
(2, 1, '16.55' , '1'),
(3, 3, '15.55', '1')
GO

select * from Customer
select * from [Admin]
select * from Product
select * from [Order]
select * from Order_detail
