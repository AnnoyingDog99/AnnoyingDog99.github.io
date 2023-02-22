import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, D as append_hydration, u as set_data, C as noop, T as set_input_value, E as listen, e as empty, g as group_outros, t as transition_out, d as check_outros, f as transition_in, v as binding_callbacks, U as bind, x as create_component, y as claim_component, z as mount_component, V as add_flush_callback, A as destroy_component, W as run_all, P as head_selector, o as onMount, L as add_render_callback, Q as create_in_transition } from "../../../chunks/index-da79cd03.js";
import { B as Button } from "../../../chunks/Button-40c78e86.js";
import { S as Spinner } from "../../../chunks/Spinner-0a5a9e6d.js";
import { a as fade } from "../../../chunks/index-ebe08ce1.js";
const Input_svelte_svelte_type_style_lang = "";
function create_else_block$1(ctx) {
  let input;
  let mounted;
  let dispose;
  return {
    c() {
      input = element("input");
      this.h();
    },
    l(nodes) {
      input = claim_element(nodes, "INPUT", {
        type: true,
        id: true,
        name: true,
        class: true
      });
      this.h();
    },
    h() {
      attr(input, "type", "text");
      attr(
        input,
        "id",
        /*label*/
        ctx[2]
      );
      attr(
        input,
        "name",
        /*name*/
        ctx[3]
      );
      attr(input, "class", "svelte-bg8q42");
    },
    m(target, anchor) {
      insert_hydration(target, input, anchor);
      set_input_value(
        input,
        /*value*/
        ctx[0]
      );
      if (!mounted) {
        dispose = listen(
          input,
          "input",
          /*input_input_handler*/
          ctx[5]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*label*/
      4) {
        attr(
          input,
          "id",
          /*label*/
          ctx2[2]
        );
      }
      if (dirty & /*name*/
      8) {
        attr(
          input,
          "name",
          /*name*/
          ctx2[3]
        );
      }
      if (dirty & /*value*/
      1 && input.value !== /*value*/
      ctx2[0]) {
        set_input_value(
          input,
          /*value*/
          ctx2[0]
        );
      }
    },
    d(detaching) {
      if (detaching)
        detach(input);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block$2(ctx) {
  let textarea_1;
  let mounted;
  let dispose;
  return {
    c() {
      textarea_1 = element("textarea");
      this.h();
    },
    l(nodes) {
      textarea_1 = claim_element(nodes, "TEXTAREA", {
        rows: true,
        id: true,
        name: true,
        class: true
      });
      children(textarea_1).forEach(detach);
      this.h();
    },
    h() {
      attr(textarea_1, "rows", "10");
      attr(
        textarea_1,
        "id",
        /*label*/
        ctx[2]
      );
      attr(
        textarea_1,
        "name",
        /*name*/
        ctx[3]
      );
      attr(textarea_1, "class", "svelte-bg8q42");
    },
    m(target, anchor) {
      insert_hydration(target, textarea_1, anchor);
      set_input_value(
        textarea_1,
        /*value*/
        ctx[0]
      );
      if (!mounted) {
        dispose = listen(
          textarea_1,
          "input",
          /*textarea_1_input_handler*/
          ctx[4]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*label*/
      4) {
        attr(
          textarea_1,
          "id",
          /*label*/
          ctx2[2]
        );
      }
      if (dirty & /*name*/
      8) {
        attr(
          textarea_1,
          "name",
          /*name*/
          ctx2[3]
        );
      }
      if (dirty & /*value*/
      1) {
        set_input_value(
          textarea_1,
          /*value*/
          ctx2[0]
        );
      }
    },
    d(detaching) {
      if (detaching)
        detach(textarea_1);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$2(ctx) {
  let div;
  let label_1;
  let t0;
  let t1;
  function select_block_type(ctx2, dirty) {
    if (
      /*textarea*/
      ctx2[1]
    )
      return create_if_block$2;
    return create_else_block$1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      div = element("div");
      label_1 = element("label");
      t0 = text(
        /*label*/
        ctx[2]
      );
      t1 = space();
      if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      label_1 = claim_element(div_nodes, "LABEL", { for: true, class: true });
      var label_1_nodes = children(label_1);
      t0 = claim_text(
        label_1_nodes,
        /*label*/
        ctx[2]
      );
      label_1_nodes.forEach(detach);
      t1 = claim_space(div_nodes);
      if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(
        label_1,
        "for",
        /*label*/
        ctx[2]
      );
      attr(label_1, "class", "svelte-bg8q42");
      attr(div, "class", "container svelte-bg8q42");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, label_1);
      append_hydration(label_1, t0);
      append_hydration(div, t1);
      if_block.m(div, null);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*label*/
      4)
        set_data(
          t0,
          /*label*/
          ctx2[2]
        );
      if (dirty & /*label*/
      4) {
        attr(
          label_1,
          "for",
          /*label*/
          ctx2[2]
        );
      }
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div, null);
        }
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      if_block.d();
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let { textarea = false } = $$props;
  let { label } = $$props;
  let { name } = $$props;
  let { value = "" } = $$props;
  function textarea_1_input_handler() {
    value = this.value;
    $$invalidate(0, value);
  }
  function input_input_handler() {
    value = this.value;
    $$invalidate(0, value);
  }
  $$self.$$set = ($$props2) => {
    if ("textarea" in $$props2)
      $$invalidate(1, textarea = $$props2.textarea);
    if ("label" in $$props2)
      $$invalidate(2, label = $$props2.label);
    if ("name" in $$props2)
      $$invalidate(3, name = $$props2.name);
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
  };
  return [value, textarea, label, name, textarea_1_input_handler, input_input_handler];
}
class Input extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { textarea: 1, label: 2, name: 3, value: 0 });
  }
}
const ContactForm_svelte_svelte_type_style_lang = "";
function create_else_block(ctx) {
  let form;
  let div4;
  let h1;
  let t0;
  let t1;
  let div0;
  let t2;
  let div3;
  let input0;
  let updating_value;
  let t3;
  let input1;
  let updating_value_1;
  let t4;
  let input2;
  let updating_value_2;
  let t5;
  let input3;
  let updating_value_3;
  let t6;
  let div1;
  let label;
  let t7;
  let t8;
  let input4;
  let t9;
  let div2;
  let button;
  let current;
  let mounted;
  let dispose;
  function input0_value_binding(value) {
    ctx[8](value);
  }
  let input0_props = { label: "Name:", name: "name" };
  if (
    /*name*/
    ctx[2] !== void 0
  ) {
    input0_props.value = /*name*/
    ctx[2];
  }
  input0 = new Input({ props: input0_props });
  binding_callbacks.push(() => bind(input0, "value", input0_value_binding));
  function input1_value_binding(value) {
    ctx[9](value);
  }
  let input1_props = { label: "Email", name: "email" };
  if (
    /*email*/
    ctx[3] !== void 0
  ) {
    input1_props.value = /*email*/
    ctx[3];
  }
  input1 = new Input({ props: input1_props });
  binding_callbacks.push(() => bind(input1, "value", input1_value_binding));
  function input2_value_binding(value) {
    ctx[10](value);
  }
  let input2_props = { label: "Subject", name: "subject" };
  if (
    /*subject*/
    ctx[5] !== void 0
  ) {
    input2_props.value = /*subject*/
    ctx[5];
  }
  input2 = new Input({ props: input2_props });
  binding_callbacks.push(() => bind(input2, "value", input2_value_binding));
  function input3_value_binding(value) {
    ctx[11](value);
  }
  let input3_props = {
    textarea: true,
    label: "Message",
    name: "message"
  };
  if (
    /*message*/
    ctx[4] !== void 0
  ) {
    input3_props.value = /*message*/
    ctx[4];
  }
  input3 = new Input({ props: input3_props });
  binding_callbacks.push(() => bind(input3, "value", input3_value_binding));
  button = new Button({
    props: {
      width: "100%",
      type: "submit",
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      form = element("form");
      div4 = element("div");
      h1 = element("h1");
      t0 = text(
        /*title*/
        ctx[1]
      );
      t1 = space();
      div0 = element("div");
      t2 = space();
      div3 = element("div");
      create_component(input0.$$.fragment);
      t3 = space();
      create_component(input1.$$.fragment);
      t4 = space();
      create_component(input2.$$.fragment);
      t5 = space();
      create_component(input3.$$.fragment);
      t6 = space();
      div1 = element("div");
      label = element("label");
      t7 = text("yummy");
      t8 = space();
      input4 = element("input");
      t9 = space();
      div2 = element("div");
      create_component(button.$$.fragment);
      this.h();
    },
    l(nodes) {
      form = claim_element(nodes, "FORM", {
        class: true,
        method: true,
        "data-email": true
      });
      var form_nodes = children(form);
      div4 = claim_element(form_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      h1 = claim_element(div4_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(
        h1_nodes,
        /*title*/
        ctx[1]
      );
      h1_nodes.forEach(detach);
      t1 = claim_space(div4_nodes);
      div0 = claim_element(div4_nodes, "DIV", { class: true });
      children(div0).forEach(detach);
      t2 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      claim_component(input0.$$.fragment, div3_nodes);
      t3 = claim_space(div3_nodes);
      claim_component(input1.$$.fragment, div3_nodes);
      t4 = claim_space(div3_nodes);
      claim_component(input2.$$.fragment, div3_nodes);
      t5 = claim_space(div3_nodes);
      claim_component(input3.$$.fragment, div3_nodes);
      t6 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      label = claim_element(div1_nodes, "LABEL", { for: true });
      var label_nodes = children(label);
      t7 = claim_text(label_nodes, "yummy");
      label_nodes.forEach(detach);
      t8 = claim_space(div1_nodes);
      input4 = claim_element(div1_nodes, "INPUT", { id: true, type: true, name: true });
      div1_nodes.forEach(detach);
      t9 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      claim_component(button.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      form_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h1, "class", "svelte-cdn0hw");
      attr(div0, "class", "stripe svelte-cdn0hw");
      attr(label, "for", "honeypot");
      attr(input4, "id", "honeypot");
      attr(input4, "type", "text");
      attr(input4, "name", "honeypot");
      attr(div1, "class", "honey svelte-cdn0hw");
      attr(div2, "class", "button-container svelte-cdn0hw");
      attr(div3, "class", "text svelte-cdn0hw");
      attr(div4, "class", "container svelte-cdn0hw");
      attr(form, "class", "gform svelte-cdn0hw");
      attr(form, "method", "POST");
      attr(form, "data-email", "jan.vlasman99+portfolio@gmail.com");
    },
    m(target, anchor) {
      insert_hydration(target, form, anchor);
      append_hydration(form, div4);
      append_hydration(div4, h1);
      append_hydration(h1, t0);
      append_hydration(div4, t1);
      append_hydration(div4, div0);
      append_hydration(div4, t2);
      append_hydration(div4, div3);
      mount_component(input0, div3, null);
      append_hydration(div3, t3);
      mount_component(input1, div3, null);
      append_hydration(div3, t4);
      mount_component(input2, div3, null);
      append_hydration(div3, t5);
      mount_component(input3, div3, null);
      append_hydration(div3, t6);
      append_hydration(div3, div1);
      append_hydration(div1, label);
      append_hydration(label, t7);
      append_hydration(div1, t8);
      append_hydration(div1, input4);
      set_input_value(
        input4,
        /*value*/
        ctx[0]
      );
      append_hydration(div3, t9);
      append_hydration(div3, div2);
      mount_component(button, div2, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            input4,
            "input",
            /*input4_input_handler*/
            ctx[12]
          ),
          listen(
            form,
            "submit",
            /*submit*/
            ctx[7]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (!current || dirty & /*title*/
      2)
        set_data(
          t0,
          /*title*/
          ctx2[1]
        );
      const input0_changes = {};
      if (!updating_value && dirty & /*name*/
      4) {
        updating_value = true;
        input0_changes.value = /*name*/
        ctx2[2];
        add_flush_callback(() => updating_value = false);
      }
      input0.$set(input0_changes);
      const input1_changes = {};
      if (!updating_value_1 && dirty & /*email*/
      8) {
        updating_value_1 = true;
        input1_changes.value = /*email*/
        ctx2[3];
        add_flush_callback(() => updating_value_1 = false);
      }
      input1.$set(input1_changes);
      const input2_changes = {};
      if (!updating_value_2 && dirty & /*subject*/
      32) {
        updating_value_2 = true;
        input2_changes.value = /*subject*/
        ctx2[5];
        add_flush_callback(() => updating_value_2 = false);
      }
      input2.$set(input2_changes);
      const input3_changes = {};
      if (!updating_value_3 && dirty & /*message*/
      16) {
        updating_value_3 = true;
        input3_changes.value = /*message*/
        ctx2[4];
        add_flush_callback(() => updating_value_3 = false);
      }
      input3.$set(input3_changes);
      if (dirty & /*value*/
      1 && input4.value !== /*value*/
      ctx2[0]) {
        set_input_value(
          input4,
          /*value*/
          ctx2[0]
        );
      }
      const button_changes = {};
      if (dirty & /*$$scope*/
      8192) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(input0.$$.fragment, local);
      transition_in(input1.$$.fragment, local);
      transition_in(input2.$$.fragment, local);
      transition_in(input3.$$.fragment, local);
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(input0.$$.fragment, local);
      transition_out(input1.$$.fragment, local);
      transition_out(input2.$$.fragment, local);
      transition_out(input3.$$.fragment, local);
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(form);
      destroy_component(input0);
      destroy_component(input1);
      destroy_component(input2);
      destroy_component(input3);
      destroy_component(button);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block$1(ctx) {
  let spinner;
  let current;
  spinner = new Spinner({});
  return {
    c() {
      create_component(spinner.$$.fragment);
    },
    l(nodes) {
      claim_component(spinner.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(spinner, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(spinner.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(spinner.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(spinner, detaching);
    }
  };
}
function create_default_slot(ctx) {
  let t;
  return {
    c() {
      t = text("Send");
    },
    l(nodes) {
      t = claim_text(nodes, "Send");
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
function create_fragment$1(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$1, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*waiting*/
      ctx2[6]
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
function instance$1($$self, $$props, $$invalidate) {
  let { title = "Leave a message!" } = $$props;
  let { value = "" } = $$props;
  let name = "";
  let email = "";
  let message = "";
  let subject = "";
  let waiting = false;
  function submit(e) {
    e.preventDefault();
    if (value) {
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      return;
    }
    $$invalidate(6, waiting = true);
    fetch("https://script.google.com/macros/s/AKfycbwhA1JpQS2SBQoLeXhYMzizbBeDIglXCE5GB02m7Q_jOsGzLOCjNIWU_JUfL6MW9UbATA/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `name=${name}&email=${email}&message=${message}&subject=${subject}`
    }).then((response) => response.json()).then(() => {
      $$invalidate(6, waiting = false);
      alert("Thank you for your message!");
    }).catch(() => {
      $$invalidate(6, waiting = false);
      alert("Error sending message");
    });
  }
  function input0_value_binding(value2) {
    name = value2;
    $$invalidate(2, name);
  }
  function input1_value_binding(value2) {
    email = value2;
    $$invalidate(3, email);
  }
  function input2_value_binding(value2) {
    subject = value2;
    $$invalidate(5, subject);
  }
  function input3_value_binding(value2) {
    message = value2;
    $$invalidate(4, message);
  }
  function input4_input_handler() {
    value = this.value;
    $$invalidate(0, value);
  }
  $$self.$$set = ($$props2) => {
    if ("title" in $$props2)
      $$invalidate(1, title = $$props2.title);
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
  };
  return [
    value,
    title,
    name,
    email,
    message,
    subject,
    waiting,
    submit,
    input0_value_binding,
    input1_value_binding,
    input2_value_binding,
    input3_value_binding,
    input4_input_handler
  ];
}
class ContactForm extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { title: 1, value: 0 });
  }
}
const _page_svelte_svelte_type_style_lang = "";
function create_if_block(ctx) {
  let div;
  let contactform;
  let div_intro;
  let current;
  contactform = new ContactForm({});
  return {
    c() {
      div = element("div");
      create_component(contactform.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(contactform.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "container svelte-9d06j5");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(contactform, div, null);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(contactform.$$.fragment, local);
      if (!div_intro) {
        add_render_callback(() => {
          div_intro = create_in_transition(div, fade, { delay: 100 });
          div_intro.start();
        });
      }
      current = true;
    },
    o(local) {
      transition_out(contactform.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(contactform);
    }
  };
}
function create_fragment(ctx) {
  let t;
  let if_block_anchor;
  let current;
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
      const head_nodes = head_selector("svelte-rg684o", document.head);
      head_nodes.forEach(detach);
      t = claim_space(nodes);
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h() {
      document.title = "Contact";
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
