import { Component } from "@angular/core";
import data from '../../../data.json'
@Component({
    selector: 'app-add-flight',
    templateUrl: './add-flight.component.html'
})
export class AddFlightComponent {
  
    constructor() { 
        console.log(data)
    }
    onSubmit(userForm:any) {
        console.log(userForm)
    }
  }