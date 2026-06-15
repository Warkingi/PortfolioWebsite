
// // Init project content buttons
// for (let i = 0; i < 100; i++) {
//     window.console.error("Hello");
// }

// const cards = document.querySelectorAll('.projectEntry');
//     window.console.log(cards.length);

//       cards.forEach(entry => {
//         const header = entry.querySelector('.projectEntryHeader');
//         window.console.error("Hello");

//         header.addEventListener('click', () => {
//           const isAlreadyOpen = entry.classList.contains('is-expanded');

//           // ── Accordion mode: close everything first ──────────
//           // Delete these 4 lines if you want multiple cards
//           // open at the same time.
//           cards.forEach(c => {
//             c.classList.remove('is-expanded');
//             c.setAttribute('aria-expanded', 'false');
//           });

//           // ── Open the clicked card (if it was closed) ────────
//           if (!isAlreadyOpen) {
//             entry.classList.add('is-expanded');
//             entry.setAttribute('aria-expanded', 'true');

//             // Gently scroll card into view once animation begins
//             setTimeout(() => {
//               entry.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
//             }, 80);
//           }
//         });
//       });

function openProjectContent(event)
{

}

function closeProjectContent(article)
{
    article.classList.remove('is-expanded');
    article.setAttribute('aria-expanded', 'false');

    article.querySelectorAll('iframe').forEach(iframe => {
        iframe.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}', '*'
        );
    });

    // window.console.log("Closing Entry");
}

// function onClickProjectContent(event)
// {
//   CurrentElement = event.currentTarget
//   const isAlreadyOpen = CurrentElement.classList.contains('is-expanded');

//   // ── Accordion mode: close everything first ──────────
//   // Delete these 4 lines if you want multiple cards
//   // open at the same time.
//   // cards.forEach(c => {
//   //   c.classList.remove('is-expanded');
//   //   c.setAttribute('aria-expanded', 'false');
//   // });

//   // ── Open the clicked card (if it was closed) ────────
//   if (!isAlreadyOpen) {
//     window.console.log("Hello");
//     CurrentElement.classList.add('is-expanded');
//     CurrentElement.setAttribute('aria-expanded', 'true');

//     // Gently scroll card into view once animation begins
//     setTimeout(() => {
//       CurrentElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
//     }, 80);
//   }
//   else
//   {
//     CurrentElement.classList.remove('is-expanded')
//     CurrentElement.setAttribute('aria-expanded', 'false');

//     window.console.log("Goodbye");
//   }
// }