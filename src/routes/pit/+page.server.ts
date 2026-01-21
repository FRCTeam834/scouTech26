import { query } from '$lib/server/database';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ request }) => {
    try {
      const data = await request.formData();

      // Name
      const name = data.get('name')?.toString() || '';

      // Robot dimensions / stats
      const weightRaw = data.get('weight');
      const weight =
        weightRaw !== null && weightRaw.toString().trim() !== ''
          ? Number(weightRaw)
          : null;

      const lengthRaw = data.get('length');
      const length =
        lengthRaw !== null && lengthRaw.toString().trim() !== ''
          ? Number(lengthRaw)
          : null;

      const heightRaw = data.get('height');
      const height =
        heightRaw !== null && heightRaw.toString().trim() !== ''
          ? Number(heightRaw)
          : null;

      // Cycles
      const cyclesRaw = data.get('cycles');
      const cycles =
        cyclesRaw !== null && cyclesRaw.toString().trim() !== ''
          ? Number(cyclesRaw)
          : null;

      // Climb height
      const climbRaw = data.get('climb');
      const climb_height =
        climbRaw !== null && climbRaw.toString().trim() !== ''
          ? Number(climbRaw)
          : null;

      // Auton climb toggle
      const auton_climb = data.get('auton_climb') === 'on';

      await query(
        `
        INSERT INTO robot_scouting (
          name,
          weight,
          length,
          height,
          cycles,
          climb_height,
          auton_climb
        )
        VALUES ($1,$2,$3,$4,$5,$6,$7)
        `,
        [
          name,
          weight,
          length,
          height,
          cycles,
          climb_height,
          auton_climb
        ]
      );

      return { success: true };
    } catch (error) {
      console.error('Form submission error:', error);
      return { success: false, error: 'Failed to submit form' };
    }
  }
};

