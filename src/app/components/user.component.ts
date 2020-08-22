import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
    moduleId: module.id, 
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [PostsService]
})
export class UserComponent  { 
  name: string;
  email: string; 
  address: address;
  weapons: string[];
  showWeapons: boolean; 
  posts:Post[];

  constructor(private postsService: PostsService){
    this.name = 'John 117';
    this.email = 'masterchief@gmail.com'; 
    this.address = {
        street: 'Zeta Halo St', 
        city: 'New Mombasa',
        state: 'WA'
  }
  this.weapons = ['Assault Rifle', 'Magnum', 'Battle Rifle'];
  this.showWeapons = false; 

  this.postsService.getPosts().subscribe(posts => {
      this.posts = posts; 
  });
}

// toggles list of weapons on and off. 
toggleWeapons(){
    if(this.showWeapons == true){
        this.showWeapons = false; 
    }
    else { 
        this.showWeapons = true; 
    }
    
}

addWeapon(weapon){
    this.weapons.push(weapon);
}

    deleteWeapon(i){
this.weapons.splice(i, 1);
    }
}

interface address { 
    street: string; 
    city: string; 
    state: string; 
}

interface Post{
    id: number; 
    title: string; 
    body: string; 
}