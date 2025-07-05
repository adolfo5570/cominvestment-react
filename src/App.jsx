// src/App.jsx
import React from 'react';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Bienvenido a Cominvestment</h1>
        <p>Este es el contenido principal</p>
      </main>
    </Layout>
  );
}

export default App;
