# 🎨 Animation Guide for Mae's Childcare Website

## Available Animations

### Entry Animations (Use on page load)

1. **fadeInUp** - Fades in while sliding up
   ```html
   <div className="animate-fadeInUp">Content</div>
   ```

2. **fadeIn** - Simple fade in
   ```html
   <div className="animate-fadeIn">Content</div>
   ```

3. **slideInLeft** - Slides in from the left
   ```html
   <div className="animate-slideInLeft">Content</div>
   ```

4. **slideInRight** - Slides in from the right
   ```html
   <div className="animate-slideInRight">Content</div>
   ```

5. **scaleIn** - Scales up while fading in
   ```html
   <div className="animate-scaleIn">Content</div>
   ```

### Continuous Animations (Loops forever)

1. **bounce** - Gentle bounce effect (great for emojis/icons)
   ```html
   <div className="animate-bounce">👶</div>
   ```

2. **float** - Smooth floating motion
   ```html
   <div className="animate-float">Content</div>
   ```

### Animation Delays

Add delays to create staggered animations:

```html
<div className="animate-fadeInUp animation-delay-100">First</div>
<div className="animate-fadeInUp animation-delay-200">Second</div>
<div className="animate-fadeInUp animation-delay-300">Third</div>
<div className="animate-fadeInUp animation-delay-400">Fourth</div>
<div className="animate-fadeInUp animation-delay-500">Fifth</div>
```

### Hover Effects

1. **hover-lift** - Lifts up on hover with shadow
   ```html
   <div className="hover-lift">Content</div>
   ```

2. **hover-grow** - Grows slightly on hover
   ```html
   <div className="hover-grow">Content</div>
   ```

3. **Scale on hover** - Using Tailwind
   ```html
   <button className="hover:scale-105 transition">Button</button>
   ```

## Examples from the Website

### Hero Section
```tsx
<h1 className="animate-fadeInUp">Title</h1>
<p className="animate-fadeInUp animation-delay-200">Subtitle</p>
<div className="animate-fadeInUp animation-delay-300">Buttons</div>
<div className="animate-fadeInUp animation-delay-400 animate-float">Info Box</div>
```

### Program Cards
```tsx
<div className="animate-scaleIn hover-lift">
  <div className="animate-bounce">👶</div>
  <h3>Program Name</h3>
  <p>Description</p>
</div>
```

### Gallery Images
```tsx
<div className="hover-lift transition">
  <Image ... />
</div>
```

## Best Practices

1. **Don't Overuse** - Too many animations can be distracting
2. **Use Delays** - Stagger animations for a smooth flow
3. **Match Content** - Bouncing emojis, lifting cards, fading text
4. **Hover Effects** - Add interactivity to buttons and cards
5. **Performance** - Continuous animations (bounce, float) should be used sparingly

## Animation Speed Reference

- **fadeInUp**: 0.6s (quick and snappy)
- **fadeIn**: 0.8s (gentle)
- **scaleIn**: 0.5s (fast)
- **bounce**: 2s loop (gentle rhythm)
- **float**: 3s loop (slow and calm)

## Where to Add More Animations

### Good Candidates:
- ✅ Section headings - `animate-fadeInUp`
- ✅ Cards/Boxes - `animate-scaleIn` + `hover-lift`
- ✅ Images - `animate-fadeIn` + `hover-lift`
- ✅ Buttons - `hover:scale-105`
- ✅ Icons/Emojis - `animate-bounce` (sparingly)
- ✅ Floating elements - `animate-float`

### Avoid:
- ❌ Small text
- ❌ Navigation items
- ❌ Every single element
- ❌ Fast-moving animations for children's sites

## Logo Animation Ideas

For your logo, consider:
1. Gentle floating animation
2. Bounce on page load
3. Subtle scale on hover

```tsx
<div className="animate-float">
  <Image src="/logo.png" alt="Mae's Childcare" />
</div>
```
