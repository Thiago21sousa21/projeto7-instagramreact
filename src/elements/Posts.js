import Post from './Post';

const dadosPost = [
    {
        headName:'meowed',
        headPhoto:'assets/img/meowed.svg',
        conteudo:'assets/img/gato-telefone.svg',
        likeImg:'assets/img/respondeai.svg',
        likeUser:'respondeai',
        likeOthers:'101.523'
    },
    {
        headName:'barked',
        headPhoto:'assets/img/barked.svg',
        conteudo:'assets/img/dog.svg',
        likeImg:'assets/img/adorable_animals.svg',
        likeUser:'adorable_animals',
        likeOthers:'99.159'
    },
    {
        headName:'loveBirds',
        headPhoto:'https://img.freepik.com/fotos-premium/passaro-bonito-com-uma-bela-plumagem-laranja-vermelho_58409-5350.jpg?w=2000',
        conteudo:'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQaWJmFzNCH8t-Pe3QKTma7tysUqAdtNWy7Gl3sIu27U3s7aONdEgr9ICjdAzQd1Nye',
        likeImg:'https://upload.wikimedia.org/wikipedia/commons/a/a8/Iber%C3%AA_Then%C3%B3rio_2016_%28cropped%29.png',
        likeUser:'iberê',
        likeOthers:'200.000'
    }

]

export default function Posts(){
    console.log(dadosPost);
    return(
        <div class="posts">
            {/* <Post 
                headName={dadosPost[0].headName} 
                headPhoto={dadosPost[0].headPhoto} 
                conteudo={dadosPost[0].conteudo} 
                likeUser={dadosPost[0].likeUser} 
                likeImg={dadosPost[0].likeImg} 
                likeOthers={dadosPost[0].likeOthers
            }/> */}
            {dadosPost.map(post =>{ return <Post headName={post.headName} headPhoto={post.headPhoto} conteudo={post.conteudo} likeUser={post.likeUser}  likeImg={post.likeImg}  likeOthers={post.likeOthers} />})}

        </div>
    );
}