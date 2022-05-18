import React from "react";
import { useQuery } from "react-query";
import { getFriendByUserId, getUserByUserId } from "../../api/users.api";

const fetchUserByUserIdApi = (userId) => {
  return getUserByUserId(userId);
};

const fetchFriendByUserIdApi = (userId) => {
  return getFriendByUserId(userId);
};

function DependentQueriesPage({ userId }) {

  const { data: user } = useQuery(["user", userId], () =>
    fetchUserByUserIdApi(userId)
  );
  const friendId = user?.data.friendId;
  const { data: friend } = useQuery(
    ["friend", friendId],
    () => fetchFriendByUserIdApi(friendId),
    { enabled: !!friendId }
  );
  return (
    <>
      <h2>Welcome to DependentQueriesPage</h2>
      <p>{friend?.data.name}</p>
    </>
  );
}

export default DependentQueriesPage;
