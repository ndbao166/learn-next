import React from 'react'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const DemoPage = async () => {
  await delay(2000);
  return (
    <div>DemoPage</div>
  )
}

export default DemoPage