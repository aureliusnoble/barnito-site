import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-DCluhXK3.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,i,r as a}from"./checks-CKr9wmxM.js";import{i as o,n as s,r as c,t as l}from"./ToggleGroup-NnROfvce.js";function u({label:e,options:t,value:n,onValueChange:r}){return(0,d.jsx)(l,{"aria-label":e,value:[n],onValueChange:e=>e[0]!==void 0&&r(String(e[0])),className:`flex w-full gap-1 rounded-button bg-surface-sunken p-1`,children:t.map(e=>(0,d.jsx)(c,{value:e.value,className:`min-h-target min-w-0 flex-1 truncate rounded-button px-3 text-label font-semibold text-fg-muted transition-colors data-pressed:bg-brand data-pressed:text-on-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-fg`,children:e.label},e.value))})}var d;function f(){return(f=e((()=>{o(),s(),d=n(),u.__docgenInfo={description:`Two to four ways to see the same thing; one is always chosen, in the brand's colours (F66).`,methods:[],displayName:`SegmentedControl`,props:{label:{required:!0,tsType:{name:`string`},description:`Names the control for screen readers ("Table view").`},options:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ value: string; label: string }`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}}]}}],raw:`{ value: string; label: string }[]`},description:``},value:{required:!0,tsType:{name:`string`},description:``},onValueChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``}}}})))()}function p({options:e}){let[t,n]=(0,m.useState)(e[0].value);return(0,h.jsx)(u,{label:`Table view`,options:e,value:t,onValueChange:n})}var m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{m=t(),a(),f(),h=n(),{expect:g,waitFor:_}=__STORYBOOK_MODULE_TEST__,v={title:`Components/SegmentedControl`},y={render:()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p,{options:[{value:`overall`,label:`Overall`},{value:`today`,label:`Today`}]}),(0,h.jsx)(`span`,{"data-brand":!0,className:`bg-brand text-on-brand`})]}),play:async({canvas:e,canvasElement:t,userEvent:n})=>{let a=e.getByRole(`button`,{name:`Overall`}),o=e.getByRole(`button`,{name:`Today`});for(let e of[a,o])await r(e);await n.click(o),await g(o).toHaveAttribute(`aria-pressed`,`true`),await g(a).toHaveAttribute(`aria-pressed`,`false`);let s=getComputedStyle(t.querySelector(`[data-brand]`));await _(()=>g(getComputedStyle(o).backgroundColor).toBe(s.backgroundColor)),await _(()=>g(getComputedStyle(o).color).toBe(s.color)),await n.click(o),await g(o).toHaveAttribute(`aria-pressed`,`true`),await i(t)}},b={render:()=>(0,h.jsx)(p,{options:[{value:`a`,label:`Everyone overall`},{value:`b`,label:`Today's matches`},{value:`c`,label:`Knockouts only`}]}),play:async({canvasElement:e})=>i(e)},x=[`OverallOrToday`,`LongLabels`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`One of two always pressed; pressing the other moves it. The chosen one wears the brand's colours, so it stands
out from its track beyond a shadow (F66).`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}}})))()}S();export{b as LongLabels,y as OverallOrToday,x as __namedExportsOrder,v as default};