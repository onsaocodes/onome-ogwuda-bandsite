let shows = [
  {
    date: new Date("2021-09-06").toDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: new Date("2021-09-21").toDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: new Date("2021-10-15").toDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: new Date("2021-11-06").toDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: new Date("2021-11-26").toDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: new Date("2021-12-15").toDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

const loadShows = () => {
  let listEl = document.querySelector(".shows__list");
  for (let i = 0; i < shows.length; i++) {
    let itemEl = document.createElement("li");
    itemEl.classList.add("shows__list-item");
    listEl.appendChild(itemEl);

    let dateContainerEl = document.createElement("div");
    dateContainerEl.classList.add("shows__date-container");
    itemEl.appendChild(dateContainerEl);

    let dateHeaderEl = document.createElement("p");
    dateHeaderEl.classList.add("shows__container-header");
    dateHeaderEl.innerHTML = "Date";
    dateContainerEl.appendChild(dateHeaderEl);

    dateHeaderEl.classList.add("shows--uppercase");
    dateContainerEl.appendChild(dateHeaderEl);

    dateHeaderEl.classList.add("shows--toHide");
    dateContainerEl.appendChild(dateHeaderEl);

    let dateEl = document.createElement("p");
    dateEl.classList.add("shows__date");
    dateEl.innerHTML = shows[i].date;
    dateContainerEl.appendChild(dateEl);

    let venueContainerEl = document.createElement("div");
    venueContainerEl.classList.add("shows__venue-container");
    itemEl.appendChild(venueContainerEl);

    let venueHeaderEl = document.createElement("p");
    venueHeaderEl.classList.add("shows__container-header");
    venueHeaderEl.innerHTML = "Venue";
    venueContainerEl.appendChild(venueHeaderEl);

    venueHeaderEl.classList.add("shows--uppercase");
    venueContainerEl.appendChild(venueHeaderEl);

    venueHeaderEl.classList.add("shows--toHide");
    venueContainerEl.appendChild(venueHeaderEl);

    let venueEl = document.createElement("p");
    venueEl.classList.add("shows__venue");
    venueEl.innerHTML = shows[i].venue;
    venueContainerEl.appendChild(venueEl);

    let locationContainerEl = document.createElement("div");
    locationContainerEl.classList.add("shows__location-container");
    itemEl.appendChild(locationContainerEl);

    let locationHeaderEl = document.createElement("p");
    locationHeaderEl.classList.add("shows__container-header");
    locationHeaderEl.innerHTML = "Location";
    locationContainerEl.appendChild(locationHeaderEl);

    locationHeaderEl.classList.add("shows--uppercase");
    locationContainerEl.appendChild(locationHeaderEl);

    locationHeaderEl.classList.add("shows--toHide");
    locationContainerEl.appendChild(locationHeaderEl);

    let locationEl = document.createElement("p");
    locationEl.classList.add("shows__location");
    locationEl.innerHTML = shows[i].location;
    locationContainerEl.appendChild(locationEl);

    let btnEl = document.createElement("button");
    btnEl.classList.add("shows__button");
    btnEl.innerText = "Buy Tickets";
    itemEl.appendChild(btnEl);

    btnEl.classList.add("shows--uppercase");
  }
};

loadShows();
