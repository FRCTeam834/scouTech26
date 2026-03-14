<script lang="ts">
  let scored = $state(0);
  let misses = $state(0);
  let cycles = $state(0);
  let teleopMisses = $state(0);
  let teleopCycles = $state(0);

  const dec = (value: number) => Math.max(0, value - 5);
  const inc = (value: number) => value + 5;
</script>
<form method="POST">
  <div class="center-wrapper pt-40">

    <select name="name" class="select select-bordered w-full max-w-xs" required>
      <option disabled selected value="">Name</option>
      <option value="Akshaya Guduru">Akshaya Guduru</option>
      <option value="Julia Meaney">Julia Meaney</option>
      <option value="John Coult">John Coult</option>
      <option value="Maddie Oswald">Maddie Oswald</option>
      <option value="Matthew Aung">Matthew Aung</option>
      <option value="Varu Srinivasan">Varu Srinivasan</option>
      <option value="Vedu Srinivasan">Vedu Srinivasan</option>
      <option value="Vamu Srinivasan">Vamu Srinivasan</option>
      <option value="Ben Snyder">Ben Snyder</option>
      <option value="Anand Kunnath">Anand Kunnath</option>
      <option value="Alez Gualfieri">Alez Gualfieri</option>
      <option value="Conner Male">Conner Male</option>
      <option value="Daniel Kim">Daniel Kim</option>
      <option value="Daytona Christman">Daytona Christman</option>
      <option value="Cooper Morgan">Cooper Morgan</option>
      <option value="Dylan Braverman">Dylan Braverman</option>
      <option value="Dominic Veneziale">Dominic Veneziale</option>
      <option value="Grace Russell">Grace Russell</option>
      <option value="Geo Jung">Geo Jung</option>
      <option value="Jake Tsyvine">Jake Tsyvine</option>
      <option value="Grant Hufgard">Grant Hufgard</option>
      <option value="Manas Pol">Manas Pol</option>
      <option value="Mark Hernandez Guerra">Mark Hernandez Guerra</option>
      <option value="Krupa Dihora">Krupa Dihora</option>
      <option value="Sebastian Velez">Sebastian Velez</option>
      <option value="Quinn Ham">Quinn Ham</option>
      <option value="Victor Bodea">Victor Bodea</option>
      <option value="Mason Gildein">Mason Gildein</option>
      <option value="Matthew Ryan">Matthew Ryan</option>
      <option value="Vanessa Trbuza">Vanessa Trbuza</option>
      <option value="Yusef Syed">Yusef Syed</option>
      <option value="Myles Bartholomew">Myles Bartholomew</option>
      <option value="Liam Karlson">Liam Karlson</option>
    </select>

    <br><br>

    <input
      type="number"
      name="matchNumber"
      placeholder="Match #"
      class="input place-self-center input-bordered w-full max-w-xs center"
      required
      min="1"
    />
    
    <br><br><br><br>

    <select name="teamName" class="select select-bordered w-full max-w-xs" required>
<option disabled selected value="">Team Name</option>
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

    <h1 class="text-3xl font-bold mt-4">Auton</h1>

    <h1>How many balls did they score?</h1>
    <div class="flex w-48 items-center justify-between">
      <button type="button" class="btn" on:click={() => (scored = dec(scored))}>-</button>
      <input type="number" name="scored" bind:value={scored} min="0" class="input w-16 text-center" />
      <button type="button" class="btn" on:click={() => (scored = inc(scored))}>+</button>
    </div>

    <div class="flex w-48 items-center justify-between">
      <h1>Did they climb?</h1>
      <input
        type="checkbox"
        name="climbed"
        class="toggle border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
      />
    </div>

    <h1 class="text-3xl font-bold mt-4">Teleop</h1>

    <h1>how many balls did they score? </h1>
    <div class="flex w-48 items-center justify-between">
      <button type="button" class="btn" on:click={() => (teleopMisses = dec(teleopMisses))}>-</button>
      <input type="number" name="teleopMisses" bind:value={teleopMisses} min="0" class="input w-16 text-center" />
      <button type="button" class="btn" on:click={() => (teleopMisses = inc(teleopMisses))}>+</button>
    </div>

    <select name="climb" class="select select-bordered w-full max-w-xs">
      <option disabled selected value="">Climb Height</option>
      <option value ="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <div class="flex w-48 items-center justify-between">
      <h1>Did they break?</h1>
      <input
        type="checkbox"
        name="broke"
        class="toggle border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
      />
    </div>

    <input name="defence" placeholder="Defence Notes scale of 1-5" class="input w-full max-w-xs" />
    <input name="notes" placeholder="scale of 1-5 how good was their driver" class="input w-full max-w-xs" />

    <button type="submit" class="btn">Submit</button>
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
