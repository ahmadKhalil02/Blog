
window.onload = function () {
    fetchAllPosts();
}

async function fetchAllPosts() {
    try {
        const response = await fetch('http://localhost:5000/posts')
        const posts = await response.json();
        console.log(posts);

        let html = ''
        for (let post of posts) { 
            html += ` 
                    <tr>
                        <td>${post.title}</td>
                        <td>${post.author}</td>
                        <td><span class="date">${post.date}</span></td>
                        <td>${post.tags}</td>
                        <td>
                            <div>
                                <a href="update-post.html?id=${post._id}">Update</a> <br>
                                <a href="#" class="delete-post-link" data-post-id="${post._id}">Delete</a> 
                            </div>
                        </td>
                    </tr>
            `
        }

        document.getElementById('data').innerHTML = html;
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
                
                e.target.parentNode.parentNode.parentNode.remove(); // removing post without reloading page
            } catch (error) {
                console.log(error)
            }
        })
    }

}
