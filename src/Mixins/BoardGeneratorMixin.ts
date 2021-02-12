import BoardCellState from "@/Models/Enums/BoardCellState";
import BoardCell from "@/Models/Interfaces/BoardCellInterface";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export class BoardGeneratorMixin extends Vue {
  @Prop() readonly size!: number;

  generateBoard(): BoardCell[] {
    const board: BoardCell[] = [];
    for (let i = 1; i <= this.size; i++) {
      for (let j = 1; j <= this.size; j++) {
        const cellObject: BoardCell = {
          x: j,
          y: i,
          state: BoardCellState.EMPTY
        };
        board.push(cellObject);
      }
    }
    return board;
  }

  get boardTemplateStyle(): string {
    return `grid-template: repeat(${this.size}, auto) / repeat(${this.size}, auto)`;
  }
}
