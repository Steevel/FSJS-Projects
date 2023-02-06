// colors
const colors = ["#30A0E0", "#FFC973", "#E07C24", "#FF6666", "#DE4839", "#4DD637", "#1C8D73", "#E03B8B", "#6A1B4D", "#CAD5E2", "#8D3DAF", "#758283", "#5A20CB", "#242B2E", "#F7CD2E", "#0D0D0D", "#03203C", "#E21717"]

const cont = document.querySelector(".color-contanier");

colors.map((color, index) => {
    cont.innerHTML += `<div class="p-5 flex flex-col items-center justify-center hover:drop-shadow-2xl" id="${index}" onclick="showHexCode(this)">
    <div class="bg-[${color}] w-48 h-80 p-6 rounded-lg flex flex-col items-center justify-center hover:-translate-y-1 hover:scale-110 duration-300">
        <p class="text-xl text-white font-bold">${color}</p>
        <p class="text-lg text-white hidden">Copied! ✅</p>
    </div>
</div>`
})

function showHexCode(element) {
    const cardDiv = element.children[0] // card

    // Copy hex code to clipboard
    const hexCodeElement = cardDiv.children[0]
    const hexCode = hexCodeElement.textContent
    navigator.clipboard.writeText(hexCode)

    // show message
    const copiedText = cardDiv.children[1]
    copiedText.classList.remove("hidden")
    setTimeout(() => copiedText.classList.add("hidden"), 2000)
}