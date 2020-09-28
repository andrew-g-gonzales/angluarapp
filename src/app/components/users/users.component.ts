import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from '../../models/User';
//import { runInThisContext } from 'vm';

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
  @ViewChild('userForm') form:any;

  constructor(private dataService: DataService) { 


  }

  ngOnInit(): void {

      setTimeout(() =>{

      this.users = this.dataService.getUsers();
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

  onSubmit({value, valid}: {value: User, valid:boolean}){
      if(!valid){
          console.log('Form is not valid');
      }else{

        value.isActive = true;
        value.registered = new Date();
        value.hide = true;
        this.users.unshift(value);

        this.form.reset();
      }
  }


  fireEvent(e){

    console.log(e.type);
    console.log(e.target.value)
  }


}
