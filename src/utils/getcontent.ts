import { SITE } from "../config/site.ts";
import ca from "../i18n/ca.ts";

const modules = import.meta.glob("../i18n/*.ts", {
  eager: true,
}) as Record<string, { default: typeof ca }>;

const contentByLocale = Object.values(modules).reduce((acc, module) => {
  acc[module.default.lang] = module.default;
  return acc;
}, {} as Record<string, typeof ca>);


export default function getContent(locale?: string) {
  const selected =
    locale && locale in contentByLocale
      ? contentByLocale[locale]
      : contentByLocale.ca;

  return {
    ...SITE,
    ...selected,
  };
}