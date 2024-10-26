import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'capitalized',
    standalone: true
})
export class CapitalizedPipe implements PipeTransform {
    transform(value: string) {
        return value
            .split(' ')
            .map(word => word[0].toUpperCase() + word.slice(1).toLocaleLowerCase())
            .join(' ');
    }
}