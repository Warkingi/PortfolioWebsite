function openProjectContent(article)
{
    // Collapsed projects do not download galleries or start YouTube players.
    article.querySelectorAll('img[data-src], iframe[data-src]').forEach(media => {
        media.src = media.dataset.src;
        media.removeAttribute('data-src');
    });

    article.classList.add('is-expanded');
    article.setAttribute('aria-expanded', 'true');

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
