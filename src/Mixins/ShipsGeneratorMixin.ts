import Ship, { ShipDirection, ShipPart } from "@/Models/Classes/Ship";
import BoardCellState from "@/Models/Enums/BoardCellState";
import BoardCell from "@/Models/Interfaces/BoardCellInterface";
import { Component, Prop, Vue } from "vue-property-decorator";

const availableDirections: ShipDirection[] = ["horizontal", "vertical"];
const availableShipSizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

@Component
export class ShipsGeneratorMixin extends Vue {
  @Prop() readonly size!: number;
  @Prop() readonly hitsCount!: number;
  ships: Ship[] = [];

  generateShips(board: BoardCell[]): void {
    availableShipSizes.forEach((shipSize: number) => {
      this.generateShip(board, shipSize);
    });
  }

  generateShip(board: BoardCell[], shipSize: number) {
    const randomDirection = Math.floor(
      Math.random() * availableDirections.length
    );
    const direction = availableDirections[randomDirection];
    const randomStart = {
      x: Math.floor(Math.random() * (this.size - shipSize)) + 1,
      y: Math.floor(Math.random() * (this.size - shipSize)) + 1
    };

    const templateShip = new Ship(shipSize, direction, randomStart);

    const isCellOccupied = this._checkIfCellOccupied(templateShip);
    const isCellColliding = this._checkIfCellColliding(templateShip);

    if (!isCellOccupied && !isCellColliding) {
      this.ships.push(templateShip);
      this._placeShip(board, templateShip.parts);
    } else {
      this.generateShip(board, shipSize);
    }
  }

  protected _checkIfShipCell(
    board: BoardCell[],
    x: number,
    y: number
  ): Ship | undefined {
    const isShipCell = this.ships.find((ship: Ship) => {
      return ship.parts.find((part: ShipPart) => {
        if (part.x === x && part.y === y) {
          const cell: BoardCell | undefined = board.find(
            (cell: BoardCell) => cell.x === x && cell.y === y
          );
          if (cell) {
            cell.state = BoardCellState.OCCUPIED;
          }
          return cell;
        }
      });
    });
    return isShipCell;
  }

  private _checkIfCellOccupied(templateShip: Ship): boolean {
    return this.ships.some((ship: Ship) => {
      return ship.parts.some((part: ShipPart) => {
        return templateShip.parts.some((templateShipPart: ShipPart) => {
          return part.x === templateShipPart.x && part.y === templateShipPart.y;
        });
      });
    });
  }

  private _checkIfCellColliding(templateShip: Ship): boolean {
    return this.ships.some((ship: Ship) => {
      return ship.parts.some((part: ShipPart) => {
        return templateShip.parts.some((templateShipPart: ShipPart) => {
          return [-1, 0, 1].some((i: number) => {
            return [-1, 0, 1].some((j: number) => {
              return (
                part.x + i === templateShipPart.x &&
                part.y + j === templateShipPart.y
              );
            });
          });
        });
      });
    });
  }

  private _placeShip(board: BoardCell[], parts: ShipPart[]) {
    const cells: BoardCell[] = [];
    board.forEach((cell: BoardCell) => {
      parts.forEach((part: ShipPart) => {
        if (cell.x === part.x && cell.y === part.y) {
          cells.push(cell);
        }
      });
    });
    if (cells) {
      cells.forEach((cell: BoardCell) => {
        cell.state = BoardCellState.OCCUPIED;
      });
    }
  }
}
