import Link from "next/dist/client/link"
import styles from '../components/Header.module.css';

export default function Header() {
    return (
        <div className={styles['navbar']}>
            <h1>Jauhar</h1>
            <ul>
                <li className={styles['text-decoration']}><Link href="/"><a>Home</a></Link></li>
                <li className={styles['text-decoration']}><Link href="/blog"><a>Blog</a></Link></li>
                <li className={styles['text-decoration']}><Link href="/users/dashboard"><a>Dasboard</a></Link></li>
            </ul>
        </div>
    )
}