import React from "react";
import {useQueries} from "react-query";
import {getUserByUserId} from "../../api/users.api";

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
  return <div>DynamicParallelQueries</div>;
}

export default DynamicParallelQueriesPage;
