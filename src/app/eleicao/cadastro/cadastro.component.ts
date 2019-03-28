import { Component, OnInit } from '@angular/core';
import { EleicaoService } from '../eleicao.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {

  constructor(private local: Location, private eleicao: EleicaoService) { }

  ngOnInit() {}

}
