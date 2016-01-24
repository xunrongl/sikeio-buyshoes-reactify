.PHONY: css
css:
	mkdir -p bundle
	postcss --watch --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

.PHONY: server
server:
	browser-sync start --server --files='index.html,bundle/app.css,build/app.js'

.PHONY: js
js:
	webpack --progress --watch js/app.jsx build/app.js --module-bind "js=babel" --module-bind "jsx=babel" -d

.PHONY: all
all:
	(make css & make js & make server & wait)

.PHONY: minjs
minjs:
	webpack --progress --watch js/app.jsx bundle/app.js --module-bind "js=babel" --module-bind "jsx=babel" -p	

.PHONY: clean
clean:
	rm -r bundle