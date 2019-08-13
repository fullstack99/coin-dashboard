import React from 'react'
import styled from "@emotion/styled"
import Col from "react-bootstrap/Col" 
import SocialData from './Socialdata/index'
import CardHeader from "@components/CardHeader"
import CardHeading from '@components/CardHeading'

const Card = styled.section`
    width:30%;
    border-radius: 8px;
    border: solid 1px #313d4f;
    margin-right:4.8%;
    margin-left:4.8%;
    @media (max-width: 575px){
        width:100% !important;
        margin-left:0px;
        margin-top:10%;
        margin-bottom:10%;
    }
    
`

class SocialCard extends React.Component {
    render() {
        return (
                <Card>
                    <CardHeader>
                            <CardHeading>Social</CardHeading>   
                            
                    </CardHeader>
                    <Col >
                        <SocialData username={"@theRealMacafee"} descripation={"Posted on Twiter 10min ago.."}/>
                        <SocialData username={"@theRealMacafee"} descripation={"Posted on FaceBook 32min ago.."}/>
                        <SocialData username={"@theRealMacafee"} descripation={"Posted on Reddit 10min ago.."}/>
                        <SocialData username={"@theRealMacafee"} descripation={"Stread live on YouTube 1hr ago.."}/>
                        <SocialData username={"@theRealMacafee"} descripation={"Published an article  on Meduim 10min ago.."}/>
                    </Col> 
                </Card>
        )
    }
}
export default SocialCard