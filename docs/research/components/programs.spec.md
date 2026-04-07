# Programs Carousel Specification

## Overview
- **Target file:** `src/components/ProgramsSection.tsx`
- **Interaction model:** Click-driven carousel (prev/next arrows)

## DOM Structure
- `section#program-sec`
  - Section header (left-aligned):
    - `h4`: "Building Futures through" (decorative)
    - `h2`: "our Programs" (large heading)
    - `h5`: "Our Goals" (label)
    - `p`: description text
  - Carousel container
    - Horizontal scrollable cards
    - Prev/Next arrow buttons
  - CTA: "Join a Program" button

## Computed Styles

### Section Container
- padding: 100px 60px
- max-width: 1400px
- margin: 0 auto

### Section h4
- font-family: bon-vivant
- font-size: 48px
- color: #F4767C

### Section h2
- font-family: Barlow Condensed
- font-size: 80px
- font-weight: 700
- color: #202020
- text-transform: uppercase

### Section h5
- font-family: Red Hat Display
- font-size: 16px
- font-weight: 600
- color: #F4767C
- text-transform: uppercase
- letter-spacing: 2px

### Description p
- font-family: Red Hat Display
- font-size: 17px
- color: #868686
- font-weight: 300
- max-width: 600px

### Carousel Container
- display: flex
- gap: 20px
- overflow-x: hidden (controlled by arrows)
- scroll-behavior: smooth

### Program Card
- width: ~350px
- flex-shrink: 0
- border-radius: 20px
- overflow: hidden
- background: #ffffff
- box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px
- transition: all 0.5s
- cursor: pointer

### Card Hover State
- transform: translateY(-20px)
- box-shadow: 12px 12px 50px rgba(0, 0, 0, 0.4)

### Card Image Area
- height: ~240px
- width: 100%
- overflow: hidden
- border-radius: 20px 20px 0 0

### Card Content Area
- padding: 24px
- position: relative

### Card Icon (small, overlapping image/content border)
- width: 50px
- height: 50px
- position: absolute
- top: -25px
- left: 24px
- background: white
- border-radius: 50%
- padding: 8px
- box-shadow: 0 2px 8px rgba(0,0,0,0.1)

### Card Title
- font-family: Barlow Condensed
- font-size: 22px
- font-weight: 700
- color: #202020
- text-transform: uppercase
- margin-top: 16px

### Card Subtitle
- font-family: Red Hat Display
- font-size: 14px
- color: #868686
- font-weight: 300
- margin-bottom: 16px

### Card Features List
- list-style: none
- padding: 0

### Feature Item
- font-family: Red Hat Display
- font-size: 14px
- color: #434343
- padding: 6px 0
- display: flex
- align-items: flex-start
- gap: 8px
- before: green checkmark or bullet

### Carousel Arrows
- width: 50px
- height: 50px
- border-radius: 50%
- background: #F4767C
- color: #ffffff
- display: flex
- align-items: center
- justify-content: center
- cursor: pointer
- position: absolute
- top: 45%

### "Join a Program" Button
- background: #F4767C
- color: #ffffff
- padding: 15px 40px
- border-radius: 9999px
- font-size: 16px
- font-weight: 600
- margin-top: 40px
- display: block
- text-align: center

## Per-State Content (8 cards)

### Card 1: After-School & Summer
- Image: `/images/92bcf7bcbc.png`
- Icon: `/images/program-icon01.png`
- Title: "After-School & Summer"
- Subtitle: "Safe, structured, and inspiring environments for year-round growth."
- Features:
  - "Multi-sport activities and enrichment sessions"
  - "Homework help and leadership workshops"
  - "Summer camps with fitness, fun, and personal development"

### Card 2: Tournaments & Clinics
- Image: `/images/Rectangle-19588-1.png`
- Icon: `/images/trophy.png`
- Title: "Tournaments & Clinics"
- Subtitle: "Competitive and skill-building opportunities that promote teamwork and growth."
- Features:
  - "Seasonal tournaments across multiple sports"
  - "Skill clinics taught by professional trainers"
  - "Recognition and award opportunities"

### Card 3: Equipment & Supplies Donation
- Image: `/images/program-03.png`
- Icon: `/images/program-icon03.png`
- Title: "Equipment & Supplies Donation"
- Subtitle: "Ensuring every athlete has the tools to play and succeed."
- Features:
  - "Collection and distribution of new and gently used gear"
  - "Partnerships with brands and donors"
  - "Support for underserved youth and programs"

### Card 4: Sports Psychology
- Image: `/images/program-04.png`
- Icon: `/images/program-icon04.png`
- Title: "Sports Psychology"
- Subtitle: "Building mental strength, focus, and resilience on and off the field."
- Features:
  - "Mindset training and emotional wellness support"
  - "Stress management and confidence workshops"
  - "Access to licensed sports psychologists"

### Card 5: Recovery Optimization
- Image: `/images/gettyimages-1139743489-612x612-1.png`
- Icon: `/images/dna-1.png`
- Title: "Recovery Optimization"
- Subtitle: "Helping young athletes stay healthy, strong, and ready to perform."
- Features:
  - "Injury prevention and recovery education"
  - "Nutrition and hydration guidance"
  - "Access to certified athletic trainers and recovery tools"

### Card 6: Mentorship & Coaching
- Image: `/images/program-06.png`
- Icon: `/images/program-icon06.png`
- Title: "Mentorship & Coaching"
- Subtitle: "Empowering youth through guidance, motivation, and personalized development."
- Features:
  - "One-on-one and group mentorship programs"
  - "Focus on leadership, discipline, and goal setting"
  - "Led by experienced coaches and community role models"

### Card 7: Financial Literacy
- Image: `/images/Rectangle-19588.png`
- Icon: `/images/piggy-bank.png`
- Title: "Financial Literacy"
- Subtitle: "Teaching young athletes how to win both on the field and in life."
- Features:
  - "Interactive workshops on budgeting, saving, and investing"
  - "Real-world money management lessons for teens"
  - "Empowering financial responsibility and future readiness"

### Card 8: Technology Education
- Image: `/images/program-2.png`
- Icon: `/images/glasses.png`
- Title: "Technology Education"
- Subtitle: "Bridging the gap between athletics and innovation."
- Features:
  - "Hands-on learning in coding, robotics, and digital tools"
  - "Programs that connect STEM with sports performance"
  - "Preparing youth for careers in tech and emerging industries"

## Responsive Behavior
- **Desktop (1440px):** Shows ~3 cards at a time, horizontal scroll via arrows
- **Tablet (768px):** Shows ~2 cards
- **Mobile (390px):** Shows 1 card, full-width
- **Breakpoint:** Adjusts at ~768px and ~520px
