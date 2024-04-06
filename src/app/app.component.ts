import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interceptor';

  private userService = inject(UserService)

  constructor(){
    this.userService.obtenerUsuarios()
    .subscribe( 
      data =>     { console.log( data )  },
      //error =>    { console.log( error)  },
      () =>       { console.log('se completo la solicitud')}
      
    );
  }
}
