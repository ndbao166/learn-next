import React from 'react'

const AdminLayout = ({ children , team, user }: { children: React.ReactNode , team: React.ReactNode , user: React.ReactNode }) => {
  return (
    <div>
        <div>AdminLayout</div>
        <div>
            {children}
        </div>
        <div>
            {team}
        </div>
        <div>
            {user}
        </div>
    </div>
  )
}

export default AdminLayout