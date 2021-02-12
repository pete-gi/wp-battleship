import BoardCellState from "../Enums/BoardCellState";

export default interface BoardCell {
  x: number;
  y: number;
  state: BoardCellState;
}
