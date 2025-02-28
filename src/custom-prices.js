const template = document.createElement("template");
template.innerHTML = `
<section style = "width: 100%; background-color: #F2F2F2" id = "price">
	<div class = "drop_shadow center" style = "position: relative; z-index: 1; background-color: #FFFFFF; margin-bottom: 2rem; height: 16rem" >
		<div class = "margin center">
		<h2 class = "w50-60-100 fr" style = "text-align: center">Chaque détail <span class = "red" style = "font-size: 1.8rem;">compte</span>. Imaginons ensemble de nouvelles perspectives.</h2>
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

				<p class = "fr" style = "margin-bottom: 1rem">Nous vous aidons à positionner votre marque selon les préférences de vos clients.</p>
				<p class = "eng" style = "margin-bottom: 1rem">We'll help your position your brand according to the preferences of your clientele.</p>

				<a target="_blank" rel="noopener noreferrer" href="https://www.cal.com/kaiso-studio/" class = "btn btn_violet center fr" style = "padding: 0.5rem 0.5rem; width: 50%">Discutons &#10140;</a>
				<a target="_blank" rel="noopener noreferrer" href="https://www.cal.com/kaiso-studio/" class = "btn btn_violet center eng" style = "padding: 0.5rem 0.5rem; width: 50%">Let's talk &#10140;</a>
			</div>

			<div class = "margin center_phone reverse" style = "display: flex; justify-content: center; flex-direction: column; width: auto; z-index: 1;">
				<p class = "fr" style = "color: #F2F2F2; text-align: right">À partir de:</p>
				<p class = "eng" style = "color: #F2F2F2; text-align: right">Starting from:</p>

				<p style = "font-family: 'Righteous', cursive; text-transform: uppercase;font-weight: 500; font-size: 3.5rem;color: #F2F2F2; height: 4rem"><br>2000€</p>
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

				<div style = "width: 100%; align-items: right">
					<a target="_blank" rel="noopener noreferrer" href="https://www.cal.com/kaiso-studio/" class = "btn btn_violet center fr" style = "padding: 0.5rem 0.5rem; width: 50%">Discutons &#10140;</a>
					<a target="_blank" rel="noopener noreferrer" href="https://www.cal.com/kaiso-studio/" class = "btn btn_violet center eng" style = "padding: 0.5rem 0.5rem; width: 50%">Let's talk &#10140;</a>
				</div>
			</div>

			<div class = "margin center_phone" style = "display: flex; justify-content: center; flex-direction: column; width: auto; z-index: 1;">
				<p class = "fr" style = "color: #F2F2F2;">À partir de:</p>
				<p class = "eng" style = "color: #F2F2F2;">Starting from:</p>
				
				<p style = "font-family: 'Righteous', cursive; text-transform: uppercase; font-weight: 500; font-size: 3.5rem;color: #F2F2F2; height: 4rem"><br>1700€</p>
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

				<p class = "fr" style = "margin-bottom: 1rem">Nous programmons vos jeux vidéos sur Unity, pour PC ou mobile.</p>
				<p class = "eng" style = "margin-bottom: 1rem">We'll program your video games using Unity, for PC or mobile.</p>

				<a target="_blank" rel="noopener noreferrer" href="https://www.cal.com/kaiso-studio/" class = "btn btn_violet center fr" style = "padding: 0.5rem 0.5rem; width: 50%">Discutons &#10140;</a>
				<a target="_blank" rel="noopener noreferrer" href="https://www.cal.com/kaiso-studio/" class = "btn btn_violet center eng" style = "padding: 0.5rem 0.5rem; width: 50%">Let's talk &#10140;</a>
			</div>

			<div class = "margin center_phone reverse" style = "display: flex; justify-content: center; flex-direction: column; width: auto; z-index: 1;">
				<p class = "fr" style = "color: #F2F2F2; text-align: right">À partir de:</p>
				<p class = "eng" style = "color: #F2F2F2; text-align: right">Starting from:</p>

				<p style = "font-family: 'Righteous', cursive; text-transform: uppercase;font-weight: 500; font-size: 3.5rem;color: #F2F2F2; height: 4rem"><br>2000€</p>
			</div>
		</div>
		
		<div class = "price_arrow"></div>
		<div class = "price_background"></div>
	</div>

	<div class = "drop_shadow center" style = "background-color: #FFFFFF; margin-top: 2rem; height: 16rem" >
		<div class = "margin center" style = "flex-direction: column;">
		<h2 class = "w50-60-100 fr" style = "text-align: center">Un devis personnalisé?</h2>
		<h2 class = "w50-60-100 eng" style = "text-align: center">Need a personalized estimation?</h2>
		<a target="_blank" rel="noopener noreferrer" href="https://www.cal.com/kaiso-studio/" class = "btn btn_violet center fr" style = "margin-top: 1.5rem; padding: 0.5rem 0.5rem; width: 10rem">Contactez-nous  &#10140;</a>
		<a target="_blank" rel="noopener noreferrer" href="https://www.cal.com/kaiso-studio/" class = "btn btn_violet center eng" style = "margin-top: 1.5rem; padding: 0.5rem 0.5rem; width: 10rem">Contact us  &#10140;</a>
		</div>
	</div>
</section>
`
document.body.appendChild(template.content)