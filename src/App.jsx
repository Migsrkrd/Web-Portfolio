import {Outlet} from 'react-router-dom';
import Nav from './components/Nav';
import {useState} from 'react';

function App() {

    const [currentPage, setCurrentPage] = useState('portfolio');

    return (
        <>
            <Nav setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            <Outlet />
            
        </>
    );
}

export default App;