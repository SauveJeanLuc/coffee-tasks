import Header from './components/Header';
import Nav from './components/Nav';
import ToDoContainer from './components/ToDoContainer';


function App() {

  const divStyles ={
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    marginTop: '50px',
    backgroundColor: '#fff',
    borderRadius: '5px',
  }

  return (
    <>
      <Header />
      <div style={divStyles}>
        <Nav />
        <ToDoContainer />
      </div>
    </>
  );
}


export default App
