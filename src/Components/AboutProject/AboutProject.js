import React from 'react';
import Icon1 from '../../Images/Svg-1.svg'
import Icon2 from '../../Images/Svg-2.svg';
import Icon3 from '../../Images/Svg-3.svg';
import { ServicesContainer,
         ServicesH1, 
         ServicesH2, 
         Servicescard, 
         ServicesWrapper,
         ServicesIcon, 
         ServicesP  } from './AboutElements';

const AboutProject = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1> The Core Idea! </ServicesH1>
        <ServicesWrapper>
            <Servicescard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>A New Digital Way to Store Data</ServicesH2>
                <ServicesP> Get Adapted to with the new age ideas and be an part of revolution.</ServicesP>
            </Servicescard>

            <Servicescard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Decentralised Accross</ServicesH2>
                <ServicesP> Say Good bye to the cyberattacks and Protect your data and Own Your Data.</ServicesP>
            </Servicescard>

            <Servicescard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Block Chain</ServicesH2>
                <ServicesP> To bring the transparency and Trust with more peer-to-peer connection we are using ETHEREUM.</ServicesP>
            </Servicescard>

        </ServicesWrapper>
    </ServicesContainer>
  );
}

export default AboutProject;