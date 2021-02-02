let div = document.querySelectorAll ('div') [0];

let newParagraph = document.createElement ('p');
let newTextNode = document.createTextNode('New text node');

    newParagraph.appendChild(newTextNode);
    div.appendChild (newParagraph);