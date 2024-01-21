import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-cell',
    templateUrl: './cell.component.html',
    styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
    @Input() cellValue: any;
    @Input() state!: number;
    @Input() block!: number;
    constructor() {
    }

    ngOnInit(): void {
    }

}
