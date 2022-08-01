import { enums } from './../../shared/enum';
import { Usuario } from './../../shared/usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validacoes } from 'src/app/shared/validacoes';

@Component({
  selector: 'app-new-admission',
  templateUrl: './new-admission.component.html',
  styleUrls: ['./new-admission.component.scss']
})
export class NewAdmissionComponent implements OnInit {

  valid = false;
  usuario: FormGroup ;
  user: any;
  error: boolean = false;
  constructor(private fb: FormBuilder,
    private enums: enums
    ) {
    this.usuario = this.fb.group({
      cpf: ['', Validators.compose([Validators.required, Validacoes.ValidaCpf])],
    });
  }

  ngOnInit(): void {

  }

  validarCpf(){
    let cpf : any = this.usuario.get('cpf')?.value;
    this.valid = false;
    this.user = undefined;
    this.error = false;
    this.enums.users().then((res)=> {
      const hasUserCPF = res.filter((item: any) => item.cpf == cpf);
      if(hasUserCPF.length > 0){
        this.valid = true
        this.user = hasUserCPF[0]
      }else{
        console.log('erro')
        this.error = true;
      }

    }).catch((err)=> {
      console.log(err, 'erro')
    })
  }

  get cpf() {
    return this.usuario.get('cpf');
  }

}
