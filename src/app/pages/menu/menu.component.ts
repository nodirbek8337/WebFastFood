import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private orderDetailsService: OrderDetailsService) {}
  foodDate: any;

  ngOnInit(): void {
    this.foodDate = this.orderDetailsService.foodDetails;
  }
}
