// get the 'tags' element
const tagsElement = document.getElementById("tags");
// get the 'textarea' element
const textarea = document.getElementById("textarea");

// automatically focus on the textarea when the page loads
textarea.focus();

textarea.addEventListener("keyup", (e) => {
    // create tags when the user types in the textarea
    createTags(e.target.value);

    // check if the user has pressed the Enter key
    if (e.key === "Enter") {
        // wait 10ms then clear the textarea
        setTimeout(() => {
            e.target.value = "";
        }, 10);

        // randomly select a tag
        randomSelect();
    }
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

// a function to randomly select a tag
function randomSelect() {
    // the number of times to highlight a tag
    const times = 30;

    // highlight &  unhighlight a random tag every 100ms
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);

        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100);
    }, 100);

    // stop highlighting & unhighlighting tags after a certain amount of time
    setTimeout(() => {
        clearInterval(interval);

        // highlight a random tag one last time after the interval has ended
        setTimeout(() => {
            const randomTag = pickRandomTag();

            highlightTag(randomTag);
        }, 100);
    }, times * 100);
}

// a function to pick a random tag
function pickRandomTag() {
    // get all the tags
    const tags = document.querySelectorAll(".tag");

    // return a random tag by selecting a random index from the tags array using Math.random()
    return tags[Math.floor(Math.random() * tags.length)];
}

// a function to highlight a tag
function highlightTag(tag) {
    // add the highlight class to the tag, the CSS will take care of the rest
    tag.classList.add("highlight");
}

// a function to unhighlight a tag
function unHighlightTag(tag) {
    // remove the highlight class from the tag, the tag will go back to its original color
    tag.classList.remove("highlight");
}
