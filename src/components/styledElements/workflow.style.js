import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { transparentize, darken } from 'polished';
import { Theme, DropDown, Grid, Text, Box, Spacer, Modal, ModalBody, Button } from './lib';
import { PhotoBox } from './general.style';



const FlowMapWrapper = styled.div`
  & .flowbar{
    padding:0;

    margin:0;
    position: relative;
    height: 40px;
    margin-bottom: 10px;

    & .flowbar-bar{
      display: grid;
      grid-template-columns: 30px auto 40px;
      grid-gap: 10px;
      margin: 0 15px;
      /* padding: 10px; */
      border-radius: ${props => props.theme.PrimaryRadius};
      border: 1px solid ${props => darken(0.1, props.theme.PrimaryBorderColor)};
      background: #fff;
      height: 40px;
      position: relative;
      z-index: 1;
      &:after{
        content: '';
        height: 5px;
        width: 5px;
        background: ${props => props.theme.PrimaryColor};
        border-radius: 50%;
        position: absolute;
        top: calc(50% - 4px);
        left: -3px;
      }
      &:before{
        content: '';
        height: 5px;
        width: 5px;
        background: ${props => props.theme.PrimaryColor};
        border-radius: 50%;
        position: absolute;
        top: calc(50% - 4px);
        right: -3px;
      }
      & .flowbar-text{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
        line-height: 40px;
        font-size: 10px;
      }
      & .flowbar-icon, .flowbar-count{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
      }
      & .flowbar-count span{
        display: inline-flex;
        height: 16px;
        width: 20px;
        background: ${props => props.theme.PrimaryGreyLight};
        color: #fff;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        font-size: 10px;
        /* opacity: 0.4; */
      }
    }

    &:after{
      content: '';
      display: block;
      position: absolute;
      bottom: 50%;
      right: 0;
      border: 1px solid ${props => props.theme.PrimaryColor};
      height: 50px;
      width: 40px;
      z-index: 0;
      border-left: none;
      border-radius: ${props => props.theme.SecondaryRadius};
    }
    &:first-child{
      &:after{
        display: none;
      }
      & .flowbar-bar{
        &:before{
          display: none;
        }
      }
    }
    &:last-child{
      & .flowbar-bar{
        &:after{
          display: none;
        }
      }
    }
    &:nth-child(even){
      &:after{
        left: 0;
        border-left: 1px solid ${props => props.theme.PrimaryColor};
        border-right: none;
      }
    }
  }
`;

export const Bar = styled.div`
  display: block;
  position: relative;
  max-width: 150px;
  min-width: 60px;
  background: ${props=> props.theme.PrimaryGreyMid};
  color: #fff;
  height: 24px;

  &:before{
  content: '${props=> props.percentage < 100 ? `${props.percentage}%` : "Completed"}';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    z-index: 2;
    display: flex;
    padding:0 10px;
    align-items: center;
    font-size: 10px;
  }
  &:after{
    content: '';
    position: absolute;
    top:0;
    left:0;
    display: block;
    width: ${props=> props.percentage}%;
    height: 100%;
    z-index: 1;
    background: ${props=> props.percentage < 100 ? props.theme.PrimaryColor : props.theme.PrimaryGreen };
  }
`;
export const Pointer = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid ${props=> props.theme.PrimaryBorderColor};
  border-radius: ${props=> props.theme.PrimaryRadius};
  display: inline-flex;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  color: ${props=> props.theme.PrimaryGrey};
  transition: all 0.3s ease-out;
  cursor: pointer;
  &:hover{
    background: ${props=> props.theme.PrimaryFade};
  }

  ${props=> props.opened && css`
    transform: rotateZ(-90deg);
  `}
`;
export const FlowMap = props => {
  return <FlowMapWrapper>
    {props.stages.map(elem => <div className="flowbar">
      <div className="flowbar-bar">
        <div className="flowbar-icon"><i className="flexibull-dot-2" /></div>
        <div className="flowbar-text">{elem.name}</div>
        <div className="flowbar-count">{elem.steps && <span>{elem.steps}</span>}</div>
      </div></div>)}
  </FlowMapWrapper>
}

const FlowBoxWrapper = styled.div`
  background: ${props => props.theme.PrimaryFade};
  border: 1px solid ${props => props.theme.PrimaryBorderColor};
  border-radius: ${props => props.theme.SecondaryRadius};
  ${props => props.theme.Elevate.high};

  &:hover{
    border: 1px solid ${props => props.theme.PrimaryColor};
  }
  
  & .flow-top{
    background: #fff;
    padding: 20px;
    line-height: 20px;
    border-radius: ${props => props.theme.SecondaryRadius} ${props => props.theme.SecondaryRadius} 0 0;
  }
  & .flow-base{
    padding: 20px;
    overflow: hidden;
  }
  & .downer{
    display: block;
    padding: 10px;
    cursor: pointer;
    border-radius: ${props => props.theme.PrimaryRadius};
    &:hover{
      background: #eee;
    }
  }
`;

export const FlowBox = props => {
  const { name, stages, steps, timeline, applications } = props;
  const [deleteModal, SetDeleteModal] = useState(false);
  return <FlowBoxWrapper>
    <div className="flow-top">
      <Grid responsive={false} default="auto max-content" gap="20px">
        <div>
          <Text block bold color={Theme.PrimaryColor}>{name}</Text>
          <Text block color={transparentize(0.4, Theme.PrimaryFontColor)}>{stages.length} Stages / {steps} Steps</Text>
          <Text block color={transparentize(0.4, Theme.PrimaryFontColor)}><i className="flexibull-clock" /> Expected Timeline <Text bold color={Theme.PrimaryFontColor}>{timeline}</Text></Text>
          <Text block color={transparentize(0.4, Theme.PrimaryFontColor)}><Text bold color={Theme.PrimaryColor}>{applications}</Text> Linked Applications</Text>
        </div>
        <DropDown
          label={<i className="downer flexibull-dot-3" />}
          trigger="click"
          menuAlign="top right"
          menuList={[
            {
              onClick: () => console.log('element edit triggered'),
              label: 'Edit Workflow',
              iconLeft: 'flexibull-flow-cascade',
            },
            {
              onClick: () => console.log(SetDeleteModal(true)),
              label: 'Delete Workflow',
              iconLeft: 'flexibull-cancel',
            },
            {
              onClick: () => console.log('Deactivate Element'),
              label: 'Deactivate Workflow',
              iconLeft: 'flexibull-firefox',
            },
          ]}
        />
      </Grid>
    </div>
    <div className="flow-base">
      <FlowMap stages={stages} />
    </div>
    <Modal open={deleteModal} center={false}>
      <ModalBody width="600px">
        <Box pad="20px 30px">
        <Spacer space="20px" />
          <Text block size="18px" bold>Delete Workflow</Text>
          <Spacer space="20px" />
            Are you sure you want to delete <Text bold>{name}</Text>, it is currently linked to <Text bold>{applications}</Text> application(s).
            <Spacer space="30px" />
          <Box align="right">
          <Button pale color={Theme.PrimaryGrey} onClick={()=> SetDeleteModal(false)}>Cancel</Button>
          <Button spaceLeft="10px" color={Theme.PrimaryRed}>Yes, Delete</Button>
          </Box>
        </Box>
      </ModalBody>
    </Modal>
  </FlowBoxWrapper>
}

FlowBox.defaultProps = {

};

FlowBox.propTypes = {
};

const StageBoxWrapper = styled.div`
  background: #fff;
  border: 2px solid ${props => props.theme.PrimaryBorderColor};
  border-radius: ${props => props.theme.SecondaryRadius};
  ${props => props.theme.Elevate.high};
  transition: ${props => props.theme.PrimaryTransition};

  &:hover{
    border: 2px solid ${props => props.theme.PrimaryColor};
    transform: scale(1.05);
  }
  
  & .flow-top{
    padding: 20px 20px 10px 20px;
    line-height: 20px;
    border-radius: ${props => props.theme.SecondaryRadius} ${props => props.theme.SecondaryRadius} 0 0;
  }
  & .flow-base{
    padding: 10px 20px 20px 20px;
    /* overflow: hidden; */
  }
  & .downer{
    display: block;
    padding: 10px;
    cursor: pointer;
    border-radius: ${props => props.theme.PrimaryRadius};
    &:hover{
      background: #eee;
    }
  }
`;

const StageBar = styled.div`
  background: ${props => darken(0.02, props.theme.PrimaryFade)};
  color: ${props => props.theme.PrimaryGrey};
  display: grid;
  grid-template-columns: 20px auto;
  padding: 10px 20px;
  margin: 5px;
  border-radius: ${props => props.theme.PrimaryRadius};  
  & div.l{
    & span{
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${props => darken(0.15, props.theme.PrimaryFade)};
    }
  }
`;

const Face = styled(PhotoBox)`
  position: relative;

  &:after{
    content: '${props => props.name}';
    position: absolute;
    display: inline-block;
    width: auto;
    white-space: nowrap;
    box-sizing: border-box;
    padding: 10px;
    top: -${props => props.size + 5}px;
    left: 0;
    background: ${props => props.theme.PrimaryGreyDark};
    color: #fff;
    font-size: 10px;
    height: ${props => props.size}px;
    border-radius: ${props => props.theme.PrimaryRadius};
    box-shadow: 1px 4px 10px rgba(0,0,0,0.1);
    transition: all 0.3s ease-out;
    opacity: 0;
    transform: translateY(-5px);
    pointer-events: none;
  }
  &:before{
    content: '';
    display: block;
    position: absolute;
    left: 10px;
    top: -5px;
    height: 0;
    width:0;
    border-top:5px solid ${props => props.theme.PrimaryGreyDark};
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-radius: 1px;
    opacity: 0;
    transition: all 0.3s ease-out;
    transform: translateY(-5px);
    pointer-events: none;
  }
  &:hover{
    &:after{
    
      opacity: 0.8;
      transform: translateY(0);
    }
    &:before{
      opacity: 0.8;
      transform: translateY(0);
    }
  }

`;

const shwin = keyframes`
to{
  margin-left: 5px;
}
`;
const FaceGroup = styled.div`
  display: inline-grid;
  grid-template-columns: auto max-content;
  grid-gap: 20px;
  align-items: center;
  position: relative;
  & .extra-faces{
    display: none;
    position: absolute;
    cursor: pointer;
    ${Theme.Elevate.fader};
    top: -6px;
    left: -6px;
    ${props => props.showExtra && css`display: inline-block;`}
    background: #fff;
    padding: 5px;
    border-radius: 50px;
    border: 1px solid #eee;
    white-space: nowrap;
    ${PhotoBox}{
      margin-left: -20px;
      animation: ${shwin} 0.3s ease-out forwards 1;
      &:first-child{
        margin-left: 0;
        animation: none;
      }
    }
  }
`;

export const Faces = props => {
  const [showExtra, setShowExtra] = useState(false);
  const { persons, max } = props;
  return <FaceGroup showExtra={showExtra}>
    <div>
      {persons.map((elem, index) => index < max && <Face inset {...elem} />)}
      {persons.length > max && <PhotoBox inset onClick={() => setShowExtra(!showExtra)}>+{persons.length - max}</PhotoBox>}
    </div>
    <div><Text color={transparentize(0.4, Theme.PrimaryFontColor)}>Recipients</Text></div>
    <div className="extra-faces" onClick={() => setShowExtra(!showExtra)}>
      {persons.map((elem, index) => <Face {...elem} />)}
    </div>
  </FaceGroup>
}

Faces.defaultProps = {
  persons: [],
  max: 2
};

Faces.propTypes = {
  persons: PropTypes.array,
  max: PropTypes.number
};


export const StageBox = props => {
  const { name, steps, persons } = props;
  return <StageBoxWrapper>
    <div className="flow-top">
      <Grid responsive={false} default="auto max-content" gap="20px">
        <div style={{ paddingTop: "10px" }}>
          <Text block bold>{name}</Text>
        </div>
        <DropDown
          label={<i className="downer flexibull-dot-3" />}
          trigger="click"
          menuAlign="top right"
          menuList={[
            {
              onClick: () => console.log('element edit triggered'),
              label: 'Edit Stage',
              iconLeft: 'flexibull-flow-cascade',
            },
            {
              onClick: () => console.log('Delete triggered'),
              label: 'Delete Stage',
              iconLeft: 'flexibull-cancel',
            },
            {
              onClick: () => console.log('Deactivate Element'),
              label: 'Deactivate Stage',
              iconLeft: 'flexibull-firefox',
            },
          ]}
        />
      </Grid>
      <Text block opacity={0.8}>Voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea…</Text>
    </div>
    <div className="flow-base">
      <Box pad="0 0 15px 0" bordered>
        <Text block bold>Steps</Text>
        <Spacer space="10px" />
        {
          steps.map(elem => <StageBar><div className="l"><span /></div><div><Text block bold>{elem.name}</Text> {elem.days} Days</div></StageBar>)
        }
      </Box>
      <Spacer space="15px" />
      <Grid responsive={false} default="auto max-content" gap="20px">
        <div>
          <Faces persons={persons} />
        </div>
        <Box align="right"><Text block color={transparentize(0.4, Theme.PrimaryFontColor)}><i className="flexibull-clock" /> Cumulative Timeline</Text><Text bold block>1 Week, 2 Days</Text></Box>
      </Grid>
    </div>
  </StageBoxWrapper>
}


export const StepBox = props => {
  const { name, steps, persons } = props;
  return <StageBoxWrapper>
    <div className="flow-top">
      <Grid responsive={false} default="auto max-content" gap="20px">
        <div style={{ paddingTop: "10px" }}>
          <Text block bold>{name}</Text>
        </div>
        <DropDown
          label={<i className="downer flexibull-dot-3" />}
          trigger="click"
          menuAlign="top right"
          menuList={[
            {
              onClick: () => console.log('element edit triggered'),
              label: 'Edit Step',
              iconLeft: 'flexibull-flow-cascade',
            },
            {
              onClick: () => console.log('Delete triggered'),
              label: 'Delete Step',
              iconLeft: 'flexibull-cancel',
            },
            {
              onClick: () => console.log('Deactivate Element'),
              label: 'Deactivate Step',
              iconLeft: 'flexibull-firefox',
            },
          ]}
        />
      </Grid>
      <Text block opacity={0.8}>Voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea…</Text>
    </div>
    <div className="flow-base">
      <Grid responsive={false} default="auto max-content" gap="20px">
        <div>
          <Faces persons={persons} />
        </div>
        <Box align="right"><Text block color={transparentize(0.4, Theme.PrimaryFontColor)}><i className="flexibull-clock" /> Cumulative Timeline</Text><Text bold block>1 Week, 2 Days</Text></Box>
      </Grid>
    </div>
  </StageBoxWrapper>
}

