import"./index-7a0d8702.js";function n(a){return-.5*(Math.cos(Math.PI*a)-1)}let o=400,r=o-100,e=0;const i=a=>({duration:o,delay:r,easing:n,css:t=>`opacity: ${t};		grid-column: 1 / -1; grid-row: 1 / -1;`}),d=a=>({duration:400,delayZero:e,easing:n,css:t=>`opacity: ${t}; 
		grid-column: 1 / -1;
		grid-row: 1 / -1;
		transform: translate3d(0, ${(1-t)*100}px, 0);`});export{i as a,d as f};
