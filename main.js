"use sttrict";

(function () {
    // Local storage
    const storage = {
        setItem(key, value) {
            localStorage.setItem(key, JSON.stringify(value))
        },

        getItem(key) {
            return JSON.parse(localStorage.getItem(key))
        },
    }
    
    if (!storage.getItem('users')){
        storage.setItem('users', users)
    }
    // Create Table
    function createTable(){
        const div = document.querySelector("#container")
        const table = document.createElement('table')
        div.innerHTML = ''
        div.appendChild(table);
        createTableHead()
        createTableBody()
    }

    // Create Table Head
    function createTableHead(){
        const thead = document.createElement('thead')
        thead.innerHTML =`
            <tr>
                <th colspan="3">Таблиця користувачів</th>
            </tr>
            <tr>
                <th width=100px>first name</th>
                <th width=100px>last name</th>
                <th>email</th>
            </tr>`
        thead.classList = 'table_head'
        document.querySelector("table").appendChild(thead);
    }

    // Create Table Body
    function createTableBody(){
        const dataUsers = storage.getItem('users')
        const tbody = document.createElement('tbody')
        for (let i of dataUsers){
            const tr = document.createElement('tr')
            tr.innerHTML = `
                <td id='name'>${i.first_name}</td>
                <td>${i.last_name}</td>
                <td>${i.email}</td>`
            tbody.appendChild(tr)
        }
        tbody.classList = 'table_body'
        document.querySelector("table").appendChild(tbody); 

        const usersDataBody = document.querySelector(".table_body"); 

        usersDataBody.onclick = function (event) { 
            event.target.parentElement.classList.toggle('row')
        }

        usersDataBody.ondblclick = function (event) {
            nameUser = event.target.parentElement.querySelector('#name')
            alert(nameUser.innerHTML)
        }  
    }

    createTable()
    
    // Add user to table
    const form = document.querySelector('#add-user-form')
    form.onsubmit = function (event){
        event.preventDefault();

        const id = 10
        const first_name = this.first_name.value;
        const last_name = this.last_name.value;
        const email = this.email.value;

        users.push({
            
            first_name,
            last_name,
            email
        })
        storage.setItem('users', users)
        createTable()

    }

}) ()