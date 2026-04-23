import { useState } from 'react';
import Auth from './Auth';
import HomePage from './HomePage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      {isAuthenticated ? (
        <HomePage onLogout={() => setIsAuthenticated(false)} />
      ) : (
        <Auth onSuccess={() => setIsAuthenticated(true)} />
      )}
    </div>
  );
}

export default App;