import logo from './logo.svg';
import './App.css';
import CustomApi from './CustomApi';

function App() {
  return (
    <>
<CustomApi url="https://jsonplaceholder.typicode.com/users"></CustomApi>
<CustomApi url="https://jsonplaceholder.typicode.com/posts" ></CustomApi>
    </>
  );
}

export default App;
