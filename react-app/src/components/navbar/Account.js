import React from "react";
import LogoutButton from "../auth/LogoutButton";
import { useSelector } from "react-redux"

const Account = () => {
  const user = useSelector(state => state.session.user)

  return (
    <div className="form-holder">
      <h1>Hello {(user) ? user.firstname : "Friend"}!</h1>
      <LogoutButton />
    </div>
  );
};

export default Account;
