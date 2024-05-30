import Header from "./Header"
import MainContent from './MainContent';
import Footer from './Footer';
import HeroSection from "./Hero";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <MainContent />
        <HeroSection />
      <Footer />
    </div>
  );
};

export default LandingPage;