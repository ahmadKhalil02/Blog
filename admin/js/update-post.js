fetch('http://localhost:5000/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err)); 

