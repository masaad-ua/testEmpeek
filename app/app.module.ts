import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';

import { ItemsEmpeek, CommentsEmpeek} from './items/items';

@NgModule({
    imports:[BrowserModule, FormsModule],
    declarations: [AppComponent, ItemsEmpeek, CommentsEmpeek],
    bootstrap: [AppComponent]
})
export class AppModule{}