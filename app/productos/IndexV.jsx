import Link from "next/link";

import './IndexV.css';

export default function IndexV({category, individual}) {
  return (
        <h4 className="indexVcontainer">
            <Link className="indexVitem indexVitemProduct" href={`/productos`}>Productos</Link>
            <br className="indexVBr"/>
             {category && ' > '}
             {category && <Link className="indexVitem" href={`/productos/${category}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</Link>}
             {individual && ' > '} 
             {individual && <Link className="indexVitem" href={`/producto/${individual}`}>{individual.charAt(0).toUpperCase() + individual.slice(1)}</Link>}
        </h4>
  )
}
