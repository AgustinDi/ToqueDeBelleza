import '../../productos/layout.css';
import './page.css';
import SideMenuCategory from '../../productos/SideMenuCategory.jsx';

export default function sideLayout({ children, params }) {

  return (
    <>
    <div className='sideLayout'>
        <SideMenuCategory params={params}/>
        {children}
    </div>
    </> 
  )
}
