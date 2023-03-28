import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  transform(value: any, filteredString:string ){
    if (value.length === 0 || filteredString === ''){
return value;
    }
    const productData:string[] = [];
    for (const dataList of value){
      if (dataList['title'] === filteredString){
        productData.push(dataList)
      }else{
      //  window.alert("no product with that name found!")
      }

    }

return productData;
  }
  

}
