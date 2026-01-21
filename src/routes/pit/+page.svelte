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
  <div class="center-wrapper mt-40">

    <select name="name" class="select select-bordered w-full max-w-xs" required>
  <option disabled selected>Name</option>
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
      name="height"
      placeholder="Robot Height"
/>
</div>
<div class="flex w-48 items-center justify-between">
<select name="climb" class="select select-bordered w-full max-w-xs">
    <option disabled selected>Climb Height</option>
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