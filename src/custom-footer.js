const template = document.createElement("template");
template.innerHTML = `
<footer style="display: flex; flex-direction: column; align-items: center;" class="drop_shadow">
<div class="margin footer_info" style="display: flex; justify-content: space-between;">
    <a class="logo" href="./index.html"></a>
    <section>
        <h5 class="fr">Contactez-nous</h5>
        <h5 class="eng">Contat us</h5>
        <ul class="center" style="flex-direction: column; margin-top: 0.5rem;">
            <a href="callto:+33611823857" class="tag" style="background-color: white; color: black; margin-top: 0.5rem; max-width: 9rem; min-width: 8rem; display: flex; align-items: center;">
                <div style="margin-left: 0.5rem;" class="call_icon"></div>
                <p style="margin-left: 0.6rem;">+33 6 11 82 38 57</p>
            </a>

            <a target="_blank" rel="noopener noreferrer" href="mailto:contact@kaisostudio.org" class="tag" style="background-color: white; color: black; margin-top: 0.5rem; max-width: 9rem; min-width: 8rem;">
                <p>contact@kaisostudio.org</p>
            </a>
        </ul>
    </section>

    <section>
        <h5 class="fr">À propos</h5>
        <h5 class="eng">About us</h5>
        <ul style="margin-top: 0.5rem;">
            <a style="text-decoration-line: underline;" href="./Branding.html"><li>Branding</li></a>
            <a style="text-decoration-line: underline;" href="./WebDesign.html"><li>Web Design</li></a>
            <a style="text-decoration-line: underline;" href="./GameDesign.html"><li>Game Design</li></a>
        </ul>
    </section>
</div>

<article style="display: flex; justify-content: space-around;">
<a target="_blank" rel="noopener noreferrer" href="mailto:contact@kaisostudio.org" class="icon" id="icon_04"></a>
    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/kaisostudio/" class="icon" id="icon_01"></a>
    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/kaiso-studio/" class="icon" id="icon_02"></a>
</article>

<div style="width: 100vw; height: 0.1rem; background-color: white; margin-bottom: 1rem;"></div>

<div class="margin" style="display: flex; justify-content: space-between;">
    <a href="" id="btn_eng" class="fr center" style="text-decoration-line: underline;">
        <div class="world_icon"></div>
        <p class="english_phone">Français</p>
        <div class="v_icon english_phone"></div>
    </a>
    <a href="" id="btn_fr" class="eng center" style="text-decoration-line: underline;">
        <div class="world_icon"></div>
        <p class="english_phone">English</p>
        <div class="v_icon english_phone"></div>
    </a>

    <div class="center">
        <a style="text-decoration-line: underline;" href="./Mentions.html"><p class="fr" style="margin-right: 0.5rem;">Mentions légales</p><p class="eng" style="margin-right: 0.5rem;">Legal Notice</p></a>
        <a style="text-decoration-line: underline;" href="./Confidentialite.html"><p class="fr" style="margin-left: 0.5rem;">Confidentialités</p><p class="eng" style="margin-left: 0.5rem;">Privacy</p></a>
    </div>

    <p>©Kaiso Studio</p>
</div>
</footer>

<style>
    footer{
        background-color: #F2F2F2; 
        width: 100%;
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