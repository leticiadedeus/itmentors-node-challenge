const fs = require('fs');
const RepoFile = './produtos/database/data.json'

let productsData = [];

const GetById = (id) => {

    const productsArray = [
        { id: '1', name: 'Tevelisão', features: 
            [ { brand: 'LG', color: 'Black', } ] },
        { id: '2', name: 'Iphone'}
    ]

    return productsArray.filter(prod => prod.id == id)[0];

}

const Insert = (data, callback) => {
    productsData.push(data);
    fs.writeFile(RepoFile, JSON.stringify(productsData), callback);
}

const Init = () => {

    var data = fs.readFileSync(RepoFile);
    console.log(JSON.parse(data))

    productsData = JSON.parse(data);
    console.log('lido com sucesso')

}

const List = () => {
    return productsData
}

module.exports = { Init, GetById, Insert, List } ;