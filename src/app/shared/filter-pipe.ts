import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'searchFilter'})
export class SearchFilterPipe implements PipeTransform {
    transform(value: any, search: any): any {
        console.log(value);
         if  (!search) {return value; }
         let solution = value.filter((v: any) => {
            if ( !v ) {return;}
           return  v['name'].toLowerCase().indexOf(search.toLowerCase()) !== -1;
        })
        return solution;
    }
}