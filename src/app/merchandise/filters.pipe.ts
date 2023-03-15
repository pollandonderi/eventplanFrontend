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
       //create an ngx alert popup to the user or borrow inspiration on how to do this
      }

    }

return productData;
  }
  

}
