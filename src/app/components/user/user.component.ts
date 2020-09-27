import { Component } from '@angular/core';

import { User } from '../../models/User';

@Component({
    selector: 'app-user',
    //template: '<h2>John Doe </h2>'
    templateUrl: './user.component.html',
    styleUrls: [
        './user.component.css'
    ],
    /*styles: [`
        h2 {
            color: blue
        }
    `]*/
})

export class UserComponent {

    user: User;

    /*firstName:string;
    lastName:string;
    age:number;
    address;
    foo:any;
    hasKids:boolean;
    numberArray:number[];
    stringArray:string[];
    myTuple:[string, number, boolean];
    n:null;*/

    constructor(){

        this.user = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com'

        }
    }


    addNumbers(num1:number, num2:number):number {
        return num1 + num2;
    }


}


