import { b as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server-DAWdoQYC.js';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { a as $$Image, c as $$Button, d as $$Icon } from './mainHeading-DGdux9eX.js';

const pattern = new Proxy({"src":"./assets/image/pattern-BdmWHofr.png","width":546,"height":900,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ahmed/Desktop/projects/freeLanice/e3gaz/src/assets/pattern.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/ahmed/Desktop/projects/freeLanice/e3gaz/src/assets/pattern.png");
							return target[name];
						}
					});

const $$Astro = createAstro("https://astro-template.com/");
const $$BreacdJumb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BreacdJumb;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="breadJump relative"> <figure class="pattern"> ${renderComponent($$result, "Image", $$Image, { "src": pattern, "alt": "pattern", "format": "webp", "quality": 70 })} </figure> <div class="container"> <div class="box d-flex items-center gap-6"> ${renderComponent($$result, "Button", $$Button, { "type": "button", "aria": "back", "ClassName": "btnArrow isBorder", "icon": { name: "arrowRight", side: "left", Class: "w-12" } })} <div> <h2 class="fs-24 py-4">${title}</h2> <ul class="d-flex gap-4"> <li> <a href="index.html" class="mainColor fs-14">الرئيسية</a> </li> <li> ${renderComponent($$result, "Icon", $$Icon, { "name": "arrowLeft", "size": 16 })} </li> <li class="fs-14"> ${title} </li> </ul> </div> </div> </div> </section>`;
}, "/Users/ahmed/Desktop/projects/freeLanice/e3gaz/src/components/ui/BreacdJumb.astro", void 0);

export { $$BreacdJumb as $ };
