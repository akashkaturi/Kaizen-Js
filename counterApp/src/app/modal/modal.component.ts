import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-modal',
    standalone: true,
    imports: [
        NgIf
    ],
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.css'
})
export class ModalComponent {
    @Input() isOpen = false;
    @Output() isOpenChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Input() counter=0;
    @Output() resetCounterEvent: EventEmitter<any> = new EventEmitter<void>();

    closeModal() {
        this.isOpenChange.emit(!this.isOpen);
        this.resetCounterEvent.emit()
    }
}
