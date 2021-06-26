


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