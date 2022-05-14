import { useQuery } from "react-query";
import { getUsers } from "../api/users.api";

const fetchUsersApi = () => {
  return getUsers();
};

const UsersRQPage = () => {
  function onSuccess() {
    console.log("This function will be called when API Success");
  }
  function onError() {
    console.log("This function will be called when API causes Error");
  }

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "users",
    fetchUsersApi,
    {
      //cacheTime: 5000,// invalidates the data after specified seconds (default 5 mins)
      //staleTime: 10000, //if api call is within in the specified time it will not call API(default => 0ms)
      // enabled: false // flag for initial api call
      onSuccess, // API onSuccess handler
      onError, //API onError handler
      // refetchInterval: 1000 //call API after specified time (default => false)
      // refetchIntervalInBackground: true, //API will call if browser is not in focus
      select: (response) => {
        // return only selected value (we can filter out results too)
        return response.data.map((user) => user.name);
      },
    }
  );
  console.log({ isLoading, isFetching });
  if (isLoading) return "Loading...";
  // if (isFetching) return "Updating...";
  if (isError) return "An error has occurred: " + error.message;

  return (
    <>
      <h2>Welcome to UsersRQPage</h2>
      {/*If we want to call api onClick not when componentDidMount*/}
      {/*<button onClick={refetch}>Fetch Users</button>*/}
      <ol>
        {data?.map((userName) => (
          <li key={userName}>{userName}</li>
        ))}
      </ol>
    </>
  );
};
export default UsersRQPage;
