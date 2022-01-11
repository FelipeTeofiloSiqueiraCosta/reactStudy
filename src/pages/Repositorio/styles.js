import styled from "styled-components";
import {Link} from 'react-router-dom';

export const Container = styled.div`
    position: absolute;
    display: flex;
    background-color: #fff;
    padding: 20px;
    border-radius: 3px;
    flex-direction: column;
    max-width: 90%;
    left: 50%;
    transform: translateX(-50%);
    margin: 20px auto;
`;

export const Owner = styled.div`
    
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    img{
        border-radius: 50%;
    }
    h1,p{
        margin-top: 10px;
        color: #000;
    }
    p{
        background-color: rgba(1,1,1,0.2);
        padding: 10px 15px;
    }
    
    

`;
export const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

    h1{
        color: #fff;
    }

`;

export const IssuesList = styled.ul`
    
    list-style: none;
    margin-top: 30px;
    

    li{
        color: #000;
        margin-top: 10px;
        display: flex;
        justify-content: start;
        align-items: center;
        margin: 0px 25px;
       
        img{
            width: 50px;
            padding: 5px;
            border-radius: 50%;
        }
        & + li{
        border-top: 1px solid #ccc;
        }
        a{
            text-decoration: none;
            transition: all .3s;
            &:hover{
                background-color: rgba(0,0,0,0.2);
            }
        }
        strong span{
            background-color: rgba(0,0,0,1);
            color: #fff;
            margin: 1px 2px;
            border-radius: 5px;
            padding: 2px 5px;
        }

        div{
            margin-left: 10px;
        }
    }
    
`;

export const BackButton = styled(Link)`
position: absolute;
   width: 35px;
   height: 35px;
   display: flex;
   justify-content: center;
   align-items: center;
   border: none;
   background-color: rgba(255,255,255,0.6);
   color: #fff;
   border-radius: 50%;
   top: 10px;
   left: 10px;
   
   transition: all .2s ease-in;

   &:hover{
    background-color: rgba(1,1,1,0.2);
   }
`;

export const PageActions = styled.div`

   display: flex;
   justify-content: center;
   button{
       margin: 0px 10px;
       padding: 10px;
       border-radius: 50%;
       border: none;
       transition: all .2s;
       &:hover{
           background-color: rgba(0,0,0,0.2);
       }
   }

`;