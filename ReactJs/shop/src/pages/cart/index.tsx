import { Sale } from '../../components/Sale'
import { TaskBar } from '../../components/TaskBar'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import { CartContent } from './component/CartContent'

export const CartPage = () => {
  return (
    <div>
        <TaskBar/>
        <Header title="Cart" data={[
          {
            title: "Home",
            to: "/home"
          },
          {
            title: "Cart",
            to: "/cart"
          }
        ]}/>
        <CartContent/>
        <Sale/>
        <Footer/>
    </div>
  )
}
