import './App.css';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

function App() {
  const handleClick = () => {
    document.body.classList.toggle('toggle-sidebar');
  };
  return (
    <>
    <Header onClick={handleClick}/>
      <Sidebar/> 
      <Form/>
      <Footer/>
    </>
  );
}

export default App;
