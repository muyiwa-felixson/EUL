import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button, Grid, Input, Spacer, Text } from '../../styledElements/lib';
import { FlowBox } from '../../styledElements/workflow.style';

const WorkFlows = () => {
    return <Box>
    <Box height="100px" pad="25px 40px" bordered verticalAlign="flex-end">
        <Grid default="auto max-content">
            <Box>
                <Text size="18px" bold block><i className="flexibull-icon-metro-flow-cascade" /> Workflows</Text>
                <Spacer space="5px" />
                <Text opacity={0.6}>Manage process flows</Text>
            </Box>
            <Box align="right">
                <NavLink to='/workflows/workflow'><Button pad="0 30px">Create Workflow</Button></NavLink>
            </Box>
        </Grid>          
    </Box>
    <Box pad="25px 40px" bordered>
            <Grid default="minmax(200px, 350px) auto" gap="20px">
            <Input type="search" round block iconRight="flexibull-search" placeholder="Search for workflow" />
            
            </Grid>
        </Box>
    <Box pad="30px 40px">
        <Grid default="repeat(3, 1fr)" lr=" 1fr 1fr" md="1fr" gap="50px" >
            <FlowBox 
            name="Device Acquisition Workflow"
            applications={21}
            steps={26}
            stages={[
                {name: "Stage 1, Application Processing", steps: 5},
                {name: "Stage 2, Client Review/Assessment", steps: 2},
                {name: "Stage 3, Device Acquisition", steps: 3},
                {name: "Stage 4, Deployment & Handover", steps: 3},
                {name: "Stage 5, Application Finale", steps: 2}
            ]}
            timeline="1 week, 2 days"
            />
             <FlowBox 
            name="Device Acquisition Workflow"
            applications={21}
            steps={26}
            stages={[
                {name: "Stage 1, Application Processing", steps: 5},
                {name: "Stage 2, Client Review/Assessment", steps: 2},
                {name: "Stage 3, Device Acquisition", steps: 3},
            ]}
            timeline="1 week, 2 days"
            />
             <FlowBox 
            name="Device Acquisition Workflow"
            applications={21}
            steps={26}
            stages={[
                {name: "Stage 1, Application Processing", steps: 5},
                {name: "Stage 2, Client Review/Assessment", steps: 2},
                {name: "Stage 3, Device Acquisition", steps: 3},
                {name: "Stage 4, Application Finale", steps: 2}
            ]}
            timeline="1 week, 2 days"
            />
            <FlowBox 
            name="Devonour Nero Dante Workflow"
            applications={21}
            steps={26}
            stages={[
                {name: "Stage 1, Device Acquisition", steps: 3},
                {name: "Stage 2, Deployment & Handover", steps: 3},
                {name: "Stage 3, Application Finale", steps: 2}
            ]}
            timeline="1 week, 2 days"
            />
        </Grid>
    </Box>
    </Box>
}

export default WorkFlows;