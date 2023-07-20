import Link from "next/link";

import './IndexV.css';

export default function IndexV({category, individual}) {
  return (
        <h4 className="indexVcontainer">
            <Link className="indexVitem" href={`/productos`}>Productos</Link>
             {category && ' > '} 
             {category && <Link className="indexVitem" href={`/productos/${category}`}>{category}</Link>}
             {individual && ' > '} 
             {individual && <Link className="indexVitem" href={`/producto/${individual}`}>{individual}</Link>}
        </h4>
  )
}
