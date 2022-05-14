import { request } from "../shared/helpers/RequestWrapper";

// export async function getUsers() {
//   return request({
//     url: "https://jsonplaceholder.typicode.com/users/",
//     method: "GET",
//   });
// }
export async function getUsers() {
  return request({
    url: "http://localhost:4000/users",
    method: "GET",
  });
}
