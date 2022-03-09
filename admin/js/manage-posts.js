
window.onload = function () {
    fetchAllPosts();
}

async function fetchAllPosts() {
    try {
        const response = await fetch('http://localhost:5000/posts')
        const posts = await response.json();
        console.log(posts);

        let html = ''
        for (let post of posts) { // need to work on formatting
            html += ` 
                <li class="list-group-item">
                    <p>
                    ${post.title}<br> 
                    by ${post.author} <br>
                    <span class="date">${post.date}</span> <br><br>
                    ${post.content} <br><br>
                    Tags: ${post.tags} 
                    </p>
                    
                    <div>
                        <a href="update-post.html?id=${post._id}">Update</a> |
                        <a href="#" class="delete-post-link" data-post-id="${post._id}">Delete</a> 
                    </div>
                </li>
            `
        }

        document.getElementById('post-list').innerHTML = html;
    } catch(error) {
        console.log(error)
    }

    // function deletePost
    const deletePostLinks = document.getElementsByClassName('delete-post-link');

    for (let link of deletePostLinks) {
        link.addEventListener('click', async function(e) {
            e.preventDefault();

            const postId = e.target.dataset.postId

            try {
                await fetch(`http://localhost:5000/posts/${postId}`,{
                    method: 'DELETE', 
                })
                
                e.target.parentNode.parentNode.remove(); // removing post without reloading page
            } catch (error) {
                console.log(error)
            }
        })
    }

}
