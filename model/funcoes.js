/***********************************************************************************************************************************************************************************
 * Objetivo : Arquivo responsável pelas funções para criar API de contatos whatsapp
 * Data: 24/09/2025
 * Autor: Aline Alves de Souza
 * Versão 1.0
 **********************************************************************************************************************************************************************************/

//import do arquivo de contatos
const dados = require('./contatos.js');
// mensagem que vai aparecer caso haja algum erro.
const MESSAGE_ERROR = {
  status: false,
  statuscode: 500,
  development: 'Aline Alves de Souza',
};

//Retorna tudo que encontrar
const getAllData = function () {
  //Padrão de retorno do json
  let message = {
    status: true,
    statuscode: 200,
    development: 'Aline Alves de Souza',
    data: [],
  };
  dados.contatos['whats-users'].forEach(function (item) {
    message.data.push(item);
  });
  if (message) return message;
  else MESSAGE_ERROR;
};
//console.log(getAllData());

//******************************************************************************************************************************** */
const getProfileUser = function (number) {
  let message = {
    status: true,
    statuscode: 200,
    development: 'Aline Alves de Souza',
    nome: '',
    nickname: '',
    numero: '',
    foto: '',
    corDeFundo: '',
    inicioConta: '',
    fimConta: '',
  };

  let profile = dados.contatos['whats-users'].find(function (number) {
    return number => item.number === number;
  });

  if (profile) {
    message.nome = profile.account;
    message.nickname = profile.nickname;
    message.numero = profile.number;
    message.foto = profile['profile-image'];
    message.corDeFundo = profile.background;
    message.inicioConta = profile['created-since'].start;
    message.fimConta = profile['created-since'].end;
    return message;
  } else return MESSAGE_ERROR;
};
//console.log(getProfileUser(11987876567));
//******************************************************************************************************************************* */

function getContactsUser(userNumber) {
  const message = { status: true, statuscode: 200, usuario: '', contatos: '' };
  const user = dados.contatos['whats-users'].find(
    item => item.number === userNumber
  );

  if (user) {
    message.usuario = user.account;
    message.contatos = user.contacts;
    return message;
  } else return MESSAGE_ERROR;
}
//console.log(getContactsUser('11987876567'));

//******************************************************************************************************************** */
function getContactMessage(contactNumber) {
  const message = { status: true, statuscode: 200, contato: '', mensagens: '' };
  const contact = dados.contatos['whats-users'].find(
    item => item.number === contactNumber
  );

  if (contact) {
   
    message.contato = contact.name;
    message.mensagens = contact.messages
    return message;
  } else return MESSAGE_ERROR;
}
console.log(getContactMessage('26999999963'));
//****************************************************************************************************************** */