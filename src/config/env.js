//require('dotenv').config();
import env from 'dotenv'
//const {get} = require('env-var');

//import {get} from 'env-var' 

import envvar from 'env-var' 
env.config()
export const envs = {

    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').required().asString()

   

}
console.log(envs)
/* module.exports = {
    envs
}*/