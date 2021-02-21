// Kilomete To meter 
function kilometerToMeter(kilometer) {
    var meter = 10000 * kilometer; //any given kilometer value will be multiplied by 1000 to convert it into Mete
    return meter;
}
var result = kilometerToMeter(20);
console.log(result);

// Calculating total budget
function budgetCalculator(watch, phone, laptop) {
    // multiplying quantity and price
    var expense1 = watch * 50;
    var expense2 = phone * 100;
    var expense3 = laptop * 500;
    var totalExpense = expense1 + expense2 + expense3; // Now adding them together
    return totalExpense;
}
var total = budgetCalculator(3, 2, 4); // input the total number of watch, phone and laptop I want to buy
console.log(total);

// Hotel Cost Management

function hotelCost(numberOfDays) {
    var cost = 0;
    if (numberOfDays <= 10) {
        var Cost = numberOfDays * 100;
    }
    else if (numberOfDays <= 20) {
        var firstTrip = 10 * 100;
        var remaining = numberOfDays - 10;
        var secondTrip = remaining * 80;
        var cost = firstTrip + secondTrip;

    }
    else {
        var firstTrip = 10 * 100;
        var secondTrip = 20 * 80;
        var remaining = numberOfDays - 20;
        var thirdTrip = remaining * 50;
        var cost = firstTrip + secondTrip + thirdTrip;
    }
    return cost;
}
var totalCost = hotelCost(40);
console.log(totalCost);


// Friend with the longest name

function megaFriend(friendsName) {
    var tempLongestName = friendsName[0];

    for (var i = 0; i < friendsName.length; i++) {
        if (typeof (friendsName[i]) !== "string") {
            return console.log("Enter a valid name as array element");
        }
        else if (friendsName[i].length > tempLongestName.length) {
            tempLongestName = friendsName[i];
        }
    }
    return tempLongestName;
}

var longestName = megaFriend(["Monish", "Tuhin", "Israt", "Subhasis", "Rocky"]);
console.log(longestName);

