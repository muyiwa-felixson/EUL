import React, { useState } from 'react';
import { SplitLoginLayout, Text, Box, Button, ExtInput } from '../../styledElements/lib';
import Logo from '../../../assets/fulllogowhite.svg';
import Banner from '../../../assets/placeholder.svg';

const Login = () => {
  
  const [username, setUsername] = useState('');
  const [passwordState, setPasswordState] = useState('');

    return <SplitLoginLayout
    brand={<img src={Logo} style={{ width: '200px'}}/> }
    image={Banner}
    rightFoot={<span>Powered by &copy; Trisiki 2020</span>}
    leftFoot={<span><Text block>Flows 1.0</Text>Copyright &copy; 2020 <Text>Client Name</Text>. All rights reserved.</span>}
    >
        <Text block size='18px' bold>
          Sign In
        </Text>
        <Text>Welcome to Flows</Text>
        <Box height='10px' />
        <ExtInput
          label='Username'
          type='username'
          value={username} onChange={e => setUsername(e.target.value)}
        />
        <ExtInput
          label='Password'
          type='password'
          value={passwordState} onChange={e => setPasswordState(e.target.value)} 
        />
        <Box height='10px' />
        <Box align='right'>
          <Button
            round
            pad='0 0 0 25px'
            iconRight={<i className='flexibull-angle-right' />}
            as="a"
            href="./dashboard"
          >
            Login
          </Button>
        </Box>
    </SplitLoginLayout>
}

export default Login;