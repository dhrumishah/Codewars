// The Hashtag Generator

function generateHashtag(str) {
  if (str.trim() === "") return false;

  const strWithCameCase = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  const strWithHash = "#" + strWithCameCase;

  return strWithHash.length > 140 ? false : strWithHash;
}
