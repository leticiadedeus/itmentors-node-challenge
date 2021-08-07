console.log('iniciando product.js');

const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const { help, showHelp } = require('yargs');
const repoFile = './database/data.json';

module.exports.age = 38;

module.exports.AddProduct = (product, callback) => {

    var products = JSON.parse(fs.readFileSync(repoFile));

    products.push(product);

    fs.writeFile(repoFile, JSON.stringify(products), callback);

}



module.exports.ListAll = () => {

    var data = fs.readFileSync(repoFile);

    return JSON.parse(data);

}

module.exports.SetProduct = (title, description, price, stock) => {
    return {
        id: uuidv4(),
        name: title,
        description: description,
        price: price,
        stock: stock
    }
}

module.exports.GetProduct = (name) => {

    var products = JSON.parse(fs.readFileSync(repoFile));

    return products.filter(elem => elem.name === name);

}

module.exports.UpdateProduct = (local, newInfo, callback) => {
    /*var old = JSON.parse(fs.readFileSync(repoFile));*/

    jsn = this.ListAll()

    jsn.splice(local, 1, newInfo);

    fs.writeFile(repoFile, JSON.stringify(jsn), callback)
}

module.exports.DeleteProduct = (delProduct) => {
    delete delProduct 
}


