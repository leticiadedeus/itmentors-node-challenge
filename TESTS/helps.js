module.exports.HelpCreate = () => {
    
    var yargs = require("yargs")(['--info'])
    .usage('Create a new product in the database')
    .help('help')
    .argv

}

module.exports.HelpList = () => {
    var helpList = require('yargs')(process.argv[2])
        .option('help', {
            alias: 'h',
            describe: 'Shows user the entire list of products',
            type: 'string'
        })
        .argv
    ;
}

module.exports.HelpRead = () => {
    var readHelp = require('yargs')(process.argv[3])
        .option('help', {
            alias: 'h',
            describe: 'Shows user the product they are looking for',
            choices: 'name',
            type: 'string'
        })
        .argv
    ;
}