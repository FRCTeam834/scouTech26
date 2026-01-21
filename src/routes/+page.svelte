<script lang="ts">
  let misses = $state(0);
  let cycles = $state(0);
  let teleopMisses = $state(0);
  let teleopCycles = $state(0);

  const dec = (value: number) => Math.max(0, value - 1);
  const inc = (value: number) => value + 1;
</script>

<form method="POST">
  <div class="center-wrapper mt-40 min-h-screen bg-base-100 text-base-content ">

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
      <option value="Kyler Mooney">Kyler Mooney</option>
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
      <option value="834 Spartechs">834 SparTechs</option>
    </select>

    <h1 class="text-3xl font-bold mt-4">Auton</h1>

    <h1>Misses</h1>
    <div class="flex w-48 items-center justify-between">
      <button type="button" class="btn" on:click={() => (misses = dec(misses))}>-</button>
      <input type="number" name="misses" bind:value={misses} min="0" class="input w-16 text-center" />
      <button type="button" class="btn" on:click={() => (misses = inc(misses))}>+</button>
    </div>

    <h1>Cycles</h1>
    <div class="flex w-48 items-center justify-between">
      <button type="button" class="btn" on:click={() => (cycles = dec(cycles))}>-</button>
      <input type="number" name="cycles" bind:value={cycles} min="0" class="input w-16 text-center" />
      <button type="button" class="btn" on:click={() => (cycles = inc(cycles))}>+</button>
    </div>

    <div class="flex w-48 items-center justify-between">
      <h1>Did they climb?</h1>
      <!-- name matches server: climbed -->
      <input
        type="checkbox"
        name="climbed"
        class="toggle border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
      />
    </div>

    <h1 class="text-3xl font-bold mt-4">Teleop</h1>

    <h1>Misses</h1>
    <div class="flex w-48 items-center justify-between">
      <button type="button" class="btn" on:click={() => (teleopMisses = dec(teleopMisses))}>-</button>
      <input type="number" name="teleopMisses" bind:value={teleopMisses} min="0" class="input w-16 text-center" />
      <button type="button" class="btn" on:click={() => (teleopMisses = inc(teleopMisses))}>+</button>
    </div>

    <h1>Cycles</h1>
    <div class="flex w-48 items-center justify-between">
      <button type="button" class="btn" on:click={() => (teleopCycles = dec(teleopCycles))}>-</button>
      <input type="number" name="teleopCycles" bind:value={teleopCycles} min="0" class="input w-16 text-center" />
      <button type="button" class="btn" on:click={() => (teleopCycles = inc(teleopCycles))}>+</button>
    </div>

    <select name="climb" class="select select-bordered w-full max-w-xs">
      <option disabled selected value="">Climb Height</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <div class="flex w-48 items-center justify-between">
      <h1>Did they break?</h1>
      <!-- name matches server: broke -->
      <input
        type="checkbox"
        name="broke"
        class="toggle border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
      />
    </div>

    <input name="defence" placeholder="Defence Notes" class="input w-full max-w-xs" />
    <input name="notes" placeholder="Additional Notes" class="input w-full max-w-xs" />

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
