fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => displayUsers(data));

const displayUsers = (users) => {
    console.log(users[0]);
}

