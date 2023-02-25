import React from "react"
import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from './components/Footer'
import data from './data'
export default function App() {
  
  const cards = data.map(item =>{
    return (
      <Card 
      key={item.id}
      item = {item}
      />
    )}
    )
  return (
    <div className="main-app">
    <Navbar/>
    <div className="cards-app">{cards}</div>
    <Footer/>
    </div>
  )
}