const API_KEY = "aec0a6a6-3a7d-4161-9edd-6582097dd956";
const bandSiteApi = new BandSiteApi(API_KEY);

const loadComment = async () => {
  const comments = await bandSiteApi.getComments();

  comments.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });
  console.log(comments);

  let listEl = document.querySelector(".comments__list");

  listEl.innerHTML = "";

  for (let i = 0; i < comments.length; i++) {
    let itemEl = document.createElement("li");
    itemEl.classList.add("comments__list-item");
    listEl.appendChild(itemEl);

    let avatarEl = document.createElement("div");
    avatarEl.classList.add("comments__avatar");
    itemEl.appendChild(avatarEl);

    let commentsInfoContainerEl = document.createElement("div");
    commentsInfoContainerEl.classList.add("comments__info-container");
    itemEl.appendChild(commentsInfoContainerEl);

    let commentInfoEl = document.createElement("div");
    commentInfoEl.classList.add("comments__info");
    commentsInfoContainerEl.appendChild(commentInfoEl);

    let commentPersonEl = document.createElement("p");
    commentPersonEl.classList.add("comments__person");
    commentPersonEl.innerHTML = comments[i].name;
    commentInfoEl.appendChild(commentPersonEl);

    let commentDateEl = document.createElement("p");
    commentDateEl.classList.add("comments__date");
    (commentDateEl.innerHTML = new Date(
      comments[i].timestamp
    ).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })),
      commentInfoEl.appendChild(commentDateEl);

    let commentEl = document.createElement("p");
    commentEl.classList.add("comments__text");
    commentEl.innerHTML = comments[i].comment;
    commentsInfoContainerEl.appendChild(commentEl);
  }
  return comments;
};

loadComment();
console.log(loadComment());

const commentForm = document.querySelector(".comments__form");
const addComment = async (event) => {
  event.preventDefault();

  const newComment = {
    name: event.target.name.value,
    comment: event.target.comment.value,
  };

  let nameInput = document.querySelector(".comments__name");
  let commentInput = document.querySelector(".comments__box");

  if (!newComment.name) {
    nameInput.classList.add("comments__error");
  } else if (!newComment.comment) {
    commentInput.classList.add("comments__error");
  } else {
    await bandSiteApi.postComments(newComment);
    commentForm.reset();
    loadComment();
  }
};

commentForm.addEventListener("submit", addComment);
