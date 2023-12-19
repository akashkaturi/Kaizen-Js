import {Component,OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {ButtonComponent} from "./button/button.component";
import {ModalComponent} from "./modal/modal.component";
import {FormGroup} from "@angular/forms";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, ButtonComponent, ModalComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent{
    inputForm: FormGroup | undefined;

    title = 'counterApp';
    countNumber = 0;
    increaseCount = () => {
        this.countNumber = this.countNumber + 1
        if (this.countNumber > 5) {
            this.openModal()
        }
    }
    decreaseCount = () => {
        this.countNumber = this.countNumber - 1
        if (this.countNumber < -5) {
            this.openModal()
        }
    }
    increase = "Increase"
    decrease = "Decrease"
    reset = "Reset"

    isModalOpen = false;
    openModal = () => {
        this.isModalOpen = true;
    }
    resetCounter = () => {
        this.countNumber = 0
    }
    higherLimit = 0;
    lowerLimit = 0;


}
