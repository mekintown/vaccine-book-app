import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import Card from '@/components/Card'
import HospitalCards from '@/components/HospitalCards'

export default function Home() {
  return (
    <main>
      <Banner/>
      <HospitalCards/>
    </main>
  )
}
