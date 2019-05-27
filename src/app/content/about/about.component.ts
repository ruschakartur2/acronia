import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../../assets/userModel';

const users: UserModel[] = [
  {
    id: 1,
    firstName: 'Anton',
    secondName: 'Petrov',
    position: 'General manager',
    fbLink: 'https://www.facebook.com/',
    instLink: 'https://www.instagram.com/',
    mailLink: 'https://www.instagmra.com',
    imgUrl: 'https://scontent.fiev6-1.fna.fbcdn.net/v/t1.0-9/14947515_1259385547468176_8679851821227068898_n.jpg?_nc_cat=104&_nc_ht=scontent.fiev6-1.fna&oh=67f09301d22b6fb2a8ec504b6f9ec27a&oe=5D5F86B4  '
  },
  {
    id: 2,
    firstName: 'Kirl',
    secondName: 'Donchev',
    position: 'Design Master',
    fbLink: 'https://www.facebook.com/',
    instLink: 'https://www.instagram.com/',
    mailLink: 'https://www.instagmra.com',
    imgUrl: 'https://scontent.fiev6-1.fna.fbcdn.net/v/t1.0-9/35518954_235720457019049_8557195941793234944_n.jpg?_nc_cat=100&_nc_ht=scontent.fiev6-1.fna&oh=937d5650a0d22e1bcddce6a17ab8c76a&oe=5D697EF5'
  },
  {
    id: 3,
    firstName: 'Olena',
    secondName: 'Taras',
    position: 'Developer Ninja',
    fbLink: 'https://www.facebook.com/',
    instLink: 'https://www.instagram.com/',
    mailLink: 'https://www.instagmra.com',
    imgUrl: 'https://scontent.fiev6-1.fna.fbcdn.net/v/t1.0-9/22788800_1413945392036970_5287024790949652044_n.jpg?_nc_cat=109&_nc_ht=scontent.fiev6-1.fna&oh=3c8c6832ffa888924363af1ffd30702f&oe=5D55719C'
  },
  {
    id: 4,
    firstName: 'Doni',
    secondName: 'Stamov',
    position: 'Seo guru',
    fbLink: 'https://www.facebook.com/',
    instLink: 'https://www.instagram.com/',
    mailLink: 'https://www.instagmra.com',
    imgUrl: 'https://scontent.fiev6-1.fna.fbcdn.net/v/t1.0-9/20139589_1619676871398762_5091082083380179425_n.jpg?_nc_cat=108&_nc_ht=scontent.fiev6-1.fna&oh=20560c0e8d8bf4294466a8f8eb7a4aa4&oe=5D98E523'
  }
]
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  users: UserModel[] = users;
  constructor() { }

  ngOnInit() {
  }

}
