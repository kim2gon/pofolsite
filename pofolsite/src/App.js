import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Navbar from './components/navbar';
import Section1 from './sections/section1';
import Section2 from './sections/section2';
import Section3 from './sections/section3';
import Section4 from './sections/section4';
import Section5 from './sections/section5';
import Section6 from './sections/section6';


function App() {
  return (
    <div className='flex flex-col w-full h-full'>
      <Header />
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
}

export default App;
