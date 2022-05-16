import { useQuery } from "react-query";
import { getUserByUserId } from "../../api/users.api";

const fetchUserByUserIdApi = ({ queryKey }) => {
  const userId = queryKey[1];
  return getUserByUserId(userId);
};

export const useGetUserData = (userId) => {
  // return useQuery(["user", userId], () => fetchUserByUserIdApi(userId)); // we can pass parameters like this
  return useQuery(["user", userId], fetchUserByUserIdApi); // also, if we don't want to pass params, the queryKey will pass by default
};
