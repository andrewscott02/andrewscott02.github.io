const isMobile = navigator.userAgentData.mobile || window.navigator.userAgent.toLowerCase().includes("mobi");

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
    node.innerHTML = isMobile ? GetHTMLMobile() : GetHTML(node);

    function GetHTML(node)
    {
        node.innerHTML = "";

        var width = node.offsetWidth;
        var height = $(document).height() * 0.85;

        return `
            <h2>CV</h2>
            <embed src="files/CV.pdf" width="${width}" height="${height}" type="application/pdf">
        `;
    }

    function GetHTMLMobile()
    {
        return `
            <h2>CV</h2>
            <div>
                <img src="Images/CV1.png"></img>
                <img src="Images/CV2.png"></img>
            </div>
        `;
    }
};