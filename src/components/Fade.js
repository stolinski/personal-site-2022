import { sineInOut } from "svelte/easing";

let duration = 400;
let delay = duration - 100;

let delayZero = 0;

export const fadeIn = (_) => ({
  duration,
  delay,
  easing: sineInOut,
  css: (t) => `opacity: ${t};		grid-column: 1 / -1; grid-row: 1 / -1;`,
});

export const fadeOut = (_) => ({
  duration: 400,
  delayZero,
  easing: sineInOut,
  css: (t) =>
    `opacity: ${t}; 
		grid-column: 1 / -1;
		grid-row: 1 / -1;
		transform: translate3d(0, ${(1 - t) * 100}px, 0);`,
});
