function loadLink()
    {
        console.log("HEY!");
        
    }

    var blocks = [
        document.getElementById("bgTextItem"),
        document.getElementById("bgTextItem2"),
        document.getElementById("bgTextItem3")
    ]

    var i;
    for(var i = 0; i < blocks.length; i++)
    {
        blocks[i].onclick = loadLink;
    }

    // var tag = document.createElement("div");
    // var text = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.");
    // tag.appendChild(text);
    // var element = document.getElementById("bgTextItem");
    // element.appendChild(tag);
