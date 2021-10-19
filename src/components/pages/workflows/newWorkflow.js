import React from 'react';
import { NavLink } from 'react-router-dom';
import { transparentize } from 'polished';
import { Box, Button, Grid, Input, Spacer, Text, Theme } from '../../styledElements/lib';
import { StageBox } from '../../styledElements/workflow.style';
import { ReturnButton } from '../../styledElements/general.style';

const WorkFlow = () => {
    return <Box>
        <Box minHeight="100px" pad="25px 40px 25px 0" bordered verticalAlign="flex-end">
            <Grid default="50px auto max-content" lr="50px auto max-content">
            <ReturnButton level={0}><NavLink to='/workflows/'><i className="flexibull-angle-left" style={{display: 'inline-block', paddingBottom: '5px'}} /><div><span>List of</span><br/> Workflows</div></NavLink></ReturnButton>
                <Box>
                    <Text size="18px" bold block><i className="flexibull-icon-metro-flow-cascade" /> New Workflow</Text>
                    <Spacer space="5px" />
                    <Text opacity={0.6}>Create a process flow with stages, sub steps and manage notification triggers</Text>
                </Box>
                <Box align="right">
                    <Button pad="0 30px" spaceRight pale>Delete Workflow</Button>
                    <Button pad="0 30px" >Save Workflow</Button>
                </Box>
            </Grid>
        </Box>
        <Box pad="25px 40px" bordered>
            <Grid default="minmax(200px, 550px) auto" gap="20px">
                <Input type="text" label="Workflow Name" block spaceTop placeholder="Enter workflow name" />

            </Grid>
        </Box>
        <Box pad="20px 40px" bordered>
            <Grid default="auto max-content" lr="auto max-content">
                <Box>
                    <Button color={transparentize(0.6, Theme.PrimaryFontColor)} pale><Text color={transparentize(0.4, Theme.PrimaryFontColor)}><i className="flexibull-clock" /> Cumulative Timeline <Text bold color={Theme.PrimaryFontColor}>3 Weeks</Text></Text></Button>
                </Box>
                <Box align="right">
                <NavLink to='/workflows/workflow/stage'><Button pad="0 30px" iconLeft={<i className="flexibull-plus" />} >Add Stage</Button></NavLink>
                </Box>
            </Grid>
        </Box>
        <Box pad="20px 40px">
            <Text bold size="16px">Stages</Text>
            <Spacer space="20px" />
            <Grid default="repeat(3, 1fr)" lr="1fr" md="1fr" gap="40px" alignItems="flex-end">
                <StageBox
                    name="Stage 1: Register Client"
                    steps={[
                        { name: "A step has no name", days: 3 },
                        { name: "Second step has no name", days: 2 }
                    ]}
                    persons={[{ name: "Ahmadu", image: "https://thispersondoesnotexist.com/image" }, { name: "Ahmadu", image: "https://thispersondoesnotexist.com/image" }]}
                />

                <StageBox
                    name="Stage 1: Register Client"
                    steps={[
                        { name: "A step has no name", days: 3 },
                        { name: "Second step has no name", days: 2 }
                    ]}
                    persons={[{ name: "Ahmadu", image: "https://thispersondoesnotexist.com/image?1" }, { name: "Ahmadu", image: "https://thispersondoesnotexist.com/image?2" }, { name: "Tony Ayabam", image: "https://thispersondoesnotexist.com/image?fb=3&dd=1" }, { name: "Sulieman Salisu", image: "https://thispersondoesnotexist.com/image?cd=4" }, { name: "Ahmadu", image: "https://thispersondoesnotexist.com/image?zd=5" }, { name: "Ahmadu", image: "https://thispersondoesnotexist.com/image?id=6" }]}
                />

                <StageBox
                    name="Stage 1: Register Client"
                    steps={[
                        { name: "A step has no name", days: 3 },
                        { name: "Second step has no name", days: 2 }
                    ]}
                    persons={[{ name: "Tony Ayabam", image: "https://thispersondoesnotexist.com/image" }, { name: "Sulieman Salisu", image: "https://thispersondoesnotexist.com/image" }, { name: "Ahmadu", image: "https://thispersondoesnotexist.com/image" }]}
                />
            </Grid>
        </Box>
    </Box>
}

export default WorkFlow;