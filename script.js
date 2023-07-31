// get the 'tags' element
const tagsElement = document.getElementById("tags");
// get the 'textarea' element
const textarea = document.getElementById("textarea");

// automatically focus on the textarea when the page loads
textarea.focus();

// create tags when the user types in the textarea
textarea.addEventListener("keyup", (e) => {
    createTags(e.target.value);
});

// a function to create tags
function createTags(input) {
    // split the input into an array of tags by the comma, trim the whitespace, and filter out any empty tags
    const tags = input
        .split(",")
        .filter((tag) => tag.trim() !== "")
        .map((tag) => tag.trim());

    // clear the tags element
    tagsElement.innerHTML = "";

    // create a span element for each tag and add it to the tags element, then add the tag text to the span element
    tags.forEach((tag) => {
        const tagElement = document.createElement("span");
        tagElement.classList.add("tag");
        tagElement.innerText = tag;
        tagsElement.appendChild(tagElement);
    });
}
