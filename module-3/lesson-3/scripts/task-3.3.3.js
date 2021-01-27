function calculator (number1, number2, operator) {

    var result = ''

    switch(operator) {

        case '/' :
            result = number1 / number2;
            console.log(number1 / ' / ' + number2 + ' = ' + result );
            break;

        case '+' :
            result = number1 + number2;
            console.log(number1 + ' + ' + number2 + ' = ' + result );
            break;

        
        case '-' :
            result = number1 - number2;
            console.log(number1 - ' - ' + number2 + ' = ' + result );
            break;

}


}


calculator (5, 5, '+' )