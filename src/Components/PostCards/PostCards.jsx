import React, { useContext, useEffect, useState } from 'react'
import Heart from '../../assets/Heart'
import './PostCards.css'
import { PostContext } from '../../store/PostContext'
import { useNavigate } from 'react-router-dom'
import { FirebaseContext } from '../../store/Context'
import firebase from '../../firebase/config'
function PostCards() {
  const navigation=useNavigate()
  const { Firebase } = useContext(FirebaseContext)

  const [products, setProducts] = useState([])
  let {setPostContent}=useContext(PostContext)
  useEffect(() => {
    firebase.firestore().collection('products').get().then((snapshot)=>{
        const allPosts = snapshot.docs.map((product)=>{
          return{
            ...product.data(),
            id:product.id
          }
        })
        setProducts(allPosts)
    })
  }, [])
  return (
    <>
   {products.map(product =>{
    return(
     <div className="card" key={product.id} onClick={()=>{
        setPostContent(product)
        console.log(product.id)
        navigation('/view')
     }}>
     <div className="favorite">
       <Heart/>
     </div>
     <div className="image">
       <img src={product.url} alt="" />
     </div>
     <div className="content">
       <p className="rate">&#x20B9; {product.price}</p>
       <span className="category"> {product.category} </span>
       <p className="name"> {product.name}</p>
     </div>
     <div className="date">
       <span>{product.createAt}</span>
     </div>
 </div>
 
    )
   })
  }
  </>
  )
  
}
export default PostCards
