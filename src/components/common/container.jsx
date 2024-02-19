import { cn } from "@/lib/utils";

export default function Container({ children, type, maxWidth, customClass }) {
  const styles = `${cn(
    maxWidth ? maxWidth : "max-w-7xl",
    customClass ? customClass : "",
    "mx-auto px-5"
  )}`;

  if (type === "section") {
    return <section className={styles}>{children}</section>;
  }

  return <div className={styles}>{children}</div>;
}
