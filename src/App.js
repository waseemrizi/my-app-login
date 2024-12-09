import React from 'react';
import LoginPage from './components/LoginPage/LoginPage';
import Footer from './components/Footer/Footer';  // Import Footer component

function App() {
    return (
        <div className="App">
            <LoginPage />
            <Footer />  {/* Add the Footer component */}
        </div>
    );
}

export default App;
