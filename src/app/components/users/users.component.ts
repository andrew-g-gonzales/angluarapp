import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
      firstName: '',
      lastName: '',
      email: ''
  };
  users: User[];
  showExtended:boolean = true;
  loaded:boolean = false;
  enableAdd:boolean = false;
  showUserForm:boolean =false;

  constructor() { }

  ngOnInit(): void {

      setTimeout(() =>{

      this.loaded = true;
     

      },2000
    );

      this.users = [

      ];


  }

  addUser(){

       this.user.isActive = true;
       this.user.registered = new Date();
      this.users.unshift(this.user);
  }

  onSubmit(e){

    console.log(123);
    e.preventDefault();
  }


  fireEvent(e){

    console.log(e.type);
    console.log(e.target.value)
  }


}
