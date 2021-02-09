import BoardCellState from "../Enums/BoardCellStateEnum";

export default interface BoardCellInterface {
  x: number;
  y: number;
  state: BoardCellState
}
