import Image from 'next/image';
import css from './Categories.module.css';
import Link from 'next/link';

function Category({value}){
    return (
        <article className={css.category}>
            <Link href={'/productos/' + value.code}>
            <Image src='/Loading.png' alt={value.name} width={160} height={200}/>
            <p style={{top: '-100px'}} className={css.categoryTitle}>
                {value.name}
            </p>
            </Link>
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
        {categories.map(value=><Category key={value.code} value={value}/>)}
    </section>
  )
}
