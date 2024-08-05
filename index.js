const bodyElement=document.querySelector("body");
bodyElement.addEventListener("mousemove", (e) => {
    const xPosition=event.offsetX
    const yPosition=event.offsetY
    const spanElement=document.createElement("span")
    spanElement.style.left=xPosition+"px"
    spanElement.style.top=yPosition+"px"
    bodyElement.appendChild(spanElement)
    setTimeout(() => {
        spanElement.remove
    },3000)
});