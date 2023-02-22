import { S as SvelteComponent, i as init, s as safe_not_equal, G as create_slot, H as update_slot_base, I as get_all_dirty_from_scope, J as get_slot_changes, f as transition_in, t as transition_out, o as onMount } from "./index-da79cd03.js";
const get_default_slot_changes = (dirty) => ({ matches: dirty & /*matches*/
1 });
const get_default_slot_context = (ctx) => ({ matches: (
  /*matches*/
  ctx[0]
) });
function create_fragment(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[4].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[3],
    get_default_slot_context
  );
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope, matches*/
        9)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[3],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[3]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[3],
              dirty,
              get_default_slot_changes
            ),
            get_default_slot_context
          );
        }
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
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { query } = $$props;
  let mql;
  let wasMounted = false;
  let matches = false;
  onMount(() => {
    $$invalidate(2, wasMounted = true);
    return () => {
      removeActiveListener();
    };
  });
  function addNewListener(query2) {
    mql = window.matchMedia(query2);
    mql.addEventListener("change", mqlListener);
    $$invalidate(0, matches = mql.matches);
  }
  function removeActiveListener() {
    if (mql && mqlListener) {
      mql.removeEventListener("change", mqlListener);
    }
  }
  function mqlListener(v) {
    $$invalidate(0, matches = v.matches);
  }
  $$self.$$set = ($$props2) => {
    if ("query" in $$props2)
      $$invalidate(1, query = $$props2.query);
    if ("$$scope" in $$props2)
      $$invalidate(3, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*wasMounted, query*/
    6) {
      {
        if (wasMounted) {
          removeActiveListener();
          addNewListener(query);
        }
      }
    }
  };
  return [matches, query, wasMounted, $$scope, slots];
}
class MediaQuery extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { query: 1 });
  }
}
export {
  MediaQuery as M
};
