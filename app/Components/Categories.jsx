import Image from 'next/image';
import css from './Categories.module.css';

function Category({value}){
    return (
        <article className={css.category}>
            <Image src='/Loading.png' alt={value.name} width={160} height={200}/>
            <p style={{top: '-100px'}} className={css.categoryTitle}>
                {value.name}
            </p>
        </article>
    )
}

export default function Categories() {
    const categories = [{
            name: "Nutriciones",
            code: "Nutrición"
        },{
            name: "Ampollas emulsionantes",
            code: "Ampolla emulsionante"
        },{
            name: "Shampoo y Acondicionadores",
            code: "Shampoo y Acondicionador"
        },
    ]

  return (
    <section className={css.categories}>
        {categories.map(value=><Category value={value}/>)}
    </section>
  )
}
