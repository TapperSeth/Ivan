import React, { useState, useEffect } from "react";
import { useLogto } from "@logto/react";

const Home = () => {
  const {
    isAuthenticated,
    signIn,
    signOut,
    getIdTokenClaims,
    getRefreshToken,
    getAccessToken,
  } = useLogto();

  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");

  useEffect(() => {
    (async () => {
      if (isAuthenticated) {
        const claims = await getIdTokenClaims();
        const accessToken = await getAccessToken();
        const refreshToken = await getRefreshToken();

        console.log('claims->>', claims);
        
        setUserId(claims.sub);
        setName(claims.name);
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
      }
    })();
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <div>
      {userId && <p>User ID: {userId}</p>}
      {name && <p>Name: {name}</p>}
      {accessToken && <p>Access Token: {accessToken}</p>}
      {refreshToken && <p>Refresh Token: {refreshToken}</p>}

      {isAuthenticated ? (
        <button onClick={() => signOut("http://localhost:3000")}>
          Sign Out
        </button>
      ) : (
        <button onClick={() => signIn("http://localhost:3000/callback")}>
          Sign In
        </button>
      )}
    </div>
  );
};

export default Home;
