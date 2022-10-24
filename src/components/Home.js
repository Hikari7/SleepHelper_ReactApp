import React from "react";

function Home() {
  return (
    <>
      <main className="bg-slate-900 h-screen w-screen main-font relative">
        <div className=" font-light w-3/5  mx-auto justify-center block  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-md text-center">
          <h1 className="text-4xl text-zinc-400">Sleep tight</h1>
          <h3 className="text-xl text-zinc-400 mt-2">No worries</h3>
          <h3 className="text-xl text-zinc-400 mt-2">This app helps for you</h3>
          <button className="rounded-2xl p-4 bg-indigo-200 hover:bg-indigo-400 opacity-9 text-zinc-400 hover:text-pink-100 mt-6 transition duration-500">
            Click here
          </button>
        </div>
      </main>
    </>
  );
}

export default Home;
