import Home from "./componenet/home/Home.jsx";
import Login from "./componenet/login/Login.jsx";
import List from "./componenet/list/List.jsx";
import Single from "./componenet/Single/Single.jsx";
import New from "./componenet/new/New.jsx";
import Form from "./componenet/form/Form.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="users">
              <Route path="form" element={<Form/>}/>
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
            <Route path="Demandes">
              <Route index element={<List/>}/>
              <Route path=":demandeId" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
