const gsap = window.gsap;
const CSSPlugin = window.CSSPlugin;
const ScrollToPlugin = window.ScrollToPlugin;
const SplitText = window.SplitText;

gsap.registerPlugin(CSSPlugin, ScrollToPlugin,SplitText);


// Create a GSAP timeline
const timeline = gsap.timeline({
    onStart: () => {
      audio.play(); // Play the audio when the animation completes
    },
    onComplete: audioPasue()
  });

//words = new SplitText(header, { type: "words" })


timeline
    .set([container,backgrounds,text],{autoAlpha:1})
   .set([bLeftTop, bRightTop, bLeftBottom,bRightBottom,borderLeft,borderTop,borderBottom,borderRight,bCenter,header,noteOne,names,note,eventDetails,message,audio,hashtag], { autoAlpha: 0 }) 
   .set([bLeftTop,bRightTop,bLeftBottom,bRightBottom],{scale:.9})
   .set([borderTop,borderRight,borderBottom,borderLeft],{scaleX:0,scaleY:1})
   .set(bCenter,{scale:0})



   // .addLabel("one") 
    .add(bgAnimate(),"+=5")
    .to(bCenter,{duration:6,scale:1,autoAlpha:1,delay:4,ease:"power2.inOut"},"+=5")
    .fromTo(header,{y:-10,autoAlpha:0}, {duration: 2,delay:1, y: 0, autoAlpha: 1, ease: "power2.inOut"},"+=1")
    .fromTo(noteOne,{y:-10,autoAlpha:0}, {duration: 2, y: 0, autoAlpha: 1, ease: "power2.inOut"},"+=1")
    .fromTo(names,{y:-10,autoAlpha:0}, {duration: 3, y: 0, autoAlpha: 1, ease: "power2.inOut",stagger:1},"+=1")
    .fromTo(note,{y:-10,autoAlpha:0}, {duration:2, y: 0, autoAlpha: 1, ease: "power2.inOut"},"+=1")
    .fromTo(eventDetails,{y:-10,autoAlpha:0}, {duration: 2, y: 0, autoAlpha: 1, ease: "power2.inOut"},"+=1")
    .fromTo(hashtag,{y:-10,autoAlpha:0}, {duration: 2, y: 0, autoAlpha: 1, ease: "power2.inOut"},"+=1")
    .fromTo(message,{y:-10,autoAlpha:0}, {duration: 2, y: 0, autoAlpha: 1, ease: "power2.inOut"},"+=1")


 /**/
// Play the GSAP timeline
timeline.play();

function bgAnimate() {
    gsap.to(bLeftTop, { duration: 10,scale:1,autoAlpha: 1, ease: 'power2.inOut'},"one")
    gsap.to(borderTop,{duration:10,scaleX:1,autoAlpha: 1,},"one")
    gsap.to(bRightTop, { duration: 10,autoAlpha: 1,scale:1, ease: 'power2.inOut' },"one") 
    gsap.to(borderRight,{duration:10,scaleX:1,autoAlpha: 1,},"one")
    gsap.to(bRightBottom, { duration: 10,autoAlpha: 1,scale:1, ease: 'power2.inOut' },"one")
    gsap.to(borderBottom,{duration:10,scaleX:1,autoAlpha: 1,},"one")
    gsap.to(bLeftBottom, { duration: 10,autoAlpha: 1,scale:1, ease: 'power2.inOut' },"one")
    gsap.to(borderLeft,{duration:10,scaleX:1,autoAlpha: 1,},"one")
}


function audioPasue(){
        const audioDuration = 41 * 1000; // Adjust this value as needed (in milliseconds)
      
        // Play the audio
        audio.play();
      
        // Set a timeout to pause the audio after the specified duration
        setTimeout(() => {
          // Calculate the fade-out duration and volume change per step
          const fadeDuration = 3; // Adjust this value as needed (in seconds)
          const initialVolume = audio.volume;
          const finalVolume = 0;
          const numSteps = Math.ceil(fadeDuration * 10);
          const volumeStep = (initialVolume - finalVolume) / numSteps;
          let currentStep = 0;
      
          // Create a function to decrease the volume gradually
          const fadeOut = () => {
            if (currentStep < numSteps) {
              audio.volume -= volumeStep;
              currentStep++;
              setTimeout(fadeOut, 100); // Adjust the timeout as needed for smoother fading
            } else {
              audio.pause(); // Pause the audio once the volume is reduced to 0
            }
          };
      
          // Start the fade-out process
          fadeOut();
        }, audioDuration);
      
      
}



