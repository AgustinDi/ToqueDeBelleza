import Image from 'next/image'
import {data} from './Products.json'

export default async function ProductsList() {
    return (
        <div>
            <h2>fetching:</h2>
            |---------------|
            {data.map(value => 
                <div key={value.name}>
                    <Image src={value.image} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={100} height={100} alt={value.title}/>
                    <h3>
                        {value.name}
                    </h3>
                    <p>
                        {value.description}
                    </p>
                    <hr/>
                </div>  
            )}
            <div>
            </div>
        </div>
    )
}