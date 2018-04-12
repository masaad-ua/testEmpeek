import { Injectable } from '@angular/core';
import {Item } from '../shared'

@Injectable()
export default class LocalStorageService{
    array: Array <Item>;
    constructor(){
        this.array = [];
    }

    getLocalStorage(key: string): Array <Item>{
        return JSON.parse(localStorage.getItem(key))
    }

    setLocalStorage(key: string, obj: Array <Item> ): void{
        localStorage.setItem(key, JSON.stringify(obj));
    }
    getLastIdLocalStorage(key: string): number{
        this.array = this.getLocalStorage(key) || [];
        if(this.array.length == 0){
            return 0;
        }
        else{
            return this.array[this.array.length - 1].id
        }
    }

}

