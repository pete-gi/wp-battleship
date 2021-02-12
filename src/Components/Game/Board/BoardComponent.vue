<template>
  <div class="game-container row" :class="{ cheating }">
    <wp-modal v-if="activeMessageType">
      {{ modalMessages[activeMessageType] }}
      <div slot="footer" class="collection-item">
        <router-link class="btn" to="/stats">Przejdź do wyników</router-link>
      </div>
    </wp-modal>

    <div class="col s9">
      <div class="collection">
        <div class="collection-item">
          <div class="board" :style="boardTemplateStyle">
            <template v-for="(cell, index) in board">
              <wp-board-cell :state="cell.state" :key="index" @hit="hit(cell)">
              </wp-board-cell>
            </template>
          </div>
        </div>
      </div>
    </div>

    <div class="col s3">
      <wp-sidebar
        v-bind="{
          hitsRemaining,
          shipsPartsDestroyed,
          shipsRemaining,
          cheating
        }"
        @restart="restart"
        @toggleCheating="toggleCheating"
        @back="back"
      ></wp-sidebar>
    </div>
  </div>
</template>

<script lang="ts">
// Base imports
import { Component, Prop } from "vue-property-decorator";

// Models imports
import BoardCell from "@/Models/Interfaces/BoardCellInterface";
import BoardCellState from "@/Models/Enums/BoardCellState";
import Ship, { ShipPart } from "@/Models/Classes/Ship";
import { StorageItem } from "@/Models/Interfaces/StoragePluginInterface";

// Mixins imports
import { mixins } from "vue-class-component";

/**
 * @module BoardGeneratorMixin
 * @param {number} size
 * @var {BoardCell[]} board
 * @var {string} boardTemplateStyle
 * @emits generateBoard
 */
import { BoardGeneratorMixin } from "@/Mixins/BoardGeneratorMixin";

/**
 * @module ShipsGeneratorMixin
 * @param {number} size
 * @var {Ship[]} ships
 * @emits generateShips
 * @emits generateShip
 */
import { ShipsGeneratorMixin } from "@/Mixins/ShipsGeneratorMixin";

// Components imports
import WpBoardCell from "@/Components/Game/BoardCell/BoardCellComponent.vue";
import WpModal from "@/Components/Interface/Modal/ModalComponent.vue";
import WpSidebar from "@/Components/Interface/Sidebar/SidebarComponent.vue";

@Component({
  name: "BoardComponent",
  components: {
    WpBoardCell,
    WpModal,
    WpSidebar
  }
})
export default class Board extends mixins(
  BoardGeneratorMixin,
  ShipsGeneratorMixin
) {
  @Prop() readonly hitsCount!: number;

  modalMessages = {
    failure:
      "Przegrana! Nie udało się zniszczyć wszystkich statków w podanej liczbie ruchów :(",
    success: "Wygrana! Dobrze poszło ;)"
  };
  activeMessageType: "success" | "failure" | null = null;
  cheating = false;
  cheatEnabledAtLeastOnce = false;

  board: BoardCell[] = [];
  ships: Ship[] = [];
  hitsRemaining: number = this.hitsCount;

  get shipsRemaining() {
    const shipsRemaining = this.ships.filter((ship: Ship) => !ship.destroyed);
    return shipsRemaining.length;
  }

  get shipsPartsDestroyed() {
    const destroyedParts = this.board.filter((cell: BoardCell) =>
      [BoardCellState.HIT, BoardCellState.DESTROYED].includes(cell.state)
    );

    return destroyedParts.length;
  }

  /**
   * BoardGeneratorMixin
   * ShipsGeneratorMixin
   */
  created() {
    this.board = this.generateBoard();
    this.generateShips(this.board);
  }

  // Main board methods
  clearBoard(): void {
    this.ships.splice(0, this.ships.length);
    this.board.forEach((cell: BoardCell) => {
      cell.state = BoardCellState.EMPTY;
    });
  }

  restart(): void {
    this.clearBoard();
    this.generateShips(this.board);
    this.hitsRemaining = this.hitsCount;
    this.activeMessageType = null;
  }

  back(): void {
    this.restart();
    this.$router.replace("/");
  }

  toggleCheating(): void {
    this.cheatEnabledAtLeastOnce = true;
    this.cheating = !this.cheating;
  }

  // User hit ship or ship part
  hit(cell: BoardCell) {
    const cellEmptyOrOccupied: boolean = [
      BoardCellState.EMPTY,
      BoardCellState.OCCUPIED
    ].includes(cell.state);

    if (this.hitsRemaining > 0 && cellEmptyOrOccupied) {
      if (cell.state === BoardCellState.EMPTY) {
        this.hitsRemaining--;
        cell.state = BoardCellState.MISSED;
      } else {
        this.hitsRemaining--;
        cell.state = BoardCellState.HIT;

        const ship = this._getShipByPart(cell);
        if (ship) {
          const shipPartsCells = this._getShipPartsCells(ship);
          const isShipDestroyed = this._checkIfShipDestroyed(shipPartsCells);
          if (isShipDestroyed) {
            this._destroyShip(ship, shipPartsCells);
            const allShipsDestroyed = this.shipsRemaining === 0;
            if (allShipsDestroyed && this.hitsRemaining > 0) {
              this._endGame();
            }
          }
        }
      }
      if (this.hitsRemaining === 0) {
        this._endGame();
      }
    }
    return cell.state;
  }

  private _checkIfShipDestroyed(
    shipPartsCells?: BoardCell[]
  ): boolean | undefined {
    return shipPartsCells?.every((cell: BoardCell) => {
      return cell.state === BoardCellState.HIT;
    });
  }

  private _getShipByPart(cell: BoardCell): Ship | undefined {
    return this.ships.find((ship: Ship) => {
      return ship.parts.find((part: ShipPart) => {
        return cell.x === part.x && cell.y === part.y;
      });
    });
  }

  private _destroyShip(ship: Ship, shipPartsCells: BoardCell[]): void {
    ship.destroy();
    shipPartsCells.forEach((part: ShipPart) => {
      const cell: BoardCell | undefined = this.board.find(
        (cell: BoardCell) => cell.x === part.x && cell.y === part.y
      );
      if (cell) {
        cell.state = BoardCellState.DESTROYED;
      }
    });
  }

  private _getShipPartsCells(ship: Ship): BoardCell[] {
    const cells: BoardCell[] = [];
    this.board.forEach((cell: BoardCell) => {
      return ship.parts.forEach((part: ShipPart) => {
        if (part.x === cell.x && part.y === cell.y) {
          cells.push(cell);
        }
      });
    });
    return cells;
  }

  private _endGame() {
    const allShipsDestroyed: boolean = this.shipsRemaining === 0;

    if (allShipsDestroyed) {
      this.activeMessageType = "success";
    } else {
      this.activeMessageType = "failure";
    }

    this._pushStats();
  }

  private _pushStats(): void {
    const currentStats: StorageItem = {
      type: this.activeMessageType,
      hitsCount: this.hitsCount,
      hitsRemaining: this.hitsRemaining,
      shipsPartsDestroyed: this.shipsPartsDestroyed,
      shipsRemaining: this.shipsRemaining,
      date: new Date(),
      cheating: this.cheating
    };

    const allStats: StorageItem[] =
      (this.$storage.get("stats") as StorageItem[]) || [];

    allStats.unshift(currentStats);
    if (allStats.length > 10) {
      allStats.pop();
    }
    this.$storage.set("stats", allStats);
  }
}
</script>

<style lang="scss">
@use './BoardStyles' as BoardMixin;

@include BoardMixin.skeleton;
@include BoardMixin.visuals;
</style>
