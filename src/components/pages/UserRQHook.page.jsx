import { useGetUsersData } from "../../shared/hooks/useGetUsersData";
import {Link} from "react-router-dom";

const UsersRQPage = () => {
  function onSuccess() {
    console.log("This function will be called when API Success");
  }
  function onError() {
    console.log("This function will be called when API causes Error");
  }

  const { isLoading, data, isError, error, isFetching } = useGetUsersData(
    onSuccess,
    onError
  );
  console.log({ isLoading, isFetching });
  if (isLoading) return "Loading...";
  // if (isFetching) return "Updating...";
  if (isError) return "An error has occurred: " + error.message;

  return (
    <>
      <h2>Welcome to UsersRQPage(Hook)</h2>
        <ol>
        {data?.data.map((user) => (
          <li key={user.id}>
            <Link to={`/rq-user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ol>
    </>
  );
};
export default UsersRQPage;
