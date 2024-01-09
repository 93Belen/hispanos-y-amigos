import './App.css';
import Event from './components/Event';
import Header from './components/Header';

function App() {

  
  return (
    <div className='app p-6 md:px-20 md:py-10 h-screen flex flex-col justify-between'>
      <div>
      <Header/>
      <div className='flex flex-col gap-6 py-8 md:max-w-[800px] md:pt-36'>
        <h1 className='text-[40px] md:text-[64px]'>Hispanos y Amigos Tech-KC</h1>
        <p className='text-[20px]'>
        Hispanos y Amigos Tech-KC is a tech club specifically designed to support and empower 
        Hispanic individuals pursuing tech careers in the Kansas City area. Our mission is to 
        cultivate a strong sense of community, help each other develop our skills, provide 
        networking opportunities, and, of course, have fun along the way.But, as our name suggests,
        we extend a warm welcome to more than just Hispanics; we embrace all 'Amigos' from 
        diverse backgrounds who are eager to contribute to our growth and grow with us. 
        Because, as we like to say: 'Mi Club es su Club'.
        </p>
      </div>
      </div>
      <Event/>
  </div>
  );
}

export default App;
