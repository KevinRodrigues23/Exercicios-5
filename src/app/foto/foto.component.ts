

//Decorar a classe - utilizar um decorator

import { Component } from "@angular/core";

@Component({
    selector: 'app-foto',
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css']

})

export class FotoComponent{
    

    title = 'Clique no botão';
  Descricao= "Utilizar o Databiding, ";

  
  myImagem = [
    {imagem:  "https://www.infoescola.com/wp-content/uploads/2008/12/mito-fenix.jpg", titulo: "Fenix"},
    {imagem:  "https://cdn.pixabay.com/photo/2022/09/11/14/43/whale-7446905_960_720.jpg" , titulo: "Baleia"},
    {imagem:  "https://media.istockphoto.com/vectors/ocean-plastic-pollution-ecological-poster-whale-composed-of-white-vector-id1131978093?s=612x612",  titulo: "Baleia"},
    {imagem:  "https://cdn.pixabay.com/photo/2021/12/02/19/14/elephant-6841179_960_720.jpg" , titulo: "elefante"},
    {imagem:  "https://media.istockphoto.com/vectors/elephant-reaches-for-the-heavenly-mother-vector-id1392663124?s=612x612"},
  ];
 //Métado do botão de click
clicar(){
 
  if(this.title == "Clique no botão"){
    this.title = "minha fotos";
  } else {
    this.title = "Parabéns";
  }

}
 
}