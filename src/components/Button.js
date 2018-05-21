import React,{Component} from 'react';

class Button  extends Component{
    handleSelect = (evt) => {
         this.props.gridSize(evt);
    }
     render(){
         return(
           <div className="center">
                <div className="button-toolbar">
                     <button className="btn btn-info" onClick={this.props.playButton}>Play</button>
                     <button className="btn btn-primary" onClick={this.props.pauseButton}>Pause</button>
                     <button className="btn btn-warning" onClick={this.props.clear}>Clear</button>
                     <button className="btn btn-default" onClick={this.props.slow}>Slow</button>
                     <button className="btn btn-default" onClick={this.props.fast}>Fast</button>
                     <button  className="btn btn-danger" onClick={this.props.seed}>Seed</button>
                 </div>
           </div>
         )
     }
}

export default Button;
