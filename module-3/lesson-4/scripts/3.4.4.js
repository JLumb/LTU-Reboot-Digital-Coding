var favouriteRecipe = {

    recipeTitle:'Lasagna',
    servings: 4,
    ingredients: [
    '4x Pasta sheets', 
    '500g Mince',
    '600g tomato sauce',
    '300G cheese'
],
    directions: [
        'make sauce',
        'layer pasta',
        'melt cheese',
    ],
}

var ingredients = favouriteRecipe.ingredients;

for(var index= 0; index<ingredients.length; index++) {
    
}

var directions = favouriteRecipe.directions;

for ( var index=0; index<directions.length; index++) {
    console.log(directions)
}