const e=document.createElement("template");e.innerHTML=`
<section style = "width: 100%; background-color: #F2F2F2" id = "price">
	<div class = "drop_shadow center" style = "position: relative; z-index: 1; background-color: #FFFFFF; margin-bottom: 2rem; height: 16rem" >
		<div class = "margin center">
		<h2 class = "w50-60-100 fr" style = "text-align: center">Chaque d\xe9tail <span class = "red" style = "font-size: 1.8rem;">compte</span>. Imaginons ensemble de nouvelles perspectives.</h2>
		<h2 class = "w50-60-100 eng" style = "text-align: center">Each detail <span class = "red" style = "font-size: 1.8rem;">counts</span>. Let's imagine new perspectives together.</h2>
		</div>
	</div>

	<div class = "drop_shadow price_container">
		<div class = "margin price">
			<div class = "margin price_text">
				<div style = "display: flex; margin-bottom: 0.5rem">
					<p class = "violet"><b>Logo</b></p>
					<p class = "violet fr" style = "margin-left: 0.5rem"><b>Charte Graphique</b></p>
					<p class = "violet eng" style = "margin-left: 0.5rem"><b>Visual Identity</b></p>
				</div>
				
				<h3>Branding</h3>
				<p class = "fr" style = "margin-bottom: 1rem">Nous vous aidons \xe0 positionner votre marque selon les pr\xe9f\xe9rences de vos clients.</p>
				<p class = "eng" style = "margin-bottom: 1rem">We'll help your position your brand according to the preferences of your clientele.</p>
			</div>

			<div class = "margin center_phone reverse" style = "display: flex; justify-content: center; flex-direction: column; width: auto; z-index: 10;">
				<a target="_blank" rel="noopener noreferrer" href="https://www.cal.com/kaiso-studio/" class="btn btn_base violet fr">Discutons &#10140;</a>
            	<a target="_blank" rel="noopener noreferrer" href="https://www.cal.com/kaiso-studio/" class="btn btn_base violet eng">Let's talk &#10140;</a>
			</div>
		</div>

		<div class = "price_arrow"></div>
		<div class = "price_background"></div>
	</div>

	<div class = "drop_shadow price_container">
		<div class = "margin price reverse">
			<div class = "margin price_text reverse">
				<div style = "display: flex; flex-direction: row-reverse; margin-bottom: 0.5rem;">
					<p class = "violet fr"><b>Site Web</b></p>
					<p class = "violet eng"><b>Website</b></p>
					<p class = "violet fr" style = "margin-right: 0.5rem"><b>Prototypage</b></p>
					<p class = "violet eng" style = "margin-right: 0.5rem"><b>Prototyping</b></p>
				</div>

				<h3>Web Design</h3>
				<p class = "fr" style = "margin-bottom: 1rem">Nous conceptualisons votre site web et le prototypons sur FIGMA.</p>
				<p class = "eng" style = "margin-bottom: 1rem">We'll conceptualize your website and create prototypes using FIGMA.</p>
			</div>

			<div class = "margin center_phone" style = "display: flex; justify-content: center; flex-direction: column; width: auto; z-index: 10;">
				<a target="_blank" rel="noopener noreferrer" href="https://www.cal.com/kaiso-studio/" class="btn btn_base violet fr">Parlons-en &#10140;</a>
            	<a target="_blank" rel="noopener noreferrer" href="https://www.cal.com/kaiso-studio/" class="btn btn_base violet eng">Speak with us &#10140;</a>
			</div>
		</div>

		<div class = "price_arrow reverse"></div>
		<div class = "price_background reverse"></div>
	</div>

	<div class = "drop_shadow price_container">
		<div class = "margin price">
			<div class = "margin price_text">
				<div style = "display: flex; margin-bottom: 0.5rem">
					<p class = "violet"><b>Unity</b></p>
					<p class = "violet" style = "margin-left: 0.5rem"><b>Mobile or PC</b></p>
				</div>

				<h3>Game Design</h3>
				<p class = "fr" style = "margin-bottom: 1rem">Nous programmons vos jeux vid\xe9os sur Unity, pour PC ou mobile.</p>
				<p class = "eng" style = "margin-bottom: 1rem">We'll program your video games using Unity, for PC or mobile.</p>
			</div>

			<div class = "margin center_phone reverse" style = "display: flex; justify-content: center; flex-direction: column; width: auto; z-index: 10;">
				<a target="_blank" rel="noopener noreferrer" href="https://www.cal.com/kaiso-studio/" class="btn btn_base violet fr">Prenez rendez-vous &#10140;</a>
            	<a target="_blank" rel="noopener noreferrer" href="https://www.cal.com/kaiso-studio/" class="btn btn_base violet eng">Let's meet &#10140;</a>
			</div>
		</div>
		
		<div class = "price_arrow"></div>
		<div class = "price_background"></div>
	</div>

	<div class = "drop_shadow center" style = "background-color: #FFFFFF; margin-top: 2rem; height: 16rem" >
		<div class = "margin center" style = "flex-direction: column;">
		<h2 class = "w50-60-100 fr" style = "text-align: center">Un devis personnalis\xe9?</h2>
		<h2 class = "w50-60-100 eng" style = "text-align: center">Need a personalized estimation?</h2>
		<a target="_blank" rel="noopener noreferrer" href="https://www.cal.com/kaiso-studio/" class = "btn btn_violet center fr" style = "margin-top: 1.5rem; padding: 0.5rem 0.5rem; width: 10rem">Contactez-nous  &#10140;</a>
		<a target="_blank" rel="noopener noreferrer" href="https://www.cal.com/kaiso-studio/" class = "btn btn_violet center eng" style = "margin-top: 1.5rem; padding: 0.5rem 0.5rem; width: 10rem">Contact us  &#10140;</a>
		</div>
	</div>
</section>
`,document.body.appendChild(e.content);