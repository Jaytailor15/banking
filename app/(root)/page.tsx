import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home =  async() => {
  const loggedIn = await getLoggedInUser();
  
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
          type="greeting"
          title="Welcome,"
          user={loggedIn?.name || 'Guest'}
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
