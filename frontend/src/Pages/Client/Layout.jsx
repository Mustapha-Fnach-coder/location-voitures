import Header from './Layout/Header';
import Footer from './Layout/Footer';
import PropTypes from 'prop-types';
import './layout.css';

const Layout = ({ children }) => {
    Layout.propTypes = {
        children: PropTypes.node.isRequired,
    };
    return (
        <>
            <Header  /> 
            <div className='main-container-client'>
                {children}
            </div>
            <Footer  />
        </>
    );

    
};

export default Layout;