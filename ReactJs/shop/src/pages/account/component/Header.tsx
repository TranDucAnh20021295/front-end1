import React from 'react'
import { Header } from '../../../components/header'

export const AccountHeader = () => {
  return (
    <div>
        <Header title="My Account" data={[
            {
                title: "Home",
                to: "/home"
            },
            {
                title: "My account",
                to: "/account"
            }
        ]}/>
    </div>
  )
}
