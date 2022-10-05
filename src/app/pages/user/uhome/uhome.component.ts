import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-uhome',
  templateUrl: './uhome.component.html',
  styleUrls: ['./uhome.component.css']
})
export class UhomeComponent implements OnInit {

  constructor(private secService : SecurityService) { }

  ngOnInit(): void {
    this.secService.fullCheck();
  }

}
