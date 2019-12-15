import React, { Component } from 'react';
//Table
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import ArrowDropUp from '@material-ui/icons/ArrowDropUpRounded'
import ArrowDropDown from '@material-ui/icons/ArrowDropDownRounded'

//Checkbox 
import Checkbox from '@material-ui/core/Checkbox'
//checkbox  (airplanes)
import AirplaneModeActiveOutlined from '@material-ui/icons/AirplanemodeActiveOutlined';
import AirplaneModeActive from '@material-ui/icons/AirplanemodeActive';

//CSS
import '../App.css'

function MapData(data, i){
  
}

const headers = 
  [
    {name: "", prop: ""},
    {name: "Application" , prop: "app"}, 
    {name: "Hash", prop: "hash"},
    {name: "Build ID", prop: 'build'}, 
    {name: "Build Date", prop: "date"}, 
  
  ];

export default class CreateTable extends Component{
render(){
return(
<div> 
<Paper 
style={{width: '100%', overflowX:'auto',  justifyContent: 'center'}}>
<Table 
style={{minWidth: 650}} aria-label="simple table">
{
/*
* 
* TABLE HEADERS
*
*/}
<TableHead 
align="center">
    <TableRow>
      {headers.map((x, i) => {
       return <TableCell align="center" key={`thc-${i}`}>
         <div style ={{display:'flex', alignItems: 'center', justifyContent: 'center'}}onClick = {() => this.props.handleSort(x.prop)}> 
         {x.name}
         {this.props.columnToSort === x.prop ? (
           this.props.sortDirection === 'asc' ? <ArrowDropUp /> : <ArrowDropDown/>
         ) : null}
         </div>
          
        </TableCell>
      })}
        </TableRow>
</TableHead>
{
/*
* 
    * TABLE BODY
*
*/}
<TableBody className="row">
{this.props.data.map((row,i) => (
        <TableRow 
        
        key={i}>
            <TableCell padding="checkbox">
              <Checkbox
                onClick = {(e) => this.props.handleChecked(e, row)}
              />
            </TableCell>
            <TableCell className = "row" align = "center" component="th" scope="row">
                {row.app}
            </TableCell>
            <TableCell className = "row"align="center"> 
                {row.hash}
            </TableCell>
            <TableCell align="center"> 
                {row.build}
            </TableCell>
            <TableCell align="center"> 
                {row.date}
            </TableCell>
        </TableRow>
        ))}
</TableBody>
</Table>
</Paper>
</div>
        )
    }
}