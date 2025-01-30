```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href='/about' legacyBehavior>
        <a>About</a>
      </Link>
    </div>
  );
}

export default MyComponent; 
```
This solution addresses the issue by adding the `legacyBehavior` prop to the `<Link>` component.  This prop forces Next.js to use the older routing behavior which can often resolve issues with relative paths.  However,  it is recommended to resolve the underlying issue. To do this make sure your `/about` page exists and is configured to be accessible client side.  Alternatively, ensure your relative path is correct and points to an accessible page.  If the path is dynamic, double-check your routing configuration.