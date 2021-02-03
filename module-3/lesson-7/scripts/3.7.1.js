const buttons = document.querySelectorAll ('button .selection');

const allImages = document.querySelectorAll ('main .image-selector .images');

function toggleImages(dataClass) {
    if ( dataclass==='all') {

        allImages.forEach(function(image){

            image.style.display='flex';


        });
    } else {
        allImages.forEach(function (image){

            if(image.dataset.class===dataClass){

                image.style.display='flex';

            } else{
                image.style.display='none';
            }

        });
    
    }

}

buttons.forEach(function(button){
    button.addEventListener('click', function(){

        toggleImages(button.dataset.class);
    });
});
