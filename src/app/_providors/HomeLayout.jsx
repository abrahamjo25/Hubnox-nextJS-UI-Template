import React from 'react'
import Header from '../_components/Header'
import Hero from '../_components/Hero'

const HomeLayout = ({children}) => {
  return (
    <div>
        <Header/>
        <Hero/>
      {children}
    </div>
  )
}

export default HomeLayout
