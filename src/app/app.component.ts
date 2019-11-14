import { Component } from '@angular/core';
import { empty } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular8-crud';
  todoArray = [];
  adddTodo(value) {
    if(value !== "")
    {
      this.todoArray.push(value);
      console.log(this.todoArray);
    }else
    {
      alert('field is required')
    }

  }

  deleteItem(todo)
  {
    for (let i = 0 ; i <= this.todoArray.length ; i++)
    {
      if (todo == this.todoArray[i])
      {
        this.todoArray.splice(i, 1)
      }
    }
    console.log(this.todoArray)
  }

  todoSubmit(value:any)
  {
    if (value !== "" )
    {

      this.todoArray.push(value.todo)
      console.log(this.todoArray)
      //this.todoForm.reset()
    } else{
      alert('Field required **')
    }
  }




}
