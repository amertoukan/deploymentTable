import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List'; 
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';

import DeployButton from './DeployButton'
//Alert
import AlertDialog from './Alert'
import DeployDialog from './DeployAlert'

const envs = ['DEV', 'SYS', 'INT', 'UAT', 'MST', 'STG', 'PRD']

function SimpleDialog(props){
    const {onClose, selectedValue, open } = props
    const handleClose = () => {
        onClose(selectedValue)
    };

    const handleListItemClick = val => {
        onClose(val)
    };


    return (
       
        <Dialog onClose = {handleClose} aria-labelledby='simple-dialog-title' open={open}>
            <DialogTitle id='simple-dialog-title'>Change Environment</DialogTitle>
            <List> 
                {envs.map(env => (
                    <ListItem button onClick = {() => {
                        handleListItemClick(env)
                    }} key={env}>
                        <ListItemText primary={env} />
            </ListItem>))}
            </List>
        </Dialog>
    )
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired
};

export default class SimpleDialogEnv extends React.Component{
/*constructor(props){
    super(props);
    this.state = {
        open: false
    }
        /*display: "none",
        show: false, 
        selectedTab: 0,
        region: "All",
        rOpen: false,
        open: false,
        closeBox: false,
        setOpen: false,
        selectedValue: envs[2],
        setSelectedValue: envs[2],
    }

    this.handleRefreshClose = this.handleRefreshClose.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
}
handleRefresh=() =>{
    this.setState({
        rOpen: true
    })
    window.location.reload()
}
    
handleRefreshClose = (e)=>{
    console.log(e.target.textContent)
    if(e.target.textContent === 'Ok'){
        window.location.reload()
    } else if(e.target.textContent === 'Cancel'){
      this.setState({
          rOpen: false
      })
    }
}

handleClickOpen = () => {
        this.setState({
            open: true
        });
    }

/*handleClose = val => {
    if (val === "STG" || val === "PRD"){
        this.setState({
            show: true, 
            display: "inline"
        })
    } else {
        this.setState({
            show: false,
            display: "none"
        })
    }
    this.setState({
        open: false,
    })
   
}*/
render(){
return (
<div style={{
    alignItems: "center",
    justifyContent : "center"
}}>
        
<div 
style = {{textAlign: 'center', justifyContent: "center", display: 'flex'}}>

<Typography 
variant='subtitle2' 
style = {{textAlign: 'center', margin: "10%", marginTop: 10, marginBottom: 5}}>
    Environment: {this.props.selectedValue} 
</Typography>

{
    (this.props.page) ? <DeployButton 
        onClick = {this.props.onClick}
        open = {this.props.dOpen}
    /> : console.log('bye')
}

<DeployDialog
    open = {this.props.dOpen}
    handleDeployClose = {this.props.handleDeployClose}
    selectedApps = {this.props.selectedApps}
/>

<Button 
variant='outlined' 
color='primary' 
onClick={this.props.handleClickOpen} 
style = {{margin: "10%", marginTop: 10, marginBottom: 5}}>
        Change Environment
</Button>
    
<Button 
variant="outlined" 
color="secondary" 
onClick={this.props.handleRefresh} 
style={{marginRight:'15%', marginBottom: 5 , marginTop: 10}}>
    Refresh
</Button>
       
<AlertDialog 
    open = {this.props.rOpen}
    handleClose = {this.props.handleRefreshClose}
/>
       
    <SimpleDialog selectedValue={this.props.selectedValue} open={this.props.open} onClose={this.props.handleClose}/>
</div>
      

</div>
)}}

