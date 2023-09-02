import React from 'react'
import { TaskBar } from '../../components/TaskBar/TaskBar'
import { AccountHeader } from './component/Header'
import { Sale } from '../../components/Sale'
import { Footer } from '../../components/footer'
import { Login } from './component/Login'

export const AccountPage = () => {
  return (
    <div>
        <TaskBar/>
        <AccountHeader/>
        <Login/>
        <Sale/>
        <Footer/>
    </div>
  )
}
