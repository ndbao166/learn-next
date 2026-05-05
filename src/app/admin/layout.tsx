import Link from 'next/link'
import React from 'react'

const AdminLayout = ({ children , team, user }: { children: React.ReactNode , team: React.ReactNode , user: React.ReactNode }) => {
  return (
    <div>
        <div>AdminLayout</div>
        
        <ul>
          <li><Link href="/admin/setting">Setting</Link></li>
          <li><Link href="/admin">Admin</Link></li>
        </ul>

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