import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  subs: Subscription;
  constructor() {


    this.subs = this.regresaObsevable()
      .pipe(
        retry(2)
      )
      .subscribe(
        numero => {
          console.log('Subs', numero);
        },
        error => {
          console.error('Error', error);
        },
        () => {
          console.log('El observador terminó');
        }
      );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('La página se va a cerrar');
    this.subs.unsubscribe();
  }

  regresaObsevable(): Observable<any> {
    return new Observable(observer => {

      let contador = 0;

      const intervalo = setInterval(() => {

        contador += 1;

        const salida = {
          valor: contador
        };

        observer.next(salida);

        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
        // if (contador === 2) {
        //   // clearInterval(intervalo);
        //   observer.error('Auxilio');
        // }

      }, 1000);

    })
      .pipe(
        map((resp: any) => {
          return resp.valor;
        }),
        filter((valor, index) => {
          if ((valor % 2) === 1) {
            // impar
            return true;
          } else {
            // par
            return false;
          }
          // console.log('Filter', valor, index);
          // return true;
        })
      );
  }


}
