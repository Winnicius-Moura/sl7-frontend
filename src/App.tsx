import './styles/main.css';
import logoImg from './assets/sl7Logo.png';
import { Input } from './components/CreateNewInput';
import { NewInputRedux } from './components/NewInputRedux';

function App(){
  return (
    <div className='max-w-[1440px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="" />
      <h1 className='text-5xl text-white font-black mt-20 px-4 text-center'>
        Teste de proficiencia em <span className='text-transparent bg-sl7-gradient bg-clip-text'>react</span>
      </h1>

      <div className='flex flex-col gap-10 lg:flex-row'>
        <Input />

        <NewInputRedux name={''}/>

      </div>
      

    </div>
  )
}

export default App