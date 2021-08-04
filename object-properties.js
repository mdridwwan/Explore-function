var computer = {
        price: 2000,
        color: 'silver',
        processor: 'intel i5',
        storage: "132GB"
    }
    // difarent way property change//
    //1st way
computer.price = 18000;
// 2nd way
computer["price"] = 10000;
// 3rd way
var priceProperty = "price";
computer[priceProperty] = 9000;
var computerPrice = computer.price;
console.log(computerPrice);

var storageChange = 'storage';
computer[storageChange] = "520GB";
console.log(computer.storage);

computer.color = 'red';
console.log(computer.color);

computer['processor'] = 'intel i7';
console.log(computer.processor);