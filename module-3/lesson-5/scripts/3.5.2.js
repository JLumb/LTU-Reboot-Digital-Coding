function shoppingCartTotal (array) {

    let totalPrice = 0;

    for (let index=0; index < array.length; index++) {

        //console.log (array[ index ].quantity);

        totalPrice = totalPrice + array [ index ].price * array [index].quantity;
    }

    return totalPrice.toFixed(2);

}

console.log ("Your cart total is £" + shoppingCartTotal (shoppingCart));


function foodDiscount (array) {

    let totalprice =0;
    //create variable inside the fuction called totalprice

    //loop through each item in the array and add the value of the item to the totalprice, remembering to account for the quanitity.

    for ( let index = 0; index < array.length; index++ ) {

        if ( arr[index].type === 'food') {

            totalprice = totalprice + (array[index].price - discount) * array[index].quantity;
        } 

        else {
            totalprice=totalprice + (array[index].price*array[index].quanitity);
        }

        return totalprice.toFixed(2);
    }
}