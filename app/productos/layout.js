import css from './layout.module.css'
import SideMenuCategory from './SideMenuCategory';

export default function sideLayout({ children }) {

  return (
    <div className={css.sideLayout}>
        <SideMenuCategory />
        {children}
    </div>
  )
}
