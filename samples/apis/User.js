import Api from "./Api";

const END_POINT = "users";

export default {
  all() {
    return Api.get(END_POINT);
  },
  getSelectedUser(id) {
    return Api.get(`${END_POINT / id}`);
  },
  updateSelectedUser(user) {
    return Api.post(`END_POINT/${user.id}`, user);
  },
};