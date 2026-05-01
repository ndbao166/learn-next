const page = async () => {
    const name = await fetch('https://randomuser.me/api',
        {
            next: {
                tags: ['name'],
            },
        }
    );
    const number = await fetch('https://api.api-ninjas.com/v2/randomquotes?categories=success,wisdom',
        {
            headers: {
                'X-Api-Key': "mJBuDR9bq0St5dQybKgSrsgIZsXKJd6qQ08nXsN6",
            },
            next: {
                tags: ['number'],
            },
        }
    );

    const nameData = await name.json();
    const numberData = await number.json();

    return (
        <div>
            <h1>Demo Revalidate Path</h1>
            <h1>{nameData.results[0].name.first}</h1>
            <h1>{numberData[0].quote}</h1>
        </div>
    )
}

export default page
