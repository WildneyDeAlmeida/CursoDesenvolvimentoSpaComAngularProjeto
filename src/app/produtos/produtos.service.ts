import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Produto } from "./produtos";
import { Observable } from "rxjs";

@Injectable()
export class ProdutosService {

constructor(private http: HttpClient){}  // recebi uma instância de dependência, através da representação http, podendo trabalhar com esse objeto agora.  
    
    protected UrlServiceV1: string = "http://localhost:3000/";  // endereço do meu endpoint

    obterProdutos() : Observable<Produto[]> {  // método obterProdutos que retorna um Observable de Produto
        // O que eu quero dizer aqui: o http através do método get, vai acessar essa Url, vai receber um resultado em json e ele vai serializar esse resultado numa coleção de produto que é um dado tipado da minha aplicação e para isso eu vou retornar um Observable de Produto. Como o próprio nome já diz, ela é observável. Então quando eu chamar o método obterProdutos(), vou receber um observable e vou fazer uma subscrição. "Olha, quando vc receber o resultado, vc me avisa". Pois é uma consulta assíncrona na qual nunca sabemos quando virá.
        return this.http  
        .get<Produto[]>(this.UrlServiceV1 + "produtos");
    }
}

