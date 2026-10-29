import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-DCluhXK3.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./SegmentedControl-h546Xvk-.js";import{a,i as o,r as s}from"./checks-C0Y16pbK.js";function c({options:e}){let[t,n]=(0,l.useState)(e[0].value);return(0,u.jsx)(i,{label:`Table view`,options:e,value:t,onValueChange:n})}var l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{l=t(),s(),r(),u=n(),{expect:d,waitFor:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/SegmentedControl`},m={render:()=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c,{options:[{value:`overall`,label:`Overall`},{value:`today`,label:`Today`}]}),(0,u.jsx)(`span`,{"data-brand":!0,className:`bg-brand text-on-brand`})]}),play:async({canvas:e,canvasElement:t,userEvent:n})=>{let r=e.getByRole(`button`,{name:`Overall`}),i=e.getByRole(`button`,{name:`Today`});for(let e of[r,i])await a(e);await n.click(i),await d(i).toHaveAttribute(`aria-pressed`,`true`),await d(r).toHaveAttribute(`aria-pressed`,`false`);let s=getComputedStyle(t.querySelector(`[data-brand]`));await f(()=>d(getComputedStyle(i).backgroundColor).toBe(s.backgroundColor)),await f(()=>d(getComputedStyle(i).color).toBe(s.color)),await n.click(i),await d(i).toHaveAttribute(`aria-pressed`,`true`),await o(t)}},h={render:()=>(0,u.jsx)(c,{options:[{value:`a`,label:`Everyone overall`},{value:`b`,label:`Today's matches`},{value:`c`,label:`Knockouts only`}]}),play:async({canvasElement:e})=>o(e)},g=[`OverallOrToday`,`LongLabels`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <TableView options={[{
      value: "overall",
      label: "Overall"
    }, {
      value: "today",
      label: "Today"
    }]} />
      <span data-brand className="bg-brand text-on-brand" />
    </>,
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    const overall = canvas.getByRole("button", {
      name: "Overall"
    });
    const today = canvas.getByRole("button", {
      name: "Today"
    });
    for (const segment of [overall, today]) await thumbSized(segment);
    await userEvent.click(today);
    await expect(today).toHaveAttribute("aria-pressed", "true");
    await expect(overall).toHaveAttribute("aria-pressed", "false");
    const brand = getComputedStyle(canvasElement.querySelector("[data-brand]")!);
    // After the colour transition.
    await waitFor(() => expect(getComputedStyle(today).backgroundColor).toBe(brand.backgroundColor));
    await waitFor(() => expect(getComputedStyle(today).color).toBe(brand.color));
    await userEvent.click(today);
    await expect(today).toHaveAttribute("aria-pressed", "true");
    await noSidewaysScroll(canvasElement);
  }
}`,...m.parameters?.docs?.source},description:{story:`One of two always pressed; pressing the other moves it. The chosen one wears the brand's colours, so it stands
out from its track beyond a shadow (F66).`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <TableView options={[{
    value: "a",
    label: "Everyone overall"
  }, {
    value: "b",
    label: "Today's matches"
  }, {
    value: "c",
    label: "Knockouts only"
  }]} />,
  play: async ({
    canvasElement
  }) => noSidewaysScroll(canvasElement)
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as LongLabels,m as OverallOrToday,g as __namedExportsOrder,p as default};