import { Component, Input, OnInit } from '@angular/core';
import { Picture } from '../../interfaces/picture';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  @Input() picture: Picture;
  imageUrl: string;


  constructor() { }

  ngOnInit(): void {
    this.getURLs();
  }

  getURLs() {
  }

}
