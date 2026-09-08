# Florida Fitness Elevate

Create a premium, modern and high-converting website for:

Business Name: FLORIDA FITNESS
Phone: +1 352-658-8040
Email: floridafitnesstrenton@gmail.com
Location: 535 SE SR-26, FL 32693

This is a fitness business. Do NOT add an About Me, founder or personal biography section.

Use ONLY these main brand colors:
#003049 (Deep Navy Blue)
#DB1A1A (Premium Red)

Use white/neutral colors only where needed for readability.

Create an ultra-premium, energetic and visually powerful fitness website with strong typography, cinematic fitness imagery, smooth animations, micro-interactions and elegant scroll-reveal effects.

Website sections:

1. Ultra-premium animated Hero section
2. Fitness Services / Programs
3. ONE dedicated premium Visual Showcase section
4. Membership / Training Benefits
5. Testimonials
6. Our Team near the bottom
7. Contact / Location
8. Premium Footer

IMPORTANT:
- Fully responsive for desktop, tablet and mobile
- Do not create unnecessary image-heavy sections
- Keep only ONE major image/visual showcase section
- Do not place team images side-by-side with long text
- Keep the website clean, powerful, expensive and professional


========================
3D TESTIMONIALS
========================

Integrate the provided 3D Vertical Marquee component into the Testimonials section.

Create the reusable component in:

/components/ui/3d-testimonails.tsx

The project should support:
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

Use the provided Marquee component structure with:
- Vertical marquee
- Multiple animated columns
- Alternating/reverse directions
- Pause on hover
- Infinite smooth animation
- 3D perspective
- Gradient overlays

Use:
- @/lib/utils and cn()
- shadcn Card
- shadcn Avatar
- @radix-ui/react-avatar

Replace ALL original demo testimonials with realistic FLORIDA FITNESS member testimonials.

Use fitness-related reviews about:
- Strength improvement
- Weight loss
- Personal training
- Confidence
- Cardio performance
- Supportive fitness community

Use realistic names and relevant fitness profile images.

Style the entire testimonial section using the Florida Fitness brand colors:

#003049
#DB1A1A

Add the required marquee keyframes and animations to the existing Tailwind/global CSS:

animate-marquee
animate-marquee-vertical

Keep the testimonial component responsive and premium on mobile.


========================
CIRCULAR 3D FITNESS GALLERY
========================

Use the provided Circular Gallery component inside the ONE dedicated Visual Showcase section.

Create:

/components/ui/circular-gallery.tsx

Keep the main functionality:

- 3D circular rotation
- Scroll interaction
- Auto rotation
- 3D perspective
- Smooth transitions
- Dynamic card opacity

DO NOT use the original animal content.

Replace all gallery items with Florida Fitness content such as:

- Strength Training
- Personal Training
- Cardio Performance
- Group Fitness
- Weight Training
- Functional Fitness
- Gym Equipment
- Fitness Community
- Performance Training
- Transformation Programs

Use high-quality fitness images automatically.

Replace animal scientific names with premium fitness subtitles such as:

"Build Power & Confidence"
"Train With Purpose"
"Push Your Limits"
"Stronger Together"
"Move Better Every Day"

Use Florida Fitness colors and styling.

IMPORTANT:
Do NOT apply the original 500vh demo layout to the entire website.

Integrate the scroll-based gallery naturally inside its own visual showcase section without making the entire website unnecessarily long.

Make the gallery responsive by reducing card size and radius on mobile if necessary.


========================
TECHNICAL REQUIREMENTS
========================

Use the standard reusable component path:

/components/ui

Install all required dependencies, including:

@radix-ui/react-avatar

Use Lucide React for icons where needed.

For components using:

useState
useEffect
useRef
window
document
requestAnimationFrame

ensure they are implemented correctly as client-side components.

If using Next.js, add "use client" where necessary.

Fix all TypeScript issues and ensure the final website builds without errors.


========================
FINAL RULES
========================

- NO About Me section
- NO founder/personal biography
- ONLY ONE major image showcase section
- Use Circular 3D Gallery in that showcase section
- Use 3D Marquee in the Testimonials section
- Keep Our Team near the bottom
- Replace all demo/animal/AI content with Florida Fitness content
- Do not make the website look like a generic gym template

Final result should feel ultra-premium, modern, energetic, high-end and conversion-focused, with a cohesive Florida Fitness brand experience.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://florida-fit-showcase.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5f7b6bba-0414-4609-b546-e3560d8c634a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
