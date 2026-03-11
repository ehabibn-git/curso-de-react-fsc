function Button(props) {
  return (
    <button className="bg-slate-400 p-2 rounded-md text-white" {...props}>
      {props.children}
      {/* The props.children is a special prop in React that allows you to pass child elements to a component. In this case, it will render whatever is passed between the opening and closing tags of the Button component. For example, if you use <Button>Click Me</Button>, the text "Click Me" will be rendered inside the button.*/}
    </button>
  );
}

export default Button;
