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
                host:'ec2-54-197-241-64.compute-1.amazonaws.com',
                database:'dctjbkild2gpe3',
                user:'vqjcwsatcelafk',
                port:'5432',
                password:'PDPpqOWfxrimRf3G9e5ybTREHk'
            },
        secret: '@I651nyI#',
        port: process.env.PORT || 4000
    };
};
