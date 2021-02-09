import ShipCell from "./ShipCellInterface";

export default interface Ship {
  destroyed: boolean;
  cells: ShipCell[]
}
