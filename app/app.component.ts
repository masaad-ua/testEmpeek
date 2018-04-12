import { Component, ViewEncapsulation} from '@angular/core';
import { LocalStorageService } from './shared/shared';

@Component({
    selector: 'empeek-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [LocalStorageService],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {}