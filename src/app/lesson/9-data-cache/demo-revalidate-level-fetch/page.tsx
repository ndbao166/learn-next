import React from 'react'

const page = async () => {
  const name = await fetch('http://localhost:3001/lesson/9-data-cache/api/name', {
    next: {
      revalidate: 30,
    },
  });
  const number = await fetch('http://localhost:3001/lesson/9-data-cache/api/number', {
    next: {
      revalidate: 60,
    },
  });
  const nameData = await name.json();
  const numberData = await number.json();
  return (
    <div>
      <h1>{nameData.name}</h1>
      <h1>{numberData.number}</h1>
    </div>
  )
}

export default page
