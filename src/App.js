import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Error from './Components/Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Components/GlobalStyle';
import GoToTop from './Components/GoToTop';

function App() {
  const theme ={
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: "#212520",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgb(98, 84, 243, 0.5)",
      hr: "#fff",
      gradient: "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow: "rgba(0, 0, 0 , 0.02) 0px 1px 3px 0px, rgba(27, 31, 35 , 0.15) 0px 0px 0px 0px",
      shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px"},
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='*' element={<Error />} />
          </Routes>
          <GoToTop />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
