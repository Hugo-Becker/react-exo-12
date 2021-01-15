import React from 'react'
import Article from './Article'
import './App.css';

class App extends React.Component{
  state={
    nbr:0
  }
  plusUn=()=>{
    var number=this.state.nbr
    this.setState({
      nbr:number+=1
    })
  }
  moinsUn=()=>{
    var number=this.state.nbr
    this.setState({
      nbr:number-=1,
    })
  }
  
  render(){
    if(this.state.nbr>=2){
      return(
        <div>
          <span>{this.state.nbr}</span>

          <button onClick={this.plusUn}>+</button>
          <button onClick={this.moinsUn}>-</button>
          <Article></Article>
          <Article></Article>
          <Article></Article>
        </div>
        
      );
    }else{
      return(
        <div>
          <span>{this.state.nbr}</span>
          <button onClick={this.plusUn}>+</button>
          <button onClick={this.moinsUn}>-</button>
          <h1>Pas d'articles à afficher</h1>

        </div>
      )
    }
    

    // return (
    //   <div>
    //     <Article />
    //     <Article />

    //   </div>
      


  
    //   );

  }
  
}

export default App;
