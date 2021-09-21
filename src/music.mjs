import * as Tone from 'https://unpkg.com/tone@14.7.77/build/Tone.js' //'../node_modules/tone/Tone'

function riffOne() {
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  const now = Tone.now()
  synth.triggerAttack("D4", now);
  synth.triggerAttack("F4", now + 0.5);
  synth.triggerAttack("A4", now + 1);
  synth.triggerAttack("C5", now + 1.5);
  synth.triggerAttack("E5", now + 2);
  synth.triggerRelease(["D4", "F4", "A4", "C5", "E5"], now + 4);

}
function riffTwo() {
  const osc = new Tone.Oscillator().toDestination();
  // start at "C4"
  osc.frequency.value = "C4";
  // ramp to "C2" over 2 seconds
  osc.frequency.rampTo("C2", 2);
  // start the oscillator for 2 seconds
  osc.start().stop("+3");
}
function riffThree() {
  const synth = new Tone.Synth().toDestination();
  const now = Tone.now()
  synth.triggerAttackRelease("C4", "8n", now);
  synth.triggerAttackRelease("E4", "8n", now + 0.5);
  synth.triggerAttackRelease("G4", "8n", now + 1);
}
document.querySelector("One").addEventListener("one", () => riffOne.start());


