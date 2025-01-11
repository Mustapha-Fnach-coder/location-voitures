// import Header from './Layout/Header';
import Footer from './Layout/Footer';
import PropTypes from 'prop-types';
import './layout.css';

const Layout = ({ children }) => {
    Layout.propTypes = {
        children: PropTypes.node.isRequired,
    };
    return (
        <>
            {/* <Header  /> */}
            <Footer  />
            <div className='main-container-admin'>
                {children}
            </div>
        </>
    );

    
};

export default Layout;