import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-Uhome',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class UHomeComponent implements OnInit {

  constructor(private secService : SecurityService) { }

  ngOnInit(): void {
    this.secService.fullCheck();
  }

}
