import{Routes, Route} from 'react-router-dom'
import Login from './routers/Login';
import Home from './routers/Home';
import NavBar from './componets/NavBar';
import RequireAuth from './componets/RequireAuth';

const App=()=> {


  return (
   <>
    <NavBar/>
    <Routes>
         <Route path='/' element={ <RequireAuth><Home/> </RequireAuth>  }/>
         <Route path='/login' element={<Login/> }/>
         
    </Routes>
   </>
  )
}    

export default App
