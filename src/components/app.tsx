import React from 'react';
import { HomePage } from './homepage';
import { Navbar } from './navbar/navbar';

const App: React.FC = () => (
    <>
        <Navbar />
        <HomePage />
    </>
);

export default App;
