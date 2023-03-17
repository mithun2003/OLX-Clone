
import React, { createContext,useState } from "react";


export const PostContext = createContext()

export default function ContextPost({children}){
    const[postContent,setPostContent]=useState([])

    return (
        <PostContext.Provider value={{postContent,setPostContent}}>
            {children}
        </PostContext.Provider>
    )
}
