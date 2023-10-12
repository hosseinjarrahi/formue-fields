export function persianDateGlobal(date, mode) {
  if (!date) return null;

  let dateObj = new Date(date);
  let map = {
    date: dateObj.toLocaleDateString("fa-IR"),
    datetime:
      dateObj.toLocaleTimeString("fa-IR", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      }) +
      " , " +
      dateObj.toLocaleDateString("fa-IR"),
    time: date,
  };

  return map[mode];
}

export function persianDate(date, mode = "date") {
  if (date) {
    return persianDateGlobal(date, mode);
  }
  return "";
}

export function useIsImage(link) {
  let links = Array.isArray(link) ? link : [link];
  links = links.filter((link) => !!link);

  if (!link || (links.length === 1 && typeof link !== "string") || !isNaN(link))
    return false;

  let res = false;
  links.forEach((l) => {
    let types = [".jpg", ".png", ".gif", "jpeg"];
    let match = l.match(/\.[0-9a-z]+$/);
    let fileType = match ? match[0] : "noType";
    if (types.indexOf(fileType) > -1) res = true;
  });

  return res;
}

export function useIsArrayOfObjects(values) {
  return (
    Array.isArray(values) && values.length > 0 && typeof values[0] === "object"
  );
  x;
}

export const useHelper = () => ({
  persianDateGlobal,
  persianDate,
});
