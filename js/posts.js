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
                    <h2>${post.title}</h2>
                    <p>
                    by ${post.author}<br>
                    <i class="date">${post.date}</i>
                    </p>
                    <p>${post.content.substring(0, 100)}... <a href="post.html?id=${post._id}">Read more</a></p> <br><br>
                    <p class="taggar">Tags: ${post.tags}</p> 
                </li>
            `
        }

        document.getElementById('post-list').innerHTML = html;
    } catch(error) {
        console.log(error)
    }


}