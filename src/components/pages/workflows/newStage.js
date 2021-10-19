import React, { useState } from 'react';
import { transparentize } from 'polished';
import { NavLink } from 'react-router-dom';
import { Box, Button, Grid, Input, Select, Spacer, Table, Text, TextArea, Theme } from '../../styledElements/lib';
import { Faces, FlowBox, StepBox } from '../../styledElements/workflow.style';
import { ReturnButton } from '../../styledElements/general.style';
import NewStep from './newStep';

const Stage = props => {
    const [stepModal, setStepModal] = useState(false);
    return <Box>
        <Box minHeight="100px" pad="25px 40px 25px 0" bordered verticalAlign="flex-end">
            <Grid default="50px 50px auto max-content" lr="50px 50px auto max-content" gap={0}>
                <ReturnButton level={0}><NavLink to='/workflows/'><i className="flexibull-angle-left" style={{ display: 'inline-block', paddingBottom: '5px' }} /><div><span>List of</span><br /> Workflows</div></NavLink></ReturnButton>
                <ReturnButton level={1}><NavLink to='/workflows/workflow'><i className="flexibull-angle-left" style={{ display: 'inline-block', paddingBottom: '5px' }} /><div><span>Back to</span><br /> Workflow</div></NavLink></ReturnButton>
                <Box pad="0 20px">
                    <Text size="18px" bold block><i className="flexibull-icon-metro-flow-cascade" /> New Stage</Text>
                    <Spacer space="5px" />
                    <Text opacity={0.6}>Create a process flow with stages, sub steps and manage notification triggers</Text>
                </Box>
                <Box align="right">
                    <Button pad="0 30px" spaceRight pale>Delete Stage</Button>
                    <Button pad="0 30px" >Save Stage</Button>
                </Box>
            </Grid>
        </Box>
        <Box pad="40px" bordered>
            <Box maxWidth="550px">
                <Input spaceBottom="40px" type="text" label="Stage Name" block spaceTop placeholder="Enter stage name" />

                <TextArea height="100px" type="text" label="Stage Details" block spaceTop placeholder="Enter stage description" />
            </Box>
        </Box>
        <Box pad="20px 40px" bordered>
            <Grid default="max-content auto max-content" gap="20px">
                <Box pad="10px" bordered="all" round display="inline-block"><Text block color={transparentize(0.4, Theme.PrimaryFontColor)}><i className="flexibull-clock" />Timeline <Text bold color={Theme.PrimaryFontColor}>3 weeks</Text></Text></Box>
                <Box>
                    <Faces persons={[{ name: "Tony Ayabam", image: "https://thispersondoesnotexist.com/image" }, { name: "Sulieman Salisu", image: "https://thispersondoesnotexist.com/image" }, { name: "Ahmadu", image: "https://thispersondoesnotexist.com/image" }]} />
                </Box>
                <Box align="right">
                    <Button pad="0 30px" iconLeft={<i className="flexibull-plus" />} onClick={()=> setStepModal(true)}>Add Step</Button>
                </Box>
            </Grid>
        </Box>
        <Box pad="40px" background={Theme.PrimaryFade}>
        <Text bold size="16px">Steps</Text>
            <Spacer space="20px" />
            <Grid default="repeat(3, 1fr)" lr="1fr" md="1fr" gap="40px" alignItems="flex-end">
            <StepBox
                    name="Stage 1: Register Client"
                    persons={[{ name: "Tony Ayabam", image: "https://thispersondoesnotexist.com/image" }, { name: "Sulieman Salisu", image: "https://thispersondoesnotexist.com/image" }, { name: "Ahmadu", image: "https://thispersondoesnotexist.com/image" }]}
                />
                <StepBox
                    name="Stage 1: Register Client"
                    persons={[{ name: "Tony Ayabam", image: "https://thispersondoesnotexist.com/image" }, { name: "Sulieman Salisu", image: "https://thispersondoesnotexist.com/image" }, { name: "Ahmadu", image: "https://thispersondoesnotexist.com/image" }]}
                />
                <StepBox
                    name="Stage 1: Register Client"
                    persons={[{ name: "Tony Ayabam", image: "https://thispersondoesnotexist.com/image" }, { name: "Sulieman Salisu", image: "https://thispersondoesnotexist.com/image" }, { name: "Ahmadu", image: "https://thispersondoesnotexist.com/image" }]}
                />
                <StepBox
                    name="Stage 1: Register Client"
                    persons={[{ name: "Tony Ayabam", image: "https://thispersondoesnotexist.com/image" }, { name: "Sulieman Salisu", image: "https://thispersondoesnotexist.com/image" }, { name: "Ahmadu", image: "https://thispersondoesnotexist.com/image" }]}
                />
            </Grid>
        </Box>
        <NewStep show={stepModal} setStepModal={setStepModal} />
    </Box>
}

export default Stage;