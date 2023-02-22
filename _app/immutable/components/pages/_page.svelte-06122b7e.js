import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, D as append_hydration, u as set_data, C as noop, e as empty, P as head_selector, f as transition_in, t as transition_out, d as check_outros, o as onMount, x as create_component, y as claim_component, z as mount_component, L as add_render_callback, Q as create_in_transition, A as destroy_component, g as group_outros, R as src_url_equal } from "../../chunks/index-da79cd03.js";
import { B as Button } from "../../chunks/Button-40c78e86.js";
import { M as MediaQuery } from "../../chunks/MediaQuery-49dd8143.js";
import { a as fade } from "../../chunks/index-ebe08ce1.js";
const Circle_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let div4;
  let div1;
  let div0;
  let h1;
  let t0;
  let t1;
  let h2;
  let t2;
  let t3;
  let div2;
  let t4;
  let div3;
  return {
    c() {
      div4 = element("div");
      div1 = element("div");
      div0 = element("div");
      h1 = element("h1");
      t0 = text(
        /*name*/
        ctx[0]
      );
      t1 = space();
      h2 = element("h2");
      t2 = text(
        /*title*/
        ctx[1]
      );
      t3 = space();
      div2 = element("div");
      t4 = space();
      div3 = element("div");
      this.h();
    },
    l(nodes) {
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div1 = claim_element(div4_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h1 = claim_element(div0_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(
        h1_nodes,
        /*name*/
        ctx[0]
      );
      h1_nodes.forEach(detach);
      t1 = claim_space(div0_nodes);
      h2 = claim_element(div0_nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      t2 = claim_text(
        h2_nodes,
        /*title*/
        ctx[1]
      );
      h2_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t3 = claim_space(div4_nodes);
      div2 = claim_element(div4_nodes, "DIV", { class: true });
      children(div2).forEach(detach);
      t4 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      children(div3).forEach(detach);
      div4_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h1, "class", "svelte-hq6f39");
      attr(h2, "class", "svelte-hq6f39");
      attr(div0, "class", "inner text svelte-hq6f39");
      attr(div1, "class", "inner top svelte-hq6f39");
      attr(div2, "class", "inner mid svelte-hq6f39");
      attr(div3, "class", "inner bottom svelte-hq6f39");
      attr(div4, "class", "container svelte-hq6f39");
    },
    m(target, anchor) {
      insert_hydration(target, div4, anchor);
      append_hydration(div4, div1);
      append_hydration(div1, div0);
      append_hydration(div0, h1);
      append_hydration(h1, t0);
      append_hydration(div0, t1);
      append_hydration(div0, h2);
      append_hydration(h2, t2);
      append_hydration(div4, t3);
      append_hydration(div4, div2);
      append_hydration(div4, t4);
      append_hydration(div4, div3);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*name*/
      1)
        set_data(
          t0,
          /*name*/
          ctx2[0]
        );
      if (dirty & /*title*/
      2)
        set_data(
          t2,
          /*title*/
          ctx2[1]
        );
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div4);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { name } = $$props;
  let { title } = $$props;
  $$self.$$set = ($$props2) => {
    if ("name" in $$props2)
      $$invalidate(0, name = $$props2.name);
    if ("title" in $$props2)
      $$invalidate(1, title = $$props2.title);
  };
  return [name, title];
}
class Circle extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { name: 0, title: 1 });
  }
}
const _page_svelte_svelte_type_style_lang = "";
function create_if_block(ctx) {
  let div;
  let mediaquery;
  let div_intro;
  let current;
  mediaquery = new MediaQuery({
    props: {
      query: "(min-width: 768px)",
      $$slots: {
        default: [
          create_default_slot,
          ({ matches }) => ({ 1: matches }),
          ({ matches }) => matches ? 2 : 0
        ]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div = element("div");
      create_component(mediaquery.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(mediaquery.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "center svelte-8lxvua");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(mediaquery, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const mediaquery_changes = {};
      if (dirty & /*$$scope, matches*/
      6) {
        mediaquery_changes.$$scope = { dirty, ctx: ctx2 };
      }
      mediaquery.$set(mediaquery_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(mediaquery.$$.fragment, local);
      if (!div_intro) {
        add_render_callback(() => {
          div_intro = create_in_transition(div, fade, { delay: 100 });
          div_intro.start();
        });
      }
      current = true;
    },
    o(local) {
      transition_out(mediaquery.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(mediaquery);
    }
  };
}
function create_else_block(ctx) {
  let circle;
  let current;
  circle = new Circle({
    props: {
      name: "Jan Vlasman",
      title: "Software Engineer"
    }
  });
  return {
    c() {
      create_component(circle.$$.fragment);
    },
    l(nodes) {
      claim_component(circle.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(circle, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(circle.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(circle.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(circle, detaching);
    }
  };
}
function create_if_block_1(ctx) {
  let div2;
  let circle;
  let t0;
  let div1;
  let h1;
  let t1;
  let t2;
  let h2;
  let t3;
  let t4;
  let div0;
  let a;
  let img;
  let img_src_value;
  let t5;
  let button;
  let current;
  circle = new Circle({ props: { name: "", title: "" } });
  button = new Button({
    props: {
      width: "50%",
      link: "/contact",
      type: "button",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div2 = element("div");
      create_component(circle.$$.fragment);
      t0 = space();
      div1 = element("div");
      h1 = element("h1");
      t1 = text("Jan Vlasman");
      t2 = space();
      h2 = element("h2");
      t3 = text("Software Engineer");
      t4 = space();
      div0 = element("div");
      a = element("a");
      img = element("img");
      t5 = space();
      create_component(button.$$.fragment);
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      claim_component(circle.$$.fragment, div2_nodes);
      t0 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      h1 = claim_element(div1_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Jan Vlasman");
      h1_nodes.forEach(detach);
      t2 = claim_space(div1_nodes);
      h2 = claim_element(div1_nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      t3 = claim_text(h2_nodes, "Software Engineer");
      h2_nodes.forEach(detach);
      t4 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      a = claim_element(div0_nodes, "A", { href: true });
      var a_nodes = children(a);
      img = claim_element(a_nodes, "IMG", { src: true, alt: true, class: true });
      a_nodes.forEach(detach);
      t5 = claim_space(div0_nodes);
      claim_component(button.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h1, "class", "svelte-8lxvua");
      attr(h2, "class", "svelte-8lxvua");
      if (!src_url_equal(img.src, img_src_value = "/images/GithubWhite.png"))
        attr(img, "src", img_src_value);
      attr(img, "alt", "Github");
      attr(img, "class", "svelte-8lxvua");
      attr(a, "href", "https://github.com/AnnoyingDog99");
      attr(div0, "class", "svelte-8lxvua");
      attr(div1, "class", "text-container svelte-8lxvua");
      attr(div2, "class", "container svelte-8lxvua");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      mount_component(circle, div2, null);
      append_hydration(div2, t0);
      append_hydration(div2, div1);
      append_hydration(div1, h1);
      append_hydration(h1, t1);
      append_hydration(div1, t2);
      append_hydration(div1, h2);
      append_hydration(h2, t3);
      append_hydration(div1, t4);
      append_hydration(div1, div0);
      append_hydration(div0, a);
      append_hydration(a, img);
      append_hydration(div0, t5);
      mount_component(button, div0, null);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(circle.$$.fragment, local);
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(circle.$$.fragment, local);
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      destroy_component(circle);
      destroy_component(button);
    }
  };
}
function create_default_slot_1(ctx) {
  let t;
  return {
    c() {
      t = text("Contact me!");
    },
    l(nodes) {
      t = claim_text(nodes, "Contact me!");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_1, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*matches*/
      ctx2[1]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index !== previous_block_index) {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_fragment(ctx) {
  let t;
  let if_block_anchor;
  let current;
  let if_block = (
    /*visible*/
    ctx[0] && create_if_block(ctx)
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
      const head_nodes = head_selector("svelte-1anpopb", document.head);
      head_nodes.forEach(detach);
      t = claim_space(nodes);
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h() {
      document.title = "Home";
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (
        /*visible*/
        ctx2[0]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*visible*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
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
