import React,{Component} from 'react'
import './App.css';
import Membre from './components/Membere'
import Buttom from './components/button'
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
 handleClick =(num) =>{
   const famille={... this.state.famille }
   famille.membre1.age+=num
   this.setState({famille})
 }
render(){
  const {famille}=this.state
return (
// dans app pour utliser props il faut utliser this.props parce que props est dans l'app
    <div className="App">
    <h1>{this.props.title}</h1>
       <Membre name={famille.membre1.nom} age={famille.membre1.age}/>
       <Membre  name={famille.membre3.nom} age ={famille.membre3.age}>
       Je suis le boss
       </Membre>
       <Buttom veillier={()=>this.handleClick(2)}/>
    </div>
  );
}

}

export default App;
