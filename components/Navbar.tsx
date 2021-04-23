import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link';

interface Props {
    
}

// show a home button

// if username show the button to admin page

// if not username show button to sign in

const Navbar = (props: Props) => {
    const username = null;
    const user = null;

    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">
                        <button className={styles.btnHome}>Feed</button>
                    </Link>
                </li>

            { username && (
                <>
                    <li className={styles.pushRight}>
                        <Link href="/admin">
                            <button className={styles.btnAdmin}>New Post</button>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/${username}`}>
                            <img className={styles.roundImage} src={user?.photoURL} />
                        </Link>
                    </li>
                </>
            )}

            { !username && (
                <li>
                    <Link href="/enter">
                        <button className={styles.btnEnter}>Log In</button>
                    </Link>
                </li>
            )}
            </ul>
        </nav>
    )
}

export default Navbar
