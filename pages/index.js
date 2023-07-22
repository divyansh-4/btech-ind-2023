import SEO from '../components/common/SEO';
import Gallery from '../components/layout/Gallery';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <>
      <SEO />
      <Header />
      <Gallery />
      <Footer />
    </>
  );
}
