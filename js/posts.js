let div = document.getElementsByClassName("div");

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
                    <p>${post.content} <br> <span class="date">- ${post.date}</span> </p>

                    <div>
                        <a href="#">Update</a> |
                        <a href="#" class ="delete-pun-link" data-pun-id="${post._id}"=>Delete</a>
                    </div>
                </li>
            `;
      div.append(post);
    }
  } catch (error) {
    console.log(error);
  }
}
