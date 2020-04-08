const path = require('path');
const fs = require('fs');
const shortid = require('shortid');
const contactsPath = path.join(__dirname, 'db', 'contacts.json');

// const readContacts = () => {
//   fs.readFile(contactsPath, 'utf-8', (err, content) => {
//     if (err) {
//       throw err;
//     }
//     JSON.parse(content);
//     console.log(content);
//   });
// };

// TODO: задокументировать каждую функцию
const listContacts = () => {
  fs.readFile(contactsPath, 'utf-8', (err, content) => {
    if (err) {
      throw err;
    }
    const contacts = JSON.parse(content);
    contacts.map(elem =>
      console.log(elem.id, elem.name, elem.email, elem.phone, '\n')
    );
  });
};

const getContactById = contactId => {
  fs.readFile(contactsPath, 'utf-8', (err, content) => {
    if (err) {
      throw err;
    }
    const contacts = JSON.parse(content).find(elem => elem.id === contactId);
		if (contacts) {
			const { id, name, email, phone } = contacts;
			console.log(id, name, email, phone, '\n');
		} else {
			console.log('Контакт с данным id не найден!')
		}
  });
};

const removeContact = (contactId) => {
	fs.readFile(contactsPath, 'utf-8', (err, content) => {
    if (err) {
      throw err;
    }
		const contacts = JSON.parse(content);
		const newContacts = contacts.filter(elem => elem.id !== contactId && elem.id !== undefined);
		if(newContacts) {
			createJson = JSON.stringify(newContacts);
			fs.writeFile(contactsPath, createJson, err => {
				if(err) {
					throw err;
				}
				console.log('Контакт удален из файла')
			});
		} else {
			console.log('Контакт с данным id не найден!');
		}


	})
  
}

const addContact = (name, email, phone) => {
	let createJson;
  fs.readFile(contactsPath, 'utf-8', (err, content) => {
    if (err) {
      throw err;
    }
		const contacts = JSON.parse(content);
		const newContacts = [...contacts, {id: contacts.length+1, name, email, phone}];
		createJson = JSON.stringify(newContacts);
		
		fs.writeFile(contactsPath, createJson, err => {
			if(err) {
				throw err;
			}
			console.log('контакт записан в файл')
		});
	});
}

module.exports = {
	contactsPath,
  listContacts,
	getContactById,
	addContact,
	removeContact,
};
