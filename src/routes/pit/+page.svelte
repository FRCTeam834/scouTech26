<script lang="ts">
  let selected = 'open or close';
  let details: HTMLDetailsElement | undefined;

  function select(value: string) {
    selected = value;
    if (details) {
      details.open = false;
    }
  }
</script>
<form method="POST">
 <div class="center-wrapper mt-40 flex justify-center items-center min-h-screen" data-theme="swimmingflower">

    <select name="name" class="select select-bordered w-full max-w-xs" required>
<option disabled selected value="">Team Name</option>
<option value="87 Diablo">87 Diablo</option>
<option value="103 Cybersonics">103 Cybersonics</option>
<option value="316 LUNATECS">316 LUNATECS</option>
<option value="321 RoboLancers">321 RoboLancers</option>
<option value="427 LANCE-A-LOT">427 LANCE-A-LOT</option>
<option value="714 Panthera">714 Panthera</option>
<option value="834 SparTechs">834 SparTechs</option>
<option value="1089 Team Mercury">1089 Team Mercury</option>
<option value="1257 Parallel Universe">1257 Parallel Universe</option>
<option value="1640 Sab-BOT-age">1640 Sab-BOT-age</option>
<option value="1712 Dawgma">1712 Dawgma</option>
<option value="1807 Redbird Robotics">1807 Redbird Robotics</option>
<option value="2016 Mighty Monkey Wrenches">2016 Mighty Monkey Wrenches</option>
<option value="2539 Krypton Cougars">2539 Krypton Cougars</option>
<option value="2554 The Warhawks">2554 The Warhawks</option>
<option value="2590 Nemesis">2590 Nemesis</option>
<option value="2722 Charge Robotics">2722 Charge Robotics</option>
<option value="4285 Camo-Bots">4285 Camo-Bots</option>
<option value="4342 Demon Robotics">4342 Demon Robotics</option>
<option value="4575 Gemini">4575 Gemini</option>
<option value="4637 BambieBotz">4637 BambieBotz</option>
<option value="4750 Bert">4750 Bert</option>
<option value="5401 Fightin' Robotic Owls">5401 Fightin' Robotic Owls</option>
<option value="5490 The Dark Byte">5490 The Dark Byte</option>
<option value="5789 The Other Owls">5789 The Other Owls</option>
<option value="7414 Retrobotics">7414 Retrobotics</option>
<option value="7587 Metuchen Momentum">7587 Metuchen Momentum</option>
<option value="8630 CAP ROBOTICS">8630 CAP ROBOTICS</option>
<option value="8704 Void Warranty">8704 Void Warranty</option>
<option value="8721 Code Name M.I.T.">8721 Code Name M.I.T.</option>
<option value="9027 PATH to Domination">9027 PATH to Domination</option>
<option value="9100 Robo Roses">9100 Robo Roses</option>
<option value="10143 Northeast Vikings">10143 Northeast Vikings</option>
<option value="10584 Ridge Robotics">10584 Ridge Robotics</option>
    </select>

<div class="flex w-48 items-center justify-between">
<input 
      type="text" 
      name="weight"
      placeholder="Robot Weight"
/>
</div>

<div class="flex w-48 items-center justify-between">
<input 
      type="text" 
      name="length"
      placeholder="Robot Length"
/>
</div>

<div class="flex w-48 items-center justify-between">
<input 
      type="text" 
      name="ballsHeld"
      placeholder="how many balls"
/>
</div>

<div class="flex w-48 items-center justify-between">
<input 
      type="text" 
      name="height"
      placeholder="Robot Height"
/>
</div>
<div class="flex w-48 items-center justify-between">
<select name="climb" class="select select-bordered w-full max-w-xs">
    <option disabled selected>Climb Level</option>
    <option value = "1">1</option>
    <option value = "2">2</option>
    <option value = "3">3</option>
</select>
</div>

<div class="flex w-48 items-center justify-between">
<input 
      type="text" 
      name="cycles"
      placeholder="Cycles"
/>
</div>

<div class="flex w-48 items-center justify-between">
    <h1>Can they climb during Auton?</h1>
<input
    type="checkbox"
    checked="checked"
    class="toggle border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
/>
</div>

<div class="flex w-48 items-center justify-between">
      <h1>Left Start</h1>
      <input
        type="checkbox"
        name="left_start"
        class="toggle border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
      />
</div>
<div class="flex w-48 items-center justify-between">
      <h1>Middle Start</h1>
      <input
        type="checkbox"
        name="middle_start"
        class="toggle border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
      />
</div>
<div class="flex w-48 items-center justify-between">
      <h1>Right Start</h1>
      <input
        type="checkbox"
        name="right_start"
        class="toggle border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
      />
</div>

<div class="flex w-48 items-center justify-between">
    <button type="submit" class="btn">Submit</button>

</div>
</div>
</form>
<style>

.center-wrapper {
   display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem; 
}
</style>
