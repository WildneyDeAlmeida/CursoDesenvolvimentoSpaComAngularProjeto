import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produtos';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
})
export class ListaProdutoComponent implements OnInit {
  
  // injetamos o serviço que será utilizado 
  constructor(private produtosService: ProdutosService) { } 

  // declaramos uma coleção de produtos e vamos utilizar a variável produtos para popular ela.
  public produtos: Produto[];  

  // Dentro do ngOnInit, assim que o componente for instanciado pelo construtor e estiver pronto ele vai chamar esse método para que ele possa executar tudo que for necessário, antes do componente ser exibido na tela.
  // subscribe: estou me inscrevendo dentro do evento de retorno e nesse Observable vou dar duas opções: sucesso ou erro.  
  // Sucesso: vou criar uma variável para receber o resultado (produtos), ela vai fazer o seguinte: minha coleção de produtos (this.produtos) é igual ao resultado que estou recebendo ali (produtos). Ou seja, estou passando o resultado para a minha coleção de produtos. Também vamos dizer que recebemos e logamos (console.log(produtos)). O console.log permite que a lista que foi armazenada em "produtos", seja acessada pelo ngFor e exibida na tela através do "let produto of produtos".
  // Erro: Neste contexto, vamos tratá-lo por "error". Se houver um erro, eu faço o log dele (console.log(error)).
  ngOnInit() {  
    this.produtosService.obterProdutos()
      .subscribe(
        produtos => {
          this.produtos = produtos;
          console.log(produtos); 
        },
        error => console.log(error)    
      );
  }
}
