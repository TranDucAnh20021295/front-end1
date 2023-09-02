import React from 'react'
import { Header } from '../../../components/header'

export const ContactHeader = () => {
  return (
    <div>
        <Header title="Contact" data={[
          {
            title: "Home",
            to: "/home"
          },
          {
            title: "Contact",
            to: "/contact"
          }
        ]}/>
    </div>
  )
}
