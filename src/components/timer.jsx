import React, { Component } from 'react';
import GetAppIcon from '@material-ui/icons/GetApp';

export default class Timer extends Component {
    render(){
    
        return (
            <div style ={{ display: 'flex', }}>
                <h5 style = {{color:this.props.color, textAlign: 'center', margin: "10%", marginTop: 0, marginBottom: 5, float: 'left'}}>Updating hashes in {this.props.minutes}:{this.props.seconds}  </h5>
               
                <a href="../data/INTFile" download="INTFile.json" style = {{margin: "10%", marginTop: 10, marginBottom: 5, float: "right", marginLeft: '40%'}} >
                <GetAppIcon  />
                </a>
            </div>
        )
    }
}