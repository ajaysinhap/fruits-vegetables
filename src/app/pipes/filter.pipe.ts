import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: String) {
    if (value.length === 0 || !filterString) {
      return value;
    }
    let filteredProducts = []
    for (let product of value) {
      if (
        product.name.toLowerCase().includes(filterString.toLowerCase())
      ) {
        filteredProducts.push(product)
      }
    }
    return filteredProducts;
  }

}
