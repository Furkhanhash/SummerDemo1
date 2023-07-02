import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
Hash="";


getUsername(eventData:any){
console.log((<HTMLInputElement>eventData.target).value);
this.Hash=(<HTMLInputElement>eventData.target).value
}

getTitle(){
  return this.Hash
}

}
