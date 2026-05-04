import React from 'react'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const TeamPage = async () => {
  await delay(5000);

  return (
    <div>TeamPage</div>
  )
}

export default TeamPage