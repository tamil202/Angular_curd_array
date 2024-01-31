import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {CommonModule} from '@angular/common'

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './body.component.html',
})
export class BodyComponent {
  todoValue:string[] = ["hello"]
  clientData: string = ''

  DataAddOn() {
    if (this.clientData === '') {
      
      console.log(`enter value`);
      return
     
    } else {
     this.todoValue.push(this.clientData)
      
    }
    console.log(this.todoValue);
  }
  
  deleteItem(e: any) {
     this.todoValue.splice(e,1)
     console.log(`${e} index deleted` );
     
  }
}
