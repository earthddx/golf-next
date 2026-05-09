export const scrollToSection = (id: string) => {
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
}
