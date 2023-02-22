import { S as SvelteComponent, i as init, s as safe_not_equal, a as space, e as empty, P as head_selector, h as detach, c as claim_space, b as insert_hydration, f as transition_in, C as noop, o as onMount, k as element, q as text, l as claim_element, m as children, r as claim_text, R as src_url_equal, n as attr, D as append_hydration, L as add_render_callback, Q as create_in_transition } from "../../../chunks/index-da79cd03.js";
import { a as fade } from "../../../chunks/index-ebe08ce1.js";
const _page_svelte_svelte_type_style_lang = "";
function create_if_block(ctx) {
  let div;
  let iframe;
  let t;
  let iframe_src_value;
  let div_intro;
  return {
    c() {
      div = element("div");
      iframe = element("iframe");
      t = text("Browser does not support iframes");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      iframe = claim_element(div_nodes, "IFRAME", {
        src: true,
        width: true,
        height: true,
        title: true,
        class: true
      });
      var iframe_nodes = children(iframe);
      t = claim_text(iframe_nodes, "Browser does not support iframes");
      iframe_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(iframe.src, iframe_src_value = "/files/Resume-Dark.pdf"))
        attr(iframe, "src", iframe_src_value);
      attr(iframe, "width", "100%");
      attr(iframe, "height", "100");
      attr(iframe, "title", "resume");
      attr(iframe, "class", "iframe svelte-r1kf0x");
      attr(div, "class", "svelte-r1kf0x");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, iframe);
      append_hydration(iframe, t);
    },
    i(local) {
      if (!div_intro) {
        add_render_callback(() => {
          div_intro = create_in_transition(div, fade, { delay: 250 });
          div_intro.start();
        });
      }
    },
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment(ctx) {
  let t;
  let if_block_anchor;
  let if_block = (
    /*visible*/
    ctx[0] && create_if_block()
  );
  return {
    c() {
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-1jyv86b", document.head);
      head_nodes.forEach(detach);
      t = claim_space(nodes);
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h() {
      document.title = "Resume";
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
    },
    p(ctx2, [dirty]) {
      if (
        /*visible*/
        ctx2[0]
      ) {
        if (if_block) {
          if (dirty & /*visible*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block();
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i(local) {
      transition_in(if_block);
    },
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let visible = false;
  onMount(() => {
    $$invalidate(0, visible = true);
  });
  return [visible];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
