import DotLoader from 'react-spinners/DotLoader';
import './styles.css';
const override = {
  display: 'block',
  margin: 'auto',
  borderColor: '#ebe4f3',
};

function Spinner({ isLoading }) {
  return (
    <div className="containerSpinner">
      <DotLoader
        color="#ebe4f3"
        loading={isLoading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;
