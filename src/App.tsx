import {
  Navbar,
  Header,
  GetStarted,
  Installation,
  Customize,
  Build,
  Components,
  Powerful,
  Section,
  Section2,
  Footer
} from './components';

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <Header />
      <GetStarted />
      <Installation />
      <Customize />
      <Build />
      <Components />
      <Powerful />
      <Section />
      <Section2 />
      <Footer />
    </div>
  );
};

export default App;
