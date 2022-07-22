function Table({ headers, body }) {
  return (
    <table className="min-w-full">
      <thead>
        <tr>
          {
            Object.keys(headers).map((header) => (
              <th className="table-head" key={header}>
                {header}
              </th>
            ))
          }
        </tr>
      </thead>
      <tbody className="bg-white">
        {body.map((data) => (
          <tr className="hover:bg-gray-100 cursor-pointer">
            {
              Object.keys(headers).map((header) => (
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-500">{data[header]}</div>
                </td>
              ))
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
