const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const data = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const user = {
    __filename: "../data/usersDataBase.json",
    getData: function(){
        return fs.readFileSync(this.__filename, 'utf-8');
    },
    generateId: () =>{
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if(lastUser){
            return lastUser.id + 1
        }
        return 1;

    },
    create: function(usersData){
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...usersData
        }
        allUsers.push(newUser)
        fs.writeFileSync(this.__filename, JSON.stringify(allUsers,null,""));
        return newUser;
    },
    delete: (id) => {
        let allUsers = this.findAll();
        let findAllUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.__filename, JSON.stringify(allUsers,null,""))
        return true;
    },
    getAll: () => {
        return data;
    },
    findAll: () =>{
        return this.getData
    },
    modifiedAll: (data)=>{
        fs.writeFileSync(usersFilePath, JSON.stringify(data))
    },
    findById: (id)=>{
        return  data.find(elem => String(elem.id) === id)
    },
    findByEmail: (email)=>{
        return  data.find(elem => elem.email === email)
    },
    login: (email, password) =>{

    }
}

module.exports = user;