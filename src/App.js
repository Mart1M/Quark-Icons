import React from 'react';
import styled from 'styled-components'
import * as icons from './icons'
import Header from './components/Header'
import IconWrapper from './components/IconWrapper'
import './style.css'

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  justify-items: stretch;
  align-items: stretch;
  margin: 48px;
  padding: 0 0 50px 0;
  list-style: none;
`


class List extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Container>
          {
            Object.keys(icons)
              .sort()
              .map((key, index) => {
                const Icon = icons[key]
                return <li key={index}>
                  <IconWrapper>
                    <div className='icon-container'>
                    <Icon />
                    </div>
                    
                    <span className='label' onClick={() => handleCopyIcon("<"+key+" size={24} />")}>
                      {key}
                    </span>   
                  </IconWrapper>
                </li>
              })
          }
        </Container>
      </div>
    )
  }
}

// copy icon
function handleCopyIcon(str) {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

export default List;
