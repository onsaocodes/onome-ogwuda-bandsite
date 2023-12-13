class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://project-1-api.herokuapp.com/";
  }

  async postComments(comment) {
    await axios.post(`${this.baseUrl}comments?api_key=${this.apiKey}`, comment);
    return comment;
  }

  async getComments() {
    const response = await axios.get(
      `${this.baseUrl}comments?api_key=${this.apiKey}`
    );
    const comments = response.data;
    return comments;
  }

  async getShows() {
    const response = await axios.get(
      `${this.baseUrl}showdates?api_key=${this.apiKey}`
    );

    const shows = response.data;
    return shows;
  }
}
