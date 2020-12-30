
// pre-loader
window.addEventListener('load', () => {
    
    if (document.readyState === 'complete') {
        // The page is fully loaded
        const preDiv =  document.querySelector("#preloader-div");
        preDiv.classList.add("page-loaded");
    }
    // console.log(preDiv);
})


