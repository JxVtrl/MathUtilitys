import React from 'react';
import { AppProvider } from './context/Context';
import { Container } from './styles/styles.js';
import { Header } from './components/Header';
import { Main } from './pages/Main';
import { Footer } from './components/Footer';


export default function App() {
  return (
    <AppProvider>
      <Container>
        <Header />
        <Main />
        <Footer /> 
      </Container>
    </AppProvider>
  )
}
