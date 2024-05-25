import React from 'react'
import { Route, Routes} from 'react-router-dom'
import SignUp from './component/SignUp'
import Admindb from './Dashboards/Admindb'
import ProductForm from './Dashboards/Componentsdb/ProductForm'
// import ProductList from './Dashboards/Componentsdb/ProductList'

import About from './Pages/About'
import Contact from './Pages/Contact'
import Sweets from './Pages/Sweets.jsx'
// import Chocolate from './Pages/Chocolates.jsx'
import Main from './Pages/Main'
// import Sugar from './Pages/Sugar.jsx'
import EditProduct from './Dashboards/Componentsdb/EditProduct'
import LogIn from './component/LogIn'





const App = () => {
  return (
    <>
    
    
   
    <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/main' element={<Main/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/Sweets' element={<Sweets/>}/>
    {/* <Route path='/Sugar' element={<Sugar/>}/> */}
    {/* <Route path='/Chocolate' element={<Chocolate/>}/> */}
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<LogIn/>}/>

    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/dashboard' element={<Admindb/>}>
    <Route path="/dashboard/products" element={<ProductForm />} />
    <Route path="/dashboard/edit/:id" element={<EditProduct />} />
    </Route>
    </Routes>
    </>
  )
}

export default App