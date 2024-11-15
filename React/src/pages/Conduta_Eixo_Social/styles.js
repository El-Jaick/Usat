import styled from "styled-components";

export const Container = styled.div`
    padding: 100px 150px;
    display: flex;
    justify-content:center;
    flex-direction: column;
    h2{
        font-size: 1.875rem;
    }
    p{
        font-size:1.2rem;
        margin-bottom: 15px;

    }

`
export const ContainerTitulo = styled.div`
    align-items: center;
    padding: 35px;
    width: 1095px;
    border-radius: 20px;
    background-color: var(--moss-green)

`
export const ContainerEixo = styled.div`
    padding: 25px;
    width: 382px;
    height:540px;
    border-radius: 39px;
    align-items: 'center';
    display: flex;
    flex-direction: column;
    position:relative;
    background-color: var(--light-gray)

`

export const Horizontal = styled.div`
    align-items: 'center';
    display: flex;

`

export const Label = styled.div`
    color: ${props => props.cor || '000000'};
    text-align:  ${props => props.align || 'center'};
    font-family: Inter;
    font-size: ${props => props.tamanho || 48}px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 33.333% */

`

export const ContainerIcones = styled.div`
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    & > div {
        margin: 10px; 
        flex: 0 0 20% 
    }
    
`
