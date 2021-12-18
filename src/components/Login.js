import React from 'react'
import styled from 'styled-components'
function Login() {
    return (
        <div>
            <Container>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis urna at massa
                        maximus aliquet. Etiam vel risus vel turpis finibus congue. Duis imperdiet dictum lectus,
                        eu tincidunt risus vulputate at. Proin id nibh condimentum, efficitur arcu a,
                        ultrices massa. Nunc ipsum libero, lobortis et lectus vitae, semper pretium quam.
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
                </CTA>
            </Container>
        </div>
    )
}

export default Login
const Container = styled.div`
    position:relative;
    height:calc(100vh - 70px);
    display:flex;
    align-items:top;
    justify-content:center;
    &:before{
        position:absolute;
        top:0;bottom:0;left:0;right:0;
        content:"";
        z-index:-1;
        background-image:url('/images/login-background.jpg');
        background-position:top;
        background-size:cover;
        background-repeat:no-repeat;
        opacity:0.7;
    }
`
const CTA = styled.div`
    max-width:650px;
    width:90%;
    margin-top:10%;
    padding:80px 40px;
    display:flex;
    flex-direction:column;
    align-items:center;
`
const CTALogoOne = styled.img`
`
const SignUp = styled.a`
    cursor:pointer;
    width:100%;
    background-color:#0063e5;
    font-weight:bold;
    padding:17px 0;
    text-align:center;
    color:#f9f9f9;
    border-radius:4px;
    font-size:18px;
    transition:all 250ms;
    letter-spacing:1.5px;
    margin-top:8px;
    margin-bottom:12px;
    &:hover{
        background-color:#0483ee;
    }
`
const Description=styled.p`
    font-size:11px;
    letter-spacing:1.5px;
    text-align:center;
    line-height:1.5;
`

const CTALogoTwo=styled.img`
    width:90%;
`