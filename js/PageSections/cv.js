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
    node.innerHTML = `${GetHTMLMobile()}${GetHTML(node)}`;

    function GetHTML(node)
    {
        node.innerHTML = "";

        var width = node.offsetWidth;
        var height = $(document).height() * 0.85;

        return `
            <div class="cv">
                <h2>CV</h2>
                <embed src="files/CV.pdf" width="${width}" height="${height}" type="application/pdf">
            </div>
        `;
    }

    function GetHTMLMobile()
    {
        return `
            <div class="cv-mobile">
                <h2>CV</h2>
                <div>
                    <img src="Images/CV1.png"></img>
                    <img src="Images/CV2.png"></img>
                </div>
            </div>
        `;
    }
};