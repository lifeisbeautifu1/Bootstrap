import {
  Navbar,
  Header,
  GetStarted,
  Installation,
  Customize,
  Build,
  Section,
  Section2,
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
      <Section />
      <Section2 />
    </div>
  );
};

export default App;
