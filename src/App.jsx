import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import MainContainer from './Components/Main/MainContainer/MainContainer'
 import ImageContainer from './Components/Main/ImageContainer/ImageContainer'
import ShareContainer from './Components/Share/ShareContainer'
import Data from './Components/Data/Data'
import Feedback from './Components/feedback/feedbackContainer'
import Feedback1 from './Components/Feedback2/Feedback2'
import ArchiveOfProgress from './Components/ArchiveOfProgress/Archive'
import Testimonials from './Components/Testimonials/Testimonials'
import Desginfolder from './Components/Desginfolder/Desginfolder'
import TeamVisibility from './Components/TeamVisibility/TeamVisibility'
import Footer from './Components/Footer/Footer'
import Moblie from './Components/Moblie/Moblie'
function App() {
  return (
    <>
      <Header/>
      <MainContainer/>
      <ImageContainer/>
      <Data/>
      <ShareContainer/>
      <Feedback/>
      <Feedback1/>
      <ArchiveOfProgress/>
      <Testimonials/>
      <Desginfolder/>
      <Moblie/>
      <TeamVisibility/>
      <Footer/>
    </>
  )
}

export default App
