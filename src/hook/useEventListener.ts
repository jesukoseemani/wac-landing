import { RefObject, useEffect, useRef } from "react";

import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

// Window Event based useEventListener interface
function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  element?: undefined,
  options?: boolean | AddEventListenerOptions,
): void;

// Element Event based useEventListener interface
function useEventListener<
  K extends keyof HTMLElementEventMap,
  T extends HTMLElement = HTMLDivElement,
>(
  eventName: K,
  handler: (event: HTMLElementEventMap[K]) => void,
  element: RefObject<T>,
  options?: boolean | AddEventListenerOptions,
): void;

// Document Event based useEventListener interface
function useEventListener<K extends keyof DocumentEventMap>(
  eventName: K,
  handler: (event: DocumentEventMap[K]) => void,
  element: RefObject<Document>,
  options?: boolean | AddEventListenerOptions,
): void;

function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  T extends HTMLElement | void = void,
>(
  eventName: KW | KH,
  handler: (
    event: WindowEventMap[KW] | HTMLElementEventMap[KH] | Event,
  ) => void,
  element?: RefObject<T>,
  options?: boolean | AddEventListenerOptions,
) {
  // Create a ref that stores handler
  const savedHandler = useRef(handler);

  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Define the listening target
    const targetElement: T | Window = element?.current || window;
    if (!(targetElement && targetElement.addEventListener)) {
      return;
    }

    // Create event listener that calls handler function stored in ref
    const eventListener: typeof handler = (event) =>
      savedHandler.current(event);

    targetElement.addEventListener(eventName, eventListener, options);

    // Remove event listener on cleanup
    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element, options]);
}

export default useEventListener;

// Usage
//
// import useEventListener } from '@hooks/useEventListener '

// export default function Component() {
//   // Define button ref
//   const buttonRef = useRef<HTMLButtonElement>(null)
//   const documentRef = useRef<Document>(document)

//   const onScroll = (event: Event) => {
//     console.log('window scrolled!', event)
//   }

//   const onClick = (event: Event) => {
//     console.log('button clicked!', event)
//   }

//   const onVisibilityChange = (event: Event) => {
//     console.log('doc visibility changed!', {
//       isVisible: !document.hidden,
//       event,
//     })
//   }

//   // example with window based event
//   useEventListener('scroll', onScroll)

//   // example with document based event
//   useEventListener('visibilitychange', onVisibilityChange, documentRef)

//   // example with element based event
//   useEventListener('click', onClick, buttonRef)

//   return (
//     <div style={{ minHeight: '200vh' }}>
//       <button ref={buttonRef}>Click me</button>
//     </div>
//   )
// }
