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
      // let content = post.content;
      wordLength();
      html += `
                <li class="list-item">
                <h3>${post.title}</h3><br><p> ${post.author} <br>${post.content} <br> <span class="date">- ${post.date}</span> </p>
                <a href ="http://localhost:5000/posts/${post._id}">Till inlägget</a></li>
            `;

      function wordLength() {
        const contentArray = post.content.split(" ", 15);
        console.log(contentArray);
      }
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

function removeWords(content, value) {
  var i = 0;
  while (i < content.length) {
    if (content[i] === value) {
      content.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}
