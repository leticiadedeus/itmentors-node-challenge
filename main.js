const os = require('os');
var user = os.userInfo();
const product = require('./product');
const yargs = require('yargs');
const { title } = require('process');
let commands = yargs.argv;

console.log(`My application ${user.username}`);

let br = '----';

productsNames = []

var productsList = product.ListAll();

productsList.forEach(prod => {
    thisProd = prod.name
    var thisProdLow = thisProd.toLowerCase()
    productsNames.push(thisProdLow);
    });

function showProduct (list){
    list.forEach(prod => {
        console.log(prod.id);
        console.log(prod.name);
        console.log(prod.price);
        console.log(prod.stock);
        console.log(br);
    });
}

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
        
        var productElements = product.GetProduct(process.argv[3]);

        for (let index = 0; index < 5; index++) {
            br += br
        }

        console.log(br);

        showProduct(productElements)

        break;

    case 'list':

        console.log(br);

        showProduct(productsList)

        break;

    case 'update':

    case 'delete':
        
    default:
        break;

}
