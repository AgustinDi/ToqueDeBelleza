import './Button.css';

export default function Button({ content, click, data }) {
  return (
    <button onClick={click} className='button'>{content ? content : 'Falta información'}</button>
  )
}
