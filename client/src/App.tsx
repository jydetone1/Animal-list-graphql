import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CategoryPage from './pages/CategoryPage';
import AnimalPage from './pages/animalpage/AnimalPage';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});
const App = () => {
  return (
    <div>
      <ApolloProvider client={client}>
        <NavBar />
        <Router>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/products/:slug' element={<CategoryPage />} />
            <Route path='/product/:slug' element={<AnimalPage />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </div>
  );
};

export default App;
