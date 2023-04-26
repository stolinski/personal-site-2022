function n(t){return-.5*(Math.cos(Math.PI*t)-1)}let o=400,r=o-100,e=0;const s=t=>({duration:o,delay:r,easing:n,css:a=>`opacity: ${a};		grid-column: 1 / -1; grid-row: 1 / -1;`}),i=t=>({duration:400,delayZero:e,easing:n,css:a=>`opacity: ${a}; 
		grid-column: 1 / -1;
		grid-row: 1 / -1;
		transform: translate3d(0, ${(1-a)*100}px, 0);`});export{s as a,i as f};
