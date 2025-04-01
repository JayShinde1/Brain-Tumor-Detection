import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/Home.jsx";
import Upload from "./Components/Upload.jsx";
import Result from "./Components/Result.jsx";

export default function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="upload" element={<Upload/>}/>
        <Route path="result" element={<Result/>}/>
      </Routes>
    </Router>
  )
}
