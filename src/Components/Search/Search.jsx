import React from 'react'
// import {AllPostContext} from "..//../contextStore/AllPostContext"
// import { PostContext } from '../../contextStore/PostContext'
import SearchIcon from "..//../assets/SearchIcon"
// import CloseIcon from "..//../assets/CloseIcon/CloseIcon"
// import { useHistory } from 'react-router'
import "./Search.css"
function Search() {
//     const {allPost,setAllPost}=useContext(AllPostContext)
//     const {setPostContent}=useContext(PostContext)
//     const history=useHistory()
    
//   const [filteredData, setFilteredData] = useState([]);
//   const [wordEntered, setWordEntered] = useState("");

//   const handleFilter = (event) => {
//     const searchWord = event.target.value;
//     setWordEntered(searchWord);
//     const newFilter = allPost.filter((value) => {
//       return value.name.toLowerCase().includes(searchWord.toLowerCase())||value.category.toLowerCase().includes(searchWord.toLowerCase());
//     });

//     if (searchWord === "") {
//       setFilteredData([]);
//     } else {
//       setFilteredData(newFilter);
//     }
//   };

//   const clearInput = () => {
//     setFilteredData([]);
//     setWordEntered("");
//   };
//   const handleSelectedSearch=(item)=>{
//        setPostContent(item)
//        history.push("/view")
//   }
//   const handleSearchClick=()=>{
//     if(filteredData.length===0){
//      alert("No items found.., please search by product category or product name");
//      }
     
//      else {setAllPost(filteredData);
//      history.push("/viewmore")}
     
//   }
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Find Cars,Mobile,Motorcycles and more..."
        />
        <div className="searchIcon">
          
           <div ><SearchIcon /></div>
           
            {/* <div id="clearBtn" ><CloseIcon/></div> */}
       
        </div>
      </div>
     
        {/* <div className="dataResult">
       
              <div className="dataItem">
                <p> </p>
              </div>
          
        </div> */}
     
    </div>
  );
}

export default Search
