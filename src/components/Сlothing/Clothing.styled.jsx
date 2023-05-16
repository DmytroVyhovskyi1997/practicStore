import styled from "styled-components";

export const Box = styled.li`
margin-top: 100px;
    padding: 48px 64px;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.25) 0px 0px 20px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 20px;
`

export const Card = styled.ul`
display: flex;
flex-basis: calc(33.33333% - 20px);
flex-wrap: wrap;
gap: 30px;
justify-content: center;
margin-bottom: 20px;
padding: 0;
`

export const Button = styled.button`
margin-top:30px;
width: 98px;
height: 32px;
background-color: #9169b0;
border-radius: 30px;
font-size: 13px;
font-style: normal;
font-weight: 500;
line-height: 1.5;
animation: pulse 3s infinite;
`



