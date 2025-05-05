$(document).ready(()=>{
    var node = document.getElementById('Navigation');
    var newNode = document.createElement('div');
    newNode.innerHTML = GetHTML();
    node.appendChild(newNode);

    function GetHTML()
    {
        return `
            <a href="about.html#About" class="nav-btn">About Me</a>
            <hr>
            <a href="index.html#Games" class="nav-btn">Portfolio</a>
            <a href="cv.html#CV" class="nav-btn">CV</a>
            <a href="code.html#CodeSnippets" class="nav-btn">Code Snippets</a>
            <hr>
            <div class="socials">
                <a target="_blank" href="https://github.com/andrewscott02" class="social-btn icon-github"></a>
                <a target="_blank" href="https://www.linkedin.com/in/andrew-scott-8ba2b518a/" class="social-btn icon-linkedin"></a>
                <a target="_blank" href="https://andrewjscott02.itch.io/" class="social-btn icon-itch-dot-io"></a>
            </div>
        `;
    }
});