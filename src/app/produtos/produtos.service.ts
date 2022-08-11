import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Produto } from "./produtos";
import { Observable } from "rxjs";

@Injectable()
export class ProdutosService {

// O HttpClient é uma classe específica do Angular que é responsável por acessar um endpoint, que nesse caso, armazena uma lista de produtos em json e serializar esse resultado de acordo com o dados tipado que for informado no método get.
// recebi uma instância de dependência, através da representação http, podendo trabalhar com esse objeto agora.  
constructor(private http: HttpClient){}  
    
    // endereço do meu endpoint
    protected UrlServiceV1: string = "http://localhost:3000/";  

    // método obterProdutos que retorna um Observable de Produto
    obterProdutos() : Observable<Produto[]> {  
        // O que eu quero dizer aqui: o http através do método get, vai acessar essa Url, vai receber um resultado em json e ele vai serializar esse resultado numa coleção de produto que é um dado tipado da minha aplicação e para isso eu vou retornar um Observable de Produto. Como o próprio nome já diz, ela é observável. Então quando eu chamar o método obterProdutos(), vou receber um observable e vou fazer uma subscrição. "Olha, quando vc receber o resultado, vc me avisa". Pois é uma consulta assíncrona na qual nunca sabemos quando virá.
        return this.http  
        .get<Produto[]>(this.UrlServiceV1 + "produtos");
    }
}

