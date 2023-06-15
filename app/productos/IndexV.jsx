import Link from "next/link";


export default function IndexV({category, individual}) {
    console.log(category, individual)
  return (
        <h4>
            <Link href={`/productos`}>Productos</Link>
             {category && ' > '} 
             {category && <Link href={`/productos/${category}`}>{category}</Link>}
             {individual && ' > '} 
             {individual && <Link href={`/producto/${individual}`}>{individual}</Link>}
        </h4>
  )
}
