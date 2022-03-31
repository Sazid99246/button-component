import './App.css';
import { MdAddShoppingCart } from 'react-icons/md';
function App() {
  return (
    <div className='mt-53 ml-320 mr-96'>
      <h1 className='font-head font-medium text-head container'>Buttons</h1>
      <Button></Button>
      <p className='mt-12'>
      <small>Icons: https://material.io/resources/icons/?style=round</small><br />
      <small>created by Sazid99146 - devChallenges.io</small>

      </p>

    </div>
  );
}

const Button = () => {
  return (
    <div className='font-button'>
      <button className='block h-9 w-81 mt-12 rounded-md text-zinc-750 bg-gray-150 drop-shadow-3xl hover:bg-gray-450 focus:bg-gray-450'>Default</button>
      <button className='block h-9 w-88 mt-12 rounded-md text-blue-450 border-blue-450 border  hover:bg-blue-550/10 focus:bg-blue-550/10'>Default</button>
      <button className='block h-9 w-88 mt-12 rounded-md text-blue-450 hover:bg-blue-550/10 focus:bg-blue-550/10'>Default</button>
      <button className='block h-9 w-81 mt-12 rounded-md text-white bg-blue-450/100'>Default</button>
      <div className='flex mt-12 justify-between'>
        <button disabled className='h-9 w-88 bg-gray-150 rounded-md'>Disabled</button>
        <button disabled className='h-9 w-88'>Disabled</button>
      </div>
      <div className='flex mt-12 justify-between'>
        <button className='flex items-center justify-center h-9 w-105 bg-blue-550/100 rounded-md text-white/100'>
          <MdAddShoppingCart/>
          Default
        </button>
        <button className='h-9 flex items-center justify-center w-105 bg-blue-550/100 rounded-md text-white/100'>
          Default
          <MdAddShoppingCart/>
        </button>
      </div>
      <div className='flex mt-12 justify-between'>
        <button className='h-8 w-18 bg-blue-550/100 text-white/100 rounded-md'>Default</button>
        <button className='h-9 w-81 bg-blue-550/100 text-white/100 rounded-md'>Default</button>
        <button className='h-42 w-93 bg-blue-550/100 text-white/100 rounded-md'>Default</button>
      </div>
      <div className='flex mt-12 justify-between'>
        <button className='rounded-md h-9 w-81 bg-gray-150/100 drop-shadow-3xl hover:bg-gray-450/100'>Default</button>
        <button className='rounded-md h-9 w-81 bg-blue-550/100 drop-shadow-4xl text-white/100 hover:bg-slate-550/100'>Primary</button>
        <button className='rounded-md h-9 w-104 bg-stone-950/100 drop-shadow-5xl text-white/100 hover:bg-stone-975/100'>Secondary</button>
        <button className='rounded-md h-9 w-81 bg-cyan-150/100 drop-shadow-6xl text-white/100 hover:bg-cyan-175/100'>Danger</button>
      </div>
    </div>
  );
};

export default App ;
