const template = document.createElement("template");
template.innerHTML = `
<footer style="-webkit-display: flex; -moz-display: flex; -ms-display: flex; -o-display: flex; display: flex; flex-direction: column; align-items: center;" class="drop_shadow">
<div class="margin footer_info" style="-webkit-display: flex; -moz-display: flex; -ms-display: flex; -o-display: flex; display: flex; justify-content: space-between;">
    <a class="logo" href="./index.html"></a>
    <section>
        <h5>Services</h5>
        <ul>
            <a href="./Formation.html"><li>Formations</li></a>
            <a class="fr" href="./Ambition.html"><li>Notre ambition</li></a>
            <a class="eng" href="./Ambition.html"><li>Our ambition</li></a>
        </ul>
    </section>

    <section>
        <h5 class="fr">À propos</h5>
        <h5 class="eng">About us</h5>
        <ul>
            <a class="fr" href="./Team.html"><li>L'équipe</li></a>
            <a class="eng" href="./Team.html"><li>The team</li></a>
            <li class="fr">Nos droits</li>
            <li class="eng">Our rights</li>
        </ul>
    </section>
</div>

<article style="-webkit-display: flex; -moz-display: flex; -ms-display: flex; -o-display: flex; display: flex; justify-content: space-around;">
    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/kaisostudio/" class="icon" id="icon_01"></a>
    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/kaiso-studio/" class="icon" id="icon_02"></a>
    <a target="_blank" rel="noopener noreferrer" href="mailto:contact@kaisostudio.org" class="icon" id="icon_04"></a>
</article>

<p>Kaiso Studio © 2024</p>
</footer>

<style>
    footer{
        background-color: #F2F2F2; 
        width: 100%; 
        -webkit-display: flex;
        -moz-display: flex;
        -ms-display: flex;
        -o-display: flex;
        display: flex; 
        justify-content: center; 
        padding-top: 7rem;
        padding-bottom: 1rem;
    }

    footer section{
        text-align: center;
        min-width: 5rem;
    }

    footer li{
        margin: 0;
        padding: 0;
        padding-top: 0.5rem;
    }

    footer .icon{
        padding: 2rem 0.75rem;
    }

    footer .logo{
        padding-top: 0;
        min-width: 5rem;
    }

    footer a{
        text-decoration: none;
        color: #000000;
    }

</style>
`
document.body.appendChild(template.content)