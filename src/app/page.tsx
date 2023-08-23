import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import Card from '@/components/Card'

export default function Home() {
  return (
    <main>
      <Banner/>
      <Card imgSrc="/img/vaccination2.png" txt="Strengthen Your Immunity, Guard Your Loved Ones, and Contribute to a Healthier Community. Choose Protection, Choose Vaccination."/>
    </main>
  )
}
