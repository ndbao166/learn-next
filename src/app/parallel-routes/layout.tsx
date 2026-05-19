import Link from 'next/link'
import React from 'react'

const AdminLayout = ({ children , slot }: { children: React.ReactNode , slot: React.ReactNode }) => {
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
            {slot}
        </div>
    </div>
  )
}

export default AdminLayout