export const enviroment = "test"; // "test" or "production"
export const local = true;
var baseURL;
var user;
if (enviroment === "test") {
  user = {
    uid: 596492375,
    token: "A118B1240B76AF4A57BC9726FD6060DDC1",
  };
  baseURL = "http://test.streamkar.tv";
} else {
  user = {
    uid: 0,
    token: undefined,
  };
  baseURL = "https://www.streamkar.net";
}
export { baseURL, user };
