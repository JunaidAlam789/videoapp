import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
//import VideoPlayer from './VideoPlayer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      <Link href="https://www.youtube.com/watch?v=NB6ZS6US-hc">Ghuftam</Link>
      </div>
    </main>
  )
}
