import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'comput', standalone: true})
export class ComputPipe implements PipeTransform {
    transform(value: string, index:number) {
        console.log("ComputPipe")
        return `${value} - ${index}`
    }
}