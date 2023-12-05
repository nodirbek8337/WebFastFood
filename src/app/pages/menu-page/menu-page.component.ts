import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css'],
})
export class MenuPageComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private orderDetailsService: OrderDetailsService
  ) {}
  getMenuId: any;
  menuData: any;

  ngOnInit(): void {
    this.getMenuId = this.activateRoute.snapshot.paramMap.get('id');
    if (this.getMenuId) {
      this.menuData = this.orderDetailsService.foodDetails.filter((value) => {
        return value.id == this.getMenuId;
      });
    }
  }
}
