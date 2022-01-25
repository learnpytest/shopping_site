import Api from "./Api";

const END_POINT = "tweets";

export default {
  all() {
    return Api.get(END_POINT);
  },
  getSelectedTweet(id) {
    return Api.get(`${END_POINT / id}`);
  },
};