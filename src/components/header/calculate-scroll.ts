// ? reference: https://stackoverflow.com/questions/38360676/get-the-element-which-is-the-most-visible-on-the-screen
export const calcScroll = (
  headerRef: React.RefObject<HTMLElement>,
  refs: React.RefObject<HTMLDivElement>[],
) => {
  let visibleHeightOfElem = 0;
  let maxVisibleHeight = 0;
  let skipRest = false;
  let mostVisibleElement: HTMLDivElement | null = null;

  if (headerRef.current) {
    const links = headerRef.current.querySelectorAll("#links button");
    for (const link of links) {
      link.classList.remove(`is-current-link`);
    }
  }

  for (const ref of refs) {
    const el = ref.current;

    if (!el || skipRest) break;

    const clientRect = el.getBoundingClientRect();
    const clientRectTop = Math.abs(clientRect.top);

    if (clientRect.top >= 0) {
      visibleHeightOfElem = window.innerHeight - clientRectTop;
    } else {
      visibleHeightOfElem = clientRect.height - clientRectTop;
    }

    if (visibleHeightOfElem >= clientRect.height) {
      mostVisibleElement = el;
      skipRest = true;
    } else {
      if (visibleHeightOfElem > maxVisibleHeight) {
        maxVisibleHeight = visibleHeightOfElem;
        mostVisibleElement = el;
      }
    }
  }

  const id = mostVisibleElement?.getAttribute(`id`);
  const link = headerRef.current?.querySelector(`#links button#${id}`);
  link?.classList.add(`is-current-link`);

  return mostVisibleElement;
};
