import { Component } from '@angular/core';
import { UrlServiceService } from '../services/url-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  ngOnInit() {
    this.getAll();
  }

  constructor(private _ser: UrlServiceService) {

  }
  dataArray: any
  getAll() {

    this._ser.getAllCategories().subscribe((data) => {
      this.dataArray = data
    })
  }
}
