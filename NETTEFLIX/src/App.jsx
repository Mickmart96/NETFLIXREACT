import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import CustomMain from './assets/component/organism/CustomMain'
import CustomFooter from './assets/component/organism/CustomFooter'
import CustomNavbar from './assets/component/CustomNavbar'




function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <CustomNavbar/>
      <CustomMain></CustomMain>
      <CustomFooter/>
    
    </>
  )
}
export default App