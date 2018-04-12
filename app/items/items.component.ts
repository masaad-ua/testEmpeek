import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Item, Comment, LocalStorageService } from '../shared/shared'

@Component({
    selector: 'items-empeek',
    templateUrl: 'items.component.html'
})

export default class ItemsEmpeek {
    itemsArray: Array<Item>;
    itemsArrayKey: string;
    item: string;
    lastId: number;
    chosenElement: any;

    constructor(
        private localStorageService : LocalStorageService
    ){
        this.itemsArrayKey = "itemsEmpeek";
        if(this.localStorageService.getLocalStorage(this.itemsArrayKey)){
            this.itemsArray = this.localStorageService.getLocalStorage(this.itemsArrayKey);
            this.chosenElement = this.itemsArray[0] || {};
        }
        else{
            this.localStorageService.setLocalStorage(this.itemsArrayKey,[]);
            this.itemsArray = [];
            this.chosenElement = {};
        }
        this.item = "";
    }

    addItem():void {
        this.lastId = this.localStorageService.getLastIdLocalStorage(this.itemsArrayKey);
        this.itemsArray.push({
            id: this.lastId + 1,
            text: this.item ,
            chosen: false,
            comments: []
        });
        this.localStorageService.setLocalStorage(this.itemsArrayKey,  this.itemsArray);
    }

    choseItem(id: string): void{
        this.itemsArray.forEach((elem, index, arr)=>{
            if(elem.chosen === true){
                this.itemsArray[index].chosen = false;
            }
            if(elem.id === parseFloat(id)){
                this.itemsArray[index].chosen = true;
                this.chosenElement = elem;
            }
        });
    }

    deleteItem(event: any, obj: any):void{
        event.stopPropagation();
        let index =  this.itemsArray.indexOf(obj);
        this.itemsArray.splice(index, 1);
        this.localStorageService.setLocalStorage(this.itemsArrayKey, this.itemsArray);
        this.chosenElement = {};
    }
}