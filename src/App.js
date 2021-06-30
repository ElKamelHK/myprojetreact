import React,{Component} from 'react'
import './App.css';
import Membre from './components/Membere'
class App extends Component{
render(){
return (
// dans app pour utliser props il faut utliser this.props parce que props est dans l'app
    <div className="App">
    <h1>{this.props.title}</h1>
       <Membre name="hamdi" familleName="El kamel"/>
       <Membre  familleName ="mahjoubi"/>
    </div>
  );
}

}

export default App;
