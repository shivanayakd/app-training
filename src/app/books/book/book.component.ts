import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book: {id: string; name: string; } = {id: '', name: ''};
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('activated route', this.route.snapshot.params);
    // this.book.id = this.route.snapshot.params['id'];
    // this.book.name = this.route.snapshot.params['name'];

    this.route.params.subscribe((data) => {
      console.log('data--->', data);
      this.book.id = data.id;
      this.book.name = data.name;
    });

    this.route.queryParams.subscribe((data) => {
      console.log('my query parms', data);
    });
    this.route.fragment.subscribe((data) => {
      console.log('my Fragment', data);
    });
  }

}
