# Header/Navigation Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Interaction model:** Scroll-triggered (background/shadow change on scroll)

## DOM Structure
- `header` fixed at top, full-width, z-index 9999
  - Container (max-width ~1400px, centered)
    - Logo: `img` src="/images/ft-logo.png" alt="F.S.L"
    - `nav > ul` — horizontal menu
      - Links: Home, About (#mission), Our Approach (#our-approach), Programs (#program-sec), Impact (#our-results), Events (#upcoming-events)
    - CTA buttons: "Join Now!" (link to /join) and "Donate Now!" (external link to zeffy.com)

## Computed Styles

### Header Container
- position: fixed
- top: 0
- left: 0
- width: 100%
- z-index: 9999
- padding: 15px 30px
- display: flex
- align-items: center
- justify-content: space-between
- transition: all 0.5s
- background: transparent (initial) → rgba(255,255,255,0.95) (scrolled)
- box-shadow: none (initial) → 0 2px 20px rgba(0,0,0,0.1) (scrolled)

### Logo
- height: 50px
- width: auto

### Nav Links
- font-family: Red Hat Display
- font-size: 16px
- font-weight: 400
- color: #ffffff (initial, on transparent header) → #202020 (scrolled)
- text-decoration: none
- padding: 8px 16px
- transition: color 0.3s

### CTA "Join Now!" Button
- background: #F4767C
- color: #ffffff
- padding: 10px 24px
- border-radius: 9999px
- font-weight: 600
- font-size: 14px
- text-transform: uppercase

### CTA "Donate Now!" Button
- background: transparent
- border: 2px solid #F4767C
- color: #F4767C (initial) → #F4767C (scrolled)
- padding: 10px 24px
- border-radius: 9999px
- font-weight: 600
- font-size: 14px

## States & Behaviors

### Scroll-triggered background
- **Trigger:** scroll position > 50px
- **State A (top):** background: transparent, box-shadow: none, nav text color: #fff
- **State B (scrolled):** background: rgba(255,255,255,0.95), box-shadow: 0 2px 20px rgba(0,0,0,0.1), nav text color: #202020
- **Transition:** all 0.5s ease
- **Implementation:** useState + useEffect scroll listener

### Hover states
- Nav links: opacity 0.7 on hover
- CTA buttons: slight scale(1.05) on hover

## Assets
- Logo: `/images/ft-logo.png`

## Text Content
- Nav items: Home, About, Our Approach, Programs, Impact, Events
- CTA 1: "Join Now!" → href="/join"
- CTA 2: "Donate Now!" → href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-19257"

## Responsive Behavior
- **Desktop (1440px):** Full horizontal nav with all items visible
- **Tablet/Mobile (<1000px):** Hamburger menu, nav collapses to mobile drawer
- **Breakpoint:** ~1000px
