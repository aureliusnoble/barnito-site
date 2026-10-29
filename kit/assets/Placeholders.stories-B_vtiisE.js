import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./checks-C0Y16pbK.js";import{i,n as a,r as o,t as s}from"./app--B0L3gM3.js";var c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{r(),o(),c=t(),{expect:l,userEvent:u,waitFor:d,within:f}=__STORYBOOK_MODULE_TEST__,p={title:`App/OtherTabs`,parameters:{layout:`fullscreen`}},m=i(`2028-06-14T22:30:00Z`),h={loaders:[a(`morning`,m,{name:`rules`})],render:(e,{loaded:t})=>(0,c.jsx)(s,{loaded:t}),play:async({canvas:e})=>{await l(await e.findByText(`The rules come next`)).toBeVisible()}},g={loaders:[a(`morning`,m,{name:`me`})],render:(e,{loaded:t})=>(0,c.jsx)(s,{loaded:t}),play:async({canvas:e,canvasElement:t})=>{let r=await e.findByRole(`radiogroup`,{name:`Moment`}),i=f(r).getAllByRole(`radio`);await l(i).toHaveLength(6),await l(f(r).getByRole(`radio`,{name:`A match-day morning`})).toBeChecked(),await n(t),await u.click(f(r).getByText(`That night`)),await d(()=>l(f(e.getByRole(`radiogroup`,{name:`Moment`})).getByRole(`radio`,{name:`That night`})).toBeChecked())}},_=[`ComingNext`,`Moments`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  loaders: [at("morning", seen, {
    name: "rules"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas
  }) => {
    await expect(await canvas.findByText("The rules come next")).toBeVisible();
  }
}`,...h.parameters?.docs?.source},description:{story:`Rules for now: what comes next, said once (Matches came in Plan 5e-2).`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  loaders: [at("morning", seen, {
    name: "me"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const group = await canvas.findByRole("radiogroup", {
      name: "Moment"
    });
    const radios = within(group).getAllByRole("radio");
    await expect(radios).toHaveLength(6);
    await expect(within(group).getByRole("radio", {
      name: "A match-day morning"
    })).toBeChecked();
    await noSidewaysScroll(canvasElement);
    await userEvent.click(within(group).getByText("That night"));
    await waitFor(() => expect(within(canvas.getByRole("radiogroup", {
      name: "Moment"
    })).getByRole("radio", {
      name: "That night"
    })).toBeChecked());
  }
}`,...g.parameters?.docs?.source},description:{story:`Me for now: the moment switcher, the six moments with the current one chosen; choosing another loads it.`,...g.parameters?.docs?.description}}}})))()}v();export{h as ComingNext,g as Moments,_ as __namedExportsOrder,p as default};