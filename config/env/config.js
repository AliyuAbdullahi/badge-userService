// module.exports = require('./env/' + process.env.NODE_ENV + '.js');
module.exports = function () {
    return {
        name:'user',
        db: {
            connection: {
                host: 'localhost',
                port: '5432',
                user: 'abdul',
                password: 'eni',
                database: 'mydb'
                }
            },

            test: {
                client: 'pg',
                connection: {
                    host: 'localhost',
                    user: 'lekan',
                    password: 'abdullahi',
                    database: 'mydb'
                }
            },
            production: {
                host:'ec2-54-235-80-55.compute-1.amazonaws.com',
                database:'d26mmsu5qgsn5u',
                user:'duazjzqaumwqvu',
                port:'5432',
                password:'uAdCeiursAYjhnNsr39d88oTHZ'
            },
        secret: '@I651nyI#',
        port: process.env.PORT || 4000
    };
};
