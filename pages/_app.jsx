import '../styles/globals.css'
import Nav from '../components/Nav';

function MyApp({ Component, pageProps }) {
  return( 
  <div className='gridd'>
    <div > 
    <Nav/>
    </div>
  <Component {...pageProps} />

  </div>
  );
}

export default MyApp
