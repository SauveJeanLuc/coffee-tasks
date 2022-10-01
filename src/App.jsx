import Header from './components/Header';
import Nav from './components/Nav';
import ToDoContainer from './components/ToDoContainer';
import PopUp from './components/PopUp';

function App() {
  return (
    <>
      <Header />
      <div className='w-1/2 flex flex-col m-auto mt-[50px] bg-white rounded-[5px]'>
        <Nav />
        <ToDoContainer />
        <PopUp/>
      </div>
    </>
  );
}


export default App
