'use client'
import { useState } from 'react';
import './Searcher.css';
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
    <form className='searsearcher' onSubmit={submit} style={{overflowX: 'hidden'}}>
        <input className='searinput' placeholder='Que producto estas buscando?' onChange={updateInput} value={input} name='input' style={{boxShadow: isSearching ? 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px' : 'none', borderBottom: isSearching ? '1px solid var(--color-pinky)' : '1px solid transparent'}}/>
    </form>
  )
}