import {Component} from "angular2/core";
import {IProduct} from "./interfaces/product.interface";
import {OnInit} from "angular2/src/core/linker/interfaces";
import {ProductFilterPipe} from "./custompipes/product-filter.pipe";
import {StarComponent} from "./shared/star.component";
import {ProductService} from "./services/product.service";
@Component({
    selector : 'pm-products',
    templateUrl : 'app/templates/product-list.component.html',
    styleUrls: ['app/css/product-list.component.css'],
    pipes : [ProductFilterPipe],
    directives: [StarComponent]
})
export class ProductListComponent implements OnInit{
    // private _productService : ProductService;
    // constructor(productService : ProductService){
    //     this._productService = productService;
    // }
    // or use the shorthand usage
    constructor(private _productService : ProductService){
    }

    pageTitle : string = 'Product List';
    imageWidth : number = 50;
    isShowImage : boolean = true;
    filterBy : string = '';
    products : IProduct[] = [];

    /*Methods*/
    toogleImage() : void{
        this.isShowImage = !this.isShowImage;
    }

    onNotify(message : string) : void{
        console.log(message);
    }

    ngOnInit() : void{
        console.log('Loading Data');
        this.products = this._productService.getProducts();
    }
}
