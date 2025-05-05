const isMobile = navigator.userAgentData.mobile; 

$(document).ready(()=>{
    ShowCVPDF();
});

//Resizes the side panel when page is resized
$(window).on("resize", ()=>{
    ShowCVPDF();
});

function ShowCVPDF()
{
    var node = document.getElementById('CV');
    
    node.innerHTML = "";

    var width = node.offsetWidth;
    var height = GetHeight();

    console.log(isMobile + " | " + height);

    node.innerHTML = GetHTML(width, height);

    function GetHTML(width, height)
    {
        return `
            <embed src="files/CV.pdf" width="${width}" height="${height}" type="application/pdf">
        `;
    }

    function GetHeight()        
    {
        return isMobile
        ? 800
        : $(document).height() * 0.85;
    }
};