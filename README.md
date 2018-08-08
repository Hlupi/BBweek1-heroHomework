# Beginner Bootcamp Homework

## Section 3 - User interface and the DOM

- Add a picture of a bed or an inn to your page. When it is clicked by the user the `rest` function should get called with `hero` as an argument. Put a console.log in your code to verify that `rest` gets called correctly.

- Add a picture of a weapon to the page. When it is clicked by the user the `pickUpItem` should get called with `hero` as a first argument. The second argument should be an object. The object should have a `type` key with a string value and a `damage` key with a number value (like a weapon object). Put a console.log in your code to verify that `pickUpItem` gets called correctly.

- Add a picture of an enemy to the page. When it gets clicked by the user the `doBattle` function should get called with `hero` as a first argument. The second argument should be an object (the enemy). This object needs a `health` key with a number value and a `weapon` key which is an object. This `weapon` object has a `damage` value which should be a number. Put a console.log in your code to verify that `doBattle` gets called correctly.

- Add a picture of a backpack When it gets clicked by the user the `equipWeapon` function should get called with `hero` as the first argument. The second argument should be `window.prompt()` that asks the user for the index of the weapon they want to equip. Put a console.log in your code to verify that `doBattle` gets called correctly.

- Write `displayStats` function that writes your hero's name, health, weapontype, weapon damage to the page. Call it at the end of your script

## Section 4 - Show me what you got

- Write a `displayInventory` function that iterates over your hero's inventory and writes it to the page. Add a couple of weapons to you hero's inventory to see if it works. Call it at the end of your script

- Write an `updateStats` function that calls `displayStats` and `displayInventory`. Call `updateStats` when a picture is clicked in addition to the function that is already being called.

- Create a form that allow users to change the name of their hero.

- When an enemy or weapon gets clicked it gets deleted from the DOM
