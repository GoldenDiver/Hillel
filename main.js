"use sttrict"

const usersDataHeader = document.querySelector("#container");

usersDataHeader.innerHTML = `
<thead class='table_head'>
    <tr>
        <th colspan="3">Таблиця користувачів</th>
    </tr>
    <tr>
        <th width=100px>first name</th>
        <th width=100px>last name</th>
        <th>email</th>
    </tr>
</thead>
<tbody class='table_body'></tbody>`

const usersDataBody = document.querySelector(".table_body");

for (let i in users){
    usersDataBody.innerHTML += `
    <tr>
        <td id='name'>${users[i].first_name}</td>
        <td>${users[i].last_name}</td>
        <td>${users[i].email}</td>
    </tr>`
}

usersDataBody.onclick = function (event) { 
    event.target.parentElement.classList.toggle('row')
}

usersDataBody.ondblclick = function (event) {
    alert(event.target.parentElement.querySelector('#name').innerHTML)
}





// function reverce (array){
//     const resArray = [];
//     for (let i in array){
//         resArray.push(array[array.length - 1 - i]);
//     }
//     return resArray;
// }

// btn.onclick = function (){
//     const arr = [];
//     for (let i in userArr.value){
//         if ((userArr.value[i] == ',') || (userArr.value[i] == ' ')) {
//             continue;
//         } else {
//             arr.push(userArr.value[i]);
//         }
//     }
    
//     console.log(reverce(arr));
//     resultUser.innerHTML = reverce(arr);
//     resultUser.style.color = "green";
// }