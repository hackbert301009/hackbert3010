const posts = [
  {
    title: "Mein erster Blogbeitrag",
    content: "Das ist mein erster Beitrag. Bald kommen noch mehr!"
  },
  {
    title: "Zweiter Beitrag",
    content: "Heute habe ich gelernt, wie man eine Webseite erstellt."
  }
];

const postContainer = document.getElementById("posts");

posts.forEach(post => {
  const article = document.createElement("article");
  article.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
  postContainer.appendChild(article);
});

