import React, { useEffect, useState } from "react";
import { getUsers } from "../../api/users.api";

function UsersTraditionalPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const fetchUsersApi = () => {
    getUsers()
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        console.error(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchUsersApi();
  }, []);

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <h2>Welcome to UsersTraditionalPage</h2>
      <ol>
        {data?.data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    </>
  );
}

export default UsersTraditionalPage;
