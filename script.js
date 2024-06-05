window.addEventListener("scroll", function() {showFunction()});

function showFunction()
{
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1)
    {
        document.getElementById("title").classList.add("visible");
    }
    else
    {
        document.getElementById("title").classList.remove("visible");
    }
}
