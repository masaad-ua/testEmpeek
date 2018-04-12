import { Component, Input } from '@angular/core';
import {  Item, Comment,  LocalStorageService} from '../shared/shared';

@Component({
    selector: 'item-component-empeek',
    templateUrl: 'item-comments.component.html'
})

export default class CommentsEmpeek{
    commentsArray: Array<Comment>;
    colorComment: string;

    _chosenElement: any;

    @Input()
    set chosenElement(arg: any) {
        this._chosenElement = arg;
        if(this._chosenElement.hasOwnProperty('comments')){
            this.commentsArray = this._chosenElement.comments;
            this.colorComment = "#E6E6E6";
        } else {
            this.commentsArray = [];
            this.colorComment = "#E6E6E6";
        }
    }
    get chosenElement() { return this._chosenElement; }

    constructor(
        private localStorageService : LocalStorageService
    ){
        this.colorComment = "#E6E6E6";
    }

    addComment(event :any):void{
        if(event.keyCode === 13 && event.ctrlKey ){
            let items: Array<Item>;
            this.commentsArray.push({color: this.colorComment, text: event.target.value});
            this.chosenElement.comments = this.commentsArray;

            items = this.localStorageService.getLocalStorage("itemsEmpeek");
            items.map((elem, index, arr)=>{
                if(elem.id === this.chosenElement.id ){
                    elem.comments.push({color: this.colorComment, text: event.target.value});
                }
            });
            this.localStorageService.setLocalStorage("itemsEmpeek", items);
            event.currentTarget.reset();
            this.colorComment = "#E6E6E6";
        }

    }
    changeColorComponent(event :any): void{
        this.colorComment = event.currentTarget.value;
    }
}