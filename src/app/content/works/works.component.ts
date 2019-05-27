import { Component, OnInit } from '@angular/core';
const works = [
  {
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg',
    describe: 'Some nature',
    category: 'mount'
  },
  {
    imgUrl: 'http://isha.sadhguru.org/blog/wp-content/uploads/2016/05/natures-temples.jpg',
    describe: 'Some nature',
    category: 'forest'
  },  {
    imgUrl: 'http://isha.sadhguru.org/blog/wp-content/uploads/2016/05/natures-temples.jpg',
    describe: 'Some nature',
    category: 'forest'
  },  {
    imgUrl: 'http://isha.sadhguru.org/blog/wp-content/uploads/2016/05/natures-temples.jpg',
    describe: 'Some nature',
    category: 'forest'
  },
  {
    imgUrl: 'http://www.youandthemat.com/wp-content/uploads/nature-2-26-17.jpg',
    describe: 'Some nature',
    category: 'Sea'
  },
  {
    imgUrl: 'http://isha.sadhguru.org/blog/wp-content/uploads/2016/05/natures-temples.jpg',
    describe: 'Some nature',
    category: 'forest'
  },  {
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg',
    describe: 'Some nature',
    category: 'mount'
  },
  {
    imgUrl: 'http://isha.sadhguru.org/blog/wp-content/uploads/2016/05/natures-temples.jpg',
    describe: 'Some nature',
    category: 'forest'
  },

];
@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})

export class WorksComponent implements OnInit {

  constructor() { }
   public works = works;

  ngOnInit() {
  }
}
