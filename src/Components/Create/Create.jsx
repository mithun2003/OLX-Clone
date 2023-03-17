import React, { Fragment, useState, useContext } from "react";
import "./Create.css";
import Header from "../Header/Header";
import firebase from "../../firebase/config";
import { AuthContext } from "../../store/Context";
import { useNavigate } from "react-router";
// import GoLoading from "../Loading/GoLoading";
const Create = () => {
  const { user } = useContext(AuthContext);
  const history = useNavigate();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();
  const date = new Date()
  //   const [loading,setLoading]=useState(false);
  //   const handleSubmit = () => {
  //     setLoading(true);
  //     Firebase.storage()
  //       .ref(`/image/${image.name}`)
  //       .put(image)
  //       .then(({ ref }) => {
  //         ref.getDownloadURL().then((url) => {
  //           Firebase.firestore()
  //             .collection("products")
  //             .add({
  //               name,
  //               category,
  //               price,
  //               description,
  //               url,
  //               userId: user.uid,
  //               createdAt: date,
  //             })
  //             .then(() => {
  //               history.push("/");
  //             });
  //         });
  //       });
  //   };
  const handleSubmit = () => {
    firebase
      .storage()
      .ref(`/image/${image.name}`)
      .put(image)
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          console.log(url);
          firebase
            .firestore()
            .collection("products")
            .add({
              name,
              category,
              price,
              description,
              url,
              userId: user.uid,
              createAt: date.toDateString()
            })
            .then(() => {
              history("/");
            });
        });
      });
  };
  return (
    <Fragment>
      <Header />
      {/* { loading && <GoLoading/> } */}
      <div className="centerDiv">
        <label>Product Name</label>
        <br />
        <input
          className="input"
          type="text"
          name="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label>Category:</label><br/>
        <select
          name="Category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          className="input"
        >
          {" "}
          <option>Select Category</option>
          <option value="Cars">Cars</option>
          <option value="Cameras & Lenses">Cameras & Lenses</option>
          <option value="Computers & Laptops">Computers & Laptops</option>
          <option value="Mobile Phones">Mobile Phones</option>
          <option value="Motorcycles">Motorcycles</option>
          <option value="Tabconsts">Tabconsts</option>
        </select>
        <br />
        <label>Price</label>
        <br />
        <input
          className="input"
          type="number"
          name="Price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <br />
        <label>Description</label>
        <br />
        <input
          className="input"
          type="text"
          name="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />

        <br />
        {image ? (
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : ""}
          ></img>
        ) : (
          ""
        )}

        <br />
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <br />
        <button className="uploadBtn" onClick={handleSubmit}>
          upload and Submit
        </button>
      </div>
    </Fragment>
  );
};

export default Create;
