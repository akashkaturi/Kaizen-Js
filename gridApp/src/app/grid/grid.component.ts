import {Component, OnInit, Input, OnChanges, SimpleChange} from '@angular/core';
import {CellComponent} from "../cell/cell.component";


@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnChanges {
    @Input() gridSize: number = 0;
    gridData: any[] = [];

   ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
    if (changes['gridSize'] && changes['gridSize'].currentValue) {
      this.gridData = Array.from({ length: this.gridSize*this.gridSize }, (_, i) => i+1);
    }
  }

    state: number = 1;
    block: number = 5;
    action: string = "";

    updateAction() {
        if (this.state === this.block) {
            this.action = 'Player Blocked';
        } else {
            this.action = '';
        }
    }

    up() {
        if (this.state <= this.gridSize) {
            this.action = 'Action not Allowed';
        } else {
            this.state -= this.gridSize;
            this.updateAction();
        }
    }

    down() {
        if (this.state > this.gridSize * (this.gridSize - 1)) {
            this.action = 'Action not Allowed';
        } else {
            this.state += this.gridSize;
            this.updateAction();
        }
    }

    right() {
        if (this.state % this.gridSize === 0) {
            this.action = 'Action not Allowed';
        } else {
            this.state += 1;
            this.updateAction();
        }
    }

    left() {
        if (this.state % this.gridSize === 1) {
            this.action = 'Action not Allowed';
        } else {
            this.state -= 1;
            this.updateAction();
        }
    }

    constructor() {
    }

    ngOnInit(): void {
        this.updateAction();
    }

}
