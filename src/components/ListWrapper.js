import React from "react";
import styled from "styled-components";
import { ListData } from "../data/ListData";
import List from "./List";

export default function ListWrapper() {
  return (
    <ListGroupWrapper count={ListData.length}>
      {ListData.map((item, index) => (
        <List item={item} key={index} />
      ))}
    </ListGroupWrapper>
  );
}

const ListGroupWrapper = styled.div`
  width: 100%;
  display: block;
  /* grid-template-columns: repeat(${(props) => props.count}, auto); */
`;
