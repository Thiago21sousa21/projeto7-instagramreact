import Suggestion from "./Suggestion";

export default function Suggestions(){

    const dadosSugest = [
        {
            img:'assets/img/bad.vibes.memes.svg',
            name:'bad.vibes.memes'
        },
        {
            img:'assets/img/chibirdart.svg',
            name:'chibirdart'
        },
        {
            img:'assets/img/razoesparaacreditar.svg',
            name:'razoesparaacreditar'
        },
        {
            img:'assets/img/adorable_animals.svg',
            name:'adorable_animals'
        },
        {
            img:'assets/img/smallcutecats.svg',
            name:'smallcutecats'
        }
    ];

    return(
    <div class="sugestoes">
        <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>

        {dadosSugest.map(sugestao => <Suggestion img = {sugestao.img} name = {sugestao.name}/>)}

    </div>
    );
}