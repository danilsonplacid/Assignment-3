
// https://github.com/danilsonplacid/Assignment-3

// kilometerToMeter


function kilometerToMeter(convertMeter){
    var meter = convertMeter*1000;
    return meter;
}



// budgetCalculator 


function budgetCalculator(watch,mobile,laptop){
    var watchPrice = 50;
    var mobilePrice = 100;
    var laptopPrice = 500;

    var watch = watchPrice*3;
    var mobile = mobilePrice*5;
    var laptop = laptopPrice*10;
    total = watch + mobile + laptop;
    return total;
}


//  hotelCost 


function hotelCost (day){
    var costAmount = 0;
    if (day <=10) {
        costAmount = days*100;
    }
    else if (day <=20){
        var firstTenDays = 10 * 100;
        var remaining = day - 10;
        var secondTenDays = remaining * 80;
        hotelCost = firstTenDays + secondTenDays;

    }
    else {
        var firstTenDays = 10*100;
        var secondTenDays = 10*80;
        var remaining = day - 20;
        var thirdTendays = remaining *50;
        hotelCost = firstTenDays + secondTenDays + thirdTendays;

    }
    return hotelCost;
}



// megaFriend 

    function megaFriend(friendsName) {
        var max = friendsName[0];
        for (var i = 0; i < friendsName.length; i++) {
            var element = friendsName[i];
            if (max.length < element.length) {
                max = element;
            }
        }
        return max;
        
    }
    
    
    
    



