window.onload = function () {
    console.log(window.location.search);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams.get('id'));

    fetchPost(urlParams);
  

    async function fetchPost(urlParams) {
        try {
            const response = await fetch(`http://localhost:5000/posts/${urlParams.get('id')}`)
            const post = await response.json();
            console.log(post);

            let html = ''
            html += ` 
                <div class="list-group-item">
                    <h3>${post.title}</h3><br>
                    <span class="date">Author: ${post.author} <br> Date: ${post.date} </span><br>
                    
                    <div class="flexbox"><p><br>${post.content}<br>

                    <p class="taggar">Tags: ${post.tags}</p> 
                    
                </div>
            `
            
            document.getElementById('post-list').innerHTML = html;
        } catch (error) {
            console.log(error)
        }
    }
};
