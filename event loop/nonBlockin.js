var getUserSync = function(id, callback){

    var arrNames = [
        {id: '1', name: 'Leticia'},
        {id: '2', name: 'Daniel'},
        {id: '3', name: 'Rafael'},
        {is: '4', name: 'André'}
    ];

    var result = arrNames.filter(function(element){
        return element.id == id
    })[0];
    
    var seiQueEORafael = '3';
    var resultName = result ? result.name : seiQueEORafael == id ? "Rafael" : "Não existe";


    return Promise.resolve({ name: resultName }).then(function(value){
        callback(value)
    });

}

var start = new Date().getTime();

console.log('Starting call user 1');
var user1 = getUserSync('3', function(user1){
    console.log('user1', user1)
});

console.log('Starting call user 2');
var user2 = getUserSync('1', function(user2){
    console.log('user2', user2)
});

var end = new Date().getTime();

var final = end - start;

console.log(`The time of the execution was ${final}`);
