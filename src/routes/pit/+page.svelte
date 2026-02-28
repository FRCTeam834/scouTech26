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
<option disabled selected>Name</option>
<option value="103 Cybersonics">103 Cybersonics</option>
<option value="365 Miracle Workerz">365 Miracle Workerz</option>
<option value="834 SparTechs">834 SparTechs</option>
<option value="1218 SCH Robotics">1218 SCH Robotics</option>
<option value="1257 Parallel Universe">1257 Parallel Universe</option>
<option value="1391 The Metal Moose">1391 The Metal Moose</option>
<option value="1640 Sab-BOT-age">1640 Sab-BOT-age</option>
<option value="1647 Iron Devils">1647 Iron Devils</option>
<option value="1712 Dawgma">1712 Dawgma</option>
<option value="1807 Redbird Robotics">1807 Redbird Robotics</option>
<option value="1923 The MidKnight Inventors">1923 The MidKnight Inventors</option>
<option value="2554 The Warhawks">2554 The Warhawks</option>
<option value="2720 Red Watch Robotics">2720 Red Watch Robotics</option>
<option value="2722 Charge Robotics">2722 Charge Robotics</option>
<option value="4342 Demon Robotics">4342 Demon Robotics</option>
<option value="4637 BambieBotz">4637 BambieBotz</option>
<option value="4652 Ironmen 2">4652 Ironmen 2</option>
<option value="5401 Fightin Robotic Owls">5401 Fightin Robotic Owls</option>
<option value="5732 ROBOTIGERS">5732 ROBOTIGERS</option>
<option value="5789 The Other Owls">5789 The Other Owls</option>
<option value="7414 RetroRobotics">7414 RetroRobotics</option>
<option value="7587 Metuchen Momentum">7587 Metuchen Momentum</option>
<option value="8130 Absegami Robotics">8130 Absegami Robotics</option>
<option value="8714 Robo Griffins">8714 Robo Griffins</option>
<option value="8721 Code Name M.I.T.">8721 Code Name M.I.T.</option>
<option value="9094 The Earthquakers">9094 The Earthquakers</option>
<option value="9416 International Operatives of World Affairs">9416 International Operatives of World Affairs</option>
<option value="9439 Knights of Polaris">9439 Knights of Polaris</option>
<option value="10157 Roman Robotics">10157 Roman Robotics</option>
<option value="10400 DART Doane Academy Robotics Team">10400 DART Doane Academy Robotics Team</option>
<option value="11104 Phoenix Phanatics">11104 Phoenix Phanatics</option>
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
