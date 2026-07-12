function openProjectContent(article)
{
    article.classList.add('is-expanded');
    article.setAttribute('aria-expanded', 'true');

    window.console.log("Hello");

    setTimeout(() => {
    article.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 80);
}

function closeProjectContent(article)
{
    article.classList.remove('is-expanded');
    article.setAttribute('aria-expanded', 'false');

    article.querySelectorAll('iframe').forEach(iframe => {
        if (iframe.contentWindow) {
            iframe.contentWindow.postMessage(
                '{"event":"command","func":"pauseVideo","args":""}', '*'
            );
        }
    });
}