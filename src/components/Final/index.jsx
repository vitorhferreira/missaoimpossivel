import React from 'react';
import './Footer.css';

function Final() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Desenvolvido por Vitor Hugo Ferreira.</p>
      </div>
    </footer>
  );
}

export default Final;