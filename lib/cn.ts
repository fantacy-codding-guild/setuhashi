/** Join class names, skipping empty values: cn("btn", active && "on") */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
