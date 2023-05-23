const fetching = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
}

export default async function ProductsList() {
    const result = await fetching();

    return (
        <div>
            <h2>fetching:</h2>
            |---------------|
            {result.slice(0,5).map(value => 
                <div key={value.id}>
                    <h3>
                        {value.title}
                    </h3>
                    <p>
                        {value.body}
                    </p>
                    <hr/>
                </div>  
            )}
            <div>
            </div>
        </div>
    )
}