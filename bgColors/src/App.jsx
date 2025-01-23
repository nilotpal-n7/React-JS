import { useState } from 'react'
import './App.css'

function App() {
  const [r,setR] = useState(150)
  const [g,setG] = useState(50)
  const [b,setB] = useState(250)
  const [a,setA] = useState(7)

  return (
    <div className='absolute w-full h-screen' style={{background: `rgba(${r}, ${g}, ${b}, ${a/10})`}}>
      <div className='m-3 p-1 w-50 outline-5 outline-black outline-offset-3 rounded-md font-mono font-bold text-2sm text-white' style={{backgroundColor: `rgba(27,27,28,1)`}}>
        <div className='my-3 flex'>
          <label htmlFor='r' className='text-center w-7 mx-3 rounded-tl-lg rounded-br-lg rounded-tr-sm rounded-bl-sm bg-red-500 w-1/3'>R:</label>
          <input value={r} type='range' min='0' max='255' onChange={(evt) => setR(evt.target.value)} style={{accentColor: `rgba(${r}, 0, 0, 1)`}}/>
        </div>
        <div className='my-3 flex'>
          <label htmlFor='g' className='text-center w-7 mx-3 rounded-tl-lg rounded-br-lg rounded-tr-sm rounded-bl-sm bg-green-500 w-1/3'>G:</label>
          <input value={g} type='range' min='0' max='255' onChange={(evt) => setG(evt.target.value)} style={{accentColor: `rgba(0, ${g}, 0, 1)`}}/>
        </div>
        <div className='my-3 flex'>
          <label htmlFor='b' className='text-center w-7 mx-3 rounded-tl-lg rounded-br-lg rounded-tr-sm rounded-bl-sm bg-blue-500 w-1/3'>B:</label>
          <input value={b} type='range' min='0' max='255' onChange={(evt) => setB(evt.target.value)} style={{accentColor: `rgba(0, 0, ${b}, 1)`}}/>
        </div>
      </div>
      <div className='mx-3 my-5 p-1 w-50 outline-5 outline-black outline-offset-3 rounded-md bg-white font-mono font-bold text-2sm text-white' style={{backgroundColor: `rgba(45,45,48,1)`}}>
        <div className='my-3 flex'>
          <label htmlFor='a' className='text-center w-7 mx-3 rounded-tl-lg rounded-br-lg rounded-tr-sm rounded-bl-sm bg-gray-500 w-1/3 outline-2 outline-black outline-offset-2'>α:</label>
          <input value={a} type='range' min='0' max='10' onChange={(evt) => setA(evt.target.value)} style={{accentColor: `rgba(${r}, ${g}, ${b}, ${a/10})`}}/>
        </div>
      </div>
    </div>
  )
}

export default App
