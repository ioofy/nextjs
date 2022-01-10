export function convertToSlug(text: any) {
 return text
  .toLowerCase()
  .replace(/ /g, "-")
  .replace(/[^\w-]+/g, "");
}
