import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Ioan Lipan",
      image:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71Fv-OlcBIL.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
