import React, { useContext } from "react";

import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import SearchIcon from "../../assets/SearchIcon";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { Link, useNavigate } from "react-router-dom";
import Search from "../Search/Search";
import { AuthContext, FirebaseContext } from "../../store/Context";
import { getAuth, signOut } from 'firebase/auth'

function Header() {
  //   const{allPost}=useContext(AllPostContext)
  //   const{setPostContent}=useContext(PostContext)
  //   const history = useHistory();
  //   const [filteredData, setFilteredData] = useState([]);
  //   const [wordEntered, setWordEntered] = useState("");
  //   const handleFilter = (event) => {
  //     const searchWord = event.target.value;
  //     setWordEntered(searchWord);
  //     const newFilter = allPost.filter((value) => {
  //       return value.name.toLowerCase().includes(searchWord.toLowerCase());
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
  //   const handleSelectedSearch=(value)=>{
  //        setPostContent(value)
  //        history.push("/view")

  //   }
  //   const handleEmptyClick=()=>{
  //      alert("No items found.., please search by product name");
  //   }
  const {Firebase} = useContext(FirebaseContext)
  const auth = getAuth(Firebase)
  const { user } = useContext(AuthContext);
  const navigte = useNavigate()
    const handleLogout = () => {
      window.confirm("Do you want to logout?")
        signOut(auth)
        .then(() => {
          navigte("/");
        });
    };
  return (
    <>
      <div className="headerParentDiv">
        <div className="headerChildDiv">
          <div className="brandName">
            <OlxLogo></OlxLogo>
          </div>
          <div className="placeSearch">
            <input type="text" placeholder="Search specific product..." />
            <SearchIcon />
          </div>

          <div id="clearBtn">
          
          </div>

          {/* <div className="dataResult-header">
            <div className="dataItem-header">
              <p> </p>
            </div>
          </div> */}

          <div className="productSearch">
            <Search/>
          </div>

          <div className="language">
            <span> ENGLISH </span>
            <Arrow></Arrow>
          </div>
          <div className="loginPage">
          {  user ? (user.displayName) : (<Link to="/login"><span>Login</span></Link>)  }

            <hr />
          </div>

          { user && <span className="logout-span" onClick={handleLogout}>Logout</span> }
          
          <Link to="/create">
         {" "} 
          <div className="sellMenu">
            <SellButton></SellButton>
            <div className="sellMenuContent">
              <SellButtonPlus></SellButtonPlus>
              <span>SELL</span>
            </div>
          </div>
        </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
