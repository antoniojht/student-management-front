function Pagination({ increment, decrement }) {
  return (
    <div className="flex justify-center items-center">
      <div>
        <button type="button" className="px-4 py-2 bg-gray-100 text-gray-800 font-bold rounded-lg" onClick={() => decrement()}>
          <span className="text-gray-500">&lt;</span>
        </button>

        <button type="button" className="px-4 py-2 bg-gray-100 text-gray-800 font-bold rounded-lg" onClick={() => increment()}>
          <span className="text-gray-500">&gt;</span>
        </button>
      </div>
    </div>
  );
}

export default Pagination;
