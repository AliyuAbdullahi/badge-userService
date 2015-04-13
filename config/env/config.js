// module.exports = require('./env/' + process.env.NODE_ENV + '.js');
module.exports = (function () {
    return {
        db: {
            development: {
                host: 'localhost',
                port: '5500',
                user: 'lekan',
                password: 'abdullahi',
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
            // production: {
            //     uri: 'mongodb://badge-provider:allahumasedika12@ds045757.mongolab.com:45757/badge-provider',
            //     options: {
            //         user: '',
            //         pass: ''
            //     }
            // }
        // },

        secret: '@I651nyI#',
        port: process.env.PORT || 4000
    };
})();
