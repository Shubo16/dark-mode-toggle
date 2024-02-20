## What have we created?

- For this project i have created an interactive toggle switch that when clicked will change the appearance of the browser from light to dark and vice versa.
- When clicking the switch, the button should move to to right of the toggle and changed the appearance of the page into the supposed dark-mode, and then once clicked again it should change back to light mode with the switch back to its original spot
- The switch will have a smooth animation from left to right and vice-versa

  # CSS

```css
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

```

Adding this to ensure  the code is a global reset or normalisation for styling, ensuring a consistent starting point for styling elements and reducing browser default styles that might vary across different browsers.

```css
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: auto;
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(6, 12, 43, 1) 100%
  );
}

/* The switch - the box around the slider */

.switch {
  position: relative;
  display: inline-block;
  width: 90px;
  height: 55px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 45px;
  width: 42px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: ease-in 0.2s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(36px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
```

```css

/* Dark mode styles */
.dark-mode .container {
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 0%,
    rgba(6, 12, 43, 1) 100%
  );
}

.dark-mode .slider {
  background-color: #444; /* Adjust the color for dark mode */
}

.dark-mode .slider:before {
  background-color: black; /* Adjust the color for dark mode */
}

.dark-mode input:checked + .slider {
  background-color: #3d3d3d; /* Adjust the color for dark mode */
}

.dark-mode input:focus + .slider {
  box-shadow: 0 0 1px #3d3d3d; /* Adjust the color for dark mode */
}

/* Additional dark mode styles... */
```

- The styling for when the toggle for dark mode is clicked, this can be used as a base for future projects
- The dark-mode is taken from the Document section within the addEventListener from the js section

  # JS

1. First we need to make the checkbox itself interactive.
    1. *The selector **`'.switch input'`** is used because it targets the **`input`** element inside an element with the class **`switch`**. In your HTML, the checkbox is inside an element with the class **`switch`**, so this selector is more specific and helps ensure that the correct checkbox is selected.*
    
    ```jsx
    // Get the checkbox element
    const darkModeToggle = document.querySelector (".switch input")
    ```
    
2. We then use the variable and add an `eventListener`, this is so we can give it an action ⇒ that action being when `darkModeToggle` is clicked (when checkbox is checked) the action will be performed
