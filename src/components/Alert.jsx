import React, { Component } from 'react';
//MATERIAL UI 
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class AlertDialog extends Component{
render(){
    return (
      <Dialog 
    open = {this.props.open}
    onClose = {this.props.onClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Refresh page?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You are about to refresh the page.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={this.props.handleClose} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    )
}
}