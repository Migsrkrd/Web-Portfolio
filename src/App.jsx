import {Outlet} from 'react-router-dom';
import Nav from './components/Nav';
import {useState} from 'react';
import Footer from './components/footer';

function App() {

    const [currentPage, setCurrentPage] = useState('about');

    return (
        <>
            <Nav setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            <Outlet />
            <Footer />
        </>
    );
}

export default App;