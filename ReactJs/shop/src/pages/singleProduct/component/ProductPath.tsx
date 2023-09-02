import { Breadcrumb } from '../../../components/Breadcrumb'

export function ProductPath() {
  return (
    <div className='mx-24'>
      <Breadcrumb data={[
        {
          title: 'Home',
          to: "/home"
        },
        {
          title: 'Shop',
          to: "/shop"
        },
        {
          title: 'Asgaard sofa',
          to: "/product"
        }
      ]
      }/>
    </div>  
  )
}
