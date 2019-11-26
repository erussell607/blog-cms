import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../category.service';
import {Category} from './category';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  displayedColumns: string[] = ['catName', 'catDesc'];
  data: Category[] = [];
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: CategoryService) {
  }

  ngOnInit() {
    this.api.getCategories()
      .subscribe(res => {
        this.data = res;
        this.isLoadingResults = false;

        // console.log('for each test: ' + JSON.stringify(res));
        // JSON.stringify(res);
        // var jsonString = JSON.stringify(res);
        // var jsonObj = JSON.parse(jsonString);
        //
        // for (var i = 0; i < jsonObj.length; i++) {
        //   console.log('could it be?: ' + jsonObj[i]['_id']);
        // }


      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
