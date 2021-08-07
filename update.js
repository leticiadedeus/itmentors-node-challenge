const yargs = require('yargs');
let commands = yargs.argv;
const product = require('./product');

var projects = product.ListAll()

console.log("ANTES DO UPDATE")
console.log(projects)


let project = projects.find((p) => {
return p.name === process.argv[2];
});

let index = projects.findIndex((p) => {
    return p.name === process.argv[2];
    });

console.log(index)

upProduct = product.SetProduct(
    commands.title,
    commands.description,
    commands.price,
    commands.stock
)

product.UpdateProduct(index, upProduct, () => {
    console.log("DEPOIS DO UPDATE")
    console.log(projects)
})

/*project.name = commands.title
project.description = commands.description
project.price = commands.price
project.stock = commands.stock*/






/*delete projects[0]

console.log("APÓS DELETE")

console.log(projects)*/
