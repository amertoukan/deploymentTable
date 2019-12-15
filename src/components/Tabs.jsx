import React, {Component} from 'react'; 
import PropTypes from 'prop-types'; 
import AppBar from '@material-ui/core/AppBar'; 
import Tabs from '@material-ui/core/Tabs'; 
import Tab from '@material-ui/core/Tab'; 

import Typography from '@material-ui/core/Typography'; 
import Box from '@material-ui/core/Box'; 

import CreateTable from './Table';
import EnhancedTable from './DeployTable';

function TabPanel(props){ 
    const {children, value, index, ...other} = props

    return (
        <Typography
        component="div"
        role="tabpanel"
        hidden = {value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node, 
    index: PropTypes.any.isRequired, 
    value: PropTypes.any.isRequired,
}; 

function a11yProps(index){
    return {
        id: `simple-tab-${index}`, 
        'aria-controls' : `simple-tabpanel-${index}`,
    };
}


export default class SimpleTabs extends Component{
 constructor(props){ 
     super(props); 
     this.state = {
         label: ["All", "Secondary", "Primary"],
         value: 0, 
         
     }
     this.handleChange = this.handleChange.bind(this)
 }
handleChange = (e, val) => {
    console.log("VALUE",val)
        this.setState({
            value: val
        })
     
    }


  
render(){


return (
    <div>
        <div style = {{display: this.props.show}}>
        <AppBar 
        color = "default"
        position = "sticky"
        style={{flexGrow: 1}}
        >
       
            <Tabs 
            value = {this.props.value} 
            onChange={this.props.handleChange} 
            aria-labelledby="simple tabs example">
            <Tab 
            label={this.state.label[0]} {...a11yProps(0)}/>
               <Tab 
            label={this.state.label[1]} {...a11yProps(1)}/>
               <Tab 
            label={this.state.label[2]} {...a11yProps(2)}/>
            
            </Tabs>
        </AppBar>
        </div>
        <TabPanel value={this.props.value} index={0}>
        {this.props.page === 'status' ? 
        <CreateTable 
            props = {this.props}
            sortBy = {this.sort}
            data = {this.props.data}
            region = 'all'
           />:  <EnhancedTable
                props = {this.props}
                handleChecked = {this.props.handleChecked}
                data = {this.props.data}
                sortDirection = {this.props.sortDirection}
                columnToSort = {this.props.columnToSort}
                handleSort = {this.props.handleSort}
                handleSelectAllClick = {this.props.handleSelectAllClick}
                />} 
        </TabPanel>
        <TabPanel value={this.props.value} index={1}>
          {this.props.page === 'status' ? 
          <CreateTable 
           data = {this.props.data}
            props = {this.props}
            region = 'eu'
           />:  <h4>Hello Deploy</h4>} 
        </TabPanel>
        <TabPanel value={this.props.value} index={2}>
        {this.props.page === 'status' ? 
        <CreateTable 
        props = {this.props}
           data = {this.props.data}
            region = 'ca'
           />: <h4>Hello Deploy</h4>} 
        </TabPanel>
    </div>
)
}}