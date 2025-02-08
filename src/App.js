import './App.css';
import { AppNavbar } from './components/navbar';
import { Approuter } from './router/AppRouter';

function App() {
  return (
    <article >
      <header >
        <AppNavbar />
      </header>
      <main><Approuter /></main>

      <footer>Footer</footer>
    </article>
  );
}

export default App;
