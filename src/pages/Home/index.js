import { useLogto } from "@logto/react";

const Home = () => {
  const { isAuthenticated, signIn, signOut, fetchUserInfo } = useLogto();
  return (
    <div className="Home">
      <p>Home Page</p>
    </div>
  );
}

export default Home;
