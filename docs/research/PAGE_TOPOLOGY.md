# Page Topology — fundamentalsportslabs.org

## Sections (top to bottom)

| # | ID | Working Name | Type | Interaction Model |
|---|-----|-------------|------|-------------------|
| 1 | `#top` / `#header-outer` | **Header/Nav** | Fixed overlay | Scroll-triggered (shrink/shadow on scroll) |
| 2 | `#hero-sec` | **Hero** | Flow | Static + cloud animation (CSS keyframes) |
| 3 | `#mission` | **Mission** | Flow | Static (possible scroll-reveal) |
| 4 | `#our-approach` | **Four Pillars** | Flow | Static (staggered card layout) |
| 5 | `#program-sec` | **Programs Carousel** | Flow | Click-driven (Owl Carousel prev/next) |
| 6 | `#our-results-icon` | **Impact Stats** | Flow | Static (possible counter animation) |
| 7 | `#upcoming-events` | **Events Carousel** | Flow | Click-driven (Owl Carousel prev/next) |
| 8 | `#testimonials` | **Testimonials Carousel** | Flow | Click-driven (Owl Carousel prev/next) |
| 9 | `#donate` | **Donation CTA** | Flow | Static |
| 10 | `#ft-sec` | **Footer** | Flow | Static |

## Page Layout
- Single column, full-width sections
- No sidebar
- Header is fixed/sticky at top with z-index above all content
- Cloud animation runs continuously in hero background
- Carousels (programs, events, testimonials) use Owl Carousel with prev/next arrows
- Footer overlaps donation section with negative margin (-190px)

## Color-coded pillar system
The 4 accent colors map to the 4 pillars:
- Blue (#0052FE) → Athletic Training
- Orange (#FF7900) → Mental Wellness
- Green (#00D17E) → Financial Literacy
- Yellow (#E9BB00) → Technology Education

These colors repeat throughout: pillar cards, testimonial cards, event date badges, stat icons.
