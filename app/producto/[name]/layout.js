import css from '../../productos/layout.module.css'
import SideMenuCategory from '../../productos/SideMenuCategory.jsx';

export default function sideLayout({ children, params }) {

  return (
    <>
    <div className={css.sideLayout}>
        <SideMenuCategory />
        {children}
    </div>
    </> 
  )
}
