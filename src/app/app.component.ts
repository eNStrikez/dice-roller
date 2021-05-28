import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'dice-roller';
    opened = false;

    public toggle(): void {
        this.opened = !this.opened;
    }
}
