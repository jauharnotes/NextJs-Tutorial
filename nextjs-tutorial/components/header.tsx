import Link from "next/dist/client/link"
import styles from '../components/css/Header.module.css';

export default function Header() {
    return (
        <div className={styles['navbar']}>
            <h1>Jauhar</h1>
            <ul>
                <li className={styles['nav_space']}><Link href="/"><a>Home</a></Link></li>
                <li className={styles['nav_space']}><Link href="/blog"><a>Blog</a></Link></li>
                <li className={styles['nav_space']}><Link href="/users/dashboard"><a>Dasboard</a></Link></li>
            </ul>
        </div>
    )
}