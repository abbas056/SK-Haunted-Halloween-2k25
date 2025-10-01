export const enviroment = "test"; // "test" or "production"
export const local = true;
var baseURL;
var user;
if (enviroment === "test") {
  user = {
    uid: 596492375,
    token: "A186DF2BCC05BE428680654A4F5FCBD008",
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
