import React from 'react'

const SettingLayout = ({ children , demo }: { children: React.ReactNode , demo: React.ReactNode }) => {
  return (
    <>
        <div>SettingLayout</div>
        <div>
            {demo}
        </div>
        <div>
            {children}
        </div>
    </>
  )
}

export default SettingLayout