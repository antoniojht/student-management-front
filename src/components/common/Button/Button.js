/* eslint-disable react/button-has-type */
function Button({ type, label }) {
  return (
    <button
      type={type}
      className="main-button mt-8"
    >
      {label}
    </button>
  );
}

export default Button;
