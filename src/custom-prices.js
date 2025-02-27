const template = document.createElement("template");
template.innerHTML = `
<section style = "width: 100%; background-color: #F2F2F2" id = "price">
	<div class = "drop_shadow" style = "background-color: #FFFFFF; margin: 0 0 2rem 0; padding: 5rem 0" >
		<h1 class = "w50-60-100 center">Chaque détail compte.<br>Imaginons ensemble de nouvelles perspectives.</h1>
	</div>

	<div class = "drop_shadow" style = "margin: 2rem 0; padding: 5rem 0" >
		<div class = "margin">
			<h1>"Miam"</h1>
		</div>
	</div>
</section>
`
document.body.appendChild(template.content)