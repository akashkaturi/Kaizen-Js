import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {ButtonComponent} from "./button/button.component";
import {ModalComponent} from "./modal/modal.component";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, ButtonComponent, ModalComponent, ReactiveFormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    counterForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.counterForm = this.formBuilder.group({
            higherLimit: ['', Validators.min(0)],
            lowerLimit: ['', Validators.max(0)]
        });
    }

    noNegativeIntegers(control: AbstractControl): { [key: string]: any } | null {
        const value = control.value.trim();

        if (value) {
            const parsedValue = parseInt(value, 10);
            if (parsedValue < 0 || !Number.isInteger(parsedValue)) {
                control.setValue('')
                return {'negativeInteger': true};
            }
        }

        return null;
    }

    noPositiveIntegers(control: AbstractControl): { [key: string]: any } | null {
        const value = control.value.trim();

        if (value && value.startsWith("-")) {
            const parsedValue = parseInt(value, 10)
            console.log(parsedValue)
            if (parsedValue > 0 || !Number.isInteger(parsedValue)) {
                control.setValue('')
                return {'positiveInteger': true};
            }
        }


        return null;
    }

    title = 'counterApp';
    countNumber = 0;

    increaseCount = () => {
        this.countNumber = this.countNumber + 1;
        if (this.countNumber > this.counterForm.get('higherLimit').value) {
            this.openModal();
        }
    }

    decreaseCount = () => {
        this.countNumber = this.countNumber - 1;
        if (this.countNumber < this.counterForm.get('lowerLimit').value) {
            this.openModal();
        }
    }

    increase = 'Increase';
    decrease = 'Decrease';
    reset = 'Reset Counter';
    resetLimit = 'Reset All';

    isModalOpen = false;

    openModal = () => {
        this.isModalOpen = true;
    }

    resetCounter = () => {
        this.countNumber = 0;
    }

    resetLimits = () => {
        this.counterForm.controls['higherLimit'].setValue('');
        this.counterForm.controls['lowerLimit'].setValue('');
        this.resetCounter();
    }
}