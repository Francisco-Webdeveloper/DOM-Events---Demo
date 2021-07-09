## Usage

First clone this repository to your laptop. You must have Node (> v4) and [yarn](https://yarnpkg.com/lang/en/docs/install/) installed.

```bash
cd ~/code/<your_github_nickname>
git clone git@github.com:lewagon/webpack-boilerplate.git my-js-project
cd my-js-project
rm -rf .git
yarn install
stt # Open this folder in Sublime Text
```

Make sure you have `./node_modules/.bin` in your `$PATH`! This way you can run this:

```bash
eslint lib
webpack-dev-server
```

Once a file has been updated in Sublime, you can run it with:

```bash
node lib/01_types.js
```

## DOM
Concept - Representation of HTML at a certain point when there is interaction with a page (Ex.: add a class or remove a class in the html without having it in the html file).

The DOM can be visualized in the Chrome Inspector, in Elements tab.

## Interacting with the DOM
The most important method:
```bash
document.querySelector(CSS_SELECTOR);

const list = document.querySelector("#players");
```
Append content:
```bash
list.insertAdjacentHTML("beforeend", "<li>Luke</li>");
list.insertAdjacentHTML("beforeend", "<li>Anakin</li>");
```
Selecting several elements:
```bash
document.querySelectorAll(CSS_SELECTOR);
```
Add / Remove a Class:
Use classlist
```bash
element.classList.add("red");
element.classList.remove("red");
element.classList.toggle("red");
```
Read / Write inputs:
```bash
<!-- Some HTML -->
<input name="email" id="email" value="paul@gmail.com" />
```
```bash
const emailInput = document.getElementById("email");

// Read
console.log(emailInput.value);

// Write
emailInput.value = "john@gmail.com";
```
Extract text / HTML
```bash
<a href="https://www.lewagon.com" id="home">Le Wagon <em>rocks</em></a>
```
```bash
const link = document.getElementById("home");
console.log(link.innerText);
console.log(link.innerHTML);
console.log(link.attributes.href.value);

link.innerHTML = "Le Wagon <strong>rocks</strong>!"; // Update HTML
```
Dataset:
Use HTMLElement.dataset
```bash
<div id="user" data-uid="2471555" data-github-nickname="Francisco-Webdeveloper">
  Francisco Santos
</div>
```
```bash
const francisco = document.getElementById('user');
console.log(francisco.dataset.uid);
console.log(francisco.dataset.githubNickname);
```
## Events
Concept - events are actions or occurrences that happen in the system you are programming — the system produces (or "fires") a signal of some kind when an event occurs, and provides a mechanism by which an action can be automatically taken (that is, some code running) when the event occurs.
The DOM is manipulated at a certain event.

## HTML DOM Events
* Blur: exit an input (tab)
* Focus: clink in an input
* change: change something on a dropdown
* keyup: release a key
* submit: form
* click
* scroll

## Event Listener
Use addEventListener to react to an event.
```bash
element.addEventListener(eventType, (event) => {
  // Do something (callback)
});
```
```bash
<img src="https://kitt.lewagon.com/placeholder/users/random" id="random" height="200" alt="random" class="profile" />
<img src="https://kitt.lewagon.com/placeholder/users/papillard" id="papillard" height="200" alt="papillard" class="profile" />
```
```bash
const images = document.querySelectorAll(".profile");

images.forEach((img) => {
  img.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("img-circle");
  });
});
```
