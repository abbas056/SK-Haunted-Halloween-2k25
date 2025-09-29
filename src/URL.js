export const enviroment = "test"; // "test" or "production"
export const local = true;
var baseURL;
var user;
if (enviroment === "test") {
  user = {
    uid: 596492375,
    token: "A188677A019A7946A3A92297FB9B673A36",
  };
  baseURL = "http://test.stkar.com";
} else {
  user = {
    uid: 0,
    token: undefined,
  };
  baseURL = "https://www.streamkar.net";
}
export { baseURL, user };
