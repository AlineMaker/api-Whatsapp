/***********************************************************************************************************************************************************************************
 * Objetivo : Arquivo responsável pelas funções para criar API de contatos whatsapp
 * Data: 24/09/2025
 * Autor: Aline Alves de Souza
 * Versão 1.0
 **********************************************************************************************************************************************************************************/

//import do arquivo de contatos
const dados = require('./contatos.js');

// Listar todos os dados de usuário independente do número


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

//Listar dados da conta do profile do usuário

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
    let profile = dados.contatos['whats-users'].find(function (item) {
      return item.number === number;
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
//console.log(getProfileUser('11987876567'));
//console.log(getProfileUser('1194457796'));
//******************************************************************************************************************************* */


//Listar dados de contato para cada usuário


function getContactsUser(userNumber) {
  const message = { status: true, statuscode: 200, usuario: '', numero: '', contatos: '' };
  const user = dados.contatos['whats-users'].find(
    item => item.number === userNumber
  );
// tirar mensagens
  if (user) {
    message.usuario = user.account;
    message.numero = user.number;
    message.contatos = user.contacts.name;
    return message;
  } else return MESSAGE_ERROR;
}
console.log(getContactsUser('11987876567'));
//console.log(getContactsUser('1194457796'));




//******************************************************************************************************************** */


// Listar todas as mensagens trocadas de uma conta de usuário

function getContactsUser(userNumber) {
  const message = { status: true, statuscode: 200, usuario: '', numero: '', contatos: '' };
  const user = dados.contatos['whats-users'].find(
    item => item.number === userNumber
  );
// tirar mensagens
  if (user) {
    message.usuario = user.account;
    message.numero = user.number;
    message.contatos = user.contacts;
    return message;
  } else return MESSAGE_ERROR;
}
//console.log(getContactsUser('11987876567'));
//console.log(getContactsUser('1194457796'));

//************************************************************************************************** */

//Listar uma conversa de um usuário e um contato 



// Deve obrigatoriamente encaminhar a referência para encontrar a conversa via Query e não via parâmetro)

function getContactMessage(contactNumber) {
  // Objeto base que será retornado se o contato for encontrado
  const message = { status: true, statuscode: 200, usuario: '',numero:'', contato: '', number: '', mensagens: '' };

  // Percorre cada usuário dentro do array "whats-users"
  for (const user of dados.contatos['whats-users']) {
    
    // Procura o contato dentro da lista de contatos de cada usuário
    const contact = user.contacts.find(item => item.number === contactNumber);

    // Se encontrar o contato, preenche o objeto de retorno com os dados
    if (contact) {  
      message.usuario = user.account  
      message.numero = user.number 
      message.contato = contact.name;          // Nome do contato
      message.number = contact.number;
      message.mensagens = contact.messages;    // Mensagens do contato
      
      return message;                           // Retorna o objeto completo
    }
  }

  // Se nenhum contato for encontrado, retorna um erro padrão
  return MESSAGE_ERROR;
}
//console.log(getContactMessage('269999799601'))
//console.log(getContactMessage('26999999920'))
////******************************************************************************************8 */

