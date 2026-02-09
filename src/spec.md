# Specification

## Summary
**Goal:** Build a single-page PhysioTrack landing site that explains the app and includes an interactive daily check-in that calculates a 0–100 health score and shows tailored tips.

**Planned changes:**
- Create a one-route, single-page layout with clear sections describing the daily check-in, health score output, and tips guidance (English text referencing “PhysioTrack”).
- Add an interactive “Daily Check-in” questionnaire (e.g., sleep, stress, pain/soreness, activity, hydration, mood) with submit to calculate and display a 0–100 score.
- Display 3–5 actionable tips that vary based on the user’s answers, plus a clear way to retake/edit the check-in and recalculate.
- Apply a coherent, distinctive visual theme (consistent typography/spacing/components) that is responsive and avoids a blue/purple-dominant palette.
- Add and render generated static images from `frontend/public/assets/generated` using the specified filenames (no backend fetching).

**User-visible outcome:** Visitors see a responsive one-page PhysioTrack landing page, can complete a daily check-in on the same page, and receive an immediate health score (0–100) with tips that change based on their responses, with the ability to redo the check-in.
