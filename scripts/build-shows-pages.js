const API_KEY = "aec0a6a6-3a7d-4161-9edd-6582097dd956";

const loadShows = async () => {
  const bandSiteApi = new BandSiteApi(API_KEY);
  const shows = await bandSiteApi.getShows();

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
    dateHeaderEl.innertext = "Date";
    dateContainerEl.appendChild(dateHeaderEl);

    dateHeaderEl.classList.add("shows__container-header--uppercase");
    dateContainerEl.appendChild(dateHeaderEl);

    dateHeaderEl.classList.add("shows__container-header--toHide");
    dateContainerEl.appendChild(dateHeaderEl);

    let dateEl = document.createElement("p");
    dateEl.classList.add("shows__date");
    (dateEl.innerText = new Date(shows[i].date).toDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })),
      dateContainerEl.appendChild(dateEl);

    let venueContainerEl = document.createElement("div");
    venueContainerEl.classList.add("shows__venue-container");
    itemEl.appendChild(venueContainerEl);

    let venueHeaderEl = document.createElement("p");
    venueHeaderEl.classList.add("shows__container-header");
    venueHeaderEl.innerText = "Venue";
    venueContainerEl.appendChild(venueHeaderEl);

    venueHeaderEl.classList.add("shows__container-header--uppercase");
    venueContainerEl.appendChild(venueHeaderEl);

    venueHeaderEl.classList.add("shows__container-header--toHide");
    venueContainerEl.appendChild(venueHeaderEl);

    let venueEl = document.createElement("p");
    venueEl.classList.add("shows__venue");
    venueEl.innerText = shows[i].place;
    venueContainerEl.appendChild(venueEl);

    let locationContainerEl = document.createElement("div");
    locationContainerEl.classList.add("shows__location-container");
    itemEl.appendChild(locationContainerEl);

    let locationHeaderEl = document.createElement("p");
    locationHeaderEl.classList.add("shows__container-header");
    locationHeaderEl.innerText = "Location";
    locationContainerEl.appendChild(locationHeaderEl);

    locationHeaderEl.classList.add("shows__container-header--uppercase");
    locationContainerEl.appendChild(locationHeaderEl);

    locationHeaderEl.classList.add("shows__container-header--toHide");
    locationContainerEl.appendChild(locationHeaderEl);

    let locationEl = document.createElement("p");
    locationEl.classList.add("shows__location");
    locationEl.innerText = shows[i].location;
    locationContainerEl.appendChild(locationEl);

    let btnEl = document.createElement("button");
    btnEl.classList.add("shows__button");
    btnEl.innerText = "Buy Tickets";
    itemEl.appendChild(btnEl);

    btnEl.classList.add("shows__container-header--uppercase");
  }
};

loadShows();
