import React from 'react'
import './App.css'
import Landing from "./Landing"
import CardLeft from './CardTextLeft'
import CardRight from './CardTextRight'
import TVCardImg from "./assets/TVCardImg.png"
import TVCardImg2 from "./assets/TVCardImg2.png"
import TVCardImg3 from "./assets/TVCardImg3.png"
import TVCardImg4 from "./assets/TVCardImg4.png"
import CardSeparator from './CardSeparator'
import FAQ from "./FAQ"
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Landing />
      <CardLeft 
        title = "Enjoy on your TV"
        desc = "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        imgSrc = {TVCardImg}
      />
      <CardSeparator />
      <CardRight 
        title = "Watch everywhere"
        desc = "Stream unlimited films and TV programmes on your phone, tablet, laptop and TV."
        imgSrc = {TVCardImg2}
      />
      <CardSeparator />
      <CardLeft 
        title = "Create profiles for children"
        desc = "Send children on adventures with their favourite characters in a space made just for them – free with your membership."
        imgSrc = {TVCardImg3}
      />
      <CardSeparator />
      <CardRight 
        title = "Download your programmes to watch offline"
        desc = "Watch on a plane, train or submarine..."
        imgSrc = {TVCardImg4}
      />
      <CardSeparator />
      <FAQ />
      <CardSeparator />
      <Footer />
    </div>
  )
}

export default App
