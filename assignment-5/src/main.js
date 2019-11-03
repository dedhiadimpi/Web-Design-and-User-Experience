import './../scss/main.scss';

//getting the button nodes
let boldButton = document.getElementsByTagName('button').item(0);
let italicButton = document.getElementsByTagName('button').item(1);
let underlineButton = document.getElementsByTagName('button').item(2);
let leftContentButton = document.getElementsByTagName('button').item(3);
let centerContentButton = document.getElementsByTagName('button').item(4);
let rightContentButton = document.getElementsByTagName('button').item(5);
let justifyContentButton = document.getElementsByTagName('button').item(6);

//Bolds the selected text if the text is not bold and unbolds the text if it is bold
let listenerBold = function(event) {
    //get the selection
    let selection = document.getSelection();
    let range = selection.getRangeAt(0);
    let spanNodesLength = document.getElementsByTagName('span').length;
    //check if span is present in the div
    if (spanNodesLength > 0) {
        let flag = false;
        //Loop all the span nodes to check if selection contains span
        [].forEach.call(document.getElementsByTagName('span'), function(spanNode){
            let span = selection.containsNode(spanNode,true);
            //if the selection contains span
            if(span){
                //if the span has class bold, set the class as normal (unbold)
                if(spanNode.getAttribute('class') == 'bold'){
                    flag = true;
                    spanNode.setAttribute('class', 'normal');
                    //boldButton.removeAttribute('class');
                    boldButton.setAttribute('class', 'fa fa-bold');
                }
                //if the span has class normal (unbold), set the class as bold
                else if(spanNode.getAttribute('class') == 'normal') {
                    flag = true;
                    spanNode.setAttribute('class', 'bold');
                    boldButton.setAttribute('class', 'fa fa-bold button-change-on-click');
                }
            }});
        //if the selection doesn't contain bold/normal class, add a span with bold class
            if(flag === false){
                //creation of new span element
                let span = document.createElement('span');
                span.setAttribute('class', 'bold');
                //get the content of selection and remove it
                let content = range.extractContents().textContent;
                //set the text of span as content
                span.innerHTML = content;
                //add span node
                range.insertNode(span);
                //since bold is applied, highlight the bold button
                boldButton.setAttribute('class','fa fa-bold button-change-on-click');
            }
    }
    //add span with bold class
    else {
        let span = document.createElement('span');
        span.setAttribute('class', 'bold');
        let content = range.extractContents().textContent;
        span.innerHTML = content;
        range.insertNode(span);
        boldButton.setAttribute('class','fa fa-bold button-change-on-click');
    }
    selection.removeAllRanges();
};

//Styles the text to italic
let listenerItalic = function(event) {
    let spanNodesLength = document.getElementsByTagName('span').length;
    //get the selection
    let selection = document.getSelection();
    let range = selection.getRangeAt(0);
    //if span is present
    if (spanNodesLength > 0) {
        let flag = false;
        //loop the span and check if selection contains span node
        [].forEach.call(document.getElementsByTagName('span'), function(spanNode){
            let span = selection.containsNode(spanNode, true);
            if (span) {
                //if the span node has class italic, change the class to italic-normal
                if (spanNode.getAttribute('class') == 'italic') {
                    flag = true;
                    spanNode.setAttribute('class', 'italic-normal');
                    italicButton.setAttribute('class', 'fa fa-italic');
                }
                ///if the span node has class italic-normal, change the class to italic
                else if (spanNode.getAttribute('class') == 'italic-normal') {
                    flag = true;
                    spanNode.setAttribute('class', 'italic');
                    italicButton.setAttribute('class', 'fa fa-italic button-change-on-click');
                }
            }});
        //if italic or normal-italic span not present, add italic span
    if(flag === false){
        let span = document.createElement('span');
        span.setAttribute('class', 'italic');
        let content = range.extractContents().textContent;
        span.innerHTML = content;
        range.insertNode(span);
        italicButton.setAttribute('class','fa fa-italic button-change-on-click');
    }
}
    //add italic span
    else {
        let span = document.createElement('span');
        span.setAttribute('class', 'italic');
        let content = range.extractContents().textContent;
        span.innerHTML = content;
        range.insertNode(span);
        italicButton.setAttribute('class','fa fa-italic button-change-on-click');
    }
    selection.removeAllRanges();
};

//Gives underline to the selected text
let listenerUnderline = function(event) {
    let spanNodesLength = document.getElementsByTagName('span').length;
    //get selection
    let selection = document.getSelection();
    let range = selection.getRangeAt(0);
    //check if span is present
    if (spanNodesLength > 0) {
        let flag = false;
        //loop the span array to check if selection contains span node
        [].forEach.call(document.getElementsByTagName('span'), function (spanNode) {
            let span = selection.containsNode(spanNode, true);
            if (span) {
                //if span has class underline change the class to underline-normal
                if (spanNode.getAttribute('class') == 'underline') {
                    flag = true;
                    spanNode.setAttribute('class', 'underline-normal');
                    underlineButton.setAttribute('class', 'fa fa-underline');
                }
                //if span contains underline-normal change the class to underline
                else if (spanNode.getAttribute('class') == 'underline-normal') {
                    flag = true;
                    spanNode.setAttribute('class', 'underline');
                    underlineButton.setAttribute('class', 'fa fa-underline button-change-on-click');
                }
            }
        });
        //if underline/underline-normal span not present, add underline span
        if (flag === false) {
            let span = document.createElement('span');
            span.setAttribute('class', 'underline');
            let content = range.extractContents().textContent;
            span.innerHTML = content;
            range.insertNode(span);
            underlineButton.setAttribute('class', 'fa fa-underline button-change-on-click');
        }
    }
    //add underline span
    else {
        let span = document.createElement('span');
        span.setAttribute('class', 'underline');
        let content = range.extractContents().textContent;
        span.innerHTML = content;
        range.insertNode(span);
        underlineButton.setAttribute('class','fa fa-underline button-change-on-click');
    }
    selection.removeAllRanges();
};

//Sets the text alignment to left
let listenerLeftContent = function(event){
    //get selection
    let selection = document.getSelection();
    let range = selection.getRangeAt(0);
    let parent = range.commonAncestorContainer;
    //go till parent is Div node
    while(parent.tagName!='DIV'){
        parent = parent.parentElement;
    }
    //if div node has attribute contenteditable
    if(parent.getAttribute('contenteditable')){
        //create a div and set class to align left
        //Create a div node
        let div = document.createElement('div');
        //set attribute as align left
        div.setAttribute('class','content-left');
        //set content as parent content
        let content = parent.innerHTML;
        parent.innerHTML = "";
        //set the div content to parent content
        div.innerHTML = content;
        //add the div to start
        parent.prepend(div);
    }
    //if div node doesnot have contenteditable, set the class to align left
    else{
        parent.setAttribute('class','content-left');
    }
    //highlights the button for left align only
    leftContentButton.setAttribute('class','fa fa-align-left button-change-on-click');
    rightContentButton.setAttribute('class','fa fa-align-right');
    centerContentButton.setAttribute('class','fa fa-align-center');
    justifyContentButton.setAttribute('class','fa fa-align-justify');
    selection.removeAllRanges();
};

//Sets the text alignment to center
let listenerCenterContent = function(event) {
    //get selection
    let selection = document.getSelection();
    let range = selection.getRangeAt(0);
    let parent = range.commonAncestorContainer;
    //loop till u get Div node
    while(parent.tagName!='DIV'){
        parent = parent.parentElement;
    }
    //if Div node has attribute contenteditable, create a div with text-align center
    if(parent.getAttribute('contenteditable')){
        let div = document.createElement('div');
        div.setAttribute('class','content-center');
        let content = parent.innerHTML;
        parent.innerHTML = "";
        div.innerHTML = content;
        parent.prepend(div);
    }
    //set the class to align center
    else{
        parent.setAttribute('class','content-center');
    }
    //Hightlight the center align button only
    centerContentButton.setAttribute('class','fa fa-align-center button-change-on-click');
    rightContentButton.setAttribute('class','fa fa-align-right');
    leftContentButton.setAttribute('class','fa fa-align-left');
    justifyContentButton.setAttribute('class','fa fa-align-justify');
    selection.removeAllRanges();
};

//Sets the text alignment to right
let listenerRightContent = function(event){
    //get the selection
    let selection = document.getSelection();
    let range = selection.getRangeAt(0);
    let parent = range.commonAncestorContainer;
    //loop till you get Div node
    while(parent.tagName!='DIV'){
        parent = parent.parentElement;
    }
    //if Div node has attribute contenteditable, add anther div and set class to align right
    if(parent.getAttribute('contenteditable')){
        let div = document.createElement('div');
        div.setAttribute('class','content-right');
        let content = parent.innerHTML;
        parent.innerHTML = "";
        div.innerHTML = content;
        parent.prepend(div);
    }
    //else just set the class to align right
    else{
        parent.setAttribute('class','content-right');
    }
    //Hightlight the align right button only
    rightContentButton.setAttribute('class','fa fa-align-right button-change-on-click');
    centerContentButton.setAttribute('class','fa fa-align-center');
    leftContentButton.setAttribute('class','fa fa-align-left');
    justifyContentButton.setAttribute('class','fa fa-align-justify');
    selection.removeAllRanges();
};

//Sets the text alignment to justify
let listenerJustifyContent = function(event){
    //get the selection
    let selection = document.getSelection();
    let range = selection.getRangeAt(0);
    let parent = range.commonAncestorContainer;
    //loop till you get Div node
    while(parent.tagName!='DIV'){
        parent = parent.parentElement;
    }
    //If div node has attribute contenteditable, create a new div and set the class to align justify
    if(parent.getAttribute('contenteditable')){
        let div = document.createElement('div');
        div.setAttribute('class','content-justify');
        let content = parent.innerHTML;
        parent.innerHTML = "";
        div.innerHTML = content;
        parent.prepend(div);
    }
    //if another div, set the class to align justify
    else{
        parent.setAttribute('class','content-justify');
    }
    //Hightlight the align-justify button only
    justifyContentButton.setAttribute('class','fa fa-align-justify button-change-on-click');
    rightContentButton.setAttribute('class','fa fa-align-right');
    leftContentButton.setAttribute('class','fa fa-align-left');
    centerContentButton.setAttribute('class','fa fa-align-center');
    selection.removeAllRanges();
};

//Hightlights style buttons as per text style, when user selects the text
function listenerOnSelectionChange(){
    //get the selection
    let selection = document.getSelection();
    if(selection.rangeCount > 0) {
        let range = selection.getRangeAt(0);
        let node = range.commonAncestorContainer;
        //remove hightlight from all buttons
        boldButton.setAttribute('class','fa fa-bold');
        italicButton.setAttribute('class','fa fa-italic');
        underlineButton.setAttribute('class','fa fa-underline');
        //get the parent node of the selection
        let nodeStyle = node.parentElement;
        if(nodeStyle != null) {
            //if parent node is not null, check if the node is SPAN node
            if (nodeStyle.tagName == 'SPAN') {
                //loop for three spans (Three styles - bold/italic/underline)
                for (let i = 1; i <= 3; i++) {
                    if (nodeStyle.getAttribute('class') == 'bold') {
                        boldButton.setAttribute('class', 'fa fa-bold button-change-on-click');
                    } else if (nodeStyle.getAttribute('class') == 'italic') {
                        italicButton.setAttribute('class', 'fa fa-italic button-change-on-click');
                    } else if (nodeStyle.getAttribute('class') == 'underline') {
                        underlineButton.setAttribute('class', 'fa fa-underline button-change-on-click');
                    }

                    //get the parent of node
                    nodeStyle = nodeStyle.parentNode;

                    //if parent is not SPAN, break the loop
                    if (nodeStyle.tagName != 'SPAN') {
                        break;
                    }


                }
            }
        }

        //loop till DIV node of selection
        while (node.tagName != 'DIV') {
            node = node.parentElement;
        }
        //if Div node present
        if (node.tagName == 'DIV') {
            //remove style from all alignment buttons
            rightContentButton.setAttribute('class', 'fa fa-align-right');
            leftContentButton.setAttribute('class', 'fa fa-align-left');
            centerContentButton.setAttribute('class', 'fa fa-align-center');
            justifyContentButton.setAttribute('class', 'fa fa-align-justify');
            //hightlight the alignment buttons as per the class of div node
            if (node.getAttribute('class') == 'content-center') {
                centerContentButton.setAttribute('class', 'fa fa-align-center button-change-on-click');
            } else if (node.getAttribute('class') == 'content-left') {
                leftContentButton.setAttribute('class', 'fa fa-align-left button-change-on-click');
            } else if (node.getAttribute('class') == 'content-right') {
                rightContentButton.setAttribute('class', 'fa fa-align-right button-change-on-click');
            } else if (node.getAttribute('class') == 'content-justify') {
                justifyContentButton.setAttribute('class', 'fa fa-align-justify button-change-on-click');
            } else{
                //If Div node doesn't have any class, check the parent Div node and apply the hightlight logic as mentioned above
                node = node.parentElement;
                if (node.getAttribute('class') == 'content-center') {
                    centerContentButton.setAttribute('class', 'fa fa-align-center button-change-on-click');
                } else if (node.getAttribute('class') == 'content-left') {
                    leftContentButton.setAttribute('class', 'fa fa-align-left button-change-on-click');
                } else if (node.getAttribute('class') == 'content-right') {
                    rightContentButton.setAttribute('class', 'fa fa-align-right button-change-on-click');
                } else if (node.getAttribute('class') == 'content-justify') {
                    justifyContentButton.setAttribute('class', 'fa fa-align-justify button-change-on-click');
                } else{
                    leftContentButton.setAttribute('class', 'fa fa-align-left button-change-on-click');
                }
            }
        }
    }
};

//highlights the styling button which is applied to the text
document.onselectionchange = listenerOnSelectionChange;
//Action listener for bold button
boldButton.addEventListener('click',listenerBold);
//Action listener for italic button
italicButton.addEventListener('click',listenerItalic);
//Action listener for underline button
underlineButton.addEventListener('click',listenerUnderline);
//Action listener for text-align left button
leftContentButton.addEventListener('click',listenerLeftContent);
//Action listener for text-align center button
centerContentButton.addEventListener('click',listenerCenterContent);
//Action listener for text-align right button
rightContentButton.addEventListener('click',listenerRightContent);
//Action listener for text-align justify button
justifyContentButton.addEventListener('click',listenerJustifyContent);
