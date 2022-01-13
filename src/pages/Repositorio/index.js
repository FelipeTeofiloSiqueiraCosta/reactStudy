
import './index.css';
import { useParams } from 'react-router-dom';
import { Container, Owner, Loading, BackButton, IssuesList, PageActions, FilterList } from './styles';
import { useEffect, useState } from 'react';
import {FiArrowLeft,FiArrowRight} from 'react-icons/fi';
import api from '../../api';
export default function Repositorio({match}){
    const {repos} = useParams();
    const [rep,setRep] = useState({});
    const [issues,setIssues] = useState({});
    const [loading,setLoading] = useState(true);
    const [page,setPage] = useState(1);
    const [activeIndexFilter,setActiveIndexFilter] = useState(0);
    const [filters] = useState([
        {state: 'all', label: 'Todas', active: true},
        {state: 'open', label: 'Aberto', active: false},
        {state: 'closed', label: 'Fechado', active: false},
    ]);
    function handlePage(type){
        var p = page;
        
        type ? p=p+1 : p=p-1;
        if(p===0){
            p=1;
        }
        setPage(p);
        //console.log(p);
    }

    useEffect(function(){
        
        async function load(){
            setLoading(true);

           const [response,issues] = await Promise.all([ // criando um array de promise, elas serao executadas ao mesmo tempo
                api.get(`/repos/${repos}`),
                api.get(`/repos/${repos}/issues`, {
                    params:{
                        state: filters[activeIndexFilter].state,
                        per_page: 5
                    }
                })
            ]);

            setRep(response.data);
            setIssues(issues.data);
            
            setLoading(false);
        }

        load();
    },[repos,activeIndexFilter,filters]);

    function changeFilter(pos){

        setActiveIndexFilter(pos);
    }

    useEffect(function(){
        
        async function loadIssue(){
            //setLoading(true);
            const response = await api.get(`/repos/${repos}/issues`, {
                params:{
                    state: filters.find(f=>f.active).state,
                    page,
                    per_page: 5
                }
            })

            setIssues(response.data);
            //console.log(response.data)
            //setLoading(false);
            
        }

        loadIssue();
    },[page,repos,filters])

    if(loading){
        return (
            <Loading>
                <h1>Carregando...</h1>
            </Loading>
        )
    }

    return(
        <Container>
            <BackButton to="/">
                <FiArrowLeft size={24} />
            </BackButton>
            <Owner>
                <img src={rep.owner.avatar_url} alt={rep.owner.login}/>
                <h1>{rep.name}</h1>
                <p>{rep.description}</p>
            </Owner>
            <FilterList active={activeIndexFilter}>
                {
                    filters.map((item,index)=>(
                        <button type='button' key={item.label} onClick={()=>changeFilter(index)}>
                            {item.label}
                        </button>
                    ))
                }
            </FilterList>
            <IssuesList>
                {
                    issues.map((item,index)=>(
                        <li key={String(item.id)}>
                            <img src={item.user.avatar_url} alt={item.user.login}/>
                            <div>
                                <strong>
                                    <a href={item.html_url}>{item.title}</a>
                                    {
                                        item.labels.map((label,index)=>(
                                            <span key={String(label.id)}> {label.name}</span>
                                        ))
                                    }
                                </strong>
                                <p>{item.user.login}</p>

                            </div>
                        </li>
                    ))
                }
            </IssuesList>
            <PageActions>
                <button type='button' onClick={()=>handlePage(false)}><FiArrowLeft size={14}/></button>
                <button type='button' onClick={()=>handlePage(true)}><FiArrowRight size={14}/></button>
            </PageActions>
        </Container>
    )
}