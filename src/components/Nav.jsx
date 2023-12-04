import {Link} from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav({setCurrentPage, currentPage}) {
    return (
        <Navbar
            links={[
                <Link key={1} onClick={() => setCurrentPage('portfolio')} className={currentPage === 'portfolio' ? 'active' : 'nav-link'} 
                to='/portfolio' >Portfolio</Link>,
                <Link key={2} onClick={() => setCurrentPage('about')} className={currentPage === 'about' ? 'active' : "nav-link"} to="/">About Me</Link>,
                <Link key={3} onClick={() => setCurrentPage('contact')} className={currentPage === 'contact' ? 'active' : "nav-link"} to="/contact">Contact</Link>,
                <Link key={4} onClick={() => setCurrentPage('resume')} className={currentPage === 'resume' ? 'active' : "nav-link"} to="/resume">Resume</Link>
            ]}
        />
    );
}