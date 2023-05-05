import ReactDOM from 'react-dom'

 import Body from './elements/Body';
 import NavBar from './elements/NavBar';


function App (){
    return(
    <div class='App'>
        <NavBar/>
        <Body/>
    </div>
    );
}

ReactDOM.render(App(),document.querySelector('.root'));