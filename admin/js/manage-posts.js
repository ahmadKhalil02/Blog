window.onload = function(){
    fetchallBlogs();
}

async function fetchallBlogs(){
    try{
        const response = await fetch ('http://localhost:5000/posts')
        const blogs = await response.json();
        console.log(blogs)
    
        let html = ''
        for(let blog of blogs){
        html += `
        <table>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>${blog.title}</td>
          <td>${blog.author}</td>
          <td>${blog.date}</td>
          <td><a href="update-post.html?id=${blog.id}">Update</a> + <a href="#">Delete</a></td> 
        </tr>
      </table>
        `

        console.log(blog.date)
    }

    document.getElementById('blog-list').innerHTML = html;


    } catch(error){
        console.log(error)
    }
}

