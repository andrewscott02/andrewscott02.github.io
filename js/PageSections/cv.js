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
    
    var width = node.offsetWidth;
    var height = 500;

    node.innerHTML = GetHTML(width, height);

    function GetHTML(width, height)
    {
        return `
            <embed src="files/CV.pdf" width="${width}" height="${height}" type="application/pdf">
        `;
    }
};