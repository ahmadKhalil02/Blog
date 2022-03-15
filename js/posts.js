window.onload = function () {
  getAllPosts();
};

console.log("hej");

async function getAllPosts() {
  try {
    const response = await fetch("http://localhost:5000/posts");
    const posts = await response.json();
    console.log(posts);

    let html = "";
    for (let post of posts) {
      html += `
                <li class="list-item">
                <h3>${post.title}</h3><br><p> ${post.author} <br>${post.content} <br> <span class="date">- ${post.date}</span> </p>
                </li>
            `;
    }
    document.getElementById("post-list").innerHTML = html;
  } catch (error) {
    console.log(error);
  }
}
