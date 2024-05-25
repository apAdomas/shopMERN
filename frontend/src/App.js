import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import React from 'react';
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet/>
        </Container>
      </main>
      <Footer />
    </>
  )
};

export default App