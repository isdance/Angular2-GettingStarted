import {Component, Input, Output} from "angular2/src/core/metadata";
import {OnChanges} from "angular2/src/core/linker/interfaces";
import {EventEmitter} from "angular2/src/facade/async";
@Component({
    selector : 'ai-star',
    templateUrl : 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating: number;
    @Output() notify : EventEmitter<string> = new  EventEmitter<string>();
    starWidth: number;

    ngOnChanges() : void{
        this.starWidth = this.rating * 86 / 5
    }

    onClick(rating){
        this.notify.emit(JSON.stringify({ value: rating }) )
    }
}
