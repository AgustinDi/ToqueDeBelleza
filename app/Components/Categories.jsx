import Image from 'next/image';
import css from './Categories.module.css';
import Link from 'next/link';

function Category({value}){
    return (
        <Link href={'/productos/' + value.code}>
        <article className={css.category}>
            <Image src='/LoadingVertical.png' alt={value.name} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            <p className={css.categoryTitle}>
                {value.name}
            </p>
        </article>
        </Link>
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
