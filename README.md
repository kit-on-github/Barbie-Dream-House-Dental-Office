# Aurelia Dental

A modern, responsive dental practice website designed to provide patients with an accessible and professional digital experience.


## Project Overview

Aurelia Dental is a frontend web development project focused on creating a polished dental practice website.

The project emphasizes:

- Responsive interface design
- Reusable React components
- Consistent visual design
- Accessible navigation
- Organized CSS architecture
- Maintainable frontend code


## Technology Stack

| Technology | Purpose |
|---|---|
| React | Building reusable user interface components |
| Vite | Development server and frontend build tooling |
| JavaScript (JSX) | Application logic and component structure |
| CSS3 | Styling, layouts, and responsive design |
| HTML5 | Semantic page structure |



## Project Structure

```text
src/
├── assets/
│   └── Aurelia-Storefront.png
│
├── components/
│   ├── Header.jsx
│   ├── Header.css
│   ├── HeroSection.jsx
│   └── HeroSection.css
│
├── data/
│
├── pages/
│   ├── Home.jsx
│   └── Home.css
│
├── App.jsx
├── index.css
└── main.jsx
```

## Architecture

### Components
Contains reusable interface elements, including the navigation header and homepage hero section.

### Pages
Contains complete website pages assembled from reusable components.

### Assets
Stores images and other static resources used throughout the application.

### Data
Stores structured content separately from the visual presentation.

### Application Files
- `App.jsx` — assembles the main application interface.
- `index.css` — contains global styles and design tokens.
- `main.jsx` — initializes the React application.


## Design System

### Brand Colors

| Token | Hex Value | Purpose |
|---|---|---|
| `--color-navy` | `#19486a` | Primary brand color |
| `--color-blue` | `#1c70ad` | Secondary brand color |

### Interface Colors

| Token | Hex Value | Purpose |
|---|---|---|
| `--color-background` | `#e8f3f9` | Main page background |
| `--color-white` | `#ffffff` | Cards and surfaces |
| `--color-border` | `#a9c4d4` | Interface borders |

### Typography

| Token | Font | Purpose |
|---|---|---|
| `--font-heading` | Georgia | Headings and brand identity |
| `--font-body` | Arial | Body text and interface content |

### Spacing

| Token | Value |
|---|---|
| `--space-sm` | 0.5rem |
| `--space-md` | 1rem |
| `--space-lg` | 1.5rem |
| `--space-xl` | 2rem |
| `--space-2xl` | 3rem |

### Border Radius

| Token | Value |
|---|---|
| `--radius-sm` | 4px |
| `--radius-md` | 8px |

## Installation and Local Development

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository and navigate into the project directory.

Install the project dependencies:

```bash
npm install

## Component Architecture

The application uses reusable React components to separate individual interface elements from complete pages.

### Header

`Header.jsx` provides the primary site navigation.

Responsibilities:
- Displays the Aurelia Dental brand identity.
- Provides navigation links.
- Supports a responsive mobile menu.
- Manages mobile menu visibility using React state.

### HeroSection

`HeroSection.jsx` introduces the dental practice.

Responsibilities:
- Displays the storefront photograph.
- Presents the practice name and location.
- Uses a responsive layout that adapts to smaller screens.

### Home

`Home.jsx` serves as the homepage composition.

Responsibilities:
- Defines the main page structure.
- Imports and renders the HeroSection component.
- Keeps homepage-specific styling separate from global styles.

### App

`App.jsx` serves as the main application composition.

Responsibilities:
- Imports the Header and Home components.
- Assembles the primary application interface.

## Accessibility

The interface incorporates accessibility considerations to improve usability.

Current implementations include:

- Semantic HTML elements for page structure.
- Descriptive alternative text for the storefront image.
- Accessible labels for the mobile navigation toggle.
- `aria-expanded` to communicate the mobile menu state.
- Visible keyboard focus indicators using `:focus-visible`.
- Navigation links that remain usable on smaller screens.

## Interface Behavior

### Responsive Navigation

The navigation adapts to different screen sizes.

On desktop and tablet screens, navigation links are displayed horizontally and can wrap when necessary.

On mobile screens, the navigation is replaced with a toggle button that opens and closes the navigation menu.

### Responsive Homepage

The homepage hero uses CSS Grid to position the storefront image and practice information side by side.

At smaller screen widths, the layout changes to a single column.

## Project Status

The current implementation includes:

- Responsive site header
- Mobile navigation menu
- Homepage hero section
- Storefront image integration
- Practice location card
- Centralized CSS design tokens
- Responsive desktop and mobile layouts
- Project documentation