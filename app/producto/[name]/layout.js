import '../../productos/layout.css'
import SideMenuCategory from '../../productos/SideMenuCategory.jsx';

export default function sideLayout({ children, params }) {

  return (
    <>
    <div className='sideLayout'>
        <SideMenuCategory />
        {children}
    </div>
    </> 
  )
}
