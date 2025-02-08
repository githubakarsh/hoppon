import './App.css';
import { AppNavbar } from './components/navbar';
import { useEffect } from 'react';

function App() {

  useEffect(() => {

    fetch('http://127.0.0.1:5000/create-event').then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(`error - ${error}`);
    });
  }, []);
  return (
    <article >
      <header >
        <AppNavbar />
      </header>
      <main>Main here</main>

      <footer>Footer</footer>
    </article>
  );
}

export default App;
