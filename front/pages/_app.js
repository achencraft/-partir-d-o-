import Navbar from '../components/shared/navbar'
import Home from '../components/home'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head';



function MyApp({ Component, pageProps }) {


    const CSS =  `
    .react-select__menu { z-index: 100; }
    `;

  return (
    <>
        <style>{CSS}</style>

        <Head>
            <title>À partir d'où ?</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />     

        <Home />


    </>

  )


}
export default MyApp