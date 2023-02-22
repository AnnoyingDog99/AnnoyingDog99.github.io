import { S as SvelteComponent, i as init, s as safe_not_equal, e as empty, b as insert_hydration, g as group_outros, t as transition_out, d as check_outros, f as transition_in, h as detach, G as create_slot, k as element, l as claim_element, m as children, n as attr, p as set_style, H as update_slot_base, I as get_all_dirty_from_scope, J as get_slot_changes } from "./index-da79cd03.js";
const Button_svelte_svelte_type_style_lang = "";
function create_else_block(ctx) {
  let button;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[5].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[4],
    null
  );
  return {
    c() {
      button = element("button");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { type: true, class: true });
      var button_nodes = children(button);
      if (default_slot)
        default_slot.l(button_nodes);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(
        button,
        "type",
        /*type*/
        ctx[2]
      );
      attr(button, "class", "svelte-1q6soul");
      set_style(
        button,
        "width",
        /*width*/
        ctx[0]
      );
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      if (default_slot) {
        default_slot.m(button, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        16)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[4],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[4]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[4],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*type*/
      4) {
        attr(
          button,
          "type",
          /*type*/
          ctx2[2]
        );
      }
      if (dirty & /*width*/
      1) {
        set_style(
          button,
          "width",
          /*width*/
          ctx2[0]
        );
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_if_block(ctx) {
  let a;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[5].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[4],
    null
  );
  return {
    c() {
      a = element("a");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", { href: true, target: true, class: true });
      var a_nodes = children(a);
      if (default_slot)
        default_slot.l(a_nodes);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(
        a,
        "href",
        /*link*/
        ctx[1]
      );
      attr(
        a,
        "target",
        /*target*/
        ctx[3]
      );
      attr(a, "class", "svelte-1q6soul");
      set_style(
        a,
        "width",
        /*width*/
        ctx[0]
      );
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      if (default_slot) {
        default_slot.m(a, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        16)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[4],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[4]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[4],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*link*/
      2) {
        attr(
          a,
          "href",
          /*link*/
          ctx2[1]
        );
      }
      if (!current || dirty & /*target*/
      8) {
        attr(
          a,
          "target",
          /*target*/
          ctx2[3]
        );
      }
      if (dirty & /*width*/
      1) {
        set_style(
          a,
          "width",
          /*width*/
          ctx2[0]
        );
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(a);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_fragment(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*link*/
      ctx2[1] !== ""
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
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
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
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { width = "20em" } = $$props;
  let { link = "" } = $$props;
  let { type } = $$props;
  let { target = "" } = $$props;
  $$self.$$set = ($$props2) => {
    if ("width" in $$props2)
      $$invalidate(0, width = $$props2.width);
    if ("link" in $$props2)
      $$invalidate(1, link = $$props2.link);
    if ("type" in $$props2)
      $$invalidate(2, type = $$props2.type);
    if ("target" in $$props2)
      $$invalidate(3, target = $$props2.target);
    if ("$$scope" in $$props2)
      $$invalidate(4, $$scope = $$props2.$$scope);
  };
  return [width, link, type, target, $$scope, slots];
}
class Button extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { width: 0, link: 1, type: 2, target: 3 });
  }
}
export {
  Button as B
};
