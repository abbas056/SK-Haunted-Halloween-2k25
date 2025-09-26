export const enviroment = "test"; // "test" or "production"
export const local = true;
var baseURL;
var user;
if (enviroment === "test") {
  user = {
    uid: 596492375,
    token: "A16DD06ADB0A3E467A9BCF2FDAD698F53A",
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
