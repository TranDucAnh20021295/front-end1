import { Header } from '../../../components/header'
export function ShopHeader() {
  return (
    <div>
      <Header title="Shop" data={[
          {
            title: "Home",
            to: "/home"
          },
          {
            title: "Shop",
            to: "/shop"
          }
        ]}/>
    </div>
  )
}
