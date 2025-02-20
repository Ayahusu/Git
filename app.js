const data = fetch("https://jsonplaceholder.typicode.com/todos/1");
data.then((response) => response.json()).then((json) => console.log(json));
