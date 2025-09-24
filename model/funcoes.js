/***********************************************************************************************************************************************************************************
 * Objetivo : Arquivo responsável pelas funções para criar API de contatos whatsapp
 * Data: 24/09/2025
 * Autor: Aline Alves de Souza
 * Versão 1.0 
 **********************************************************************************************************************************************************************************/
//import do arquivo de contatos
const dados = require('./contatos.js')
// mensagem que vai aparecer caso haja algum erro.
const MESSAGE_ERROR = {status: false, statuscode: 500, development: 'Aline Alves de Souza'}


//Retorna tudo que encontrar
const getAllData = function(){
//Padrão de retorno do json
let message= {status: true, statuscode:200, development: 'Aline Alves de Souza', data: []}
dados.contatos["whats-users"].forEach(function(item){
    message.data.push(item)

})
if(message)
return message;
else
MESSAGE_ERROR

}
//console.log(getAllData())



const getA