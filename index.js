const loadUserBtn = document.getElementById('loadUserBtn');
loadUserBtn.addEventListener("click", function() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data));    
});

const displayUsers = (users) => {
    const userConatiner = document.getElementById('userList');
    for (const user  of users) {
    const li = document.createElement("li");
    li.innerText = user.name;
    userConatiner.appendChild(li);        
    }

}