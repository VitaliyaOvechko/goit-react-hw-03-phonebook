import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 50px;
`;

export const DeleteBtn = styled.button`
  padding: 5px 20px;
  border-radius: 5px;
  border: 2px solid #054a91;
  font-weight: 600;
  font-size: 14px;
  background-color: #3e7cb1;
  color: #dbe4ee;
  cursor: pointer;
`;
