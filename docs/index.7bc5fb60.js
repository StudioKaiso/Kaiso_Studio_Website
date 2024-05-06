const e=document.createElement("template");e.innerHTML=`
<header class="margin" id="header">
	<a class="logo" href="./index.html" style="z-index: -1;"></a>
	<nav class="fond_menu">
		<li><a href="./methodology.html" id="btn_Services" class="fr btn btn_header white">M\xe9thodologie</a></li>
		<li><a href="./methodology.html" id="btn_Services" class="eng btn btn_header white">Methodology</a></li>
		<li><a href="./Ambition.html" id="btn_Design" class="btn btn_header white">Ambition</a></li>
		<li><a href="./Team.html" id="btn_Nous" class="fr btn btn_header white">L'\xe9quipe</a></li>
		<li><a href="./Team.html" id="btn_Nous" class="eng btn btn_header white">Team</a></li>
		<li><a id="btn_fr" class="btn btn_header white eng">FR</a></li>
		<li><a id="btn_eng" class="btn btn_header white fr">ENG</a></li>
	</nav>
		<div id="icons"></div>
</header>
`,document.body.appendChild(e.content);