function greet(name , lastName){
    console.log('Hello ' + name  + ' ' + lastName);
}
greet('Ken', 'Mosh');

const message = 'This is my first message'
console.log(typeof 'This is my first message');
console.log(message.length);
console.log(message[0]);
console.log(message[4]);
console.log(message.includes('my'));
console.log(message.includes('not'));

function happyBirthday(username, age){
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${username}!`);
    console.log("Happy Birthday to you!");
    console.log(`You are ${age} years old`);
    
}

happyBirthday("Felix", 27);
