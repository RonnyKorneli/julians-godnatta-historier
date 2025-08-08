export default async (request, context) => {
  // Only run this logic for the homepage
  if (new URL(request.url).pathname === "/") {
    const acceptLang = request.headers.get("accept-language") || "";
    const lang = acceptLang.split(",")[0].split("-")[0]; // e.g. "no", "en", "de"

    let target = "/en/"; // fallback
    if (lang === "no") target = "/no/";
    else if (lang === "de") target = "/de/";

    return Response.redirect(new URL(target, request.url), 302);
  }

  // Continue normally for other pages
  return context.next();
};

export const config = {
  path: "/*", // run on all routes
};
