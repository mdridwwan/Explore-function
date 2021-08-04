// var i = 0;
// while (i < 10) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
//     i++;
// }
var numbers = [10, 20, 49, 50, 39, 349, 90, 199, 300, 290, 70, 101]
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 90) {
        continue;
    }

    console.log(number);
}
//answer: 10 20 49 50 39 90 70;