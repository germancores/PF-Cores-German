import './styled.css';

function Button({ children, handleClick, ...props }) {
  return (
    <button className="btn" onClick={handleClick} {...props}>
      {children}
    </button>
  );
}

export default Button;
