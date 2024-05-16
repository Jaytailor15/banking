import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar';
import React from 'react'

const Home = () => {
  const loggedIn = {firstName:'Jay', lastName:'Tailor', email:'jaytailor15@gmail.com'};
  
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
          type="greeting"
          title="Welcome,"
          user={loggedIn?.firstName || 'Guest'}
          subtext = "Access and manage your account and transaction efficiently."/>
        </header>
        RECENT TRANSACTIONS
      </div>
      
      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:132.50}, {currentBalance:150.60}]}
      />
    </section>
  )
}

export default Home
