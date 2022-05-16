import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useGetUserData } from "../../shared/hooks/useGetUserData";

function UserRQPage() {
  const { userId } = useParams();
  const { isLoading, data, isError, error } = useGetUserData(userId);
  const history = useHistory();
  const handleBackClick = () => {
    history.goBack();
  };

  if (isLoading) return "Loading...";
  if (isError) return "An error has occurred: " + error.message;

  return (
    <>
      <button onClick={handleBackClick}>Go Back</button>
      <h2>
        Welcome, <span style={{ color: "red" }}>{data.data.name}</span>
      </h2>
    </>
  );
}

export default UserRQPage;
