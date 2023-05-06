import { useState } from "react";



export default function User(){

    function mudarNome(){
        let variavelNome = prompt(  'digite o nome de usuario');
        if(variavelNome ){
            setNomeInicial(variavelNome);
        }else{
            alert('ow bota algo válido né');
        }
    }
    let [nomeInicial, setNomeInicial] = useState('catanacomics');

    function mudarImagem(){
        let variavelImagem = prompt('põe um link valido de imagem ai pfvr');
        if(!variavelImagem){
            alert('ow bota uma imagem valida ai!'); 
        }
        else{        
            setImagemPerfil(variavelImagem);
        }
    }
    let[imagemPerfil, setImagemPerfil] = useState('assets/img/catanacomics.svg')
    

    return(
    <div class="usuario">
        <img data-test="profile-image" onClick={mudarImagem} src={imagemPerfil} alt="imagem de perfil"/>
        <div class="texto">
            <span>
                <strong data-test="name" >{nomeInicial}</strong>
                <ion-icon name="pencil" data-test="edit-name" onClick={mudarNome}></ion-icon>
            </span>
        </div>
    </div>
    );
}