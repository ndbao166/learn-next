import React from 'react'

const UserPage = async ({ params }: { params: { id: Promise<string> } }) => {
  const { id } = await params;
  return <div>UserPage {id}</div>;
};

export default UserPage;