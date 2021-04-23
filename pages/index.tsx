import React from 'react'
import Link from 'next/link'
import Loader from '../components/Loader'

interface Props {
  
}


const Home = (props: Props) => {
  return (
    <div>
      <Loader show />
    </div>
  )
}

export default Home
