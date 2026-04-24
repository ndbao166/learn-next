import React from 'react'

export const revalidate = 60;

const page = async () => {
  const name = await fetch('http://localhost:3001/lesson/9-data-cache/api/name');
  const nameData = await name.json();
  const number = await fetch('http://localhost:3001/lesson/9-data-cache/api/number');
  const numberData = await number.json();
  return (
    <div>
      <h1>{nameData.name}</h1>
      <h1>{numberData.number}</h1>
    </div>
  )
}

export default page
