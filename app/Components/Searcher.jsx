'use client'
import css from './Searcher.module.css';
import { useRouter } from 'next/navigation';

export default function Searcher({ isSearching }) {
  const router = useRouter();

  function submit(e){
    e.preventDefault();
    if(!e.target['0'].value) return
    router.push('/productos/S/' + e.target['0'].value)
  }

  return (
    <form className={css.searcher} onSubmit={submit} style={{overflowX: 'hidden'}}>
        <input className={css.input} placeholder='Que producto estas buscando?' name='input'/>
      </form>
  )
}