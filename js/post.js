window.onload = function () {
  getSpecificPost();
};

type blogPost = {
  id: String,
  name: String,
};

let url = "http://localhost:5000/posts";

async function getAllPosts() {
  try {
    const response = await fetch("http://localhost:5000/posts${post._id}");
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
        .join(" ")} <br><a href ="http://localhost:5000/posts/${
        post._id
      }">Läs mer...</a>
      <p class ="taggar">Tags: ${tags}</p>
      </div></li>
                
            `;
    }

    document.getElementById("post-list").innerHTML = html;
  } catch (error) {
    console.log(error);
  }
}
