# Events Carousel Specification

## Overview
- **Target file:** `src/components/EventsSection.tsx`
- **Interaction model:** Click-driven carousel

## DOM Structure
- `section#upcoming-events`
  - Section header:
    - `h2`: "Upcoming Events"
    - `h5`: "Events" (label)
  - Carousel of event cards
  - Prev/Next arrows

## Computed Styles

### Section Container
- padding: 100px 60px
- max-width: 1400px
- margin: 0 auto

### h2
- font-family: Barlow Condensed
- font-size: 80px
- font-weight: 700
- color: #202020
- text-transform: uppercase

### h5
- font-family: Red Hat Display
- font-size: 16px
- font-weight: 600
- color: #F4767C
- text-transform: uppercase
- letter-spacing: 2px

### Carousel Container
- display: flex
- gap: 30px
- overflow: hidden

### Event Card
- flex: 0 0 calc(50% - 15px)
- border-radius: 20px
- overflow: hidden
- position: relative
- min-height: 720px
- background-size: cover
- background-position: center

### Date Badge
- position: absolute
- top: 20px
- left: 20px
- background: #FF7900
- color: #ffffff
- padding: 15px 20px
- border-radius: 10px
- text-align: center
- z-index: 2

### Date Badge Day
- font-family: Barlow Condensed
- font-size: 70px
- font-weight: 700
- line-height: 1
- color: #ffffff

### Date Badge Month
- font-family: Red Hat Display
- font-size: 14px
- color: #ffffff
- font-weight: 300

### Event Content Overlay
- position: absolute
- bottom: 0
- left: 0
- right: 0
- padding: 30px
- background: linear-gradient(transparent, rgba(0,0,0,0.8))
- border-radius: 0 0 20px 20px
- z-index: 2

### Event Title
- font-family: Barlow Condensed
- font-size: 28px
- font-weight: 700
- color: #ffffff
- text-transform: uppercase

### Event Location
- font-family: Red Hat Display
- font-size: 14px
- color: #ffffff
- opacity: 0.8
- display: flex
- align-items: center
- gap: 8px
- Icon: map-marker (color: #00D17E)

### Event Time
- font-family: Red Hat Display
- font-size: 14px
- color: #ffffff
- opacity: 0.8
- display: flex
- align-items: center
- gap: 8px
- Icon: clock (color: #E9BB00)

### Event Description
- font-family: Red Hat Display
- font-size: 15px
- color: #ffffff
- font-weight: 300
- opacity: 0.9
- border-top: 1px solid rgba(255,255,255,0.3)
- padding-top: 16px
- margin-top: 16px

### Event CTA Button
- background: #F4767C
- color: #ffffff
- padding: 10px 24px
- border-radius: 9999px
- font-size: 14px
- font-weight: 600
- margin-top: 16px

### Carousel Arrows
- Same as programs carousel arrows

## Text Content (sample events)

### Event 1
- Date: "15" / "Jan 2026"
- Title: "WINTER SPORTS CLINIC"
- Location: "Los Angeles, CA"
- Time: "9:00 AM - 3:00 PM"
- Description: "Join us for a day of multi-sport training, mentorship, and fun activities for youth ages 8-18."
- CTA: "Register Now"

### Event 2
- Date: "22" / "Feb 2026"
- Title: "YOUTH BASKETBALL TOURNAMENT"
- Location: "Inglewood, CA"
- Time: "10:00 AM - 5:00 PM"
- Description: "Competitive tournament featuring teams from across the region. Prizes and awards for top performers."
- CTA: "Register Now"

### Event 3
- Date: "08" / "Mar 2026"
- Title: "FINANCIAL LITERACY WORKSHOP"
- Location: "Compton, CA"
- Time: "1:00 PM - 4:00 PM"
- Description: "Interactive workshop teaching teens budgeting, saving, and money management skills."
- CTA: "Register Now"

## Responsive Behavior
- **Desktop (1440px):** 2 cards visible at a time
- **Tablet (768px):** 1 card visible
- **Mobile (390px):** 1 card, full-width, min-height reduced to 500px
- **Breakpoint:** ~768px
