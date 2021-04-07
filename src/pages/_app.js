import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/site-style.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:light|Raleway" />
        <Component {...pageProps} />
    </>
);}

export default MyApp
