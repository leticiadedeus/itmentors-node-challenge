const product = require('./product');
const yargs = require('yargs');
let commands = yargs.argv;
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

}