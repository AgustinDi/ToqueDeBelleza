import './DifuminedBorder.css'

export default function DifuminedBorder({ horizontal }) {

  return (
    <div className={`${horizontal ? null : 'verticalDifuminedBorder' }`}></div>
  )
}
