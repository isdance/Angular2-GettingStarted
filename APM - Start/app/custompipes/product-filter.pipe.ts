import {PipeTransform} from "angular2/src/core/change_detection/pipe_transform";
import {IProduct} from "../interfaces/product.interface";
import {Pipe} from "angular2/src/core/metadata";

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(value: IProduct[], args: string[]): IProduct[] {
        // define the filter. if args[0] if not null then filter is args[0], otherwise filter is none.
        let filter: string = args[0] ? args[0].toLowerCase() : null;
        // if filter is not null, then use arrow function systax to select any product which name contains the filter string.
        // if filter is null, then return the whole list
        return filter ? value.filter((product: IProduct) => product.productName.toLowerCase().indexOf(filter) != -1) : value;
    }
}
