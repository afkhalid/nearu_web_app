export function getParameterByName(name, separator = "?", props) {
  const searchString = props.location.search;
  const match = new RegExp(`[${separator}&]` + name + "=([^&]*)").exec(searchString);
  const param = match && decodeURIComponent(match[1].replace(/\+/g, " "));
  return param ? (DOMPurify.sanitize(param) || "").toString() : param;
}
