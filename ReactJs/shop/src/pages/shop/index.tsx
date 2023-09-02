import { TaskBar } from '../../components/TaskBar/TaskBar'
import { ShopHeader } from './component/Header'
import { ResultInfo } from './component/ResultInfo'
import { ResultContent } from './component/ResultContent'
import { Sale } from '../../components/Sale/Sale'
import { Footer } from '../../components/footer'

export function ShopPage() {
  return (
    <div>
        <TaskBar/>
        <ShopHeader/>
        <ResultInfo/>
        <ResultContent/>
        <Sale/>
        <Footer/>
    </div>
  )
}
