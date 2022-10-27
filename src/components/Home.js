import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main className="main-bg h-screen w-screen main-font relative">
        <div className="font-light w-3/5  mx-auto justify-center block  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-md text-center">
          <h1 className="text-5xl text-zinc-400 tracking-wider">Sleep tight</h1>
          <h3 className="text-md text-zinc-500 mt-6">Need help to sleep? </h3>
          <h3 className="text-md text-zinc-500 mt-2">
            No worries, this app helps for you
          </h3>
          <Link to="/sound">
            <button className="rounded-2xl p-4 btn-color hover:bg-indigo-300  text-zinc-500 hover:text-pink-100 mt-6 transition duration-0 hover:duration-700 ease-in flexitems-center justify-centers">
              Click here
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Home;
