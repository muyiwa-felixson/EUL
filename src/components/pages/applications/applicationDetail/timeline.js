import React, {useState} from 'react';
import moment from 'moment';
import { Box, Text } from '../../../styledElements/lib';
import { StageBar, WeekRender } from './style';

const TimeLine = () => {
    const [applicationList, setList] = useState({
        id: 1, name: "Application name", status: 'complete', customer: "Sample Customer", startDate: "09 Nov 20", duration: "3 weeks", endDate: "30 Jan 21", workflowTemplate: "Device Acquisition", assignee: "Muyiwa", stages: [
        {stageName: "Stage 1, Application Processing", startDate: "10 Nov 20", endDate: "28 Nov 20", complete: 90, incomplete: 10, steps: [{id: 101, stepName: "step 1", dueDate: "22 Jun 2020", lag: -3, status: true, current: 'to do'}, {id: 102, stepName: "step 2", dueDate: "22 Jun 2020", lag: 3, status: true, current: 'to do'}]},
        {stageName: "Stage 2, Client Review/Assessment", startDate: "20 Nov 20", endDate: "15 Dec 20", complete: 100, steps:  [{id: 103,stepName: "step 1", dueDate: "22 Jun 2020", lag: 3, status: true, current: 'to do'}, {id: 104,stepName: "step 2", dueDate: "22 Jun 2020", lag: -3, status: true, current: 'to do'}, {id: 114,stepName: "step 3", dueDate: "22 Jun 2020", lag: -3, status: false, current: 'to do'}, {lag: 2, id: 105,stepName: "step 4", status: false, current: 'to do'}]},
        {stageName: "Stage 3, Device Acquisition", startDate: "15 Dec 20", endDate: "05 Jan 21", complete: 90, incomplete: 10, steps:  [{id: 106,stepName: "step 1", dueDate: "22 Jun 2020", lag: -3, status: false, current: 'to do'}, {id: 107,stepName: "step 2", dueDate: "22 Jun 2020", lag: -3, status: false, current: 'to do'}, {lag: 6, id: 108,stepName: "step 3", status: false, current: 'to do'}, {lag: 2, id: 115,stepName: "step 4", status: false, current: 'to do'}]},
        {stageName: "Stage 4, Application Finale", startDate: "05 Jan 21", endDate: "29 Jan 21", steps:  [{id: 109,stepName: "step 1", dueDate: "22 Jun 2020", lag: 3, status: false, current: 'to do'}, {id: 110,stepName: "step 2", dueDate: "22 Jun 2020", lag: 3, status: false, current: 'to do'}]}
        ]}
);

setList({
    id: 1, name: "Application name", status: 'complete', customer: "Sample Customer", startDate: "09 Nov 20", duration: "3 weeks", endDate: "30 Jan 21", workflowTemplate: "Device Acquisition", assignee: "Muyiwa", stages: [
    {stageName: "Stage 1, Application Processing", startDate: "10 Nov 20", endDate: "28 Nov 20", complete: 90, incomplete: 10, steps: [{id: 101, stepName: "step 1", dueDate: "22 Jun 2020", lag: -3, status: true, current: 'to do'}, {id: 102, stepName: "step 2", dueDate: "22 Jun 2020", lag: 3, status: true, current: 'to do'}]},
    {stageName: "Stage 2, Client Review/Assessment", startDate: "20 Nov 20", endDate: "15 Dec 20", complete: 100, steps:  [{id: 103,stepName: "step 1", dueDate: "22 Jun 2020", lag: 3, status: true, current: 'to do'}, {id: 104,stepName: "step 2", dueDate: "22 Jun 2020", lag: -3, status: true, current: 'to do'}, {id: 114,stepName: "step 3", dueDate: "22 Jun 2020", lag: -3, status: false, current: 'to do'}, {lag: 2, id: 105,stepName: "step 4", status: false, current: 'to do'}]},
    {stageName: "Stage 3, Device Acquisition", startDate: "15 Dec 20", endDate: "05 Jan 21", complete: 90, incomplete: 10, steps:  [{id: 106,stepName: "step 1", dueDate: "22 Jun 2020", lag: -3, status: false, current: 'to do'}, {id: 107,stepName: "step 2", dueDate: "22 Jun 2020", lag: -3, status: false, current: 'to do'}, {lag: 6, id: 108,stepName: "step 3", status: false, current: 'to do'}, {lag: 2, id: 115,stepName: "step 4", status: false, current: 'to do'}]},
    {stageName: "Stage 4, Application Finale", startDate: "05 Jan 21", endDate: "29 Jan 21", steps:  [{id: 109,stepName: "step 1", dueDate: "22 Jun 2020", lag: 3, status: false, current: 'to do'}, {id: 110,stepName: "step 2", dueDate: "22 Jun 2020", lag: 3, status: false, current: 'to do'}]}
    ]}
);


const currentdate = moment();
const start = moment(applicationList.startDate);
const end = moment(applicationList.endDate);
const duration = currentdate > end && applicationList.status !=='complete' ? moment.duration(moment().diff(start)) : moment.duration(end.diff(start));
const timeline = duration.asDays();
const weeks = Math.ceil(duration.asWeeks());
const today = 100 * moment.duration(moment().diff(start)).asDays() / timeline;

console.log(today);

    return <Box bordered>
        <Box pad="25px" bordered>
        <Text bold block size="18px">Timeline</Text>
        </Box>
        <WeekRender weeks={weeks} today={ today < 100 && today}>
            
{ applicationList.stages.map(elem => {
    const startPercentage = 100 * moment.duration(moment(elem.startDate).diff(start)).asDays() / timeline;
    const width = 100 * moment.duration(moment(elem.endDate).diff(moment(elem.startDate))).asDays() / timeline;
    const dtoday = 100 * moment.duration(moment().diff(moment(elem.startDate))).asDays() / moment.duration(moment(elem.endDate).diff(moment(elem.startDate))).asDays();
    const complete = today < (startPercentage + width) ? dtoday * elem.complete/100  : elem.complete;
    const incomplete = today < (startPercentage + width) ? dtoday * elem.incomplete/100  : elem.incomplete;
    console.log(dtoday, complete); 
    return <StageBar key={elem.stageName} width={width} start={startPercentage} complete={complete} incomplete={incomplete} steps={elem.steps}>{elem.stageName}</StageBar>
})}
        </WeekRender>
    </Box>
}

export default TimeLine;