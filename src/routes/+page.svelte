<script lang="ts">
  let scored = 0;
  let misses = 0;
  let cycles = 0;
  let teleopMisses = 0;
  let teleopCycles = 0;

  // rating variables
  let defense = 3;
  let shoot = 3;
  let evade = 3;
  let pickup = 3;

  const dec = (value: number) => Math.max(0, value - 5);
  const inc = (value: number) => value + 5;
</script>

<form method="POST">
  <div class="center-wrapper pt-40">

    <!-- Name -->
    <div class="flex items-center space-x-2">
      <h2 class="text-1xl">Name</h2>
      <select name="name" class="select select-bordered" required>
        <option disabled selected value=""></option>
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
        <option value="Emma Husvar">Emma Husvar</option>
      </select>
    </div>

    <br><br>

    <!-- Match Number -->
    <input
      type="number"
      name="matchNumber"
      placeholder="Match #"
      class="input input-bordered w-full max-w-xs"
      required
      min="1"
    />

    <br><br><br><br>

    <!-- Team -->
    <select name="teamName" class="select select-bordered w-full max-w-xs" required>
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

    <!-- Auton -->
    <h1 class="text-3xl font-bold mt-4">Auton</h1>

    <h1>How many balls did they score?</h1>
    <div class="flex w-48 items-center justify-between">
      <button type="button" class="btn" on:click={() => (scored = dec(scored))}>-</button>
      <input type="number" name="scored" bind:value={scored} min="0" class="input w-16 text-center" />
      <button type="button" class="btn" on:click={() => (scored = inc(scored))}>+</button>
    </div>

    <div class="flex w-48 items-center justify-between">
      <h1>Did they climb?</h1>
      <input type="checkbox" name="climbed" class="toggle" />
    </div>

    <!-- Teleop -->
    <h1 class="text-3xl font-bold mt-4">Teleop</h1>

    <select name="climb" class="select select-bordered w-full max-w-xs">
      <option disabled selected value="">Teleop Climb Height</option>
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <div class="flex w-48 items-center justify-between">
      <h1>Did they break?</h1>
      <input type="checkbox" name="broke" class="toggle" />
    </div>

    <br>

    {#each [
      { label: "They played good defense", bind: defense, name: "defense" },
      { label: "they played good defense", bind: shoot, name: "shoot" },
      { label: "they evaded other defenders well", bind: evade, name: "evade" },
      { label: "they picked up balls efficiently", bind: pickup, name: "pickup" }
    ] as item}

      <h1>{item.label}</h1>
      <div class="flex items-center space-x-2">
        <h1>Strongly Disagree</h1>

        {#each [1,2,3,4,5] as val}
          <input
            type="radio"
            name={item.name}
            value={val}
            bind:group={item.bind}
            class={`radio ${
              val % 2 === 1
                ? "bg-red-100 border-red-300 checked:bg-orange-200 checked:text-red-600 checked:border-red-600"
                : "bg-blue-100 border-blue-300 checked:bg-blue-200 checked:text-blue-600 checked:border-blue-600"
            }`}
          />
        {/each}

        <h1>Strongly Agree</h1>
      </div>

    {/each}

    <button type="submit" class="btn mt-4">Submit</button>
  </div>
</form>

<style>
  .center-wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
  }
</style>