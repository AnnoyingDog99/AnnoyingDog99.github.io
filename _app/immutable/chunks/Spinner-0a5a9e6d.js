import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, l as claim_element, m as children, h as detach, n as attr, b as insert_hydration, C as noop } from "./index-da79cd03.js";
const Spinner_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "loader svelte-wxbty0");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
class Spinner extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Spinner as S
};
