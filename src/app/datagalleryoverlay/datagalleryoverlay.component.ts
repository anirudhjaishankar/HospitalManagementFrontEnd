import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/formservice/form.service';

@Component({
  selector: 'app-datagalleryoverlay',
  templateUrl: './datagalleryoverlay.component.html',
  styleUrls: ['./datagalleryoverlay.component.scss']
})
export class DatagalleryoverlayComponent implements OnInit {
  
  username:String;
  
  constructor(private fromService : FormService) { }

  ngOnInit() {
    this.username = this.fromService.getUsername();
  }

}
