const fs = require('fs');

if (fs.existsSync('./public')) {
  process.env.NODE_ENV = 'production';
  process.env.databaseUri = 'mongodb://rbowman:Kingleo7!@ds117093.mlab.com:17093/drone-club';     // Databse URI and database name
  process.env.databaseName = 'production database: angular-2-app'; // Database name
} else {
  process.env.NODE_ENV = 'development';
  process.env.databaseUri = 'mongodb://localhost:27017/drone-blog'; // Databse URI and database name
  process.env.databaseName = 'development database:drone-blog'; // Database name
}
