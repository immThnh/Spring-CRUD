import "./App.css";
import Appbar from "./component/Appbar";
import HomePage from "./component/UiComponent/HomePage";
import { Routes, Route, Link } from "react-router-dom";
import EditUserPage from "./component/User/EditUserPage";
import AddUserPage from "./component/User/AddUserPage";
import GetAllUserPage from "./component/User/GetAllUserPage";

function App() {
  return (
    <div className="App">
      <Appbar></Appbar>
      <ul>
        <li>
          <Link to="/api/v1/user/edit">Go to Edit page</Link>
        </li>
        <li>
          <Link to="/api/v1/user/add">Go to Add page</Link>
        </li>
        <li>
          <Link to="/api/v1/user/getAll">Go to List user page</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/api/v1/user/edit/:id" element={<EditUserPage />}></Route>
        <Route path="/api/v1/user/add" element={<AddUserPage />}></Route>
        <Route path="/api/v1/user/getAll" element={<GetAllUserPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
