import {Component} from "angular2/core";
import {ProductListComponent} from "./product-list.component";

@Component({
    selector : 'pm-app', // pm means product management and app is this class's feature.
    templateUrl : 'app/templates/app.template.html',
    directives: [ProductListComponent]
})
export class AppComponent{
    pageTitle : string = "Jeremy Product Management";
}