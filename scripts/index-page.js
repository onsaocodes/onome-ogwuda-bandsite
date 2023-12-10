let comments = [
  {
    name: "Connor Walton",
    date: new Date("2021-02-17").toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: new Date("01/09/2021").toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: new Date("12/20/2020").toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

const loadComment = () => {
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
    commentDateEl.innerHTML = comments[i].date;
    commentInfoEl.appendChild(commentDateEl);

    let commentEl = document.createElement("p");
    commentEl.classList.add("comments__text");
    commentEl.innerHTML = comments[i].comment;
    commentsInfoContainerEl.appendChild(commentEl);
  }
};

loadComment();

const commentForm = document.querySelector(".comments__form");
const addComment = (event) => {
  event.preventDefault();

  const newComment = {
    name: event.target.name.value,
    date: new Date().toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
    comment: event.target.comment.value,
  };

  let nameInput = document.querySelector(".comments__name");
  let commentInput = document.querySelector(".comments__box");

  if (newComment.name == "") {
    nameInput.classList.add("comments__error");
    commentForm.appendChild(nameInput);
    alert("Please enter your name");
  } else if (newComment.comment === "") {
    commentInput.classList.add("comments__error");
    alert("Please enter a comment");
  } else {
    comments.unshift(newComment);
  }

  commentForm.reset();
  loadComment();
};

commentForm.addEventListener("submit", addComment);
