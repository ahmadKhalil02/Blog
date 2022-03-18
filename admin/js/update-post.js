window.onload = function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    fetchPost(urlParams);
    updatePostEvent(urlParams);
    async function fetchPost(urlParams) {
        try {
            const response = await fetch(`http://localhost:5000/posts/${urlParams.get('id')}`)
            const post = await response.json();
            document.getElementById('title-textarea').value = post.title;
            document.getElementById('author-textarea').value = post.author;
            document.getElementById('content-textarea').innerText = post.content;
            let html = ''
            if (Array.isArray(post.tags)) {
                for (var i = 0; i < post.tags.length; i++) {
                    html += `
                                <option selected="selected">${post.tags[i]}</option>        
                    `
                }
            } else {
                tags = "";
            }
            document.getElementById('tag-options').innerHTML = html;
        } catch (error) {
            console.log(error)
        }
    }
    function updatePostEvent(urlParams) {
        const form = document.getElementById('update-post-form');
        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            const formData = new FormData(e.target) 
            console.log(formData);
            const JSONString = {
                title: formData.get('title'),
                author: formData.get('author'),
                content: formData.get('content'),
                tags: formData.get('tags')
            };
            console.log(JSON.stringify(JSONString));
            try {
                const response = await fetch(`http://localhost:5000/posts/${urlParams.get('id')}`, {
                    method: 'PATCH', // patching to overwrite!
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(JSONString),
                })
                if (!response.ok) {
                    throw new Error('Something went wrong')
                }
                window.location.replace('index.html') // redirecting to index.html
            } catch (error) {
                console.log(error);
            }
        })
    }
};