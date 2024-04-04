// pages/_app.js
import Head from 'next/document';
import Footer from '../components/footer';
import NavBar from '../components/navBar';
import '../styles/global.css'; // Adjust the path to your global CSS file as needed

function MyApp({ Component, pageProps }) {
    return (
        <>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
