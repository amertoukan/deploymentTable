import React, { Component } from 'react';
//Table
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'


//Data
import MST from '../data/MSTFile';
import DEV from '../data/DEVFile';
import SYS from '../data/SYSFile';
import INT from '../data/INTFile';
import UAT from '../data/UATFile.json';
import STG from '../data/STGFile';
import PRD from '../data/PRDFile';

function GetData(props){
switch (props){
    case 'DEV':
        return MapData(DEV)

    case 'SYS':
        return MapData(SYS)    

    case 'INT': 
        return MapData(INT)
    
    case 'MST':
        return MapData(MST)

    case 'UAT': 
        return MapData(UAT)
        
    case 'STG':
        return MapData(STG)

    case 'PRD':
       return MapData(PRD)

    default: 
        return MapData (INT)
}
}



function MapData(props, i){
    
   return props.map((row,i) => (
     
        <TableRow 
        key={i}>
            <TableCell component="th" scope="row">
                {row.app}
            </TableCell>
            <TableCell align="center"> 
                {row.hash}
            </TableCell>
            <TableCell align="center"> 
                {row.date}
            </TableCell>
            <TableCell align="center"> 
                {row.build}
            </TableCell>
        </TableRow>
        ))
}
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
            <TableCell>
                App
            </TableCell>
            <TableCell 
            align="center">
                    Hash
            </TableCell>
            <TableCell 
            align="center">
               Date
            </TableCell>
            <TableCell 
            align="center">
              Build ID
            </TableCell>
        </TableRow>
</TableHead>
{
/*
* 
    * TABLE BODY
*
*/}
<TableBody>
{GetData(this.props.data)/*
this.props.data.map(row => (
<TableRow 
key={row.app}>
    <TableCell component="th" scope="row">
        {row.app}
    </TableCell>
    <TableCell align="center"> 
        {row.hash}
    </TableCell>
    <TableCell align="center"> 
        {row.date}
    </TableCell>
    <TableCell align="center"> 
        {row.build}
    </TableCell>
</TableRow>
))*/}
</TableBody>
</Table>
</Paper>
</div>
        )
    }
}