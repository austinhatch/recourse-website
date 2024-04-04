import styles from '../styles/NavBar.module.css'
import { useRouter } from 'next/router';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function NavBar() {
    const router = useRouter();

    const launchApp = () => {
        window.open('https://recourse.golf', '_blank').focus();
    }

    const handleGoHome = () => {
        router.push('/');
    };

    return (
        <div className={styles.container}>
            <Toolbar>
                <img className={styles.logo} src='https://storage.googleapis.com/recourse-assets/logos/recourse.gif' alt='recourse-gif' onClick={handleGoHome} />
                <Link href="/" passHref>
                    <Button color="inherit">Home</Button>
                </Link>
                <Link href="/about" passHref>
                    <Button color="inherit">About</Button>
                </Link>
                {/* Add more links or buttons here */}
            </Toolbar>
            <button className={styles.launchButton} onClick={launchApp}>Launch App</button>
        </div>
    )
}