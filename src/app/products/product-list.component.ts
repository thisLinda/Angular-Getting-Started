import { Component } from '@angular/core';

// the @Component decorator defines the metadata for the component
@Component({
    selector: 'pm-products',
    // templateURL is the path to the HTML file that contains the view for this component
    // and defines the view
    templateUrl: './product-list.component.html'
})

// The class is the code that defines the component's behavior
export class ProductListComponent {

}