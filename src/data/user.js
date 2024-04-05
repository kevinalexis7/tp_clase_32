const crypto = require('crypto')

function User(name,color, email, age ) {
    this.id = crypto.randomUUID();
    this.name = name.trim();
    this.color = color;
    this.email = email.trim();
    this.age = age;

}

module.exports = User