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