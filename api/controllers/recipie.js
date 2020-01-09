let recipieList = [
    {
        id: 1,
        isPublic: true,
        name: 'Burger',
        description: 'Put meat in bun',
        ingredients: [
            {
                name: 'Beef',
                amount: 1
            },
            {
                name: 'Salad',
                amount: 1
            }, 
        ]
    },
    {
        id: 2,
        isPublic: false,
        name: 'Pizza',
        description: 'Put topping on base',
        ingredients: [
            {
                name: 'Cheese',
                amount: 1
            },
            {
                name: 'Sauce',
                amount: 1
            }, 
        ]
    }
]

module.exports.getRecipes = (req, res) => {

    let responseRecipieList = [];
    if(recipieList.length){
        responseRecipieList = recipieList.filter(({isPublic}) => isPublic)
    }
    return res.json(responseRecipieList).status(200)

}

module.exports.postRecipes = (req, res) => {
    let newRecipe = req.body;
    newRecipe.id = recipeList.length + 1;
    newRecipe.isPublic = true;
    recipeList.push(newRecipe);

    return res.status(204).end();
}

module.exports.putRecipes = (req, res) => {
    let id = req.swagger.params.recipeId.value;
    for (let i = 0; i < recipeList.length; i++) {
        if (recipeList[i].id === id) {
            recipeList[i] = req.body;
            return res.status(204).end();
        }
    }
    return res.status(404).end();
}

module.exports.deleteRecipe = (req, res) => {
    let id = req.swagger.params.recipeId.value;
    for (let i = 0; i < recipeList.length; i++) {
        if (recipeList[i].id === id) {
            recipeList.splice(i, 1);
            return res.status(204).end();
        }
    }
    return res.status(404).end();
}


