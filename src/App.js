import React, {Component} from "react";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
class App extends Component{
  render(){
    return(
      <div>
        <Navbar />
        <Header />
      </div>
    )
  }
}
export default App;