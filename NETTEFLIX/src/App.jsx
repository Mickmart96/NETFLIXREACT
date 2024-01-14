
import CustomMain from './assets/component/organism/CustomMain'
import CustomFooter from './assets/component/organism/CustomFooter'
import CustomNavbar from './assets/component/CustomNavbar'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'




function App() {
  

  return (
    <>
     <CustomNavbar/>
      <CustomMain></CustomMain>
      <CustomFooter/>
    
    </>
  )
}
export default App