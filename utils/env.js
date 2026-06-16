require('dotenv').config({
 path: '.env.qa'
});

module.exports = {
 BASE_URL: process.env.BASE_URL
};