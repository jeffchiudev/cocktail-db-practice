# _CocktailDB Prototype_

#### _This is a prototype version of a cocktail DB project, v1.0, 18.nov.2020_

#### By _**Jeff Chiu & Tawnee Harris*_

## Description:

_This is a proof of concept project to see how a cocktail database page might look.  User should be able to search for a drink based on name and have a result returned._

## Site link

_[Click here](https://github.com/jeffchiudev/cocktail-db-practice) to visit the site._


## Setup/Installation Requirements:

### Software Requirements:

_1. Internet browser of choice. Chrome is suggested._

_2. A code editor like VSCode or Atom to view or edit the codebase._


### Open by downloading:

_1. Download [this](https://github.com/jeffchiudev/cocktail-db-practice) repository onto your computer by clicking the 'clone or download button'._

_2. This page utilizes Node package manager and requires local files to be installed. Once you've cloned the repository and it's accompanying config files, use the following command `npm install` to install the necessary NPM files to display correctly._

_3. Type `npm run build` to compile the page into the distribution directory with a new index.html and new bundle.js file.._

_4. Type `npm run start` to begin a live server to view the page._

### Open via Bash/GitBash:

_1. Open terminal window and navigate to/create desired repository location._

_2. Clone this repository onto your computer by using command:_
`git clone https://github.com/jeffchiudev/cocktail-db-practice`

_3. In the directory where you've cloned the repository, open in Visual Studio Code with `code .` or preferred text editor._

## Testing Specifications:

<details><summary>Click here to see testing specifications:</summary>
<p>

| Description | Input | Ouput |
| :---------- | :---- | :---- |
| Cocktail |||
| should correctly take name of user | "Jeff" | Order1.name = "jeff" |
| Cocktail.prototype.order |||
| should correctly take in an order from a form entry | "martini" | order1.drink = martini |
| should correctly return a response if no such drink exists | "galactic pan garble blaster" | order1.drink = no such drink exists |
| Cocktail.prototype.ingredient |||
| should correctly search for a drink based on ingredient | "rum" | order1.drink = pina colada |
| should correctly return a response if no such ingredient exists | "slurm" | order1.drink = no such ingredient |


</p>
</details>

## Known Bugs:

_Currently optimized for desktop browsing.  Smart device integration will be added soon._

## Support and contact details:

_If there are any issues, I can be contacted at jeffchiudev@gmail.com_


## Technologies Used:

_{TODOTell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

_This extension is licensed under the MIT license._
Copyright (c) 2020 **_Jeff W. Chiu_** 