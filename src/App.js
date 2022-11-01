import { useSelector } from "react-redux";
import Routing from "./routing/Routing";


function App() {

  const theme = useSelector(state => state.theme.theme)
  
  return (
    // height 1000vh
    <div className='bg-[#F6F6F6] max-w-screen-xl mx-auto '> 
    <Routing />
    </div>
  );
}

export default App;
