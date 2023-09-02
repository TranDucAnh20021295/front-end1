import React from 'react'
import { ContactHeader } from './component/Header'
import { TaskBar } from '../../components/TaskBar'
import { Sale } from '../../components/Sale'
import { Footer } from '../../components/footer'
import { ContactContent } from './component/ContactContent'

export const ContactPage = () => {
  return (
    <div>
        <TaskBar/>
        <ContactHeader/>
        <ContactContent/>
        <Sale/>
        <Footer/>
    </div>
  )
}
