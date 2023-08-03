import './Categories.css';
import Link from 'next/link';

function Category({value}){
    return (
        <Link href={'/productos/' + value.code}>
            <div className='categoryContainer'>
                {value.name}
            </div>
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
            code: "Kit"
        },
    ]

  return (
    <section className='categories'>
        {categories.map(value=><Category key={value.code} value={value}/>)}
    </section>
  )
}
