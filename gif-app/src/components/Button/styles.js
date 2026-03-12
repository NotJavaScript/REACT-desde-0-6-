import { Link as LinkWouter } from "wouter";
import styled from '@emotion/styled'

export const Link = styled(LinkWouter)`
  
  background-color:rgb(39, 41, 85); ;
  border: 1px solid black;
  border-radius: 5px;
  margin-right: 10px;
  margin-top: 20px;
  color: ${({theme}) => theme.colors.textColor};
  cursor: pointer;
  font-size: 12px;
  padding: .5rem 1rem;

  :hover {
    background-color: var(--brand-color_2);
    border-radius: 10px;
    transition: all 0.3s ease;
  }

  [disabled] {
    opacity: .3;
    pointer-events: none;
  }
`

export const Button = Link.withComponent('button')