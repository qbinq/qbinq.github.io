document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".post-content h2, .post-content h3");
    const tocLinks = document.querySelectorAll("#toc a");
    const sectionMargin = 200;
    let currentActive = 0;

    const makeActive = (link) =>tocLinks[link].classList.add("active");
    const removeActive = (link) => tocLinks[link].classList.remove("active");
    const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));

    window.addEventListener("scroll",() => {
        const current = sections.length - [...sections].reverse().findIndex((section)=>window.scrollY>=section.offsetTop-sectionMargin) -1;

        if(current !== currentActive){
            removeAllActive();
            currentActive = current;
            makeActive(current);
        }
    });
    // const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //         const id = entry.target.id;
    //         const link = document.querySelector(`#toc a[href="#${id}"]`);

    //         if (!link) return;

    //         if (entry.isIntersecting) {
    //             tocLinks.forEach(l => l.classList.remove("active"));
    //             link.classList.add("active");
    //         }
    //     });
    // }, {
    // rootMargin: "-50% 0px -50% 0px",
    // threshold: 0
    // });

    // sections.forEach(section => observer.observe(section));
});