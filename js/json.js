function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data))
}

function displayUsers(data) {
    const ul = document.getElementById('users');

    for (const user of data) {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = `name : ${user.name} email: ${user.email}`;
        ul.appendChild(li);
        // console.log(user.name);
    }
}



function addAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'Post',
        body: JSON.stringify({
            title: 'My new post',
            body: 'This is my posts',
            userId: 1
        }),
        header: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(res => res.JSON())
        .then(data => console.log(data))
}