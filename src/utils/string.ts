export function convertToSlug(Text: any) {
 return Text.toLowerCase()
  .replace(/ /g, "-")
  .replace(/[^\w-]+/g, "");
}
