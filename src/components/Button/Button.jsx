import './styled.css';

function Button({ children, handleClick }) {
  return (
    <div className="btn" onClick={handleClick}>
      {children}
    </div>
  );
}

export default Button;
