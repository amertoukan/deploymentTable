import React, {Component} from 'react'; 

import Button from '@material-ui/core/Button'; 

export default class DeployButton extends Component { 
    render(){ 
        return ( 
            <Button
            variant='outlined' 
            color='primary'  
            open = {this.props.dOpen}
            style = {{margin: "10%", marginTop: 10, marginBottom: 5, marginLeft: 10, marginRight: 10}}
            onClick = {this.props.onClick}
            > 
                Deploy
            </Button>
        )
    }
}