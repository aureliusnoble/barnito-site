import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,c as n,i as r,n as i,o as a,r as o,s,t as c}from"./BottomNav-DSwl3gpN.js";import{i as l,n as u,r as d,t as f}from"./trophy-wKkWjXLF.js";var p,m,h,g;function _(){return(_=e((()=>{n(),a(),r(),l(),u(),i(),{expect:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/BottomNav`,component:c},h={args:{items:[{href:`#home`,label:`Home`,icon:o,current:!0},{href:`#picks`,label:`Picks`,icon:d},{href:`#table`,label:`Table`,icon:f},{href:`#matches`,label:`Matches`,icon:s},{href:`#me`,label:`Me`,icon:t}]},play:async({canvas:e})=>{let t=e.getAllByRole(`link`).filter(e=>e.getAttribute(`aria-current`)===`page`);await p(t.map(e=>e.textContent)).toEqual([`Home`]);let n=getComputedStyle(e.getByRole(`navigation`));await p(parseFloat(n.paddingBottom)).toBeGreaterThanOrEqual(parseFloat(n.paddingTop))}},g=[`Home`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      href: "#home",
      label: "Home",
      icon: House,
      current: true
    }, {
      href: "#picks",
      label: "Picks",
      icon: ListChecks
    }, {
      href: "#table",
      label: "Table",
      icon: Trophy
    }, {
      href: "#matches",
      label: "Matches",
      icon: CalendarDays
    }, {
      href: "#me",
      label: "Me",
      icon: CircleUser
    }]
  },
  play: async ({
    canvas
  }) => {
    const current = canvas.getAllByRole("link").filter(link => link.getAttribute("aria-current") === "page");
    await expect(current.map(link => link.textContent)).toEqual(["Home"]);
    const nav = getComputedStyle(canvas.getByRole("navigation"));
    await expect(parseFloat(nav.paddingBottom)).toBeGreaterThanOrEqual(parseFloat(nav.paddingTop));
  }
}`,...h.parameters?.docs?.source},description:{story:`Home is current, marked for screen readers, and the bar clears the phone's home indicator.`,...h.parameters?.docs?.description}}}})))()}_();export{h as Home,g as __namedExportsOrder,m as default};