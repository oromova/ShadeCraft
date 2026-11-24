export function Button({ href, children, variant = 'primary', className = '', type = 'button', ...props }) {
  const classes = `inline-flex items-center gap-2 rounded-full text-sm font-bold transition duration-200 focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-60 ${
    variant === 'outline'
      ? 'border border-ink/20 bg-transparent text-ink hover:border-teal hover:bg-teal/5'
      : 'bg-teal text-white shadow-sm hover:bg-[#104d49] hover:shadow-md'
  } ${className}`;
  if (href) {
    return <a href={href} className={classes} {...props}>{children}</a>;
  }
  return <button type={type} className={classes} {...props}>{children}</button>;
}
