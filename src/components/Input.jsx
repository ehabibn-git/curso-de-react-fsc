// Define a functional component named Input that takes props as an argument. This component will render an input element with some predefined styles and will also accept any additional props passed to it.
function Input(props) {
  return (
    <input
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      // The {...props} syntax is used to spread the properties of the props object onto the input element. This allows you to pass any additional props (like type, placeholder, value, onChange, etc.) to the Input component and have them applied to the underlying input element without having to explicitly define each prop in the Input component.
      {...props}
    ></input>
  );
}

export default Input;
