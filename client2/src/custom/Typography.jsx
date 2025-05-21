import { cn } from '@/lib/utils';

export function TypographyH1({ children, className, ...props }) {
  return (
    <h1
      className={cn(
        'scroll-m-20 sm:text-4xl lg:text-5xl text-2xl font-extrabold tracking-tight',
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className, ...props }) {
  return (
    <h2
      className={cn(
        'scroll-m-20 sm:text-3xl text-xl font-bold tracking-tight',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className, ...props }) {
  return (
    <h3
      className={cn(
        'scroll-m-20 sm:text-2xl text-lg font-semibold tracking-tight',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({ children, className, ...props }) {
  return (
    <h4
      className={cn(
        'scroll-m-20 sm:text-xl text-md font-semibold tracking-tight',
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
}

export function TypographyP({ children, className, ...props }) {
  return (
    <p
      className={cn('leading-7', className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function TypographyBlockquote({ children, className, ...props }) {
  return (
    <blockquote
      className={cn('mt-6 border-l-2 pl-6 italic', className)}
      {...props}
    >
      {children}
    </blockquote>
  );
}

export function TypographyList({ children, className, ...props }) {
  return (
    <ul
      className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)}
      {...props}
    >
      {children}
    </ul>
  );
}

export function TypographyLead({ children, className, ...props }) {
  return (
    <p className={cn('sm:text-xl text-sm text-muted-foreground', className)} {...props}>
      {children}
    </p>
  );
}

export function TypographyLarge({ children, className, ...props }) {
  return (
    <div className={cn('sm:text-lg text-md font-semibold', className)} {...props}>
      {children}
    </div>
  );
}

export function TypographySmall({ children, className, ...props }) {
  return (
    <small
      className={cn('text-sm font-medium leading-none', className)}
      {...props}
    >
      {children}
    </small>
  );
}

export function TypographyMuted({ children, className, ...props }) {
  return (
    <p className={cn('sm:text-base text-sm text-muted-foreground', className)} {...props}>
      {children}
    </p>
  );
}
