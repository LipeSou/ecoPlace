import styled from 'styled-components'


export const Container= styled.ul`
display:grid;
grid-template-columns: 12.2% 1fr 12.2%;
margin-top: 43px;
color: #0F2105
`

export const SliderContainer = styled.div`
grid-column-start: 2;
width: 100%;
height: 50vh;
display: flex;
position: relative;
overflow: hidden;
border-radius: 20px;
`;

export const Arrow = styled.div`
height: 95px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${(props) => props.direction === "left" && "0px"};
right: ${(props) => props.direction === "right" && "0px"};
margin: auto;
cursor: pointer;
z-index: 2;
`;

export const ArrowImage = styled.img`
height: 50%;
:hover{
    opacity: 85%;
}
:active{
    opacity: 60%;
}
`;

export const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideIndex * -80}vw);
`;

export const Slide = styled.div`
width: 79vw;
height: 100vh;
display: flex;
background-color: #${(props) => props.bg};
`;

export const ImgContainer = styled.div`
height: 100%;
flex: 1;
border-right: 5px solid #2BDE73;
`;

export const Image = styled.img`
height: 50%;
`;

export const InfoContainer = styled.div`
flex: 2;
padding: 0 50px 50px 50px;
color: #ffffff;
`;

export const ImgInfo = styled.div`
margin-top: 40px;
`

export const Title = styled.h1`
font-size: 40px;
margin-top: 15px;
`;

export const DescInfo = styled.div`
width: 70%;
margin-top: 15px;
`

export const Desc = styled.p`
font-size: 14px;
`;