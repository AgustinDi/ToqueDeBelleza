import css from './Button.module.css';

export default function Button({ content, click }) {
  return (
    <button onClick={click} className={css.button}>{content ? content : 'Falta información'}</button>
  )
}
