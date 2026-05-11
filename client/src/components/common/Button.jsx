import './Button.css'

export default function Button({ as = 'button', children, className = '', ...props }) {
  const Component = as
  return <Component className={`button-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${className}`} {...props}>{children}</Component>
}
