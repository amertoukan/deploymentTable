import React, { Component } from 'react';
import SimpleDialog from '../components/SimpleDialog'
//Data
import MST from '../data/MSTFile';
import DEV from '../data/DEVFile';
import SYS from '../data/SYSFile';
import INT from '../data/INTFile';
import UAT from '../data/UATFile.json';
import STG from '../data/STGFile';
import PRD from '../data/PRDFile';
//Alert 
import Alert from '@material-ui/core/'
//Tabs 
//SimpleTabs 
import SimpleTabs from '../components/Tabs';
//Images 
import ac from '../img/aircanada.png';
import big from '../img/big.png'

//Loadash to sortby (powerful tool for data tables)
import orderBy from 'lodash/orderBy';

const envs = ['DEV', 'SYS', 'INT', 'UAT', 'MST', 'STG', 'PRD']

const invertDirection = {
    asc: 'desc',
    desc: 'asc'
}
export default class Deploy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: "none",
            show: false,
            selectedTab: 0,
            region: "All",
            rOpen: false,
            open: false,
            closeBox: false,
            setOpen: false,
            selectedValue: envs[2],
            color: 'black',
            seconds: '00', //responsible for seconds
            minutes: '1',
            refresh: false, //Res for mins
            value: "",
            data: INT,
            //sorting tools
            columnToSort: "",
            sortDirection: 'desc',
            //Checkbox func
            numSelected: "",
            rowCount: "",
            //data
            dataSelected: [],
            appSelected: [],
            hashSelected: [],
            dateSelected: [],
            buildSelected: [],
            //for each checkbox
            selected: [],
            dOpen: false
        }
        this.handleDeployClose = this.handleDeployClose.bind(this);
        this.handleDeploy = this.handleDeploy.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleTabChange = this.handleTabChange.bind(this);
        this.handleRefresh = this.handleRefresh.bind(this);
        this.handleRefreshClose = this.handleRefreshClose.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.tick = this.tick.bind(this);
        this.handleData = this.handleData.bind(this);
        this.handleSelectAllClick = this.handleSelectAllClick.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
    }
    handleDeployClose(e) {
        console.log(e.target.textContent)
        if (e.target.textContent === 'Deploy') {
            window.location.reload()
        } else {
            this.setState({
                dOpen: false
            })
        }
    }
    handleDeploy(e) {
        this.setState({
            dOpen: true
        })
    }
    handleSort(columnName) {
        this.setState(state => ({
            columnToSort: columnName,
            sortDirection: state.columnToSort === columnName ? invertDirection[state.sortDirection] : 'asc'
        }))
    };

    handleTabChange(e, newVal) {
        this.setState({
            selectedTab: newVal
        })
        switch (newVal) {
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
                    region: "All"
                })
        }
    };

    handleRefresh = () => {
        this.setState({
            rOpen: true
        })
    };

    handleRefreshClose = (e) => {
        console.log(e.target.textContent)
        if (e.target.textContent === 'Ok') {
            window.location.reload()
        } else if (e.target.textContent === 'Cancel') {
            this.setState({
                rOpen: false
            })
        }
    };

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    };

    handleClose = val => {
        console.log(val)
        if (val === "STG" || val === "PRD") {
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
            selectedValue: val,
        })
        this.handleData(val)
    };

    tick() {
        let min = Math.floor(this.secondsRemaining / 60);
        let sec = Math.floor(this.secondsRemaining - (min * 60))

        this.setState({
            minutes: min,
            seconds: sec
        })

        if (sec < 10) {
            this.setState({
                seconds: `0${this.state.seconds}`
            })
        }

        if (min === 0 && sec < 10) {
            this.setState({
                color: 'red'
            })
        }
        if (min < 10) {
            this.setState({
                value: `0${min}`
            })
        }

        if (min === 0 & sec === 0) {

            clearInterval(this.intervalHandle)
            this.changeState()
        }

        this.secondsRemaining--
    };

    changeState() {
        this.setState({
            rOpen: true
        })
    };

    handleData(props) {
        switch (props) {
            case 'DEV':
                this.setState({
                    data: DEV
                })
                break;

            case 'SYS':
                this.setState({
                    data: SYS
                })
                break;

            case 'INT':
                this.setState({
                    data: INT
                })
                break;

            case 'MST':
                this.setState({
                    data: MST
                })
                break;

            case 'UAT':
                this.setState({
                    data: UAT
                })
                break;

            case 'STG':
                this.setState({
                    data: STG
                })
                break;

            case 'PRD':
                this.setState({
                    data: PRD
                })
                break;

            default:
                this.setState({
                    data: INT
                })
                break;
        }
    };

    handleSelectAllClick(e) {
        if (e.target.checked) {
            const selectedData = this.state.data.map(n => n)
            const selectedApp = this.state.data.map(n => n.app)
            const selectedHash = this.state.data.map(n => n.hash)
            const selectedDate = this.state.data.map(n => n.date)
            const selectedBuild = this.state.data.map(n => n.build)
            this.setState({
                dataSelected: selectedData,
                appSelected: selectedApp,
                hashSelected: selectedHash,
                dateSelected: selectedDate,
                buildSelected: selectedBuild
            })
            return;
        }
        this.setState({
            dataSelected: [],
            appSelected: [],
            hashSelected: [],
            dateSelected: [],
            buildSelected: []
        })
    };

    handleChecked(e, row) {
        if (e.target.checked) {
            console.log(row.app)
            this.setState({
                appSelected: [...this.state.appSelected, row.app],
                selected: [...this.state.selected, row]
            })
        }
        this.state.selected.splice(-1, 1)
    }

    render() {
        return (
            <div>
                <img src={ac} className="ac-logo" alt="aircanada" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                <SimpleDialog
                    dOpen={this.state.dOpen} //deploy dialog
                    handleDeployClose={this.handleDeployClose}
                    selectedApps={this.state.appSelected}
                    page="deploy"
                    onClick={this.handleDeploy}
                    data={orderBy(this.state.data, this.state.columnToSort, this.state.sortDirection)}
                    open={this.state.open}// refresh dialog
                    refresh={this.state.refresh}
                    selectedValue={this.state.selectedValue}
                    show={this.props.show}
                    region={this.state.region}
                    rOpen={this.state.rOpen}
                    handleClickOpen={this.handleClickOpen}
                    handleClose={this.handleClose}
                    handleRefresh={this.handleRefresh}
                    handleRefreshClose={this.handleRefreshClose}

                />
                <SimpleTabs
                    columnToSort={this.state.columnToSort}
                    sortDirection={this.state.sortDirection}
                    data={orderBy(this.state.data, this.state.columnToSort, this.state.sortDirection)}
                    show={this.state.display}
                    value={this.state.selectedTab}
                    handleChange={this.handleTabChange}
                    handleSort={this.handleSort}
                    handleSelectAllClick={this.handleSelectAllClick}
                    handleChecked={this.handleChecked}
                />
                <img src={big}
                    href="www.google.com"
                    className="big-logo" alt="Bits in Glass" onClick={() => {
                        window.open('https://bitsinglass.com/', '_blank')
                    }} style={{ display: "block", marginLeft: 'auto', marginRight: 'auto', width: '20%', height: '40%', marginBottom: 20 }} />
            </div>
        )
    }
}