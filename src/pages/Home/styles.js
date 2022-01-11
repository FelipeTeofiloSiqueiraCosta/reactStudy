import styled from "styled-components";


export const Container = styled.div`
    max-width: 700px;
    background-color: #efefef;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
    padding: 30px;
    margin: 80px auto;
    h1{
        font-size: 20px;
        display: flex;
        align-items: center;
        flex-direction: none;
    }
    svg{
        margin-right: 10px;
    }

`;
export const Form = styled.form`

    input{
        color: #444;
        margin-top: 10px;
        width: 80%;
        padding: 5px;
        border: ${props => (props.error ? '1px solid #ff0000' : 'none')};
        display: block;
        height: 30px;
        font-size: 17px;
    }

`;
export const List = styled.ul`

    list-style: none;
    margin-top: 20px;

    li{
        margin: 5px 0px;
        display: flex;
        justify-content: space-between;

        & + li{ // ignorando o primeiro li e aplicando a partir do segundo
            border-top: 1px solid #ccc;
        }
        span{
            display: flex;
            align-items: center;
        }
        a{
            padding: 5px;
        }
        a svg{ 
            margin: 0;
        }
        div{
            display: flex;
        }
    }
    
    
    


`;

export const DeleteButton = styled.button.attrs({
    type: 'button'
})`

    margin-right: 10px;
    padding: 0;
    border: 0;
    display: flex ;
    align-items: center ;
    
    svg{
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }

`;

export const SubmitButton = styled.button.attrs(props=>({
    type: "submit",
    disabled: props.loadings || props.not
})
)`
    margin-top: 20px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    &[disabled]{ // acessando a propriedade disabled
        cursor: not-allowed;
        opacity: 0.5;
    }
    svg{
        color: white !important;
    }
    svg.spin{
        animation: load 1s linear infinite;
    }

    @keyframes load{
        from{
            transform: rotate(0deg);
        }to{
            transform: rotate(360deg)
        }
    }
`;  