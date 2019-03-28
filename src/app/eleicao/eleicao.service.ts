import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EleicaoService {
  nome: any;
  setor: any;
  imagem: any;


private candidatos: Candidato[] = [];

  constructor(nome: string, setor: string, imagem: string) {
    this.nome = nome;
    this.setor = setor;
    this.imagem = imagem;
   }

getCandidato(): Candidato[] {
return this.candidatos;
}
    
getUmCandidato(index): Candidato {
return this.candidatos[index];
}
    
addCandidato(Candidato: Candidato) {
this.candidatos.push(Candidato);
localStorage.setItem('canditatos', JSON.stringify(this.candidatos));
}
    
saveCandidato(Candidato: Candidato, index: number) {
  this.candidatos[index] = Candidato;
  this.saveLocal();
}
  saveLocal(): any {
    throw new Error("Method not implemented.");
  }

  
}

export class Candidato {
  nome: string;
  setor: string;
  imagem: string;
  votos?: number = 0;
}
