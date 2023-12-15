class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://project-1-api.herokuapp.com/";
  }

  async postComments(comment) {
    try {
      await axios.post(
        `${this.baseUrl}comments?api_key=${this.apiKey}`,
        comment
      );
      return comment;
    } catch (error) {
      console.log(error);
    }
  }

  async getComments() {
    try {
      const response = await axios.get(
        `${this.baseUrl}comments?api_key=${this.apiKey}`
      );
      const comments = response.data;
      return comments;
    } catch (error) {
      console.log(error);
    }
  }

  async getShows() {
    try {
      const response = await axios.get(
        `${this.baseUrl}showdates?api_key=${this.apiKey}`
      );

      const shows = response.data;
      return shows;
    } catch (error) {
      console.log(error);
    }
  }
}
