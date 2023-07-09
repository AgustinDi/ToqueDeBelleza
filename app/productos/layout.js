import './layout.css'
import SideMenuCategory from './SideMenuCategory';

export default function sideLayout({ children }) {

  return (
    <div className='sideLayout'>
        <SideMenuCategory />
        {children}
    </div>
  )
}
