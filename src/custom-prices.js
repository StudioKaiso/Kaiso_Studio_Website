const template = document.createElement("template");
template.innerHTML = `
<section style = "width: 100%; background-color: #F2F2F2" id = "price">
	<div class = "drop_shadow center" style = "background-color: #FFFFFF; margin-bottom: 2rem; height: 16rem" >
		<div class = "margin center">
		<h2 class = "w50-60-100 fr" style = "text-align: center">Chaque détail <span class = "red" style = "font-size: 1.8rem;">compte</span>. Imaginons ensemble de nouvelles perspectives.</h2>
		<h2 class = "w50-60-100 eng" style = "text-align: center">Each detail counts. Let's imagine new perspectives together.</h2>
		</div>
	</div>

	<div class = "drop_shadow center" style = "margin: 2rem 0; height: 16rem" >
		<div class = "margin" style = "display: flex; justify-content: space-between">
			<div class = "margin" style = "width: 35%; display: flex; flex-direction: column">
				<div style = "display: flex; margin-bottom: 0.5rem">
					<p class = "violet"><b>Logo</b></p>
					<p class = "violet" style = "margin: 0 0.5rem"><b>Charte Graphique</b></p>
				</div>
				
				<h3 class = "fr">Branding</h3>

				<p class = "fr" style = "margin-bottom: 1rem">Nous vous aidons à positionner votre marque selon les préférences de vos clients.</p>

				<a class = "btn btn_violet center fr" style = "padding: 0.5rem 0.5rem; width: 10rem">Lançons votre projet  &#10140;</a>
			</div>

			<div class = "margin" style = "display: flex; justify-content: center; flex-direction: column; width: auto; z-index: 1;">
				<p style = "color: #F2F2F2; text-align: right">À partir de:</p>

				<p style = "font-family: 'Righteous', cursive; text-transform: uppercase;font-weight: 500; font-size: 3.5rem;color: #F2F2F2; height: 4rem"><br>2000 €</p>
			</div>
		</div>

		<img src = "PriceBackground.2f5eab56.png" style = "height: 16rem; z-index: 1; position: absolute; left: 60%">
		<div style = "height: 16rem; width: 59%; background-color: #8A94D2; position: absolute; left: 61%"></div>
	</div>

	<div class = "drop_shadow center" style = "margin: 2rem 0; height: 16rem" >
		<div class = "margin" style = "display: flex; flex-direction: row-reverse; justify-content: space-between">
			<div class = "margin" style = "width: 35%; display: flex; flex-direction: column; text-align: right">
				<div style = "display: flex; flex-direction: row-reverse; margin-bottom: 0.5rem;">
					<p class = "violet"><b>Site Web</b></p>
					<p class = "violet" style = "margin: 0 0.5rem"><b>Prototypage</b></p>
				</div>

				<h3 class = "fr">Web Design</h3>

				<p class = "fr" style = "margin-bottom: 1rem">Nous conceptualisons votre site web et le prototypons sur FIGMA.</p>

				<div style = "align-items: right">
					<a class = "btn btn_violet center fr" style = "padding: 0.5rem 0.5rem; width: 10rem">Lançons votre projet  &#10140;</a>
				</div>
			</div>

			<div class = "margin" style = "display: flex; justify-content: center; flex-direction: column; width: auto; z-index: 1;">
				<p style = "color: #F2F2F2">À partir de:</p>
				
				<p style = "font-family: 'Righteous', cursive; text-transform: uppercase; font-weight: 500; font-size: 3.5rem;color: #F2F2F2; height: 4rem"><br>1700 €</p>
			</div>
		</div>

		<img src = "PriceBackground.2f5eab56.png" style = "transform: scaleX(-1); height: 16rem; z-index: 1; position: absolute; right: 60%">
		<div style = "height: 16rem; width: 59%; background-color: #8A94D2; position: absolute; right: 61%"></div>
	</div>

	<div class = "drop_shadow center" style = "margin: 2rem 0; height: 16rem" >
		<div class = "margin" style = "display: flex; justify-content: space-between">
			<div class = "margin" style = "width: 35%; display: flex; flex-direction: column">
				<div style = "display: flex; margin-bottom: 0.5rem">
					<p class = "violet"><b>Unity</b></p>
					<p class = "violet" style = "margin: 0 0.5rem"><b>Mobile or PC</b></p>
				</div>

				<h3 class = "fr">Game Design</h3>

				<p class = "fr" style = "margin-bottom: 1rem">Nous programmons vos jeux vidéos sur Unity, pour PC ou mobile.</p>

				<a class = "btn btn_violet center fr" style = "padding: 0.5rem 0.5rem; width: 10rem">Lançons votre projet  &#10140;</a>
			</div>

			<div class = "margin" style = "display: flex; justify-content: center; flex-direction: column; width: auto; z-index: 1;">
				<p style = "color: #F2F2F2; text-align: right">À partir de:</p>

				<p style = "font-family: 'Righteous', cursive; text-transform: uppercase;font-weight: 500; font-size: 3.5rem;color: #F2F2F2; height: 4rem"><br>2000 €</p>
			</div>
		</div>
		
		<img src = "PriceBackground.2f5eab56.png" style = "height: 16rem; z-index: 1; position: absolute; left: 60%">
		<div style = "height: 16rem; width: 59%; background-color: #8A94D2; position: absolute; left: 61%"></div>
	</div>

	<div class = "drop_shadow center" style = "background-color: #FFFFFF; margin-top: 2rem; height: 16rem" >
		<div class = "margin center" style = "flex-direction: column;">
		<h2 class = "w50-60-100 fr" style = "text-align: center">Un devis personnalisé?</h2>
		<h2 class = "w50-60-100 eng" style = "text-align: center">Need a personalized estimation?</h2>
		<a class = "btn btn_violet center fr" style = "margin-top: 1.5rem; padding: 0.5rem 0.5rem; width: 10rem">Lançons votre projet  &#10140;</a>
		</div>
	</div>
</section>
`
document.body.appendChild(template.content)