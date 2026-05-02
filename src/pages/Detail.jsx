function Detail({ anime, goBack }) {
    if (!anime) {
      return (
        <div className="text-center">
          <h2 className="text-xl">No data</h2>
          <button
            onClick={goBack}
            className="mt-4 text-sm text-gray-500"
          >
            Back
          </button>
        </div>
      );
    }
  
    return (
      <div className="max-w-4xl mx-auto p-4">
  
        {/* title */}
        <h1 className="text-3xl font-bold mb-6 text-center">
          {anime.title}
        </h1>
  
        {/* content */}
        <div className="flex flex-col md:flex-row gap-6">
  
          {/* image */}
          <img
            src={anime.images.jpg.image_url}
            className="w-full md:w-64 rounded-lg object-cover"
          />
  
          {/* text */}
          <div className="text-sm text-gray-700 leading-relaxed">
            {anime.synopsis || "No description available"}
          </div>
  
        </div>
  
        {/* back */}
        <div className="flex justify-center mt-6">
          <button
            onClick={goBack}
            className="text-sm text-gray-500"
          >
            Back
          </button>
        </div>
  
      </div>
    );
  }
  
  export default Detail;