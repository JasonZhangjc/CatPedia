import { Component, OnInit } from '@angular/core';
import { Cat } from '../cat';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {

  cats!: Cat[];

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    // this.cats = [
    //   {
    //     "id": 2,
    //     "firstName": "Money",
    //     "lastName": "Huang",
    //     "breed": "Regdoll-Chinchilla",
    //     "age": 1,
    //     "gender": "male",
    //     "color": "Grey",
    //     "catality": "World-weary"
    //   },
    //   {
    //     "id": 3,
    //     "firstName": "Hengheng",
    //     "lastName": "Zhao",
    //     "breed": "British short hair",
    //     "age": 4,
    //     "gender": "male",
    //     "color": "Silver",
    //     "catality": "Curious"
    //   }
    this.getCats();
  }

  private getCats() {
    this.catService.getCatsList().subscribe(data => {
      this.cats = data;
    });
  }

  // Stop here. Feel like a problematic project!

}
