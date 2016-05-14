import { Component } from 'angular2/core'

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html'
})
  export /**
   * ProductListComponent
   */
  class ProductListComponent {
     pageTitle: string = "Product List";
     products: any[] = [
       {
         "productId": 2,
         "productName": "Garden Cart",
         "productCode": "GDN-0023",
         "releaseDAte": "March 18, 2016",
         "description": "15 gallon capacity",
         "price": 32.99,
         "starRating": 4.2,
         "imageURL": "http://openclipart.org"
         
       },
       {
         "productId": 3,
         "productName": "Hammer",
         "productCode": "GDN-0024",
         "releaseDAte": "March 19, 2016",
         "description": "Curved claw steel hammer",
         "price": 8.9,
         "starRating": 4.8,
         "imageURL": "http://openclipart.org"
         
       }
       
     ];
  }
  