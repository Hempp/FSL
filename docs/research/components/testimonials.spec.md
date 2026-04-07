# Testimonials Section Specification

## Overview
- **Target file:** `src/components/TestimonialsSection.tsx`
- **Interaction model:** Click-driven carousel

## DOM Structure
- `section#testimonials`
  - Section header:
    - `h2`: "Testimonials"
    - `h5`: "Client Testimonials" (rotated -15deg)
  - Carousel of 3+ testimonial cards
  - Prev/Next arrows

## Computed Styles

### Section Container
- padding: 100px 60px
- max-width: 1400px
- margin: 0 auto
- position: relative

### h2
- font-family: Barlow Condensed
- font-size: 80px
- font-weight: 700
- color: #202020
- text-transform: uppercase

### h5 (Rotated label)
- font-family: bon-vivant
- font-size: 24px
- color: #F4767C
- transform: rotate(-15deg)
- position: absolute or offset

### Carousel
- display: flex
- gap: 30px
- overflow: hidden

### Testimonial Card (shared base)
- padding: 40px
- border-radius: 20px
- border-top: 4px solid (varies per card)
- min-height: 300px
- flex: 0 0 calc(33.333% - 20px)

### Card 1 (Blue theme)
- background: #F4F8FF
- border-top-color: #0052FE
- Quote icon SVG fill: #0052FE
- Star color: #1041f4

### Card 2 (Orange theme)
- background: #FFF6EE
- border-top-color: #FF7900
- Quote icon SVG fill: #ff802a
- Star color: #FF7900

### Card 3 (Green theme)
- background: #EBFBF5
- border-top-color: #00D17E
- Quote icon SVG fill: #00d188
- Star color: #00D17E

### Quote Icon (SVG)
- Width: 40px
- Height: 40px
- Margin-bottom: 20px

### Star Rating
- display: flex
- gap: 4px
- margin-bottom: 16px
- Each star: 20px wide SVG

### Client Name
- font-family: Barlow Condensed
- font-size: 35px
- font-weight: 700
- color: #202020
- border-top: 1px solid rgba(0,0,0,0.1)
- padding-top: 20px
- margin-top: 20px

### Quote Text
- font-family: Red Hat Display
- font-size: 16px
- color: #868686
- font-weight: 300
- line-height: 26px
- min-height: 100px

### Carousel Arrows
- Same as other carousels

## Text Content

### Testimonial 1
- Name: "Marcus J."
- Stars: 5
- Quote: "F.S.L changed my son's life. The coaching and mentorship gave him confidence both on and off the court. We're forever grateful."

### Testimonial 2
- Name: "Lisa T."
- Stars: 5
- Quote: "The financial literacy program opened my daughter's eyes to saving and planning. She now has a savings account and a budget at 14!"

### Testimonial 3
- Name: "Coach Davis"
- Stars: 5
- Quote: "As a community partner, I've seen firsthand how F.S.L transforms young athletes into leaders. Their holistic approach is unmatched."

## Responsive Behavior
- **Desktop (1440px):** 3 cards visible
- **Tablet (768px):** 2 cards visible
- **Mobile (390px):** 1 card, full-width
- **Breakpoint:** ~768px
