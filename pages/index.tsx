import Head from "next/head";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/NavBar";
import GithubUser from "../components/GithubUser";
import { useState, useRef } from "react";
import { Loading } from "../components/Loading";
import { useQuery } from "react-query";
import axios from "axios";
export default function Home() {
  let API = "https://api.github.com/users/georgeanya";
  const userRef: any = useRef();
  const [userName, setUserName] = useState();

  function handleClick() {
    if (userRef.current != null) {
      setUserName(userRef.current?.value);
    }
    console.log(userRef.current?.value);
  }

  const { isLoading, data } = useQuery("github", () => {
    if (userName) {
      API = `https://api.github.com/users/${userName}`;
    }
    return axios.get(API);
  });

  if (!data?.data) <p>No Profile data.</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-7 dark:bg-[#1e253f]">
      <Head>
        <title>GitHub User Finder App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <SearchBar
            userName={userName}
            handleClick={handleClick}
            userRef={userRef}
          />
          <GithubUser data={data?.data} />
        </>
      )}
    </div>
  );
}
