import { query } from '$lib/server/database';
import type { Actions } from './$types';
import { env } from '$env/dynamic/private';

console.log("DATABASE_URL:", env.DATABASE_URL);

// Helper to safely parse numbers, returns null if invalid
function parseIntOrNull(value: FormDataEntryValue | null) {
  if (!value) return null;
  const n = Number(value);
  return Number.isNaN(n) ? null : n;
}

export const actions: Actions = {
  default: async ({ request }) => {
    try {
      const data = await request.formData();

      // Basic info
      const name = data.get('name')?.toString() || '';
      const team_name = data.get('teamName')?.toString() || '';
      const match_number = parseIntOrNull(data.get('matchNumber'));

      // Auton / Teleop stats
      const auton_misses = parseIntOrNull(data.get('misses')) ?? 0;
      const auton_cycles = parseIntOrNull(data.get('cycles')) ?? 0;
      const teleop_misses = parseIntOrNull(data.get('teleopMisses')) ?? 0;
      const teleop_cycles = parseIntOrNull(data.get('teleopCycles')) ?? 0;

      // Climb
      const climb_height = parseIntOrNull(data.get('climb'));
      const climbed = data.get('climbed') === 'on';
      const broke = data.get('broke') === 'on';

      // Ratings
      const defence = parseIntOrNull(data.get('defence')) ?? 0;
      const defense = parseIntOrNull(data.get('defense')) ?? 0;
      const shoot = parseIntOrNull(data.get('shoot')) ?? 0;
      const evade = parseIntOrNull(data.get('evade')) ?? 0;
      const pickup = parseIntOrNull(data.get('pickup')) ?? 0;

      // Notes
      const notes = data.get('notes')?.toString() || '';

      // Insert into bensalem table
      await query(
        `INSERT INTO bensalem (
          name, match_number, team_name,
          auton_misses, auton_cycles,
          teleop_misses, teleop_cycles,
          climb_height, climbed, broke,
          defence, defense, shoot, evade, pickup, notes
        )
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)`,
        [
          name, match_number, team_name,
          auton_misses, auton_cycles,
          teleop_misses, teleop_cycles,
          climb_height, climbed, broke,
          defence, defense, shoot, evade, pickup, notes
        ]
      );

      return { success: true };
    } catch (error) {
      console.error('Form submission error:', error);
      return { success: false, error: 'Failed to submit form' };
    }
  }
};