const product = require('./product');
const yargs = require('yargs');
let commands = yargs.argv;
const jason = req('./database/data.json')
productsNames = []


var productsList = product.ListAll();
productsList.forEach(prod => {
    thisProd = prod.name
    productsNames.push(thisProd);
    });


switch (process.argv[2]) {
    
    case 'create':

        newProduct = product.SetProduct(
            commands.title,
            commands.description,
            commands.price,
            commands.stock
        )
        
        if (productsNames.includes(commands.title) == false){
            
            product.AddProduct(newProduct, () => {
                console.log(`product created ${commands.title}`);
                productsNames.push(commands.title)
                console.log(productsNames);
            });

        }else{

            console.log('Already exists')

        }

        break;
    
    case 'update':
        
        console.log(productsList)

        let ProductUp = productsList.find((p) => {
            return p.name === process.argv[3];
            });

        /*newInfo = product.SetProduct(
            commands.title,
            commands.description,
            commands.price,
            commands.stock
        )*/

        ProductUp.name = commands.title
        ProductUp.description = commands.description
        ProductUp.price = commands.price
        ProductUp.stock = commands.stock
        
        productsListUp = product.ListAll()
        console.log(productsListUp)
        
        break;

    case 'delete':

        let index = productsList.findIndex((p) => {
            return p.name === process.argv[3];
            });

        console.log(index)

        delete jason[index]
        
        console.log(productsList)

        break;

}