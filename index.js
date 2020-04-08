let contacts = require('./contacts');
//let list = contacts.listContacts();
//let get = contacts.getContactById(id = 3)

const argv = require('yargs').argv;

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      contacts.listContacts()
      break;

    case 'get':
      contacts.getContactById(id)
      break;

    case 'add':
      contacts.addContact(name, email, phone);
      break;

    case 'remove':
      contacts.removeContact(id);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);

//contacts.getContactById(3);
//contacts.addContact('John Dow', 'john.dov@mail.com', '(050) 333-2344' );
// contacts.removeContact(1);

//console.log(contacts.contactsPath);