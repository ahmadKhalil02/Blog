window.onload = function(){
    fetchallBlogs();
};

async function fetchallBlogs(){
    try{
        const response = await fetch ('http://localhost:5000/posts')
        const blogs = await response.json();
    
        let html = ''
        for(let blog of blogs){
        html += `

        <tr>
          <td>${blog.title}</td>
          <td>${blog.author}</td>
          <td>${blog.date}</td>
          <td>
          <div>
          <a id= "update-post" href="update-post.html?id=${blog._id}">Update</a> 
          <a href="#" class="delete-post-link" data-blog-id="${blog._id}">Delete</a>
          </div>  
                </td> 
          </tr>

        `
    }

    document.getElementById('data').innerHTML = html;
    } catch(error){
        console.log(error)
    }
}

 // function deleteBlog

 const deleteBlogLinks = document.getElementsByClassName('delete-post-link')
 console.log(deleteBlogLinks)

 for (let link of deleteBlogLinks) {
     link.addEventListener('click', async function(e) {
        e.preventDefault();

         const blogId = e.target.dataset.blogId

         try {
             await fetch(`http://localhost:5000/posts/${blogId}`,{
                 method: 'DELETE', 
             })
             
            //  e.target.parentNode.parentNode.parentNode.remove(); // removing post without reloading page
         } catch (error) {
             console.log(error)
         }
     })
 }


