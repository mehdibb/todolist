import styled from "@emotion/styled";
import { FC } from "react";

type TodoProps = {
  status: boolean;
  onClick: () => void;
};

export const Todo: FC<TodoProps> = styled<"div", TodoProps>("div")`
  cursor: pointer;
  user-select: none;
  padding: 5px;
  padding-left: 15px;
  margin: 10px;
  height: 75px;
  width: 300px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props: TodoProps) =>
    props.status === true ? "#88b271" : "#f4cd4e"};
  color: #2c2f39;
  font-weight: bold;
  font-size: 24px;
  box-shadow: 3px 3px 5px #ccc, -3px -3px 5px #fff;
`;

export const TextStatus = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.div`
  font-size: inherit;
`;

export const Status = styled.div`
  font-size: 12px;
`;

export const Delete = styled.button`
  border-radius: 100%;
  width: 40px;
  height: 40px;
  font-size: 12px;
  border: none;
  background-color: #b34f36;
  color: white;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
