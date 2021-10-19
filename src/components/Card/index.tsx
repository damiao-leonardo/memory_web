import React from 'react';
import { FiCopy,FiEdit,FiTrash} from 'react-icons/fi';

import { Header, Container ,Content, Footer} from './styles';

interface Tag {
    name: string
  }

interface CardContainer{
    title: string,
    description: string,
    tags: Tag[]
}

const Card: React.FC<CardContainer> = ({title,description,tags}) => {

    return (
        <Container data-testid="card-component">
            <Header>
                <span>{title}</span>
            </Header>
            <Content>
                <div>{description}</div>
                <div>
                    { tags.map((tag) => (
                     <span key={tag.name}>{tag.name}</span>
                    ))}
                </div>
            </Content>
            <Footer>
                <a href='/home'><FiCopy /></a>
                <a href='/home'><FiEdit /></a>
                <a href='/home'><FiTrash /></a>
            </Footer>
        </Container>
    )
}

export default Card;