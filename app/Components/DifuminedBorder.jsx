import css from'./DifuminedBorder.module.css'

export default function DifuminedBorder({ horizontal }) {

  return (
    <div className={`${horizontal ? null : css.verticalDifuminedBorder }`}></div>
  )
}
