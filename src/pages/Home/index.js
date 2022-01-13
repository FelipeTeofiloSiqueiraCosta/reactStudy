
import './index.css';
import {Container,Form, SubmitButton, List, DeleteButton} from './styles.js'
import {FaGithub, FaPlus, FaBars, FaTrash} from 'react-icons/fa'
import {FiLoader} from 'react-icons/fi'
import { useCallback, useState } from 'react';
import api from '../../api';
import { Link } from 'react-router-dom';
export default function Home(){
    const [repos,setRepos] = useState("");
    const [repositorios,setRepositorios] = useState(JSON.parse(localStorage.getItem('repositorios')) || []);
    const [loading,setLoading] = useState(false);
    const [err,setErr] = useState(false);

    async function submit(e){
        e.preventDefault();
        setLoading(true);
        try{
            const hasRepo = repositorios.find((item)=> item.name.toUpperCase() ===repos.toUpperCase());
            if(hasRepo){
                setErr(true);
                alert("Este repositório ja existe!");
                return;
            }
            const response = await api.get(`/repos/${repos}`);

            const data = {
                name: response.data.full_name
            }

            setRepositorios([...repositorios, data]);
            localStorage.setItem('repositorios', JSON.stringify([...repositorios, data]));
            setRepos("");
            setErr(false);
        
        }catch(error){
            
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    const handleDelete = useCallback((respos)=>{
        const find = repositorios.filter((item)=> item.name !==respos);
        setRepositorios(find);
        
    },[repositorios]);

    

    return(
        <Container>
            
            <h1> <FaGithub size={25}/> Meus repositórios</h1>

            <Form onSubmit={submit} error={err}>
                <input type="text" value={repos} placeholder='Adicionar Repos...' onChange={(e)=> {setErr(false);setRepos(e.target.value);} }/>
                <SubmitButton loadings={loading} not={repos.trim()==="" ? true : false}>

                    {loading ? <FiLoader color='#fff' size={14} className='spin'/>
                    : <FaPlus color="#FFF" size={14} />
                    }

                     Adicionar
                </SubmitButton>
                
            </Form>
            <List>
                {repositorios.map((item,index)=>(
                    <li key={index}>
                        <div>
                        <DeleteButton onClick={()=> handleDelete(item.name)}>
                            <FaTrash size={14}/>
                        </DeleteButton>
                        <span>{item.name}</span>
                        </div>
                        <Link to={`/repositorio/${encodeURIComponent(item.name)}`}>
                            <FaBars size={14}/>
                        </Link>
                    </li>
                ))

                }
            </List>
            
        </Container>
    )
}