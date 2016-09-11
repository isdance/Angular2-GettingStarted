import {Component} from "angular2/core";
import {ProductListComponent} from "./product-list.component";
import {ProductService} from "./services/product.service";

@Component({
    selector : 'pm-app', // pm means product management and app is this class's feature.
    templateUrl : 'app/templates/app.template.html',
    directives: [ProductListComponent],
    providers: [ProductService]
})
export class AppComponent{
    pageTitle : string = "Jeremy Product Management";
}