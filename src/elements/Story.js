export default function Story(props){
    return(
    <div class="story">
        <div class="imagem">
            <img src= {props.linkImg} alt= {props.usuarioName} />
        </div>
        <div class="usuario">
            {props.usuarioName}
        </div>
    </div>
    );
}