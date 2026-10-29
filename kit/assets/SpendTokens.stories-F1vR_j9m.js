import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./checks-C0Y16pbK.js";import{n as i,r as a,t as o}from"./app--B0L3gM3.js";var s,c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{r(),a(),s=t(),{expect:c,userEvent:l,waitFor:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`App/SpendTokens`,parameters:{layout:`fullscreen`}},p=(e,t)=>d(e).getByRole(`region`,{name:t}),m=(e,t)=>d(e).getByRole(`group`,{name:`${t}'s tokens`}),h={loaders:[i(`eve`,void 0,{name:`tokens`})],render:(e,{loaded:t})=>(0,s.jsx)(o,{loaded:t}),play:async({canvas:e,canvasElement:t})=>{await e.findByRole(`heading`,{level:1,name:`Spend tokens`});let r=p(t,`Spain v Slovenia`);await c(e.getByRole(`region`,{name:`Matchday 1`})).toHaveTextContent(`4 of 4 drafted`);let i=m(p(t,`England v Serbia`),`England`);await c(d(i).getByRole(`button`,{name:`Increase`})).toBeDisabled(),await l.click(d(m(r,`Slovenia`)).getByRole(`button`,{name:`Decrease`})),await u(()=>c(e.getByRole(`region`,{name:`Matchday 1`})).toHaveTextContent(`3 of 4`)),await l.click(d(m(p(t,`England v Serbia`),`England`)).getByRole(`button`,{name:`Increase`})),await u(()=>c(m(p(t,`England v Serbia`),`England`).dataset.look).toBe(`draft`)),await l.click(d(m(p(t,`Spain v Slovenia`),`Spain`)).getByRole(`button`,{name:`Lock Spain's tokens`})),await u(()=>c(m(p(t,`Spain v Slovenia`),`Spain`).dataset.look).toBe(`locked`)),await n(t)}},g={loaders:[i(`eve`,void 0,{name:`tokens`})],render:(e,{loaded:t})=>(0,s.jsx)(o,{loaded:t}),play:async({canvas:e})=>{let t={level:2,name:`Lock by 12:00 tomorrow`};await c(await e.findByRole(`heading`,t)).toBeVisible(),await l.click(e.getByRole(`button`,{name:`By chance`})),await c(e.queryByRole(`heading`,t)).toBeNull(),await l.click(e.getByRole(`button`,{name:`By kickoff`})),await c(e.getByRole(`heading`,t)).toBeVisible()}},_={loaders:[i(`eve`,void 0,{name:`tokens`,match:`A-1`})],render:(e,{loaded:t})=>(0,s.jsx)(o,{loaded:t}),play:async({canvas:e})=>{await e.findByRole(`region`,{name:`Spain v Slovenia`}),await c(e.queryByRole(`region`,{name:`England v Serbia`})).toBeNull()}},v={loaders:[i(`knockouts`,void 0,{name:`tokens`})],render:(e,{loaded:t})=>(0,s.jsx)(o,{loaded:t}),play:async({canvas:e,canvasElement:t})=>{await e.findByRole(`heading`,{level:1,name:`Spend tokens`}),await n(t)}},y=[`Steppers`,`Sort`,`OneMatch`,`Knockouts`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  loaders: [at("eve", undefined, {
    name: "tokens"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await canvas.findByRole("heading", {
      level: 1,
      name: "Spend tokens"
    });
    const first = match(canvasElement, "Spain v Slovenia");
    await expect(canvas.getByRole("region", {
      name: "Matchday 1"
    })).toHaveTextContent("4 of 4 drafted");
    // At the allowance's end the steppers stop: no fifth token to refuse.
    const england = side(match(canvasElement, "England v Serbia"), "England");
    await expect(within(england).getByRole("button", {
      name: "Increase"
    })).toBeDisabled();
    await userEvent.click(within(side(first, "Slovenia")).getByRole("button", {
      name: "Decrease"
    }));
    await waitFor(() => expect(canvas.getByRole("region", {
      name: "Matchday 1"
    })).toHaveTextContent("3 of 4"));
    await userEvent.click(within(side(match(canvasElement, "England v Serbia"), "England")).getByRole("button", {
      name: "Increase"
    }));
    await waitFor(() => expect(side(match(canvasElement, "England v Serbia"), "England").dataset.look).toBe("draft"));
    await userEvent.click(within(side(match(canvasElement, "Spain v Slovenia"), "Spain")).getByRole("button", {
      name: "Lock Spain's tokens"
    }));
    await waitFor(() => expect(side(match(canvasElement, "Spain v Slovenia"), "Spain").dataset.look).toBe("locked"));
    await noSidewaysScroll(canvasElement);
  }
}`,...h.parameters?.docs?.source},description:{story:`The eve, matchday 1, all four drafted (Spain 2, Slovenia 2 in Spain v Slovenia): the steppers stop at the
allowance's end; one taken off can go elsewhere; a stack locks on its own.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  loaders: [at("eve", undefined, {
    name: "tokens"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas
  }) => {
    const tomorrow = {
      level: 2,
      name: "Lock by 12:00 tomorrow"
    } as const;
    await expect(await canvas.findByRole("heading", tomorrow)).toBeVisible();
    await userEvent.click(canvas.getByRole("button", {
      name: "By chance"
    }));
    await expect(canvas.queryByRole("heading", tomorrow)).toBeNull();
    await userEvent.click(canvas.getByRole("button", {
      name: "By kickoff"
    }));
    await expect(canvas.getByRole("heading", tomorrow)).toBeVisible();
  }
}`,...g.parameters?.docs?.source},description:{story:`By chance: one list without the deadlines' headings; by kickoff again, with them.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  loaders: [at("eve", undefined, {
    name: "tokens",
    match: "A-1"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas
  }) => {
    await canvas.findByRole("region", {
      name: "Spain v Slovenia"
    });
    await expect(canvas.queryByRole("region", {
      name: "England v Serbia"
    })).toBeNull();
  }
}`,..._.parameters?.docs?.source},description:{story:`From a match's link: that match alone.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  loaders: [at("knockouts", undefined, {
    name: "tokens"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await canvas.findByRole("heading", {
      level: 1,
      name: "Spend tokens"
    });
    await noSidewaysScroll(canvasElement);
  }
}`,...v.parameters?.docs?.source},description:{story:`The round of 16: nothing scrolls sideways at 360 px (the demo's review, I2).`,...v.parameters?.docs?.description}}}})))()}b();export{v as Knockouts,_ as OneMatch,g as Sort,h as Steppers,y as __namedExportsOrder,f as default};