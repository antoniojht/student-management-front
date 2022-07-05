function Search() {
  return (
    <div className="relative left-0 rounded-2xl bg-white px-6 shadow-xl ring-1 ring-gray-900/5">
      <div className="mx-auto max-w-md">
        <form action="" className="relative mx-auto w-max">
          <input
            type="search"
            className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-indigo-600 focus:pl-16 focus:pr-4"
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-indigo-600 peer-focus:stroke-indigo-700" fill="none" viewBox="0 0 24 24" stroke="#6d28d9" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </form>
      </div>
    </div>
  );
}

export default Search;
