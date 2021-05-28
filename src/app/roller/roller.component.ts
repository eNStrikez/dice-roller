import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-roller',
    templateUrl: './roller.component.html',
    styleUrls: ['./roller.component.scss']
})
export class RollerComponent implements OnInit {
    splash: boolean = true;
    constructor() { }

    ngOnInit(): void {
    }

}
