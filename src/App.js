import React,{Component} from 'react'
import './App.css';
import Membre from './components/Membere'
import ButtomVieillir from './components/ButtonVieillir'
import ButtonRajeunir from './components/ButtonRajeunir';
import InputChange from './components/InputChange';
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
 handelRajenir=(num)=>{
  const famille={... this.state.famille}
  famille.membre1.age-=num
  this.setState({famille})
 }
 handelChange=event=>{
  const famille={... this.state.famille}
  const nom=event.target.value
  console.log(nom)
  famille.membre1.nom=nom;
  this.setState(famille)
 }
render(){
  const {famille}=this.state
return (
// dans app pour utliser props il faut utliser this.props parce que props est dans l'app
// 
    <div className="App">
    <h1>{this.props.title}</h1>
    <InputChange  val={famille.membre1.nom} changerNom={this.handelChange}/>
       
       <Membre name={famille.membre1.nom} age={famille.membre1.age}/>
       <Membre  name={famille.membre3.nom} age ={famille.membre3.age}>
       Je suis le boss
       </Membre>
       <ButtomVieillir vieillir={()=>this.handleClick(1)}/>
       <ButtonRajeunir rajeunir={()=>this.handelRajenir(1)}/>
    </div>
  );
}

}

export default App;
