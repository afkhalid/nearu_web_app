export function getParameterByName(name, props, separator = "?") {
  const searchString = props.location.search;
  const match = new RegExp(`[${separator}&]` + name + "=([^&]*)").exec(searchString);
  return match && decodeURIComponent(match[1].replace(/\+/g, " "));
}
