import { Link } from 'react-router-dom';
function About() {

    return (
        <div className="list about">
            <h1>About</h1>
            <p>Witaj w projekcie Bot-Wars. Jako entuzjaści gier, sztucznej inteligencji oraz koleżeńskiej rywalizacji, chcielibyśmy stworzyć platformę on-line umożliwiającą pojedynkowanie naszych botów.</p>
            <p>Serwis będzie docelowo pozwalał na stworzenie konta i branie udziału w turniejach poprzez wgranie swojego bot'a.</p>
            <p>Będzie możliwość inspekcji swoich wyników w turniejach i innych graczy też.</p>
            <div class="menu-btn"><Link to="/"><button class="btn">Home</button></Link></div>
        </div>
    );
}

export default About;
