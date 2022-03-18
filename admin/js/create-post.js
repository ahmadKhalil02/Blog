window.onload = function() {
    const form = document.getElementById('create-blog-form');
    form.addEventListener('submit', createPost)
}

async function createPost(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target)
    const JSONString = {
    title: formData.get('title'),
    author: formData.get('author'),
    content: formData.get('content'),
    tags: formData.get('tags'),    
}

try {
    const response = await fetch('http://localhost:5000/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(JSONString),
    })

    if (!response.ok) {
        throw new Error('Something went wrong')
    }

    window.location.replace('index.html')
} catch(error) {
    console.log(error);
};

// console.log(JSON.stringify(JSONString));

};