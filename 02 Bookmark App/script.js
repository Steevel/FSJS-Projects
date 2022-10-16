let nameFeild = document.getElementById('name');
let linkFeild = document.getElementById('link');
let addButton = document.getElementById('addButton');
let contanier = document.getElementById('bookmarkContainer');

window.onload = function () {
    showBookmarks()
};

// Create Bookmark
addButton.addEventListener('click', () => {
    showBookmarks()
    const regEx = new RegExp("https://www\.[A-Za-z0-9]+\.[a-zA-Z]+");
    if (nameFeild.value.length === 0 || linkFeild.value.length === 0) {
        console.log("Fill all the feilds");
    }
    else if (!regEx.test(linkFeild.value)) {
        alert("Please enter url in the following format\n https://www.example.com")
    }
    else {
        localStorage.setItem(`${nameFeild.value}`, `${linkFeild.value}`);
        showBookmarks();
        nameFeild.value = "";
        linkFeild.value = "";
    }
})

// Show Bookmarks
function showBookmarks() {

    contanier.innerHTML = ""
    let keys = Object.keys(localStorage);

    if (keys.length > 0) {
        for (let i = 0; i < keys.length; i++) {
            contanier.innerHTML += `
            <div 
                    class="flex items-center lg:w-3/5 mx-auto bg-[#ffffff33] hover:bg-white cursor-pointer border rounded-lg p-4 mb-10 border-gray-200 sm:flex-row flex-col text-white hover:text-gray-900">
                    <div url="${localStorage.getItem(keys[i])}" onclick="visitSite(this)"
                        class="h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-[url('https://www.google.com/s2/favicons?domain=${localStorage.getItem(keys[i])}&sz=64')] bg-cover text-blue-500 flex-shrink-0">
                    </div>
                    <div class="flex-grow sm:text-left text-center  mt-6 sm:mt-0" url="${localStorage.getItem(keys[i])}" onclick="visitSite(this)">
                        <h2 class=" text-lg title-font font-medium ">${keys[i]}</h2>
                        <p class="leading-relaxed text-base">${localStorage.getItem(keys[i])}</p>
                        <a class="mt-3 text-blue-500 inline-flex items-center" href="${localStorage.getItem(keys[i])}"
                        target="_blank">Visit Site
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div bookmark-name="${keys[i]}" class="pr-6 hover:text-red" onclick="removeBookmark(this)">
                        <i class="fa-sharp fa-solid fa-trash "></i>
                    </div>
                </div>
            `
        }
    } else {
        contanier.innerHTML = "<h3 class=\"text-center text-xl text-white\">Your bookmarks will be shown here!</h3>"
    }

}

// Remove Bookmark
function removeBookmark(bookmark) {
    let bookmarkName = bookmark.getAttribute("bookmark-name")
    localStorage.removeItem(bookmarkName);
    showBookmarks();
}

// Go to Bookmarked Site upon clickin the card
function visitSite(ele) {
    let url = ele.getAttribute("url");
    window.open(url, '_blank');
}

