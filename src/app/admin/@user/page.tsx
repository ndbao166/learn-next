import React from 'react'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const UserPage = async () => {
  await delay(2000);
  return (
    <div>UserPage</div>
  )
}

export default UserPage