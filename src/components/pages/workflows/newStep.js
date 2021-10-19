import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, Box, Grid, Text, Spacer, Input, Select, TextArea, Tabs, Switch, Checkbox } from '../../styledElements/lib';


const members = [
{value: 1, label: "Muyiwa Felixson", subText: 'mfelixson@gmail.com • 07033591499', image: "https://thispersondoesnotexist.com/image"},
{value: 2, label: "Lordmallam Nugwan", subText: 'nugwan@gmail.com • 07033591499', image: "https://thispersondoesnotexist.com/image"},
{value: 3, label: "Olajide Akinpelu", subText: 'jayhee@gmail.com • 07033591499', image: "https://thispersondoesnotexist.com/image"},
{value: 4, label: "Aisha Bwala", subText: 'bwally@gmail.com • 07033591499', image: "https://thispersondoesnotexist.com/image"},
{value: 5, label: "Zillah Waminaje", subText: 'zizuu@gmail.com • 07033591499', image: "https://thispersondoesnotexist.com/image"},
]
// fetch above from your list of users//
const NewStep = props => {
    const { show } = props;

    return <Modal open={show} center={false}>
        <ModalBody width="800px" bgColor="white">
            <Box pad="30px" bordered>
                <Text size="18px" bold block><i className="flexibull-icon-metro-flow-cascade" /> New Step</Text>
                <Spacer space="20px" />
                <Tabs>
                    <div label="Details">
                        <Box maxWidth="550px" pad="30px 0">
                            <Input spaceBottom="40px" type="text" label="Step Name" block spaceTop placeholder="Enter step name" />
                            <TextArea height="100px" type="text" label="Step Details" block spaceTop placeholder="Enter step description" />
                            <Select  spaceTop="40px" simpleOptions={[...Array(356).keys()]} label="Expected Duration in Days" />
                        </Box>
                    </div>
                    <div label="Notifications &amp; Recipients">
                        <Box pad="30px 0">
                            <Grid alignItems="flex-start" gap="15px 5px" default="max-content max-content max-content max-content auto">
                            <Box></Box>
                            <Box><Text bold>Notify</Text></Box>
                            <Box><Text bold>Email</Text></Box>
                            <Box><Text bold>SMS</Text></Box>
                            <Box><Text bold>Recipients</Text></Box>

                                <Box pad="12px 0 0"><Text>Approaching Start</Text></Box>
                                <Switch />
                                <Checkbox checked />
                                <Checkbox />
                                <Select block imageOptions={members} isMulti />

                                <Box pad="12px 0 0"><Text>Start Date</Text></Box>
                                <Switch />
                                <Checkbox checked/>
                                <Checkbox />
                                <Select block imageOptions={members} isMulti />

                                <Box pad="12px 0 0"><Text>Close to Due Date</Text></Box>
                                <Switch />
                                <Checkbox checked/>
                                <Checkbox />
                                <Select block imageOptions={members} isMulti />

                                <Box pad="12px 0 0"><Text>Due Date</Text></Box>
                                <Switch />
                                <Checkbox checked/>
                                <Checkbox />
                                <Select block imageOptions={members} isMulti />
                            </Grid>
                        </Box>
                    </div>
                </Tabs>
            </Box>
            <ModalFooter>
                <Box pad="20px 30px">
                    <Grid default="1fr 1fr" responsive={false}>
                        <Box><Button pale pad="0 30px" onClick={() => props.setStepModal(false)}>Cancel</Button></Box>
                        <Box align="right"><Button pad="0 30px">Save Step</Button></Box>
                    </Grid>
                </Box>
            </ModalFooter>
        </ModalBody>
    </Modal>
}

export default NewStep;