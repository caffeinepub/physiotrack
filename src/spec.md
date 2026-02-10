# Specification

## Summary
**Goal:** Make the “Take Quiz” call-to-action more prominent on the PhysioTrack landing page while keeping existing navigation behavior unchanged.

**Planned changes:**
- Add a large, clearly visible “Take Quiz” button within the main landing page content (e.g., hero section) that calls the existing onNavigateToQuiz handler.
- Keep the existing small header “Take Quiz” button as-is and ensure both buttons navigate to the quiz view.
- Ensure the new button uses existing UI components (shadcn Button) and remains responsive/tappable on small screens without overlapping other content.

**User-visible outcome:** On the landing page, users will see a prominent “Take Quiz” button in the main content area that takes them to the quiz, in addition to the existing header button.
