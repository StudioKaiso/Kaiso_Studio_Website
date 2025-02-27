const template = document.createElement("template");
template.innerHTML = `
<header class="margin" id="header">
	<a class="logo" href="./index.html" style="z-index: -1;"></a>
</header>
`
document.body.appendChild(template.content)