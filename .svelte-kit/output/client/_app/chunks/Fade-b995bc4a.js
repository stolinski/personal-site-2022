import"./index-434221ed.js";function a(o){return-.5*(Math.cos(Math.PI*o)-1)}let n=600,e=n,s=0;const i=o=>({duration:n,delay:e,easing:a,css:t=>`transform-origin: top center; opacity: ${t}; position: absolute;`}),c=o=>({duration:1e3,delayZero:s,easing:a,css:t=>`opacity: ${t}; 
		transform-origin: top center;
		position: absolute; 
		transform: translate3d(0, ${(1-t)*100}px, 0) scaleY(${1-t+1});`});export{i as a,c as f};
