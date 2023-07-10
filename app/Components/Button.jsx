import './Button.css';

export default function Button({ content, click }) {
  return (
    <button onClick={click} className='button'>{content ? content : 'Falta información'}</button>
  )
}
