export class Usuario {

  constructor(nome: string, email: string, cpf: string, nascimento: Date, senha: string, situationCPf: string) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.nascimento = nascimento;
    this.situationCPf = situationCPf;
  }

  nome: string;
  email: string;
  cpf: string;
  nascimento: Date;
  situationCPf: string;
}
