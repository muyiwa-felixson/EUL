import React from 'react';
import {transparentize} from 'polished';
import { FlowMap } from '../../styledElements/workflow.style';
import { Button, Modal, ModalBody, ModalFooter, Box, Grid, Text, Theme, Spacer, Input, Select} from '../../styledElements/lib';


const members = [
    { value: 1, label: "Muyiwa Felixson", subText: 'mfelixson@gmail.com • 07033591499', image: "https://thispersondoesnotexist.com/image" },
    { value: 2, label: "Lordmallam Nugwan", subText: 'nugwan@gmail.com • 07033591499', image: "https://thispersondoesnotexist.com/image" },
    { value: 3, label: "Olajide Akinpelu", subText: 'jayhee@gmail.com • 07033591499', image: "https://thispersondoesnotexist.com/image" },
    { value: 4, label: "Aisha Bwala", subText: 'bwally@gmail.com • 07033591499', image: "https://thispersondoesnotexist.com/image" },
    { value: 5, label: "Zillah Waminaje", subText: 'zizuu@gmail.com • 07033591499', image: "https://thispersondoesnotexist.com/image" },
]
// fetch above from your list of users//
const NewApplication = props => {
    const { show } = props;

    return <Modal open={show} center={false}>
        <ModalBody width="1200px" bgColor="white">
            <Box pad="30px" bordered>
                <Text size="18px" bold block><i className="flexibull-docs" /> New Application</Text>
            </Box>
            <Box pad="30px" bordered>
                <Text block bold color={Theme.PrimaryColor}>Application &amp; Client Details</Text>
                <Spacer space="30px" />
                <Box maxWidth="1000px">
                    <Grid default="1fr 2fr" gap="20px">
                        <Input block label="Application Title" spaceTop />
                        <Input block label="Description of Application" spaceTop />
                    </Grid>
                    <Spacer space="20px" />
                    <Grid default="1fr 1fr 1fr" gap="20px">
                        <Input block label="Client Name" spaceTop />
                        <Input block type="phone" label="Client Phone Number" spaceTop />
                        <Input block type="email" label="Client Email" spaceTop />
                    </Grid>
                </Box>
            </Box>
            <Box pad="30px" bordered>

                <Box maxWidth="1000px">
                    <Grid default="1fr 1fr 1fr" gap="20px">
                        <Box>
                            <Text block bold color={Theme.PrimaryColor}>Application Assignee </Text>
                            <Spacer space="30px" />
                            <Select imageOptions={members} block label="Assign Application Management to Staff" spaceTop />
                        </Box>
                        <Box>
                            <Text block bold color={Theme.PrimaryColor}>Start Date </Text>
                            <Spacer space="30px" />
                            <Input type="date" block label="Select Date" spaceTop />
                        </Box>
                    </Grid>
                </Box>
            </Box>
            <Box bordered>
                <Grid default="1fr 3fr">
                    <Box pad="30px">
                    <Text block bold color={Theme.PrimaryColor}>Workflow Process</Text>
                    <Spacer space="30px" />
                            <Select options={[{value: "worflow1", label: "Device Acquisition Workflow"}]} block label="Select Workflow" spaceTop />
                    </Box>
                    <Box pad="30px" bordered="left" background={Theme.PrimaryFade}>
                    <Text block bold color={Theme.PrimaryColor}>Workflow Preview</Text>
                    <Spacer space="20px" />
                    <Text bold>Device Acqisition</Text>/<Text color={Theme.PrimaryGrey}>5 Stages</Text>/<Text color={Theme.PrimaryGrey}>25 Steps</Text> 
                    <Spacer direction="horizontal" inline space="40px" />
                    <Text color={transparentize(0.4, Theme.PrimaryFontColor)}><i className="flexibull-clock" /> Expected Timeline <Text bold color={Theme.PrimaryFontColor}>3 Weeks</Text></Text>
                    <Spacer space="20px" />
                    <Box maxWidth="400px">
                    <FlowMap stages={[
                {name: "Stage 1, Application Processing", steps: 5},
                {name: "Stage 2, Client Review/Assessment", steps: 2},
                {name: "Stage 3, Device Acquisition", steps: 3},
                {name: "Stage 4, Deployment & Handover", steps: 3},
                {name: "Stage 5, Application Finale", steps: 2}
            ]} /></Box>
                    </Box>
                </Grid>
            </Box>
            <ModalFooter>
                <Box pad="20px 30px">
                    <Grid default="1fr 1fr" responsive={false}>
                        <Box><Button pale pad="0 30px" onClick={() => props.setApplicationModal(false)}>Cancel</Button></Box>
                        <Box align="right"><Button pad="0 30px">Save Application</Button></Box>
                    </Grid>
                </Box>
            </ModalFooter>
        </ModalBody>
    </Modal>
}

export default NewApplication;