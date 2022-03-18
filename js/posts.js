window.onload = function () {
    getAllPosts();
  };
  
  async function getAllPosts() {
    try {
      const response = await fetch("http://localhost:5000/posts");
      const posts = await response.json();
      console.log(posts);
  
      let html = "";
      for (let post of posts) {
        let tags = post.tags;
  
        if (!Array.isArray(tags) || !tags.length) {
          tags = "";
        }
  
        html += `
                  <li class="list-item">
                  <h3>${post.title}</h3><br><span class="date">Author: ${
          post.author
        } <br> Date: ${
          post.date
        } </span><br> <div class="flexbox"><p><br>${post.content
          .split(" ", 20)
          .join(" ")} <br><a href="post.html?id=${post._id}">Read more...</a>
        
        <p class ="taggar">Tags: ${tags}</p>
        </div></li>
                  
              `;
      }
  
      document.getElementById("post-list").innerHTML = html;
    } catch (error) {
      console.log(error);
    }
  }
  
  // - Markera all content i de olika länkarna
  // - Om det är mer än 20 ord, skriv "visa inlägget"
  // - Om det är mindre än 20 ord skriv "visa inlägget"
  // - Inlägget tas till en egen sida. Därifrån kan
  // man nå adminpanelen och gå tillbaka till index.
  // if (content.length < 50)
  
  // function removeWords(content, value) {
  //   var i = 0;
  //   while (i < content.length) {
  //     if (content[i] === value) {
  //       content.splice(i, 1);
  //     } else {
  //       ++i;
  //     }
  //   }
  //   return arr;
  // }
  