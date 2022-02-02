import './App.css';
import Entete from './Entete.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <div className="App">
    {/* Header ici! */}
    <Entete />
      <section className="produits">
        <h2>Nos produits</h2>
        <ul>
          <li><a href="#">Produit 1</a></li>
          <li><a href="#">Produit 2</a></li>
          <li><a href="#">Produit 3</a></li>
          <li><a href="#">Produit 4</a></li>
          <li><a href="#">Produit 5</a></li>
        </ul>
      </section>
      <Footer />
      {/* Footer ici! */}
    </div>
  );
}

export default App;
