//console.log('hola mundo')
//funcion agnostica autoconvocada
//y se le agrega async
//funcion agnostica autoconvocada
//agnostica porque no tiene nombre
//autoconvocada por la ejecutamos con los parentesis

//const {envs} =  require('./config/env')
import {envs}   from './config/env.js' 

import { startServer } from './server/server.js'
//const { startServer } =  require('./server/server')

const main=() => {

    //console.log(envs)
    startServer
    ({ 
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH

    });
}

(async() => {

   main()
} )()

