import Header from './components/Header';
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'

const App = () => {

  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;


// const [navOpen, setNavOpen] = useState(false)
// const handleMenuClick = () => {
//   setNavOpen(prev => !prev)
// }
