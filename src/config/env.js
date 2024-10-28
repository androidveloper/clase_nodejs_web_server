require('dotenv').config();

const {get} = require('env-var');

const envs = {

    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').required().asString()

   

}
console.log(envs)
module.exports = {
    envs
}