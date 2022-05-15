import { request } from "../shared/helpers/RequestWrapper";

export async function getUsers() {
  return request({
    url: "http://localhost:4000/users",
    method: "GET",
  });
}

export async function getUserByUserId(userId) {
  return request({
    url: `http://localhost:4000/users/${userId}`,
    method: "GET",
  });
}
