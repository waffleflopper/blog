import React from 'react'
import Loader from '../components/Loader'
import toast from 'react-hot-toast'

interface Props {
  
}


const Home = (props: Props) => {
  return (
    <main>
      <Loader show={false}/>
      <button onClick={() => toast.success('toast message test')} >Toast it</button>
    </main>
  )
}

export default Home
