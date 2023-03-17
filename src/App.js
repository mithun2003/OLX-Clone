import "./App.css";
import MainRoutes from "./Routes/MainRoutes";
import Context, { FirebaseContext } from "./store/Context";
import firebase from './firebase/config'
import PostContext from "./store/PostContext";

function App() {
  return (
    <div className="App">
      <FirebaseContext.Provider value={{ firebase }}>
        <Context>
          <PostContext>
          <MainRoutes />
          </PostContext>
        </Context>
      </FirebaseContext.Provider>
    </div>
  );
}

export default App;
