// components/typography.jsx
import { clsx } from 'clsx'

export const TypographyH1 = ({ children, className }) => {
    return (
        <h1 className={clsx("text-5xl font-semibold lg:text-7xl", className)}>
            {children}
        </h1>
    )
}

export const TypographyH2 = ({ children, className }) => {
    return (
        <h2 className={clsx("text-2xl lg:text-3xl font-semibold", className)}>
            {children}
        </h2>
    )
}

export const TypographyH3 = ({ children, className }) => {
    return (
        <h3 className={clsx("text-2xl font-semibold", className)}>
            {children}
        </h3>
    )
}

export const TypographyH4 = ({ children, className }) => {
    return (
        <h3 className={clsx("text-xl font-semibold dark:text-primary", className)}>
            {children}
        </h3>
    )
}

export const TypographyH5 = ({ children, className }) => {
    return (
        <div className={clsx("text-medium font-semibold", className)}>
            {children}
        </div>
    )
}

export const TypographyP = ({ children, className }) => {
    return (
        <p className={clsx("", className)}>
            {children}
        </p>
    )
}

export const Paragraph = ({ children, className }) => {
    return (
        <p className={clsx("leading-7 text-sm mt-4", className)}>
            {children}
        </p>
    )
}

export const Span = ({ children, className }) => {
    return (
        <span className={clsx("", className)}>
            {children}
        </span>
    )
}

export const Small = ({ children, className }) => {
    return (
        <small className={clsx("text-sm font-medium leading-none", className)}>
            {children}
        </small>
    )
}

export const TypographyMuted = ({ children, className }) => {
    return (
        <p className={clsx("text-sm text-muted-foreground", className)}>
            {children}
        </p>
    )
}
