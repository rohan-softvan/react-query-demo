import { useQuery } from "react-query";
import { getUsers } from "../../api/users.api";

const fetchUsersApi = () => {
  return getUsers();
};
export const useGetUsersData = (onSuccess, onError) => {
  return useQuery("users", fetchUsersApi, {
    onSuccess, // API onSuccess handler
    onError, //API onError handler
    select: (response) => {
      // return only selected value (we can filter out results too)
      return response.data.map((user) => user.name);
    },
  });
};
