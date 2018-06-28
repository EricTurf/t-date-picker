import styled from 'styled-components';

export const Main = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 5px;
  background-color: rgb(33, 38, 41);
`;

export const Value = styled.h2`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  font-family: 'Roboto', sans-serif;
  color: white;
  font-size: 20px;
  font-weight: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 75%;
`;

export const ItemList = styled.ul`
  position: absolute;
  width: 60%;
  bottom: -110px;
  background: white;
  padding-left: 0;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24);
  max-height: 120px;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 2;
`;

export const ArrowContainer = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
`;

export const Arrow = styled.i`
  position: absolute;
  right: 10px;
  transition: all 0.3s;
  border: solid white;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 4px;

  transform: ${({ open }) => (open ? 'rotate(-135deg)' : 'rotate(45deg)')};

  &:hover {
    border: solid rgb(175, 163, 175);
    border-width: 0 2px 2px 0;
    cursor: pointer;
  }
`;

export const Item = styled.li`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  font-family: 'Roboto', sans-serif;
  height: 40px;
  text-align: center;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  display: block;
  line-height: 40px;
  z-index: 3;
  cursor: pointer;
  &:hover {
    background-color: rgb(229, 237, 243);
  }
`;
