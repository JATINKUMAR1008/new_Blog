import Image from 'next/image'
import styles from './page.module.css'
import Heropage from '../../components/Heropage'
import RecentPage from '../../components/RecentPage'
import Footer from '../../components/Footer'
export default function Home() {
  return (
    <>
      <Heropage/>
      <RecentPage/>
      <Footer/>
    </>
  )
}
