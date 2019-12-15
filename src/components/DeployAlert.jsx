import React, { Component } from 'react';
//MATERIAL UI 
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class DeployDialog extends Component{
  displayApps(e){
    for(var i; i < e.length; i++){
      return <div>{e[i]}</div>
    }
  }
render(){
    return (
    <Dialog 
    open = {this.props.open || false}
    onClose = {this.props.onClose}
    aria-labelledby="alert-dialog-deploy"
    aria-describedby="deploy applications"
    >
        <DialogTitle id="alert-dialog-title">{"Deploy Applications?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You are about to deploy the following application(s): { () => {
                for(var i; i < this.props.selectedApps.length; i++){
                 return <div>{this.props.selectedApps[i]}</div>
                }
            }
              }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleDeployClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={this.props.handleDeployClose} color="primary" autoFocus>
            Deploy
          </Button>
        </DialogActions>
      </Dialog>
    )
}
}