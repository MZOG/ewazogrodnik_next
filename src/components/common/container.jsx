import { cn } from "@/lib/utils"
export default function Container({ children, type, maxWidth }) {

  const styles = `${cn(maxWidth ? maxWidth : 'max-w-7xl', 'mx-auto')}`

  if (type === "section") {
    return (
      <section className={styles}>
        {children}
      </section>
    )
  }

  return (
    <div className={styles}>
      {children}
    </div>
  )
}