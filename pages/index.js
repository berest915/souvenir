import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Banner from "../coms/Banner/Banner"
import Nav from '../coms/Nav/Nav'


export default function Home() {
  return (
    <>
      <Banner />
      <Nav />
    </>
  )
}
