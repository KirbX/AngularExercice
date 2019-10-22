import { Component, OnInit, Input} from '@angular/core';

export class Post {
    title: string;
    content: string;
    loveIts: number = 0;
    createdAt: Date = new Date();

    constructor(title: string, content: string){
        this.title = title;
        this.content = content; 
    }
}
