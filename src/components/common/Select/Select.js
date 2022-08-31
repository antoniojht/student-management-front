function Select({ name, handleChange, options }) {
  return (
    <select
      onChange={handleChange}
      name={name}
      className="rounded bg-white px-6 shadow-xl ring-1 ring-gray-900/5 py-2 mr-5"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
