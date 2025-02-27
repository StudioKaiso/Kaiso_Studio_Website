const template = document.createElement("template");
template.innerHTML = `
<section style = "width: 100%; background-color: #F2F2F2" id = "price">
	<div class = "drop_shadow center" style = "background-color: #FFFFFF; margin-bottom: 2rem; height: 16rem" >
		<h1 class = "w50-60-100 fr" style = "text-align: center">Chaque détail compte.<br>Imaginons ensemble de nouvelles perspectives.</h1>
		<h1 class = "w50-60-100 eng" style = "text-align: center">Each detail counts.<br>Let's imagine new perspectives together.</h1>
	</div>

	<div class = "drop_shadow center" style = "margin: 2rem 0; height: 16rem" >
		<div class = "margin" style = "display: flex; justify-content: space-between">
			<div class = "margin" style = "display: flex; flex-direction: column">
				<h2 class = "fr">Branding</h2>
				<p class = "fr" style = "margin-bottom: 1rem">Nous vous aidons à positionner votre marque selon les préférences de vos clients.</p>
				<a class = "btn btn_base fr" style = "margin-right: 2rem">Lançons votre projet  &#10140;</a>
			</div>

			<div class = "margin">
			</div>

			<div class = "margin">
			</div>
		</div>
	</div>

	<div class = "drop_shadow center" style = "margin: 2rem 0; height: 16rem" >
		<div class = "margin" style = "display: flex; justify-content: space-between">
			<div class = "margin">
			</div>

			<div class = "margin">
			</div>

			<div class = "margin" style = "display: flex; flex-direction: column; text-align: right">
				<h2 class = "fr">Web Design</h2>
				<p class = "fr">Nous conceptualisons votre site web et le prototypons sur FIGMA.</p>
				<a class = "btn btn_base fr" style = "margin-left: 2rem">Lançons votre projet  &#10140;</a>
			</div>
		</div>
	</div>

	<div class = "drop_shadow center" style = "margin: 2rem 0; height: 16rem" >
		<div class = "margin" style = "display: flex; justify-content: space-between">
			<div class = "margin" style = "display: flex; flex-direction: column">
				<h2 class = "fr">Game Design</h2>
				<p class = "fr">Nous programmons vos jeux vidéos sur Unity, pour PC ou mobile.</p>
				<a class = "btn btn_base fr" style = "margin-right: 2rem">Lançons votre projet  &#10140;</a>
			</div>

			<div class = "margin">
			</div>

			<div class = "margin">
			</div>
		</div>
	</div>
</section>
`
document.body.appendChild(template.content)