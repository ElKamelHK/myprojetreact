import React,{Component} from 'react'
import './App.css';
import Membre from './components/Membere'
const famille =
{
  membre1:{
    nom:"Ahmed",
    age:10
  },
  membre2:{
    nom:"Ali",
    age:17
  },
  membre3:{
    nom:"Layla",
    age:18
  }
  
}
class App extends Component{
 state={
   famille
 }
render(){
  const {famille}=this.state
return (
// dans app pour utliser props il faut utliser this.props parce que props est dans l'app
    <div className="App">
    <h1>{this.props.title}</h1>
       <Membre name={famille.membre1.nom} familleName="El kamel"/>
       <Membre  name={famille.membre3.nom} familleName ="mahjoubi">
       Je suis le boss
       </Membre>
    </div>
  );
}

}

export default App;
