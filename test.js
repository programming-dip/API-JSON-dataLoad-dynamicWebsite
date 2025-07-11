const num1 = 10;
const num2 = 20;
const result = num1+num2;

const handleUser = async () =>{
    try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    console.log(result);
    console.log("hello");
    }
    catch {
        console.log("An error found");
    }
}

handleUser();
