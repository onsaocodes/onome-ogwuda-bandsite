const API_KEY = "aec0a6a6-3a7d-4161-9edd-6582097dd956";
const bandSiteApi = new BandSiteApi(API_KEY);
let listEl = document.querySelector(".comments__list");

const timeAgo = (date) => {
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + " years ago";
  }

  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }

  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }

  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }

  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }

  if (seconds < 10) return "just now";

  return Math.floor(seconds) + " seconds ago";
};

const createComment = (comment) => {
  let itemEl = document.createElement("li");
  itemEl.classList.add("comments__list-item");
  listEl.appendChild(itemEl);

  let avatarEl = document.createElement("div");
  avatarEl.classList.add("comments__avatar");
  avatarEl.classList.add("comments__avatar--placeholder");
  itemEl.appendChild(avatarEl);

  let commentsInfoContainerEl = document.createElement("div");
  commentsInfoContainerEl.classList.add("comments__info-container");
  itemEl.appendChild(commentsInfoContainerEl);

  let commentInfoEl = document.createElement("div");
  commentInfoEl.classList.add("comments__info");
  commentsInfoContainerEl.appendChild(commentInfoEl);

  let commentPersonEl = document.createElement("p");
  commentPersonEl.classList.add("comments__person");
  commentPersonEl.innerText = comment.name;
  commentInfoEl.appendChild(commentPersonEl);

  let commentDateEl = document.createElement("p");
  commentDateEl.classList.add("comments__date");
  commentDateEl.innerText = timeAgo(comment.timestamp);
  commentInfoEl.appendChild(commentDateEl);

  let commentEl = document.createElement("p");
  commentEl.classList.add("comments__text");
  commentEl.innerText = comment.comment;
  commentsInfoContainerEl.appendChild(commentEl);
};

const loadComment = async () => {
  const comments = await bandSiteApi.getComments();

  comments.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });
  console.log(comments);

  listEl.innerHTML = "";

  for (let i = 0; i < comments.length; i++) {
    createComment(comments[i]);
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
    nameInput.classList.remove("comments__error");
    commentInput.classList.add("comments__error");
  } else {
    commentInput.classList.remove("comments__error");
    await bandSiteApi.postComments(newComment);
    commentForm.reset();
    loadComment();
  }
};

commentForm.addEventListener("submit", addComment);
