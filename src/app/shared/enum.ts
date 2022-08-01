import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class enums {
  users(): Promise<any>{
    return new Promise(resolve => {

      let data = [
        {
          nome: 'Florentina',
          email: 'florentina@flores',
          cpf: '04077755109',
          nascimento: '07/10/1990',
          situationCPf: 'Regular'
        },
        {
          nome: 'Florentina2',
          email: 'florentina2@flores',
          cpf: '04077755102',
          nascimento: '07/10/1991',
          situationCPf: 'Regular'
        },
        {
          nome: 'Florentina3',
          email: 'florentina3@flores',
          cpf: '04077755101',
          nascimento: '07/10/1992',
          situationCPf: 'Regular'
        },
      ];
      resolve(data)
    })

  }
}
