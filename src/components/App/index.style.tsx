import styled from "@emotion/styled";
import { FC } from "react";

type FilterProps = {
  active: boolean;
  onClick: () => void;
};

export const Filter: FC<FilterProps> = styled<"button", FilterProps>("button")`
  cursor: pointer;
  border: 1px solid black;
  border-radius: 10px;
  width: 70px;
  height: 35px;
  background-color: ${(props: FilterProps) =>
    props.active ? "black" : "inherit"};
  color: ${(props: FilterProps) => (props.active ? "white" : "inherit")};
`;

export const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: stretch;
  margin: 25px;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  margin: 0;
  margin-top: 25px;
  border-radius: 15px;
  padding: 15px 5px 15px 5px;
  background-color: #eee;
  box-shadow: 3px 3px 5px #999, -3px -3px 5px #eee;
`;

export const InputAndButton = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  height: 25px;
  border: none;
  border-radius: 15px;
  padding-left: 15px;
`;

export const Add = styled.button`
  cursor: pointer;
  border: 1px solid black;
  border-radius: 10px;
  width: 50px;
  margin-left: 15px;
  &:hover {
    background-color: black;
    color: white;
  }
`;
