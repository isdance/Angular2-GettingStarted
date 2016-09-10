import {Component} from "angular2/core";

@Component({
    selector : 'pm-app', // pm means product management and app is this class's feature.
    templateUrl : 'app/templates/app.template.html'
})
export class AppComponent{
    pageTitle : string = "Jeremy Product Management";
}