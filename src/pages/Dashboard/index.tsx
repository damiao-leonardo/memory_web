import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useAuth} from '../../hooks/auth';

import { FiSearch,FiLogOut} from 'react-icons/fi';
import Input from '../../components/Input';
import { Form } from '@unform/web';
import Card from '../../components/Card';
import api from '../../services/api';

import { Header,Search,Container,Brand,Menu,Start,End,AddCard} from './styles';

interface MemoryData{
  id: BigInt,
  key: string,
  value: string,
  tags: []
}

const Dashboard: React.FC = () => {

  const [memories,setMemories] = useState<MemoryData[]>([]); 
  const [memoriesFilter,setMemoriesFilter] = useState<MemoryData[]>([]); 

  const {signOut } = useAuth();

  function searchMemories(field : string) {
    const newMemories = memories.filter(item => (item.key.match(field)));
    setMemoriesFilter(newMemories);
  }  

  async function getMemories(){
    const response = await api.get('/api/v1/memories');
    setMemories(response.data.data);  
    setMemoriesFilter(response.data.data); 
  };

  useEffect(() => {
    getMemories();
  },[]);
  

  return  (
      <>
      <Header>
        <Brand>
            <a href={'www.google.com'}>
              <img 
                  src="https://icons-for-free.com/iconfiles/png/512/part+1+github-1320568339880199515.png"
                  width={50}
                  height={50}
                  alt={'logotipo'}
                />
            </a>
        </Brand>
        <Menu>
          <Start>
             <Link to={'/home'} >Itens</Link>
             <Link to={'/home'} >Tags</Link>
             <Link to={'/home'} >List</Link>
          </Start>
          <End>         
             <button type='button' onClick={() => signOut()} ><FiLogOut size={25}/></button>
          </End>
        </Menu>
      </Header>
      <Search>
          <Form onSubmit={() => {}} >
                 <Input onChange={(e) => searchMemories(e.target.value)} name="search" icon={FiSearch} type="text" placeholder="search"  />
          </Form>
      </Search>
      <Container>
        {memoriesFilter.map((memory) => (
                 <Card key={memory.key} title={memory.key} description={memory.value} tags={memory.tags}></Card>
        ))}   
      </Container>
      <AddCard>
         <button type="button">adicionar</button>
      </AddCard>
    </>
  );
}

export default Dashboard;