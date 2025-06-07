import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import './index.css';

// Components
import Background from './components/Background';
import Navigation from './components/Navigation';

// Pages
import Hub from './pages/Hub';
import Nexus from './pages/Nexus';
import Stack from './pages/Stack';
import Endeavor from './pages/Endeavor';
import Services from './pages/Services';
import Reachme from './pages/Reachme';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={
            <>
              <Hub />
              <Nexus />
              <Stack />
              <Endeavor />
              <Services />
              <Reachme />
            </>
          } />
          <Route path="/about" element={<Nexus />} />
          <Route path="/projects" element={<Endeavor />} />
          <Route path="/skills" element={<Stack />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Reachme />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;