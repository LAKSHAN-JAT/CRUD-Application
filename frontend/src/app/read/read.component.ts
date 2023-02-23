import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {

  constructor(private service: ApiserviceService) { }

  readData: any;
  ngOnInit(): void {
    this.service.getAllData().subscribe((res) => {
      console.log(res, 'result');
      this.readData = res.data;
    });
  }
}
