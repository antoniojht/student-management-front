function Pagination({ increment, decrement }) {
  return (
    <div className="flex justify-center items-center">
      <div>
        <button
          type="button"
          className="px-4 mr-3 py-2 bg-gray-200 text-gray-800 font-bold rounded-full hover:cursor-pointer"
          onClick={() => decrement()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          className="px-4 ml-3 py-2 bg-gray-200 text-gray-800 font-bold rounded-full hover:cursor-pointer"
          onClick={() => increment()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Pagination;
