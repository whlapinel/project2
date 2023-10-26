"use strict";

function createCard(post) {
  const card = createCardElement(post);
  const cardHeader = createCardHeader();
  card.appendChild(cardHeader);
  const avatar = createAvatar(post);
  cardHeader.appendChild(avatar);
  const authorDate = createAuthorDate(post);
  cardHeader.appendChild(authorDate);
  const cardBody = createCardBody();
  card.appendChild(cardBody);
  const titleHeader = createTitleHeader(post);
  cardBody.appendChild(titleHeader);
  const content = createContentElement(post);
  cardBody.appendChild(content);
  return card;

  function createCardElement(post) {
    const card = document.createElement("article");
    card.classList.add("card");
    card.setAttribute("data-id", post.id);
    return card;
  }
  function createCardHeader() {
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    return cardHeader;
  }
  function createAvatar(post) {
    const avatar = document.createElement("img");
    avatar.srcset = post.profile;
    avatar.setAttribute("alt", "profile picture");
    avatar.classList.add("avatar");
    return avatar;
  }
  function createAuthorDate(post) {
    const authorDate = document.createElement("div");
    authorDate.textContent = `${post.author} · ${new Date(
      Date.parse(post.date)
    ).toDateString()}`;
    return authorDate;
  }
  function createCardBody() {
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    return cardBody;
  }
  function createTitleHeader(post) {
    const titleHeader = document.createElement("h3");
    titleHeader.textContent = post.title;
    return titleHeader;
  }
  function createContentElement(post) {
    const content = document.createElement("p");
    if (post.content.length > MAX_LENGTH) {
      content.textContent = `${post.content.substring(0, MAX_LENGTH)}...`;
    } else {
      content.textContent = post.content;
    }
    return content;
  }
}
