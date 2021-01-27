function drinkOrder (size,drink) {
    switch (drink) {

        case 'Coke':
            console.log('You have ordered a ' + size +' '+ drink);
            break;


        case 'Fanta':
            console.log('You have ordered a ' + size +' '+ drink);
            break;

        
        case 'Sprite':
            console.log('you have ordered a ' + size +' '+ drink);
            break;

        default:
            console.log('error');
            break;
    }

}


drinkOrder('large', 'Sprite')