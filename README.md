# Next.js 13+ Invalid `href` prop in `<Link>` Component

This repository demonstrates an uncommon error in Next.js 13+ related to the `href` prop of the `<Link>` component.  The error arises when the provided path isn't properly configured or accessible from the client-side, resulting in a warning during development and potential issues in production.

## The Bug
The issue involves using a relative path in `href` that isn't correctly handled by Next.js's routing system. The path might appear correct in simple scenarios, but hidden complexities can surface when dealing with dynamic routes or server-side rendering.