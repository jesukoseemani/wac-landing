import { useEffect, useLayoutEffect } from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;

// Usage

// import useIsomorphicLayoutEffect from '@hooks/useIsomorphicLayoutEffect '

// export default function Component() {
//   useIsomorphicLayoutEffect(() => {
//     console.log(
//       "In the browser, I'm an `useLayoutEffect`, but in SSR, I'm an `useEffect`.",
//     )
//   }, [])

//   return <p>Hello, world</p>
// }