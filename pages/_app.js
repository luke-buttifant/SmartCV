import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import '../styles/globals.css'
import Head from "next/head"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Sidebar from "../components/Sidebar/Sidebar";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}
)
{
  if (typeof window !== 'undefined') {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  



  return (
    <>
    <Head>
      <title>SmartIV</title>
      <meta name="title" content="SmartIV" />
      <meta name="description" content="A dynamic Resume Builder" />
      <meta name="keywords" content="CV, Resume, CV Builder, Resume Builder" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Luke Buttifant" />
    </Head>
    <Sidebar />
      <Component {...pageProps} />
    </>
  )
}