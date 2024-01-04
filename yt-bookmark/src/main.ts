
function createButton() {
    const button = document.createElement(
        "button"
    );
    button.id = "thebutton";
    button.style.cssText += "margin-left: 10px;border-radius: 10em;width: 3em;background-color: rgb(48, 52, 54);border: 0px"

    return button;
}

const toolbarDiv = document.querySelectorAll('ytd-menu-renderer.ytd-watch-metadata');

if (toolbarDiv[0]) {
    const existingButton = document.getElementById("thebutton");
    if (!existingButton) {
        toolbarDiv[0].appendChild(createButton());
    } else {
        console.log('button exists');
    }
} else {
    console.log('no tool bar div');
}

