// STEP 11: Get length of path for circle (circumference)
let path = document.querySelector("svg circle[stroke-dasharray]");
// console.log(path);
let length = path.getTotalLength();
// console.log(length);
// STEP 12: Set the length of the space between dashes to the full circumference
path.setAttribute("stroke-dasharray", "0 " + length);

// STEP 13: Dynamically set the width of the pie segment to reflect the text value
// STEP 13a: Capture value of % inside the pie chart SVG text element
let percent = document.querySelector("svg text").textContent;

// STEP 13b: Remove the % sign from the text value
percent = percent.replaceAll("%", "");
console.log(percent);

// STEP 13c: convert the string to an integer
percent = parseInt(percent, 10);
console.log(percent);

// STEP 13d: Calculate width of pie segment as a percentage of the circumference of the circle - this will be used for the length of the dash part of the stroke
percent = percent/100;
let pieWidth = percent * length;
console.log(pieWidth);

// STEP 14: Grab the external CSS as one of the document object properties
const cssRulesList = document.styleSheets[0].cssRules;
console.log(cssRulesList);

// STEP 15: Loop through the CSS rules to capture the one that controls the :active state for the circle
let svgActiveRule;
for (let i=0; i < cssRulesList.length; i++){
    // console.log(cssRulesList[i]);
    if(cssRulesList[i].selectorText == "svg:active circle[stroke-dasharray]") {
        // We found the rule!!!
        // console.log("yay!");
        svgActiveRule = cssRulesList[i];
        console.log(svgActiveRule);
    }
}

// STEP 16: Build the string for the new CSS property value
let propertyValue = pieWidth + " " + length;
console.log(propertyValue);

// STEP 17: Update the CSS declaration to reflect the new property value for stroke-dasharray
svgActiveRule.style.setProperty("stroke-dasharray", propertyValue);
