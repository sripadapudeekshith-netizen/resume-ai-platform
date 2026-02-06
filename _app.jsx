import '../styles/global.css';
import '../styles/glass.css';
import '../styles/logoAnimation.css';
import GlassNavbar from '../components/glass-ui/GlassNavbar';
import AnimatedBackground from '../components/glass-ui/AnimatedBackground';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AnimatedBackground />
      <GlassNavbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
