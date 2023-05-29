import React from 'react'
import css from './Searcher.module.css';

export default function Searcher() {
  return (
    <div className={css.searcher}>
        <input className={css.input} placeholder='Que estas buscando?'/>
    </div>
  )
}