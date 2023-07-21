import React, { Component } from 'react'

 class Footer extends Component {
  render() {
    return (
      <>
      
      <div className="flex flex-col min-h-screen">
    <main className="flex-1"></main>
    <footer className="bg-blue-500 p-4 text-white text-center">
      &copy; {new Date().getFullYear()} Emlak Sitesi. All rights reserved.
    </footer>
  </div>

      </>
    )
  }
}
export default Footer;
