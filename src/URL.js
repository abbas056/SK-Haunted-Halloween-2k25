export const enviroment = "test"; // "test" or "production"
export const local = true;
var baseURL;
var user;
if (enviroment === "test") {
  user = {
    uid: 596492375,
    token: "A1CA4D4A289C954A148C64CD964CF3DD31",
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
