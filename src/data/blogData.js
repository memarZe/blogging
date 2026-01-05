export const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Learn the fundamentals of React and how to build your first component.",
    content: `React is a powerful JavaScript library for building user interfaces. It was developed by Facebook and has become one of the most popular frontend frameworks.

In this post, we'll explore the basics of React, including:
- Components and JSX
- Props and State
- Event Handling
- Lifecycle Methods

React uses a virtual DOM to efficiently update the user interface. This makes React applications fast and responsive, even with complex user interfaces.

To get started, you'll need to install Node.js and create a new React project using Create React App or Vite. Once you have your project set up, you can start building components and creating interactive user interfaces.

Components are the building blocks of React applications. They are reusable pieces of code that return JSX, which describes what should be rendered on the screen. Components can receive data through props and manage their own state.

State in React is used to store data that can change over time. When state changes, React automatically re-renders the component to reflect the new state. This makes it easy to create dynamic and interactive user interfaces.`,
    author: "John Doe",
    date: "2024-01-15",
    category: "React"
  },
  {
    id: 2,
    title: "Modern CSS Techniques",
    excerpt: "Discover the latest CSS features and best practices for modern web development.",
    content: `CSS has evolved significantly over the years, with new features that make it easier to create beautiful and responsive websites.

Some of the modern CSS techniques we'll cover include:
- CSS Grid and Flexbox for layouts
- CSS Variables (Custom Properties)
- Modern Selectors
- Animations and Transitions

CSS Grid is a powerful layout system that allows you to create complex two-dimensional layouts with ease. It's perfect for creating responsive designs that work on any screen size.

Flexbox, on the other hand, is great for one-dimensional layouts. It makes it easy to align and distribute space among items in a container.

CSS Variables allow you to store values that can be reused throughout your stylesheet. This makes it easy to maintain consistent colors, spacing, and other design values.

Modern CSS also includes advanced selectors like :has(), :is(), and :where() that make it easier to target elements based on their relationship to other elements.

Animations and transitions can make your website feel more polished and professional. CSS animations can be used to create smooth transitions between states, while transitions provide a simple way to animate property changes.`,
    author: "Jane Smith",
    date: "2024-01-20",
    category: "CSS"
  },
  {
    id: 3,
    title: "JavaScript ES6+ Features",
    excerpt: "Explore the powerful features introduced in modern JavaScript (ES6 and beyond).",
    content: `JavaScript has seen tremendous improvements with ES6 (ECMAScript 2015) and subsequent versions. These features make JavaScript more powerful and easier to work with.

Key features we'll explore:
- Arrow Functions
- Destructuring
- Template Literals
- Async/Await
- Modules

Arrow functions provide a more concise syntax for writing functions. They also have lexical this binding, which can be very useful in certain situations.

Destructuring allows you to extract values from arrays or properties from objects into distinct variables. This makes it easier to work with complex data structures.

Template literals provide a better way to work with strings. They support multi-line strings and string interpolation, making it easier to create dynamic strings.

Async/await is a modern way to handle asynchronous operations in JavaScript. It makes asynchronous code look and behave more like synchronous code, which can make it easier to understand and debug.

ES6 modules allow you to organize your code into reusable pieces. You can export functions, objects, or values from a module and import them in another module. This helps keep your code organized and maintainable.`,
    author: "Mike Johnson",
    date: "2024-01-25",
    category: "JavaScript"
  },
  {
    id: 4,
    title: "Building Responsive Websites",
    excerpt: "Learn how to create websites that look great on all devices, from mobile phones to desktop computers.",
    content: `Responsive web design is essential in today's multi-device world. With so many different screen sizes, it's important to ensure your website looks good and functions well on all devices.

Key principles of responsive design:
- Mobile-first approach
- Flexible layouts
- Responsive images
- Media queries
- Touch-friendly interfaces

The mobile-first approach means designing for mobile devices first, then enhancing the experience for larger screens. This ensures that your website works well on the smallest screens and progressively enhances for larger devices.

Flexible layouts use relative units like percentages, ems, or rems instead of fixed pixel values. This allows your layout to adapt to different screen sizes.

Responsive images are images that adapt to different screen sizes and resolutions. This can be achieved using the srcset attribute or the picture element.

Media queries allow you to apply different styles based on the characteristics of the device, such as screen width, height, or orientation. This is a powerful tool for creating responsive designs.

Touch-friendly interfaces are important for mobile devices. This means making sure buttons and interactive elements are large enough to be easily tapped, and providing adequate spacing between interactive elements.`,
    author: "Sarah Williams",
    date: "2024-02-01",
    category: "Web Design"
  }
]
