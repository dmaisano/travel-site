export const calcScroll = (
  headerRef: React.RefObject<HTMLElement>,
  scrollY: number,
  scrollDirection: "up" | "down",
  refs: React.RefObject<HTMLDivElement>[],
) => {
  const browserHeight = window.innerHeight;
  let foundLink = false;

  if (!headerRef) return;

  if (!headerRef.current) return;

  const links = headerRef.current.querySelectorAll("#links button");
  for (const link of links) {
    link.classList.remove(`is-current-link`);
  }

  for (const ref of refs) {
    const el = ref.current;
    if (!el) return;
    if (
      !foundLink &&
      scrollY + browserHeight > el.offsetTop &&
      scrollY < el.offsetTop + el.offsetHeight
    ) {
      const scrollPercent =
        (el.getBoundingClientRect().top / browserHeight) * 100;
      if (
        (scrollPercent < 18 &&
          scrollPercent > -0.1 &&
          scrollDirection == "down") ||
        (scrollPercent < 33 && scrollDirection == "up")
      ) {
        const id = el.getAttribute(`id`);
        const link = headerRef.current.querySelector(`#links button#${id}`);
        link?.classList.add(`is-current-link`);
        foundLink = true;
      }
    }
  }
};
