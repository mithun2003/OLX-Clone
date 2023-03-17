import React, { useContext, useEffect } from 'react'
import Banner from '../Components/Banner/Banner'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Posts from '../Components/Posts/Posts'
import { AuthContext } from '../store/Context'
import firebase from '../firebase/config'
const Home = () => {
  const {setUser} = useContext(AuthContext)
  useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
        setUser(user)
      })
  }, [setUser])
  return (
    <>
    <div>
        <Header/>
      <Banner/>
      <Posts/>
      <Footer/>
    </div>
    </>
  )
}

export default Home
