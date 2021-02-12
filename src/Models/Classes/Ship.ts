import BoardCellState from "../Enums/BoardCellState";

interface ShipStart {
  x: number;
  y: number;
}

export type ShipDirection = "horizontal" | "vertical";

export class ShipPart {
  x: number = 0;
  y: number = 0;
  state: BoardCellState = BoardCellState.OCCUPIED;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export default class Ship {
  parts: ShipPart[] = [];
  size: number = 0;
  direction: ShipDirection = "horizontal";
  destroyed: boolean = false;

  private maxSize = 4;

  constructor(size: number, direction: ShipDirection, start: ShipStart) {
    if (size > 0 && size <= this.maxSize) {
      this.size = size;
    } else {
      throw new Error(
        `Niedozwolony rozmiar statku - powinien się zawierać w obrębie 1-${this.maxSize}`
      );
    }
    this.direction = direction;

    this.create(this.size, this.direction, start);
  }

  private create(size: number, direction: ShipDirection, start: ShipStart) {
    let x: number;
    let y: number;
    for (let i = 0; i < size; i++) {
      if (direction === "horizontal") {
        x = start.x + i;
        y = start.y;
      } else {
        x = start.x;
        y = start.y + i;
      }
      const part: ShipPart = new ShipPart(x, y);
      this.parts.push(part);
    }
  }

  destroy() {
    this.parts.forEach((part: ShipPart) => {
      part.state = BoardCellState.DESTROYED;
    });
    this.destroyed = true;
  }
}
