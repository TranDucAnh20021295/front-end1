import React from 'react'
import { TaskBar } from '../../components/TaskBar'
import { Header } from './component/Header'
import { ResultInfo } from './component/ResultInfo'
import { ResultContent } from './component/ResultContent'
import { Sale } from './component/Sale'
import { Footer } from '../../components/footer'

export function ShopPage() {
  return (
    <div>
        <TaskBar/>
        <Header/>
        <ResultInfo/>
        <ResultContent/>
        <Sale/>
        <Footer/>
    </div>
  )
}
