import Page1 from "./pages/page1.page";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
 return(
   <div className='container'>
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Page1/>}/>
      </Routes>
      </BrowserRouter>
   </div>

 );
}

export default App;
