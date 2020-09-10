import './index.css'
import {join} from 'lodash'
function component() {
	const element = document.createElement("h1")

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = join(["Hello", "webpack"], " ")

	return element
}

document.body.appendChild(component())
