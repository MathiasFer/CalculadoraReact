function Home({ goTo }) {
    return (
      <div className="flex flex-col items-center justify-center gap-6">
  
        <h1 className="text-3xl font-bold">
          Home
        </h1>
  
        <div className="flex flex-col gap-3 w-60">
          
          <button
            onClick={() => goTo("app1")}
            className="py-2 bg-black text-white rounded"
          >
            Simple Calculator
          </button>
  
          <button
            onClick={() => goTo("app2")}
            className="py-2 bg-black text-white rounded"
          >
            Complex Calculator
          </button>
  
          <button
            onClick={() => goTo("app3")}
            className="py-2 bg-black text-white rounded"
          >
            Search Anime
          </button>
  
        </div>
      </div>
    );
  }
  
  export default Home;