CREATE TABLE `Product(s) Order`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `Customer_id` INT NOT NULL
);
CREATE TABLE `Customer`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` TEXT NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `phone_number` INT NOT NULL
);
CREATE TABLE `Order_Item`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `Order_id` BIGINT NOT NULL,
    `Product_id` BIGINT NOT NULL,
    `Quantity` BIGINT NOT NULL
);
CREATE TABLE `Product`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `Name` VARCHAR(255) NOT NULL,
    `Brand` TEXT NOT NULL,
    `Description` VARCHAR(255) NOT NULL,
    `Category` VARCHAR(255) NOT NULL,
    `Price` BIGINT NOT NULL,
    `In_stock` BIGINT NOT NULL,
    `Rating` BIGINT NOT NULL
);
ALTER TABLE
    `Order_Item` ADD CONSTRAINT `order_item_quantity_foreign` FOREIGN KEY(`Quantity`) REFERENCES `Product(s) Order`(`Customer_id`);
ALTER TABLE
    `Product(s) Order` ADD CONSTRAINT `product(s) order_id_foreign` FOREIGN KEY(`id`) REFERENCES `Customer`(`id`);
ALTER TABLE
    `Order_Item` ADD CONSTRAINT `order_item_order_id_foreign` FOREIGN KEY(`Order_id`) REFERENCES `Product`(`id`);
ALTER TABLE
    `Order_Item` ADD CONSTRAINT `order_item_id_foreign` FOREIGN KEY(`id`) REFERENCES `Product(s) Order`(`id`);