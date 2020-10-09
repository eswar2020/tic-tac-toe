import { Component, Input, OnInit } from '@angular/core';

import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-iconny',
  templateUrl: './iconny.component.html',
  styleUrls: ['./iconny.component.css'],
})
export class IconnyComponent implements OnInit {
  constructor() {}

  @Input() iconName: string;
  faPen = faPen;
  faTimes = faTimes;
  faCircle = faCircle;

  ngOnInit(): void {}
}
