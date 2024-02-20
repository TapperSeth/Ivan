import { useHandleSignInCallback } from "@logto/react";
import { useNavigate } from "react-router-dom";

const Callback = () => {
  const navigate = useNavigate();

  const { isLoading } = useHandleSignInCallback(() => {
    return navigate("/");
  });

  if (isLoading) {
    return <div>Redirecting...</div>;
  }
};

export default Callback;
