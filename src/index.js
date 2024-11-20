/**import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();**/
import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.scss'
import './style/global.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorPage from './routes/error-page.jsx'
import Home from './routes/home.jsx'
import A_Propos from './routes/a_propos.jsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import 'typeface-montserrat'
import Logement_Page from './routes/logements_page.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a_propos" element={<A_Propos />} />
        <Route path="/logements/:id" element={<Logement_Page />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </Router>
  </React.StrictMode>
)