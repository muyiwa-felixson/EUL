import React, {useState} from 'react';
import { NavLink} from 'react-router-dom';
import { Box, Button, Checkbox, Grid, Input, Select, Spacer, Table, Text, Theme } from '../../styledElements/lib';
import {transparentize} from 'polished';
import { Pointer, Bar } from '../../styledElements/workflow.style';
import Banner from '../../../assets/placeholder.svg';
import NewApplication from './newApplication';


const members = [
    {value: 1, label: "Muyiwa Felixson", subText: 'mfelixson@gmail.com • 07033591499', image: "https://thispersondoesnotexist.com/image"},
    {value: 2, label: "Lordmallam Nugwan", subText: 'nugwan@gmail.com • 07033591499', image: "https://thispersondoesnotexist.com/image"},
    {value: 3, label: "Olajide Akinpelu", subText: 'jayhee@gmail.com • 07033591499', image: "https://thispersondoesnotexist.com/image"},
    {value: 4, label: "Aisha Bwala", subText: 'bwally@gmail.com • 07033591499', image: "https://thispersondoesnotexist.com/image"},
    {value: 5, label: "Zillah Waminaje", subText: 'zizuu@gmail.com • 07033591499', image: "https://thispersondoesnotexist.com/image"},
    ]


const ApplicationRow = props =>{
    const [sopen, setOpen] = useState(false);
    let totalSteps = 0;
    let totalDone= 0;
  let myStages = [];
  if (props.stages) {
    myStages = !Array.isArray(props.stages)
      ? [props.stages]
      : props.stages;
  }

  if (myStages.length < 1) {
    return null;
  }

  myStages.map(elem=> {
      elem.steps.map(eleme => {
          totalSteps++;
          eleme.status && totalDone++;
      })
  })
    return <>
    <tr>
<td><Pointer onClick={()=> setOpen(!sopen)} opened={sopen}><i className="flexibull-angle-down" /></Pointer> <NavLink to="/applications/detail"><Text bold color={Theme.PrimaryColor}>{props.name}</Text></NavLink></td>
<td><Text color={Theme.PrimaryGreyMid}>{props.customer}</Text></td>
        <td><Text color={Theme.PrimaryGreyMid}>{props.startDate}</Text></td>
        <td><Text bold>{props.duration}</Text></td>
        <td><Text color={Theme.PrimaryGreyMid}>{props.endDate}</Text></td>
        <td><i className="flexibull-icon-metro-flow-cascade" /> <Text color={Theme.PrimaryGreyMid}>{props.workflowTemplate}</Text></td>
<td><Bar percentage={Math.floor(100 * totalDone/totalSteps)} /></td>
        <td><Text bold>{props.assignee}</Text></td>
        <td></td>
    </tr>
    <tr style={{ display: sopen ? "table-row" : "none"}}><td colSpan={9} style={{padding: "0"}}>
        <Grid default={`repeat(${myStages.length}, 1fr)`} style={{ color: transparentize(0.4, Theme.PrimaryFontColor) }}>
            { myStages && myStages.map((elem, index)=> {
                return <Box bordered={index !== myStages.length -1 ? "right" : false} pad="20px" key={`${props.id}-${index}-application-stage`}>
                <Text bold block size="10px">{elem.stageName}</Text>
                <Spacer space="10px" />
               {
               elem.steps.map((stepelem, stepindex)=>{
               return <Text block key={`${props.id}-${index}-${stepindex}-application-step`}><Checkbox height="24px" elevate="none" thickness="1px" size="18px" checked={stepelem.status} label={stepelem.stepName} disabled /></Text>
               })
               }
                </Box>
            })}
        </Grid> 
        </td></tr>
    </>
}
const Applications = () => {
    const [applicationList, setList] = useState([
        { id: 1, name: "Application name", customer: "Sample Customer", startDate: "09 Nov 20", duration: "3 weeks", endDate: "30 Nov 20", workflowTemplate: "Device Acquisition", assignee: "Muyiwa", stages: [
        {stageName: "Stage 1, Application Processing", steps: [{stepName: "step 1", status: true}, {stepName: "step 2", status: true}]},
        {stageName: "Stage 2, Client Review/Assessment", steps:  [{stepName: "step 1", status: true}, {stepName: "step 2", status: true}, {stepName: "step 3", status: false}, {stepName: "step 4", status: false}]},
        {stageName: "Stage 3, Device Acquisition", steps:  [{stepName: "step 1", status: true}, {stepName: "step 2", status: false}, {stepName: "step 3", status: false}, {stepName: "step 4", status: false}]},
        {stageName: "Stage 4, Application Finale", steps:  [{stepName: "step 1", status: false}, {stepName: "step 2", status: false}]}
    ]},
    { id: 2, name: "Application name", customer: "Sample Customer", startDate: "09 Nov 20", duration: "3 weeks", endDate: "30 Nov 20", workflowTemplate: "Device Acquisition", assignee: "Muyiwa", stages: [
        {stageName: "Stage 1, Application Processing", steps: [{stepName: "step 1", status: true}, {stepName: "step 2", status: true}]},
        {stageName: "Stage 2, Client Review/Assessment", steps:  [{stepName: "step 1", status: true}, {stepName: "step 2", status: true}]},
        {stageName: "Stage 3, Device Acquisition", steps:  [{stepName: "step 1", status: true}, {stepName: "step 2", status: false}]},
        {stageName: "Stage 4, Application Finale", steps:  [{stepName: "step 1", status: false}, {stepName: "step 2", status: false}]}
    ]},
    { id: 3, name: "Application name", customer: "Sample Customer", startDate: "09 Nov 20", duration: "3 weeks", endDate: "30 Nov 20", workflowTemplate: "Device Acquisition", assignee: "Muyiwa", stages: [
        {stageName: "Stage 1, Application Processing", steps: [{stepName: "step 1", status: true}, {stepName: "step 2", status: true}]},
        {stageName: "Stage 2, Client Review/Assessment", steps:  [{stepName: "step 1", status: true}, {stepName: "step 2", status: true}]},
        {stageName: "Stage 3, Device Acquisition", steps:  [{stepName: "step 1", status: true}, {stepName: "step 2", status: true}]},
        {stageName: "Stage 4, Application Finale", steps:  [{stepName: "step 1", status: true}, {stepName: "step 2", status: true}]}
    ]}
]);

setList([
    { id: 1, name: "Application name", customer: "Sample Customer", startDate: "09 Nov 20", duration: "3 weeks", endDate: "30 Nov 20", workflowTemplate: "Device Acquisition", assignee: "Muyiwa", stages: [
    {stageName: "Stage 1, Application Processing", steps: [{stepName: "step 1", status: true}, {stepName: "step 2", status: true}]},
    {stageName: "Stage 2, Client Review/Assessment", steps:  [{stepName: "step 1", status: true}, {stepName: "step 2", status: true}, {stepName: "step 3", status: false}, {stepName: "step 4", status: false}]},
    {stageName: "Stage 3, Device Acquisition", steps:  [{stepName: "step 1", status: true}, {stepName: "step 2", status: false}, {stepName: "step 3", status: false}, {stepName: "step 4", status: false}]},
    {stageName: "Stage 4, Application Finale", steps:  [{stepName: "step 1", status: false}, {stepName: "step 2", status: false}]}
]},
{ id: 2, name: "Application name", customer: "Sample Customer", startDate: "09 Nov 20", duration: "3 weeks", endDate: "30 Nov 20", workflowTemplate: "Device Acquisition", assignee: "Muyiwa", stages: [
    {stageName: "Stage 1, Application Processing", steps: [{stepName: "step 1", status: true}, {stepName: "step 2", status: true}]},
    {stageName: "Stage 2, Client Review/Assessment", steps:  [{stepName: "step 1", status: true}, {stepName: "step 2", status: true}]},
    {stageName: "Stage 3, Device Acquisition", steps:  [{stepName: "step 1", status: true}, {stepName: "step 2", status: false}]},
    {stageName: "Stage 4, Application Finale", steps:  [{stepName: "step 1", status: false}, {stepName: "step 2", status: false}]}
]},
{ id: 3, name: "Application name", customer: "Sample Customer", startDate: "09 Nov 20", duration: "3 weeks", endDate: "30 Nov 20", workflowTemplate: "Device Acquisition", assignee: "Muyiwa", stages: [
    {stageName: "Stage 1, Application Processing", steps: [{stepName: "step 1", status: true}, {stepName: "step 2", status: true}]},
    {stageName: "Stage 2, Client Review/Assessment", steps:  [{stepName: "step 1", status: true}, {stepName: "step 2", status: true}]},
    {stageName: "Stage 3, Device Acquisition", steps:  [{stepName: "step 1", status: true}, {stepName: "step 2", status: true}]},
    {stageName: "Stage 4, Application Finale", steps:  [{stepName: "step 1", status: true}, {stepName: "step 2", status: true}]}
]}
]);
    const [applicationModal, setApplicationModal] = useState(false);
    return <Box>
    <Box height="100px" pad="25px 40px" bordered verticalAlign="flex-end">
        <Grid default="auto max-content">
            <Box>
                <Text size="18px" bold block><i className="flexibull-docs" /> Applications</Text>
                <Spacer space="5px" />
                <Text opacity={0.6}>Manage Applications and process status</Text>
            </Box>
            <Box align="right">
                <Button pad="0 30px" onClick={()=> setApplicationModal(true)}>Add New Application</Button>
            </Box>
        </Grid>          
    </Box>
    <Box pad="25px 40px" bordered>

        <Grid default="3fr repeat(5, 2fr)" gap="15px">
            <Box>
            <Input type="search" placeholder="Search for application" round spaceTop block iconRight="flexibull-search"/>
            </Box>
            <Box>
                <Select label="status" spaceTop />
            </Box>
            <Box>
                <Select label="Workflow Type" spaceTop />
            </Box>
            <Box></Box>
            <Box></Box>
            <Box>
                <Select label="Assignee" spaceTop imageOptions={members}/>
            </Box>
        </Grid>
        </Box>
        <Box pad="0">
        <Box pad="0 40px">
            { !applicationList.length >= 1 ?
            <Box align="center" pad="calc(50vh - 350px) 0 0 0">
                <img src={Banner} style={{ maxWidth: '380px'}} />
                <Box />
                <Box display="inline-block" pad="20px 0" maxWidth="300px">
                <Text block color={Theme.PrimaryGreyMid}>
                No application is currently active at the moment.
Create a new application 
                </Text>
                </Box>
                <Box />
                <Button onClick={()=> setApplicationModal(true)}>Add new Application</Button>
            </Box>
            :
            <Box>
                <Table collapsible>
            <table>
            <thead>
                <tr>
                    <th><Text uppercase size="10px">Application</Text></th>
                    <th><Text uppercase size="10px">Customer Details</Text></th>
                    <th><Text uppercase size="10px">Start Date</Text></th>
                    <th><Text uppercase size="10px">Duration</Text></th>
                    <th><Text uppercase size="10px">End Date</Text></th>
                    <th><Text uppercase size="10px">Workflow</Text></th>
                    <th><Text uppercase size="10px">Status</Text></th>
                    <th><Text uppercase size="10px">Assignee</Text></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    applicationList.map(elem=> <ApplicationRow key={elem.id} {...elem} />)
                }
            </tbody>
            </table>
            </Table>
            </Box>
            }
        </Box>
    </Box>
    <NewApplication show={applicationModal} setApplicationModal={setApplicationModal} />
    </Box>
}

export default Applications;