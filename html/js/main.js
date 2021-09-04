
function onStart() {
    console.log("it works...")
    var root = $("#root")


    for(var x = 0; x < 8; x++) {

        for(var y = 0; y < 8; y++) {

            var style = {
                "top":  (y * 100) + "px",
                "left": (x * 100) + "px",
                'background': 'black'
            }
            addCell(root, style)
        }
    }
}

function addCell(parent, style) {

    var element = document.createElement('div')
    element.className = 'cell'
    var wrapped = $(element)
    wrapped.css(style)
    parent.append(element)
}

$(document).ready(onStart)