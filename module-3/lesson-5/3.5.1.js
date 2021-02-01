function shoppingCartTotal (array) {

    let totalPrice = 0;

    for (let index=0; index < array.length; index++) {

        //console.log (array[ index ].quantity);

        totalPrice = totalPrice + array [ index ].price * array [index].quantity;
    }

    return totalPrice.toFixed(2);

}

console.log ("Your cart total is £" + shoppingCartTotal (shoppingCart));



