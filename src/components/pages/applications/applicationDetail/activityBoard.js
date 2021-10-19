import React, {useState} from 'react';
import { Box, Button, Checkbox, Grid, Input, Select, Spacer, Table, Text, Theme } from '../../../styledElements/lib';
import {transparentize} from 'polished';
import { Activity } from './style';

const ActivityBoard = props => {
    const [pause, setPause] = useState(false);
    const [applicationList, setList] = useState({
        id: 1, name: "Application name", customer: "Sample Customer", startDate: "09 Nov 20", duration: "3 weeks", endDate: "30 Nov 20", workflowTemplate: "Device Acquisition", assignee: "Muyiwa", stages: [
        {stageName: "Stage 1, Application Processing", steps: [{id: 101, stepName: "step 1", dueDate: "22 Jun 2020", lag: -3, status: false, current: 'to do'}, {id: 102, stepName: "step 2", dueDate: "22 Jun 2020", lag: 3, status: false, current: 'to do'}]},
        {stageName: "Stage 2, Client Review/Assessment", steps:  [{id: 103,stepName: "step 1", dueDate: "22 Jun 2020", lag: 3, status: false, current: 'to do'}, {id: 104,stepName: "step 2", dueDate: "22 Jun 2020", lag: -3, status: false, current: 'to do'}, {id: 114,stepName: "step 3", dueDate: "22 Jun 2020", lag: -3, status: false, current: 'to do'}, {lag: 2, id: 105,stepName: "step 4", status: false, current: 'to do'}]},
        {stageName: "Stage 3, Device Acquisition", steps:  [{id: 106,stepName: "step 1", dueDate: "22 Jun 2020", lag: -3, status: false, current: 'to do'}, {id: 107,stepName: "step 2", dueDate: "22 Jun 2020", lag: -3, status: false, current: 'to do'}, {lag: 6, id: 108,stepName: "step 3", status: false, current: 'to do'}, {lag: 2, id: 115,stepName: "step 4", status: false, current: 'to do'}]},
        {stageName: "Stage 4, Application Finale", steps:  [{id: 109,stepName: "step 1", dueDate: "22 Jun 2020", lag: 3, status: false, current: 'to do'}, {id: 110,stepName: "step 2", dueDate: "22 Jun 2020", lag: 3, status: false, current: 'to do'}]}
        ]}
);

        
        const handleDragEnter = e => {
            e.preventDefault();
            e.stopPropagation();

          };
          const handleDragLeave = e => {
            e.preventDefault();
            e.stopPropagation();
          };
          const handleDragOver = e => {
            e.preventDefault();
            e.stopPropagation();
          };
          const handleDrop = (e, targeted) => {
            e.preventDefault();
            e.stopPropagation();
            console.log(JSON.parse(e.dataTransfer.getData('text')));
            const element = JSON.parse(e.dataTransfer.getData('text'));
            let newList = {...applicationList};
            const stageIndex = newList.stages.findIndex(elem=> elem.stageName == element.stage);
            const stepIndex = newList.stages[stageIndex].steps.findIndex(elem=> elem.id == element.step);
            newList.stages[stageIndex].steps[stepIndex].current = targeted;

            setList(newList);
          };

    return <Box>
        <Box pad="25px 25px 10px 25px" bordered>
            <Grid default="max-content auto" responsive={false}>
                <Box>
                    <Text bold block size="18px">Activity Board</Text>
                </Box>
                <Box align="right">
                    <Button color={pause ? Theme.PrimaryGreyMid : Theme.PrimaryColor} iconLeft={pause ? <i className="flexibull-right-dir" /> : <Text>II</Text>}>{ pause ? "Continue" :"Pause"} Process</Button>
                </Box>
            </Grid>
            <Spacer space="15px" />
            <Grid default="auto auto" responsive={false}>
                <Box>
                    <Text opacity={0.6} size="10px">{applicationList.startDate}</Text>
                </Box>
                <Box align="right">
                    <Text opacity={0.6} size="10px">{applicationList.endDate}</Text>
                </Box>
            </Grid>
        </Box>
        <Box background={Theme.PrimaryFade} minHeight="60vh" responsive={false}>
            <Grid default="3fr 2fr 2fr 2fr" gap={0}>
                <Box background="rgba(255,255,255,0.5)">
                    <Box bordered pad="10px 25px">To Do</Box>
                </Box>
                <Box bordered="left">
                <Box bordered pad="10px 25px">In Progress</Box>
                </Box>
                <Box bordered="left">
                <Box bordered pad="10px 25px">Paused</Box>
                </Box>
                <Box bordered="left">
                <Box bordered pad="10px 25px">Done</Box>
                </Box>
            </Grid>
           { applicationList.stages.map((elem, index)=> {
            return <Grid key={elem.stageName} default="3fr 2fr 2fr 2fr" gap={0} style={{ background: index % 2 === 1 && "rgba(0,0,0,0.05)", borderBottom: `1px solid ${Theme.PrimaryBorderColor}`}}>
                <Box 
                onDrop={e => handleDrop(e, "to do")}
                onDragOver={e => handleDragOver(e)}
                onDragEnter={e => handleDragEnter(e)}
                onDragLeave={e => handleDragLeave(e)}
                background="rgba(255,255,255,0.5)" pad="20px">
                <Box pad="0 0 15px 0"><Text bold>{elem.stageName}</Text></Box>
                   {
                       elem.steps.map((element, indexer)=> element.current === "to do" && <Activity key={`${indexer}-${index}-${element.stepName}`} {...element} draggable data={element.stepName} onDragStart={e=> e.dataTransfer.setData('text',JSON.stringify({step: element.id, stage: elem.stageName}))} />)
                   }
                </Box>
                <Box 
                status="in progress"
                onDrop={e => handleDrop(e, "in progress")}
                onDragOver={e => handleDragOver(e)}
                onDragEnter={e => handleDragEnter(e)}
                onDragLeave={e => handleDragLeave(e)}
                bordered="left" pad="15px"
                >
                    <Spacer space="35px" />
                {
                       elem.steps.map((element, indexer)=> element.current === "in progress" && <Activity color={Theme.PrimaryOrange} key={`${indexer}-${index}-${element.stepName}`} {...element} draggable data={element.stepName} onDragStart={e=> e.dataTransfer.setData('text',JSON.stringify({step: element.id, stage: elem.stageName}))}/>)
                   }
                </Box>
                <Box 
                status="pause"
                onDrop={e => handleDrop(e, "pause")}
                onDragOver={e => handleDragOver(e)}
                onDragEnter={e => handleDragEnter(e)}
                onDragLeave={e => handleDragLeave(e)}
                bordered="left" pad="15px">
                    <Spacer space="35px" />
                {
                       elem.steps.map((element, indexer)=> element.current === "pause" && <Activity color={Theme.PrimaryGreyMid} key={`${indexer}-${index}-${element.stepName}`} {...element} draggable data={element.stepName} onDragStart={e=> e.dataTransfer.setData('text',JSON.stringify({step: element.id, stage: elem.stageName}))}/>)
                   }
                </Box>
                <Box 
                status="done"
                onDrop={e => handleDrop(e, "done")}
                onDragOver={e => handleDragOver(e)}
                onDragEnter={e => handleDragEnter(e)}
                onDragLeave={e => handleDragLeave(e)}
                bordered="left" pad="15px">
                    <Spacer space="35px" />
                {
                       elem.steps.map((element, indexer)=> element.current === "done" && <Activity color={Theme.PrimaryGreen} key={`${indexer}-${index}-${element.stepName}`} {...element} draggable data={element.stepName} onDragStart={e=> e.dataTransfer.setData('text',JSON.stringify({step: element.id, stage: elem.stageName}))}/>)
                   }
                </Box>
            </Grid>
            })
    }
        </Box>
    </Box>
}

export default ActivityBoard;