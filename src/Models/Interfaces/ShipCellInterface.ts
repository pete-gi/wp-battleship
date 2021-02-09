import BoardCellState from "../Enums/BoardCellStateEnum";

export default interface ShipCell {
  x: number;
  y: number;
  state: BoardCellState;
}
