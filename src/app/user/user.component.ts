import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { User } from '../shared/user.model';
import { DataModel } from '../shared/data.model';
import { UserService } from './user.service';
import data_u from './user.json';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  user: User = new User();

  usersModel: DataModel[];

  userForm: FormGroup;


  constructor(private userService: UserService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    // this.users = this.route.snapshot.data.users;
    this.users =data_u;
console.log(JSON.stringify(this.route.snapshot.data.users));
    this.userForm = this.fb.group({
      nom: ['', Validators.required],
      ref: '',
      prenom: '',
      password: '',
      profession: '',
    });

    this.usersModel = [
      new DataModel('id','ID','number',true,[]),
      new DataModel('nom','Nom','string',false,[]),
      new DataModel('prenom','Prénom','number',false,[]),
      new DataModel('password','Mot de passe','string',false,[]),
      new DataModel('profession','profession','string',false,[]),
    ]
  }

}