import React from 'react';
import Roles from '../../../utils/roles';
import { PhotoUploader } from '../../styledElements/general.style';
import { Button, Modal, ModalBody, ModalFooter, Box, Grid, Text, Spacer, Input, Select, Checkbox} from '../../styledElements/lib';

const NewUser = props => {
    const { show, roles } = props;

    return <Modal open={show} center={false}>
        <ModalBody width="800px" bgColor="white">
            <Box pad="30px" bordered>
                <Text size="18px" bold block><i className="flexibull-users" /> New User</Text>

                <Box align="center">
                <PhotoUploader />
                </Box>
                <Spacer space="10px" />
                <Grid default="1fr 1fr" gap="10px">
                    <Input label="First Name" spaceTop block placeholder="First name" />
                    <Input label="Last Name" spaceTop block placeholder="Last name" />
                    <Input type="email" label="Email" spaceTop block placeholder="sample@email.com" />
                    <Select label="Gender" spaceTop block 
                    options={[
                        {value: "male", label: "Male"},
                        {value: "female", label: "Female"},
                    ]}
                    />
                    <Select label="Select Role" spaceTop block 
                    options={roles}
                    />
                </Grid>
                <Box height="30px" bordered />
                <Spacer space="20px" />
                <Grid default="1fr 1fr" gap="10px">
                <Input type="password" label="Password" spaceTop block placeholder="*********" />
                <Box pad="10px 0 0 0">
                    <Checkbox size="18px" height="30px" thickness="1px" label="auto generate password" block />
                    <Checkbox size="18px" height="30px" thickness="1px" label="Force change of password on first login" />
                </Box>
                </Grid>
            </Box>
            <ModalFooter>
            <Box pad="20px 30px">
                <Grid default="1fr 1fr" responsive={false}>
                    <Box><Button pale pad="0 30px" onClick={()=> props.setUserModal(false)}>Cancel</Button></Box>
                    <Box align="right"><Button pad="0 30px">Save User</Button></Box>
                </Grid>
            </Box>
            </ModalFooter>
        </ModalBody>
    </Modal>
}

export default NewUser;