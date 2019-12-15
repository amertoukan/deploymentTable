import React, {Component} from 'react'; 
//Importing components 
//Simple Dialog
import SimpleDialog from '../components/SimpleDialog.jsx'

//SimpleTabs 
import SimpleTabs from '../components/Tabs';

// Timer JS 
import Timer from '../components/timer.jsx'

//Images 
import ac from '../img/aircanada.png';
import big from '../img/big.png'

//Available environments 
//import CenteredTabs from '../components/Tabs.jsx';

const envs = ['DEV', 'SYS', 'INT', 'UAT', 'MST', 'STG', 'PRD']

    
export default class Status extends Component{ 
constructor(props){
    super(props);
        this.state = {
            display: "none",//show/hide tab
            show: false, //Show/hide tab
            selectedTab: 0, //Tab functionality PRD & STG
            region: "All",//Default page STG & PRD 
            rOpen: false,//Refresh alert
            open: false,//change environment box open/close
            closeBox: false,
            selectedValue: envs[2], // Default selected env [INT]
            color: 'black',//set original color of timer, by default its black
            seconds: '00', //responsible for timer seconds
            minutes: '1', //timer minutes
            refresh: false, //Res for mins
            value: "",
            //
        }
          
        //method that triggers the countdown functionality 
        this.startCountdown = this.startCountdown.bind(this)
        //ticking
        this.tick = this.tick.bind(this)
        this.handleTabChange = this.handleTabChange.bind(this)
        this.handleRefreshClose = this.handleRefreshClose.bind(this);
        this.handleRefresh = this.handleRefresh.bind(this);
}


handleTabChange(e, newVal){
    console.log(newVal)
   this.setState({
    selectedTab: newVal
   })
   switch(newVal){
       case 1: 
        return this.setState({
            region: "Canada" 
        })
        case 2: 
        return this.setState({
            region: "Europe"
        })
        default: 
        return this.setState({
            region:"All"
        })
   }
}

handleRefresh=() =>{
    this.setState({
        rOpen: true
    })
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


handleClickOpen = (v) => {
    console.log('OPEN')
        this.setState({
            open: true
        });
    }

handleClose = val => {
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
};

tick(){ 
    let min = Math.floor(this.secondsRemaining/60); 
    let sec = Math.floor(this.secondsRemaining - ( min * 60 ))
            
    this.setState({ 
        minutes: min, 
        seconds: sec 
    })
            
    if (sec < 10){
        this.setState({ 
            seconds: `0${this.state.seconds}`
        })
    }
    
    if (min === 0 && sec < 10){
        this.setState ({
            color: 'red'
        })
    }
    if (min < 10){
        this.setState({
            value: `0${min}`
        })
    }
            
    if(min === 0 & sec === 0){
    
    clearInterval(this.intervalHandle)
    this.changeState()
    }
         
    this.secondsRemaining -- 
}
changeState(){
    this.setState({
        rOpen: true
    })
}  
startCountdown(){
    this.intervalHandle = setInterval(this.tick, 1000);         
    let time = this.state.minutes; 
    this.secondsRemaining = time * 60
}

componentDidMount(){
        this.startCountdown()
}


render(){ 
return (
    <div>
        <img src={ac} className = "ac-logo" alt="aircanada" style = {{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
        <SimpleDialog 
            open = {this.state.open}
            refresh = {this.state.refresh}
            selectedValue = {this.state.selectedValue}
            show = {this.props.show}
            region = {this.state.region}
            rOpen = {this.state.rOpen}
            handleClickOpen = {this.handleClickOpen}
            handleClose = {this.handleClose}
            handleRefresh = {this.handleRefresh}
            handleRefreshClose = {this.handleRefreshClose}
        />
        
        <Timer 
            minutes={this.state.minutes} 
            seconds={this.state.seconds} 
            color={this.state.color}
        />
        
        <SimpleTabs
                page = 'status'
                data = {this.state.selectedValue}  
                sortBy = {this.sortBy}
                show = {this.state.display} 
                value = {this.state.selectedTab}
                handleChange = {this.handleTabChange}
        />
           
         <div style={{alignContent: 'center', justifyContent: 'center', textAlign: 'center'}}> 
            <h5>Powered by</h5>
            <img 
                src={big} 
                href = "www.google.com"
                className = "big-logo" alt = "Bits in Glass" onClick = {()=>{
                window.open('https://bitsinglass.com/', '_blank')
                }} 
            style = {{  
                display: "block", 
                marginLeft: 'auto', 
                marginRight: 'auto', 
                width: '20%', 
                height: '40%', 
                marginBottom: 20
            }}
            />
            </div>
            </div>
        )
    }
}