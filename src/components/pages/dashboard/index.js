import React, { useState } from 'react';
import {Box, Text, FlexiBar, Button, FlexiPie, Spacer, Grid, Theme, Switch, DashCard, CardSection} from '../../styledElements/lib';

const Dashboard = () =>{
    const xData = [ "Completed", "In Progress", "To Do", "Paused" ]
    const yData = [ 
          { val: 4000 }, 
          { val: 3000 },
          { val: 2000 },
          { val: 2780 }];
    const months = ["Jan", "Feb", "Mar", "Apr", "May","Jun","Jul","Aug","Sep","Oct","Nov"];
    const workflows = ["Device Acquisition", "Metre Distribution", "Distribution Certification","Permit Renewal"];
    const monthData = [ 
        { Complete: 40, "in Progress": 30, paused: 12, "to do": 20 }, 
        { Complete: Math.random() * 40, "in Progress": Math.random() * 40, paused: Math.random() * 40, "to do": Math.random() * 40 },
        { Complete: Math.random() * 40, "in Progress": Math.random() * 40, paused: Math.random() * 40, "to do": Math.random() * 40 },
        { Complete: Math.random() * 40, "in Progress": Math.random() * 40, paused: Math.random() * 40, "to do": Math.random() * 40 },
        { Complete: Math.random() * 40, "in Progress": Math.random() * 40, paused: Math.random() * 40, "to do": Math.random() * 40 },
        { Complete: Math.random() * 40, "in Progress": Math.random() * 40, paused: Math.random() * 40, "to do": Math.random() * 40 },
        { Complete: Math.random() * 40, "in Progress": Math.random() * 40, paused: Math.random() * 40, "to do": Math.random() * 40 },
        { Complete: Math.random() * 40, "in Progress": Math.random() * 40, paused: Math.random() * 40, "to do": Math.random() * 40 },
        { Complete: Math.random() * 40, "in Progress": Math.random() * 40, paused: Math.random() * 40, "to do": Math.random() * 40 },
        { Complete: Math.random() * 40, "in Progress": Math.random() * 40, paused: Math.random() * 40, "to do": Math.random() * 40 },
        { Complete: Math.random() * 40, "in Progress": Math.random() * 40, paused: Math.random() * 40, "to do": Math.random() * 40 }
    ];

    const monthDataStep = [ 
        { Complete: 40, "in Progress": 30, paused: 12, "to do": 20 }, 
        { Complete: Math.random() * 60, "in Progress": Math.random() * 40, paused: Math.random() * 40, "to do": Math.random() * 40 },
        { Complete: Math.random() * 60, "in Progress": Math.random() * 40, paused: Math.random() * 40, "to do": Math.random() * 40 },
        { Complete: Math.random() * 60, "in Progress": Math.random() * 40, paused: Math.random() * 40, "to do": Math.random() * 40 },
        { Complete: Math.random() * 60, "in Progress": Math.random() * 40, paused: Math.random() * 40, "to do": Math.random() * 40 },
        { Complete: Math.random() * 60, "in Progress": Math.random() * 40, paused: Math.random() * 40, "to do": Math.random() * 40 },
        { Complete: Math.random() * 60, "in Progress": Math.random() * 40, paused: Math.random() * 40, "to do": Math.random() * 40 },
        { Complete: Math.random() * 60, "in Progress": Math.random() * 40, paused: Math.random() * 40, "to do": Math.random() * 40 },
        { Complete: Math.random() * 60, "in Progress": Math.random() * 40, paused: Math.random() * 40, "to do": Math.random() * 40 },
        { Complete: Math.random() * 60, "in Progress": Math.random() * 40, paused: Math.random() * 40, "to do": Math.random() * 40 },
        { Complete: Math.random() * 60, "in Progress": Math.random() * 40, paused: Math.random() * 40, "to do": Math.random() * 40 }
    ];

    const workflowData = [ 
        { Complete: Math.random() * 40, "in Progress": Math.random() * 40, paused: Math.random() * 40, "to do": Math.random() * 40 },
        { Complete: Math.random() * 40, "in Progress": Math.random() * 40, paused: Math.random() * 40, "to do": Math.random() * 40 },
        { Complete: Math.random() * 40, "in Progress": Math.random() * 40, paused: Math.random() * 40, "to do": Math.random() * 40 },
        { Complete: Math.random() * 40, "in Progress": Math.random() * 40, paused: Math.random() * 40, "to do": Math.random() * 40 }
    ];

    const workflowDataStep = [ 
        { Complete: Math.random() * 60, "in Progress": Math.random() * 40, paused: Math.random() * 40, "to do": Math.random() * 40 },
        { Complete: Math.random() * 60, "in Progress": Math.random() * 40, paused: Math.random() * 40, "to do": Math.random() * 40 },
        { Complete: Math.random() * 60, "in Progress": Math.random() * 40, paused: Math.random() * 40, "to do": Math.random() * 40 },
        { Complete: Math.random() * 60, "in Progress": Math.random() * 40, paused: Math.random() * 40, "to do": Math.random() * 40 },
    ];

      const xpiedata = [ "Overdue", "Within Range"  ]
      const ypiedata = [ 
            { val: 4000 }, 
            { val: 3000 }];
    const [toggle, setToggle] = useState(false);

    return <Box>
    <Box height="100px" pad="25px 40px" bordered verticalAlign="flex-end">
    <Grid default="auto max-content">
            <Box>
            <Text size="18px" bold block><i className="flexibull-signal" /> Dashboard</Text>
                <Spacer space="5px" />
                <Text opacity={0.6}>Summary Report View</Text>   
            </Box>
            <Box align="right">
                <><Button pad="0 30px">Reports</Button></>
            </Box>
        </Grid>
                  
    </Box>
    <Box bordered>
        <Box pad="30px 40px" maxWidth="1000px">
            <Grid default="1fr 1fr" gap="20px">
                
                <DashCard  color={Theme.PrimaryFade} bordered elevate={false}>
                <CardSection topLeft>
            <Text size="46px" font={Theme.SecondaryFont}>36</Text>
          </CardSection>
          <CardSection bottomLeft>
            <Text color="indigo">Total Applications</Text>
          </CardSection>
          <CardSection topRight>
            <Box align="right">
              <Text block>Completed</Text>
              <Text size="16px" font={Theme.SecondaryFont}>12</Text>
            </Box>
          </CardSection>
          <CardSection bottomRight>
            <Box align="right">
              <Text block>Pending</Text>
              <Text size="16px" font={Theme.SecondaryFont}>24</Text>
            </Box>
          </CardSection>
                </DashCard>
                <DashCard color={Theme.PrimaryColor}>
                    <CardSection right>
                    <FlexiPie
                    xData={xpiedata}
                    yData={ypiedata}
                    radius={50}
                    colors={["white", "rgba(255,255,255,0.1)"]}
                    thickness={10}
                    stroke={0}
                    doughnut
              />
                    </CardSection>
                    <CardSection left>
                    <Text>Overdue</Text>
                    <Text bold block size="20px">
                    Applications
                    </Text>
                    </CardSection>
                </DashCard>
            </Grid>
        </Box>
    </Box>
    <Box bordered>
        <Box pad="0 40px" maxWidth="1000px">
            <Grid default="1fr 1fr">
                <Box bordered="right" pad="25px">
                <Text block color={Theme.PrimaryGreyMid}>Distribution by</Text>
                <Text block bold size="16px">Application Status</Text>
                <Spacer space="20px" />
                <FlexiPie xData={xData} yData={yData} radius={100} doughnut tooltip legend thickness={30} colors={[Theme.PrimaryGreen, Theme.PrimaryColor, Theme.PrimaryGreyLight, Theme.PrimaryGreyMid]} />
                </Box>

                <Box pad="25px">
                <Text block color={Theme.PrimaryGreyMid}>Distribution by</Text>
                <Text block bold size="16px">Application Completion</Text>
                <Spacer space="20px" />
                <FlexiPie xData={["Completed", "Pending"]} yData={[{val: 80}, {val: 180}]} radius={100} doughnut tooltip legend thickness={30} colors={[Theme.PrimaryGreen, Theme.PrimaryGreyLight]} />
                </Box>
            </Grid>
        </Box>
    </Box>
    <Box pad="25px">
        <Box pad="0 40px" maxWidth="1000px">
            <Grid responsive={false} default="1fr max-content">
                <Box><Text block color={Theme.PrimaryGreyMid}>Status Distribution</Text>
                <Text block bold size="16px">By Months</Text></Box>
                <Box align="right">
                <Text>Stages <Switch spaceTop="-10px" onChange={val=> setToggle(val.target.checked)}/>  Steps</Text>
                </Box>
            </Grid>
                
                <Spacer space="20px" />        
                <FlexiBar xData={months} yData={toggle==="on" ? monthData : monthDataStep} tooltip legend stack yAxis xAxis xLabel="Months" height={250} colors={[Theme.PrimaryColor, Theme.PrimaryGreen, Theme.PrimaryGreyMid, Theme.PrimaryGreyLight]} />
        </Box>
    </Box>
    <Box bordered pad="25px">
        <Box pad="0 40px" maxWidth="1000px">
            <Grid responsive={false} default="1fr max-content">
                <Box><Text block color={Theme.PrimaryGreyMid}>Status Distribution</Text>
                <Text block bold size="16px">By Workflows</Text></Box>
                <Box align="right">
                </Box>
            </Grid>
                
                <Spacer space="20px" />        
                <FlexiBar xData={workflows} yData={toggle==="on" ? workflowData : workflowDataStep} tooltip legend stack yAxis xAxis xLabel="Workflows" height={250} colors={[Theme.PrimaryColor, Theme.PrimaryGreen, Theme.PrimaryGreyMid, Theme.PrimaryGreyLight]} />
        </Box>
    </Box>
    <Spacer space="100px" />
    </Box>
}

export default Dashboard;