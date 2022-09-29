import styled from 'styled-components'

export const Container = styled.div`
display:flex;
width:100vw;
height:100vh;
justify-content:center;
align-items: center;
flex-direction: column;
h1{
    font-size:54px;
    color:${props => props.theme.colors.primary};
    margin-top:40px;
}
`
