import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { VictoryPie } from 'victory';
import { Line, Circle } from 'rc-progress';
import {AreaChart} from 'react-easy-chart';

import '../../styles/MitulSavani.css'

const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000},
    {quarter: 5, earnings: 15000},
  ];

  

  export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
          linepercent: 90,
          circlepercent: 71,
          linecolor: '#90D0C3',
          circlecolor: '#E36C54'
        };
        this.changeState = this.changeState.bind(this);
      }

      changeState() {
        const colorMap = ['#3FC7FA', '#85D262', '#FE8C6A'];
        const value = parseInt(Math.random() * 100, 10);
        this.setState({
          percent: value,
          color: colorMap[parseInt(Math.random() * 3, 10)],
        });
      }

    render(){

        const containerStyle = {
            width: '500px',
          };
          const circleContainerStyle = {
            width: '250px',
            height: '250px',
            display: 'inline-block',
          };

        return (

            <div className="main-container-dashboard">
                <div className="chart-row-container-mitul">
                    <div className="chart-container container-1-mitul">
                        <div style={containerStyle}>
                        <h3>Line Progress {this.state.linepercent}%</h3>
                        <Line percent={this.state.linepercent} strokeWidth="4" strokeColor= {this.state.linecolor} />
                        </div>
                    </div>
                    <div className="chart-container container-2-mitul">
                        <h3> Hours Completed {this.state.circlepercent}%</h3>
                        <div style={circleContainerStyle}>
                        <Circle
                            percent={this.state.circlepercent}
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeColor={this.state.circlecolor}
                        />
                        </div>
                    </div>
                    <div className="chart-container container-3-mitul">
                    <div style={circleContainerStyle}>
                        <Circle
                            percent={this.state.circlepercent}
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeColor={this.state.circlecolor}
                        />
                        </div>
                    </div>
                 </div>
                 <div className="chart-row-container-mitul">
                     <div className="chart-container container-4-mitul">
                     <AreaChart
                        xType={'text'}
                        axes
                        dataPoints
                        xTicks={5}
                        yTicks={3}
                        noAreaGradient
                        margin={{top: 30, right: 30, bottom: 30, left: 30}}
                        //DATA given by Mr. Manik Mehra
                        width={1350}
                        height={300}
                        areaColors={['#7E4068', '#7BA8A6']}
                        interpolate={'cardinal'}
                        data={[
                            [
                                { x: 'Mon', y: 20 },
                                { x: 'Tue', y: 14 },
                                { x: 'Wed', y: 33 },
                                { x: 'Thu', y: 25 },
                                { x: 'Fri', y: 32 }
                            ], [
                                { x: 'Mon', y: 10 },
                                { x: 'Tue', y: 22 },
                                { x: 'Wed', y: 17 },
                                { x: 'Thu', y: 15 },
                                { x: 'Fri', y: 25 }
                            ]
                            ]}
                    />
                     </div>
                </div>
            </div>
        );
    }

}
