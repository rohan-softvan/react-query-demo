import React from "react";
import { useQueries } from "react-query";
import { getUserByUserId } from "../../api/users.api";

const fetchUserByUserIdApi = (userId) => {
  return getUserByUserId(userId);
};

function DynamicParallelQueriesPage({ userIds }) {
  const queryResults = useQueries(
    userIds.map((userId) => {
      return {
        queryKey: ["user", userId],
        queryFn: () => fetchUserByUserIdApi(userId),
      };
    })
  );
  console.log("queryResults: ", queryResults);
  return (
    <>
      <h2>Welcome to DynamicParallelQueriesPage</h2>
      <ul>
        {queryResults.map(e=>e.data?.data?.name).map((userName) => (
            <li key={userName}>{userName}</li>
        ))}
      </ul>
    </>
  );
}

export default DynamicParallelQueriesPage;
