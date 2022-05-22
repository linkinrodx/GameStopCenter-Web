import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  inputParams : any = {
    pageNumber : 1,
    pageSize : 20
  };
  outputParams : any = {
    totalCount : 100,
    pageSize : 20,
    currentPage : 1,
    totalPages : 5
  };

  @Input() parameters : any = this.outputParams;

  constructor() { }

  ngOnInit(): void {
  }

  getListPage() : Number[]{
    let test : Number[] = [];
    for (let index = 1; index <= this.parameters.totalPages; index++) {
      test.push(index);      
    }
    return test;
  }
}
