import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Tabs-BgpcoGJV.js";import{a as i,i as a,r as o}from"./checks-C0Y16pbK.js";var s,c,l,u,d,f,p;function m(){return(m=e((()=>{o(),n(),s=t(),{expect:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/Tabs`,component:r},u=[{value:`day`,label:`By day`,panel:(0,s.jsx)(`p`,{children:`Tue 13 Jun`})},{value:`groups`,label:`Groups`,panel:(0,s.jsx)(`p`,{children:`Group A`})},{value:`bracket`,label:`Bracket`,panel:(0,s.jsx)(`p`,{children:`Round of 16`})}],d={args:{label:`Matches`,tabs:u,defaultValue:`day`},play:async({canvas:e,canvasElement:t,userEvent:n})=>{await c(e.getByRole(`tablist`,{name:`Matches`})).toBeVisible();for(let t of e.getAllByRole(`tab`))await i(t);await n.click(e.getByRole(`tab`,{name:`By day`})),await n.keyboard(`{ArrowRight}`),await c(e.getByRole(`tab`,{name:`Groups`})).toHaveAttribute(`aria-selected`,`true`),await c(e.getByText(`Group A`)).toBeVisible(),await a(t)}},f={args:{label:`Table`,tabs:[`Everyone overall`,`Today's matches only`,`Knockout rounds`,`Your friends' head to head`].map(e=>({value:e,label:e,panel:(0,s.jsx)(`p`,{children:e})}))},play:async({canvasElement:e})=>a(e)},p=[`Matches`,`LongLabels`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Matches",
    tabs: matches,
    defaultValue: "day"
  },
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    await expect(canvas.getByRole("tablist", {
      name: "Matches"
    })).toBeVisible();
    for (const tab of canvas.getAllByRole("tab")) await thumbSized(tab);
    await userEvent.click(canvas.getByRole("tab", {
      name: "By day"
    }));
    await userEvent.keyboard("{ArrowRight}");
    await expect(canvas.getByRole("tab", {
      name: "Groups"
    })).toHaveAttribute("aria-selected", "true");
    await expect(canvas.getByText("Group A")).toBeVisible();
    await noSidewaysScroll(canvasElement);
  }
}`,...d.parameters?.docs?.source},description:{story:`Matches by day, groups or bracket: the arrow keys move between tabs, and the panel follows.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Table",
    tabs: ["Everyone overall", "Today's matches only", "Knockout rounds", "Your friends' head to head"].map(label => ({
      value: label,
      label,
      panel: <p>{label}</p>
    }))
  },
  play: async ({
    canvasElement
  }) => noSidewaysScroll(canvasElement)
}`,...f.parameters?.docs?.source},description:{story:`Long labels scroll inside the bar, never the page.`,...f.parameters?.docs?.description}}}})))()}m();export{f as LongLabels,d as Matches,p as __namedExportsOrder,l as default};