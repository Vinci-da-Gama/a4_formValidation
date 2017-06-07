import { Directive, OnInit, ElementRef, HostListener, EventEmitter, Input, Output } from '@angular/core';

@Directive({ 
    selector: '[myFieldModel]',
    exportAs: 'myFieldModel'
})
export class FieldModelDirective implements OnInit {
    
    // @Output() eventName: EventEmitter<eventDataType> = new EventEmitter<eventDataType>();
    @Output('myFieldModelChange') modelChange = new EventEmitter();

    private elem: HTMLInputElement;
    invalid: boolean = false;

    constructor(elementRef: ElementRef) {
        this.elem = elementRef.nativeElement;
    }

    ngOnInit() { 
        // this.elem.value = this.model;
    }

    // setter function to handle 2 way binding problem.
    @Input('myFieldModel') set model(val: string) {
        this.elem.value = val;
        this.validate();
    };

    @Input() required: boolean;

    // input is event name
    @HostListener('input') oninput() {
        console.log('25 -- output result: ', this.elem.value);
        this.modelChange.emit(this.elem.value);
        this.validate();
    }

    private validate() {
        let tec = this.elem.classList;
        let tev = this.elem.value;
        if (this.required === undefined || tev === null || tev === undefined || tev === '') {
            tec.remove('myclass-invalid');
            tec.add('myclass-valid');
            this.invalid = true;
        } else {
            tec.remove('myclass-valid');
            tec.add('myclass-invalid');
            this.invalid = false;
        }

    }

}