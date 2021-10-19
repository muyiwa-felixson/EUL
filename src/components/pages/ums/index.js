import React, {useEffect, useState} from 'react';
import _ from 'lodash';
import { Box, Button, Grid, Input, Select, Spacer, Table, Text, Theme, DropDown } from '../../styledElements/lib';
import {ImageBox, PhotoBox} from '../../styledElements/general.style';
import UserImage from '../../../assets/users.svg';
import NewUser from './user';
import Roles from '../../../utils/roles';
import { getRoles } from 'src/redux/modules/role';
import { useDispatch, useSelector } from 'react-redux';
import { recordsToOptions } from 'src/utils';
import { getUsers } from 'src/redux/modules/user';

const UMS = () => {

    const dispatch = useDispatch();
    const [userModal, setUserModal]= useState(false);
    const roles = useSelector(({roles}) => roles.results) || [];
    const users = useSelector(({users}) => users.results) || [];

    const defaultRole = {value: "all", label: "All"};
    const [selectedRole, setSelectedRole] = useState(defaultRole);
    const optionRoles = _.orderBy(recordsToOptions(roles), ['label']);

    useEffect(() => {
        dispatch(getRoles());
        dispatch(getUsers());
    }, [])

    return <Box>
        <Box height="100px" pad="25px 40px" bordered verticalAlign="flex-end">
            <Grid default="auto max-content">
                <Box>
                    <Text size="18px" bold block><i className="flexibull-users" /> User Management</Text>
                    <Spacer space="5px" />
                    <Text opacity={0.6}>Manage user access and control</Text>
                </Box>
                <Box align="right">
                    <Button pad="0 30px" onClick={() => setUserModal(true)}>Create User</Button>
                </Box>
            </Grid>
        </Box>
        <ImageBox image={UserImage} position="right 10px" size="140px" pad="35px 40px" bordered>
            <Grid default="minmax(200px, 350px) auto" gap="20px">
            <Input type="search" round spaceTop block iconRight="flexibull-search"/>
            <Select 
                label="Role" 
                spaceTop
                options={[defaultRole, ...optionRoles]}
                value={selectedRole}
                onChange={option => setSelectedRole(option)}
                defaultValue={defaultRole}
            />
            </Grid>
        </ImageBox>
        <Box pad="0 40px">
        <Table stripped>
            <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => (
                        <tr key={user.id}>
                            <td><PhotoBox image="https://thispersondoesnotexist.com/image" /></td>
                            <td>{`${user.first_name} ${user.last_name}`}</td>
                            <td>{user.email}</td>
                            <td><Text color={Theme.PrimaryColor} bold italic>{user.role || 'Unassigned'}</Text></td>
                            <td><DropDown
          label={<i className="downer flexibull-dot-3" />}
          trigger="click"
          menuAlign="top right"
          menuList={[
            {
              onClick: () => console.log('element edit triggered'),
              label: 'Edit User',
              iconLeft: 'flexibull-flow-cascade',
            },
            {
              onClick: () => console.log('Delete triggered'),
              label: 'Delete User',
              iconLeft: 'flexibull-cancel',
            },
            {
              onClick: () => console.log('Deactivate Element'),
              label: 'Deactivate User',
              iconLeft: 'flexibull-firefox',
            },
          ]}
        /></td>
                        </tr>
                    ))

                }
            </tbody>
            </table>
        </Table>
        </Box>
        <NewUser show={userModal} setUserModal={setUserModal} roles={optionRoles}/>
    </Box>
}

export default UMS;