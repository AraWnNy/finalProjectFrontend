import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];

  currentCategory?:Category;

  constructor(private categoryService:CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{
      if(response.success){
        this.categories = response.data;
      }
    });
  }

  setCurrentCategory(category:Category){
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category:Category){
    if(category == this.currentCategory){
      return "list-group-item active"
    }
    return "list-group-item"
  }

  getAllCategoryClass(){
    if(!this.currentCategory){
      return "list-group-item active";
    }
    return "list-group-item";
  }
  resetCurrentCategory(){
    this.currentCategory = undefined;
  }
}


