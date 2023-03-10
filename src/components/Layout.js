import React from 'react'
import { Header } from './Header'

const Layout = ({children}) => {
  return (
    <div>
        {/* header */}
        <Header />

        {/* main body */}
        <div className="main">{children}</div>
        
        {/* footer */}
      <footer className="mt-5 bg-dark text-light p-3 text-center p-5">
        &copy; Copy right all reserved 2023
      </footer>
    </div>
  )
}

export default Layout
