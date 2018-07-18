import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books = [
    {
      id: 1,
      name: 'Mybooks1'
    },
    {
      id: 2,
      name: 'Mybooks2'
    },
    {
      id: 3,
      name: 'Mybooks3'
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  loadBook(b) {
    this.router.navigate(['/books', b.id, b.name], {queryParams: {edit: 1}, fragment: 'contact'});
  }

}
