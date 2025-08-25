import Buscador from "./components/Buscador";
import Footerr from "./components/Footerr";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Buscador/>
      </main>
      <footer>
        <Footerr/>
      </footer>
    </>
  );
}

export default App;
