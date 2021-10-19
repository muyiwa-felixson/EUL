import React, {useState} from 'react';
import { Box, Button, Grid, Spacer, Text, Theme } from '../../styledElements/lib';
import {transparentize} from 'polished';
import ActivityBoard from './applicationDetail/activityBoard';
import TimeLine from './applicationDetail/timeline';


const ApplicationDetail = () => {
    const [view, setView] = useState(1);
   
    return <Box>
    <Box height="120px" pad="25px 40px" bordered verticalAlign="flex-end">
        <Grid default="auto max-content">
            <Box>
                <Text size="18px" bold block>Application Title</Text>
                <Spacer space="5px"/>
                <Text block>Serahim &amp; Sons Limited</Text>
                <Spacer space="5px"/>
                <Text opacity={0.6}>info@serahimltd • 01 7937382</Text>
            </Box>
            <Box align="right">
            <Spacer space="15px"/>
            <Text color={transparentize(0.4, Theme.PrimaryFontColor)}><i className="flexibull-clock" /> Expected Timeline <Spacer inline space="10px" direction="horizontal"  /><Text bold color={Theme.PrimaryColor}>30 Jun 2020 - 19 Jan 2021</Text></Text>
            <Spacer space="15px"/>
            <Text block>Managed by: <Text bold>Aminu Garba Dalachi</Text></Text>
            </Box>
        </Grid>          
    </Box>
    <Box bordered pad="25px 40px">
        <Text bold block>Project Description</Text>
        <Spacer space="10px"/>
        <Text opacity={0.6}>Project Description Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Text>
    </Box>
    <Box>
        <Grid default="max-content auto" responsive={false}>
            <Box pad="20px">
                <Button onClick={()=> view !== 1 && setView(1)}  color={view === 1 ? Theme.PrimaryGreyMid : "white"} fontColor={view === 1 ? "white" : Theme.PrimaryFontColor} iconLeft={<i className="flexibull-activity" />} width={130} block>Activity Board</Button>
                <Button onClick={()=> view !== 2 && setView(2)} color={view === 2 ? Theme.PrimaryGreyMid : "white"} fontColor={view === 2 ? "white" : Theme.PrimaryFontColor} block width={130} iconLeft={<i className="flexibull-icon-awesome-tasks" />}>Timeline</Button>
            </Box>
            <Box bordered="left">
                {
                    view === 1 && <ActivityBoard />
                }
                {
                    view === 2 && <TimeLine />
                }
            </Box>
        </Grid>
    </Box>
    </Box>
}

export default ApplicationDetail;