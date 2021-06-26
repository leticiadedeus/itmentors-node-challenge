const os = require('os');
var user = os.userInfo();

const product = require('./product');

const yargs = require('yargs');
const { title } = require('process');

console.log(`My application ${user.username}`);

let commands = yargs.argv;

let br = '----';

productsNames = []

var productsList = product.ListAll();

productsList.forEach(prod => {
    thisProd = prod.name
    var thisProdLow = thisProd.toLowerCase()
    productsNames.push(thisProdLow);
    });

switch (process.argv[2]) {
    
    case 'create':

        newProduct = product.SetProduct(
            commands.title,
            commands.description,
            commands.price,
            commands.stock
        )

        var titleLow = commands.title.toLowerCase()
        
        if (productsNames.includes(titleLow) == false){
            
            product.AddProduct(newProduct, () => {
                console.log(`product created ${commands.title}`);
                productsNames.push(titleLow)
                console.log(productsNames);
            });

        }else{

            console.log('Already exists')

        }

        break;
        
    case 'read':
        
        var productsList = product.GetProduct(process.argv[3]);

        for (let index = 0; index < 5; index++) {
            br += br
        }

        console.log(br);

        productsList.forEach(prod => {
            console.log(prod.id);
            console.log(prod.name);
            console.log(prod.price);
            console.log(prod.stock);
            console.log(br);
        });

        break;

    case 'list':

        var productsList = product.ListAll();

        console.log(br);

        productsList.forEach(prod => {
            console.log(prod.id);
            console.log(prod.name);
            console.log(prod.price);
            console.log(prod.stock);
            console.log(br);
        });

        break;

    case 'update':

    case 'delete':
        
    default:
        break;

}


// non repeat 


// Updating


// Deleting