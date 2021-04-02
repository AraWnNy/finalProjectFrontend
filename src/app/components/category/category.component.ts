import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoryService:CategoryService) {
    this.getCategories();
  }

  ngOnInit(): void {}

  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{
      if(response.success){
        this.categories = response.data;
      }
    });
  }
}
