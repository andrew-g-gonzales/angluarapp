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
      age: null,
      address: {
        street: '',
        city: '',
        state: ''
      }
  };
  users: User[];
  showExtended:boolean = true;
  loaded:boolean = false;
  enableAdd:boolean = false;
  showUserForm:boolean =false;

  constructor() { }

  ngOnInit(): void {

      setTimeout(() =>{

        /*this.addUser({
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
              street: '50 Main ST',
              city: 'Boston',
              state: 'MA'
          },
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true
      });

      this.addUser({
            firstName: 'Jane',
            lastName: 'Doe',
            age: 30,
            address: {
                street: '51 Main ST',
                city: 'Boston',
                state: 'MA'
            },

            isActive: false,
            registered: new Date('03/11/2017 06:30:00'),
            hide: true
        });

        this.addUser({
            firstName: 'Debby',
            lastName: 'Downer',
            age: 78,
            address: {
                street: '1000 5th Ave',
                city: 'NY',
                state: 'NY'
            },
            isActive: true,
            registered: new Date('01/02/2016 10:30:00'),
            hide: true
        });*/


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
