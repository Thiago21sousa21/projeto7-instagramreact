import Story from './Story';

export default function Stories() {

    const storyDados = [
        {
            usuarioName:'9gag',
            linkImg:'assets/img/9gag.svg' 
        },
        {
            usuarioName:'meowed',
            linkImg:'assets/img/meowed.svg' 
        },
        {
            usuarioName:'barked',
            linkImg:'assets/img/barked.svg' 
        },
        {
            usuarioName:'nathanwpylestrangeplanet',
            linkImg:'assets/img/nathanwpylestrangeplanet.svg' 
        },
        {
            usuarioName:'wawawicomics',
            linkImg:'assets/img/wawawicomics.svg' 
        },
        {
            usuarioName:'respondeai',
            linkImg:'assets/img/respondeai.svg' 
        },
        {
            usuarioName:'filomoderna',
            linkImg:'assets/img/filomoderna.svg' 
        },
        {
            usuarioName:'memeriagourmet',
            linkImg:'assets/img/memeriagourmet.svg' 
        },
    ];

    return (
        <div class="stories">
            {/* <Story linkImg={storyDados[0].linkImg} usuarioName={storyDados[0].usuarioName} /> */}
            {storyDados.map(story => {return <Story linkImg={story.linkImg} usuarioName={story.usuarioName} />})}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}