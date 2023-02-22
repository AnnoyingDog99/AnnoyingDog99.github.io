import { S as SvelteComponent, i as init, s as safe_not_equal, G as create_slot, k as element, l as claim_element, m as children, h as detach, n as attr, b as insert_hydration, H as update_slot_base, I as get_all_dirty_from_scope, J as get_slot_changes, f as transition_in, t as transition_out, a as space, q as text, x as create_component, c as claim_space, r as claim_text, y as claim_component, D as append_hydration, z as mount_component, g as group_outros, d as check_outros, u as set_data, X as destroy_each, A as destroy_component, R as src_url_equal, e as empty, P as head_selector, o as onMount, L as add_render_callback, Q as create_in_transition, C as noop } from "../../../chunks/index-da79cd03.js";
import { B as Button } from "../../../chunks/Button-40c78e86.js";
import { a as fade } from "../../../chunks/index-ebe08ce1.js";
const Pill_svelte_svelte_type_style_lang = "";
function create_fragment$2(ctx) {
  let div;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[1].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[0],
    null
  );
  return {
    c() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "svelte-w9xbdh");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[0],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[0]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[0],
              dirty,
              null
            ),
            null
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
      if (detaching)
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class Pill extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {});
  }
}
const Card_svelte_svelte_type_style_lang = "";
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[2] = list[i];
  return child_ctx;
}
function create_else_block(ctx) {
  let img;
  let img_src_value;
  let img_alt_value;
  return {
    c() {
      img = element("img");
      this.h();
    },
    l(nodes) {
      img = claim_element(nodes, "IMG", { src: true, alt: true, class: true });
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = /*cardInfo*/
      ctx[0].imageRoute))
        attr(img, "src", img_src_value);
      attr(img, "alt", img_alt_value = /*cardInfo*/
      ctx[0].imageAlt);
      attr(img, "class", "svelte-gxakr7");
    },
    m(target, anchor) {
      insert_hydration(target, img, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*cardInfo*/
      1 && !src_url_equal(img.src, img_src_value = /*cardInfo*/
      ctx2[0].imageRoute)) {
        attr(img, "src", img_src_value);
      }
      if (dirty & /*cardInfo*/
      1 && img_alt_value !== (img_alt_value = /*cardInfo*/
      ctx2[0].imageAlt)) {
        attr(img, "alt", img_alt_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(img);
    }
  };
}
function create_if_block_1(ctx) {
  let video;
  let source;
  let source_src_value;
  return {
    c() {
      video = element("video");
      source = element("source");
      this.h();
    },
    l(nodes) {
      video = claim_element(nodes, "VIDEO", { width: true, height: true });
      var video_nodes = children(video);
      source = claim_element(video_nodes, "SOURCE", { src: true, type: true });
      video_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(source.src, source_src_value = /*cardInfo*/
      ctx[0].imageRoute))
        attr(source, "src", source_src_value);
      attr(source, "type", "video/mp4");
      attr(video, "width", "100%");
      attr(video, "height", "100%");
      video.controls = true;
    },
    m(target, anchor) {
      insert_hydration(target, video, anchor);
      append_hydration(video, source);
    },
    p(ctx2, dirty) {
      if (dirty & /*cardInfo*/
      1 && !src_url_equal(source.src, source_src_value = /*cardInfo*/
      ctx2[0].imageRoute)) {
        attr(source, "src", source_src_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(video);
    }
  };
}
function create_default_slot_2(ctx) {
  let t_value = (
    /*language*/
    ctx[2] + ""
  );
  let t;
  return {
    c() {
      t = text(t_value);
    },
    l(nodes) {
      t = claim_text(nodes, t_value);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*cardInfo*/
      1 && t_value !== (t_value = /*language*/
      ctx2[2] + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block$1(ctx) {
  let pill;
  let current;
  pill = new Pill({
    props: {
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(pill.$$.fragment);
    },
    l(nodes) {
      claim_component(pill.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(pill, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const pill_changes = {};
      if (dirty & /*$$scope, cardInfo*/
      33) {
        pill_changes.$$scope = { dirty, ctx: ctx2 };
      }
      pill.$set(pill_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(pill.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(pill.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(pill, detaching);
    }
  };
}
function create_default_slot_1(ctx) {
  let t;
  return {
    c() {
      t = text("Github");
    },
    l(nodes) {
      t = claim_text(nodes, "Github");
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
function create_if_block$1(ctx) {
  let button;
  let current;
  button = new Button({
    props: {
      width: "40%",
      link: (
        /*cardInfo*/
        ctx[0].liveLink
      ),
      target: "_blank",
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(button.$$.fragment);
    },
    l(nodes) {
      claim_component(button.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const button_changes = {};
      if (dirty & /*cardInfo*/
      1)
        button_changes.link = /*cardInfo*/
        ctx2[0].liveLink;
      if (dirty & /*$$scope*/
      32) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(button, detaching);
    }
  };
}
function create_default_slot(ctx) {
  let t;
  return {
    c() {
      t = text("Live");
    },
    l(nodes) {
      t = claim_text(nodes, "Live");
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
  let div4;
  let t0;
  let div3;
  let div0;
  let t1;
  let div1;
  let h1;
  let t2_value = (
    /*cardInfo*/
    ctx[0].projectTitle + ""
  );
  let t2;
  let t3;
  let p;
  let t4_value = (
    /*cardInfo*/
    ctx[0].projectDescription + ""
  );
  let t4;
  let t5;
  let div2;
  let button;
  let t6;
  let current;
  function select_block_type(ctx2, dirty) {
    if (
      /*fileExt*/
      ctx2[1] === "mp4"
    )
      return create_if_block_1;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block0 = current_block_type(ctx);
  let each_value = (
    /*cardInfo*/
    ctx[0].languages
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  button = new Button({
    props: {
      width: "40%",
      link: (
        /*cardInfo*/
        ctx[0].githubLink
      ),
      target: "_blank",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  let if_block1 = (
    /*cardInfo*/
    ctx[0].liveLink && create_if_block$1(ctx)
  );
  return {
    c() {
      div4 = element("div");
      if_block0.c();
      t0 = space();
      div3 = element("div");
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t1 = space();
      div1 = element("div");
      h1 = element("h1");
      t2 = text(t2_value);
      t3 = space();
      p = element("p");
      t4 = text(t4_value);
      t5 = space();
      div2 = element("div");
      create_component(button.$$.fragment);
      t6 = space();
      if (if_block1)
        if_block1.c();
      this.h();
    },
    l(nodes) {
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      if_block0.l(div4_nodes);
      t0 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div0_nodes);
      }
      div0_nodes.forEach(detach);
      t1 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", {});
      var div1_nodes = children(div1);
      h1 = claim_element(div1_nodes, "H1", {});
      var h1_nodes = children(h1);
      t2 = claim_text(h1_nodes, t2_value);
      h1_nodes.forEach(detach);
      t3 = claim_space(div1_nodes);
      p = claim_element(div1_nodes, "P", { class: true });
      var p_nodes = children(p);
      t4 = claim_text(p_nodes, t4_value);
      p_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t5 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      claim_component(button.$$.fragment, div2_nodes);
      t6 = claim_space(div2_nodes);
      if (if_block1)
        if_block1.l(div2_nodes);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "pill-container");
      attr(p, "class", "svelte-gxakr7");
      attr(div2, "class", "button-container svelte-gxakr7");
      attr(div3, "class", "content-container svelte-gxakr7");
      attr(div4, "class", "container svelte-gxakr7");
    },
    m(target, anchor) {
      insert_hydration(target, div4, anchor);
      if_block0.m(div4, null);
      append_hydration(div4, t0);
      append_hydration(div4, div3);
      append_hydration(div3, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div0, null);
      }
      append_hydration(div3, t1);
      append_hydration(div3, div1);
      append_hydration(div1, h1);
      append_hydration(h1, t2);
      append_hydration(div1, t3);
      append_hydration(div1, p);
      append_hydration(p, t4);
      append_hydration(div3, t5);
      append_hydration(div3, div2);
      mount_component(button, div2, null);
      append_hydration(div2, t6);
      if (if_block1)
        if_block1.m(div2, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if_block0.p(ctx2, dirty);
      if (dirty & /*cardInfo*/
      1) {
        each_value = /*cardInfo*/
        ctx2[0].languages;
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div0, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      if ((!current || dirty & /*cardInfo*/
      1) && t2_value !== (t2_value = /*cardInfo*/
      ctx2[0].projectTitle + ""))
        set_data(t2, t2_value);
      if ((!current || dirty & /*cardInfo*/
      1) && t4_value !== (t4_value = /*cardInfo*/
      ctx2[0].projectDescription + ""))
        set_data(t4, t4_value);
      const button_changes = {};
      if (dirty & /*cardInfo*/
      1)
        button_changes.link = /*cardInfo*/
        ctx2[0].githubLink;
      if (dirty & /*$$scope*/
      32) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
      if (
        /*cardInfo*/
        ctx2[0].liveLink
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*cardInfo*/
          1) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$1(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div2, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      transition_in(button.$$.fragment, local);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      transition_out(button.$$.fragment, local);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div4);
      if_block0.d();
      destroy_each(each_blocks, detaching);
      destroy_component(button);
      if (if_block1)
        if_block1.d();
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { cardInfo } = $$props;
  let fileExt = cardInfo.imageRoute.split(".").pop();
  $$self.$$set = ($$props2) => {
    if ("cardInfo" in $$props2)
      $$invalidate(0, cardInfo = $$props2.cardInfo);
  };
  return [cardInfo, fileExt];
}
class Card extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { cardInfo: 0 });
  }
}
const projects = [];
projects.push({
  imageRoute: "/videos/Ragkar/RagkarDemo.mp4",
  imageAlt: 'Image of the "Ragkar"',
  languages: [
    "Python",
    "C",
    "MQTT",
    "HTML",
    "CSS",
    "Javascript",
    "Websockets",
    "RTSP",
    "PI",
    "ESP32"
  ],
  projectTitle: "Ragkar",
  projectDescription: "A small car, which can be controlled from a website. The website also has a video stream, which streams a first person view of the car.",
  githubLink: "https://github.com/AnnoyingDog99/Ragkar"
});
projects.push({
  imageRoute: "/videos/Ecologic/EcologicDemo.mp4",
  imageAlt: "Screenshot of Ecologic",
  languages: ["Unity", "C#", "HLSL", "Shadergraph", "CG"],
  projectTitle: "Ecologic",
  projectDescription: "An ecosystem simulation build with Unity, with generated terrain and organisms that interact with each other.",
  githubLink: "https://github.com/AnnoyingDog99/Ecosystem-simulation"
});
projects.push({
  imageRoute: "/images/GBoggle/Game.png",
  imageAlt: "Gboggle game screen",
  languages: [
    "Svelte",
    "Node",
    "Typescript",
    "HTML",
    "SCSS",
    "Rollup",
    "Express",
    "Redis",
    "Socket.io"
  ],
  projectTitle: "GBoggle",
  projectDescription: "GBoggle is a web application based on the board game Boggle.",
  githubLink: "https://github.com/Jitzek/GBoggle"
});
projects.push({
  imageRoute: "/images/Badminton/MatchEnd.png",
  imageAlt: "Darts app screenshot",
  languages: ["SvelteKit", "Typescript", "SCSS", "Jest", "HTML", "Vite"],
  projectTitle: "Badminton",
  projectDescription: "Badminton is a web application for keeping track of your darts matches. ",
  githubLink: "https://github.com/JorunnO/Badminton"
});
projects.push({
  imageRoute: "/images/GEngine/Vulkan.png",
  imageAlt: "Screenshot render engine",
  languages: ["Vulkan", "C++", "CMake", "GLSL"],
  projectTitle: "Vulkan graphics engine",
  projectDescription: "Gengine is a custom game engine made with Vulkan",
  githubLink: "https://github.com/AnnoyingDog99/GEngine"
});
projects.push({
  imageRoute: "/images/Croma/CromaScreenshot.png",
  imageAlt: "Screenshot robotics website",
  languages: ["HTML", "Css", "Javascript", "Websockets", "Python"],
  projectTitle: "Robotics website",
  projectDescription: "A site made for info about our robot for the robotics tournament",
  githubLink: "https://github.com/Jitzek/TCS-Simulation",
  liveLink: "https://jitzek.github.io/croma-web-site/home.html"
});
projects.push({
  imageRoute: "/images/Isala/isalascreenshot.png",
  imageAlt: "Screenshot homepage Isala",
  languages: ["HTML", "Css", "Javascript", "PHP", "LDAP", "MySQL"],
  projectTitle: "Isala",
  projectDescription: `A website created for Isala to monitor diabetus patients. 
	Website was made for a project based on security, where students tried to find vulnerabilities in eachothers websites.`,
  githubLink: "https://github.com/Jitzek/isala-web-app"
});
projects.push({
  imageRoute: "/images/Gstain/gstainscreenshot.png",
  imageAlt: "Screenshot Gstain",
  languages: ["Java", "Javafx"],
  projectTitle: "Gstain",
  projectDescription: "A drawing app that tries to copy Adobe Illustrator. This project was made to learn about design patterns.",
  githubLink: "https://github.com/Jitzek/GStain"
});
const _page_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
}
function create_if_block(ctx) {
  let div;
  let div_intro;
  let current;
  let each_value = projects;
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div_nodes);
      }
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "card-container svelte-1mo7fvf");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*projects*/
      0) {
        each_value = projects;
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      if (!div_intro) {
        add_render_callback(() => {
          div_intro = create_in_transition(div, fade, { delay: 100 });
          div_intro.start();
        });
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_each_block(ctx) {
  let card;
  let current;
  card = new Card({ props: { cardInfo: (
    /*project*/
    ctx[1]
  ) } });
  return {
    c() {
      create_component(card.$$.fragment);
    },
    l(nodes) {
      claim_component(card.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(card, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(card.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(card.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(card, detaching);
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
      const head_nodes = head_selector("svelte-5oeyam", document.head);
      head_nodes.forEach(detach);
      t = claim_space(nodes);
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h() {
      document.title = "Projects";
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
