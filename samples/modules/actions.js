import axios from "axios";
import Tweet from "../apis/Tweet";
import User from "../apis/User";

export const getTweets = async ({
  commit
}) => {
  const Tweets = await Tweet.all();
  commit("SET_TWEETS", Tweets.data);
};

export const getTweetSignle = async ({
  commit
}) => {
  const tweet = await Tweet.getSelectedTweet(this.id);
  commit("SET_SELECTED_TWEET", tweet);
};

// export const createUser = async ({commit}) => {
//   const createdUser = await User.create(user)
//   commit('SET_NOTIFICATIONS')
// }

export const getUsers = async ({
  commit
}) => {
  const users = await User.all();
  commit("SET_USERS", users);
};

export const getSelectedUser = async ({
  commit
}) => {
  const user = await User.getSelectedUser();
  commit("SET_SELECTED_USER", user);
};

export const updateCurrentUser = async ({
  commit
}, {
  user
}) => {
  const updatedUser = await User.updateSelectedUser({
    user
  });
  commit("SET_CURRENT_USER", updatedUser);
};