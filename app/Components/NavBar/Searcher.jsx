'use client'
import { useState } from 'react';
import css from './Searcher.module.css';
import { useRouter } from 'next/navigation';

export default function Searcher({ isSearching, searched }) {
  const [input, setInput] = useState('')
  const router = useRouter();

  function updateInput (e) {
    setInput(e.target.value)
  }

  function submit(e){
    e.preventDefault();
    if(!e.target['0'].value) return
    router.push('/productos/S/' + e.target['0'].value)
    searched()
    setInput('')
  }

  return (
    <form className={css.searcher} onSubmit={submit} style={{overflowX: 'hidden'}}>
        <input className={css.input} placeholder='Que producto estas buscando?' onChange={updateInput} value={input} name='input'/>
      </form>
  )
}