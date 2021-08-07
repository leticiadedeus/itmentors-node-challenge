var getUserSync = function(id){

    var arrNames = [
        {id: '1', name: 'Leticia'},
        {id: '2', name: 'Daniel'},
        {id: '3', name: 'Rafael'},
        {is: '4', name: 'André'}
    ];

    var result = arrNames.filter(function(element){
        return element.id == id
    })[0];
    
    var resultName = result ? result.name : 'Unknown'

var start = new Date().getTime();

console.log('Starting call user 1');
var user1 = getUserSync('3');
console.log('user1', user1)

console.log('Starting call user 2');
var user2 = getUserSync('1');
console.log('user2', user2)

var end = new Date().getTime();

var final = end - start;

console.log(`The time of the execution was ${final}`);
    return Promise.resolve({ name: resultName })

}


/* 10 seconds of running */
