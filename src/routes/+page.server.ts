import { query } from '$lib/server/database';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ request }) => {
    try {
      const data = await request.formData();

      const name = data.get('name')?.toString() || '';
      const team_name = data.get('teamName')?.toString() || '';

      const matchRaw = data.get('matchNumber');
      const match_number =
        matchRaw !== null && matchRaw.toString().trim() !== ''
          ? Number(matchRaw)
          : null;

      const auton_misses = Number(data.get('misses')) || 0;
      const auton_cycles = Number(data.get('cycles')) || 0;
      const teleop_misses = Number(data.get('teleopMisses')) || 0;
      const teleop_cycles = Number(data.get('teleopCycles')) || 0;

      const climbRaw = data.get('climb');
      const climb_height =
        climbRaw !== null && climbRaw.toString().trim() !== ''
          ? Number(climbRaw)
          : null;

  
      const climbed = data.get('climbed') === 'on';
      const broke = data.get('broke') === 'on';

      const defence = data.get('defence')?.toString() || '';
      const notes = data.get('notes')?.toString() || '';

      await query(
        `INSERT INTO match_scouting (
          name, match_number, team_name,
          auton_misses, auton_cycles,
          teleop_misses, teleop_cycles,
          climb_height, climbed, broke,
          defence, notes
        )
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`,
        [
          name, match_number, team_name,
          auton_misses, auton_cycles,
          teleop_misses, teleop_cycles,
          climb_height, climbed, broke,
          defence, notes
        ]
      );

      return { success: true };
    } catch (error) {
      console.error('Form submission error:', error);
      return { success: false, error: 'Failed to submit form' };
    }
  }
};
