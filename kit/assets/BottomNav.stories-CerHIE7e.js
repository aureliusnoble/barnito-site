import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,i as n,n as r,o as i,r as a,t as o}from"./house-CwqHSITP.js";import{n as s,t as c}from"./list-checks-BtPsJ91H.js";import{n as l,t as u}from"./trophy-NaFL7w3d.js";import{n as d,t as f}from"./BottomNav-DFly8R2j.js";var p,m,h,g;function _(){return(_=e((()=>{i(),n(),r(),s(),l(),d(),{expect:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/BottomNav`,component:f},h={args:{items:[{href:`#home`,label:`Home`,icon:o,current:!0},{href:`#picks`,label:`Picks`,icon:c},{href:`#table`,label:`Table`,icon:u},{href:`#matches`,label:`Matches`,icon:t},{href:`#me`,label:`Me`,icon:a}]},play:async({canvas:e})=>{let t=e.getAllByRole(`link`).filter(e=>e.getAttribute(`aria-current`)===`page`);await p(t.map(e=>e.textContent)).toEqual([`Home`]);let n=getComputedStyle(e.getByRole(`navigation`));await p(parseFloat(n.paddingBottom)).toBeGreaterThanOrEqual(parseFloat(n.paddingTop))}},g=[`Home`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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