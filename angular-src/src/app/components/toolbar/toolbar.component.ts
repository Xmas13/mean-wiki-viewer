// description: Toolbar at the top of the page.
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  title: string = "Mean-Wiki-Viewer" // Sets title of the page.
  constructor() { }

  ngOnInit(): void {
  }

}
