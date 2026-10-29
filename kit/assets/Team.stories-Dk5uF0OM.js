import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./checks-C0Y16pbK.js";import{i,n as a,r as o,t as s}from"./app--B0L3gM3.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{r(),o(),c=t(),{expect:l,userEvent:u,waitFor:d,within:f}=__STORYBOOK_MODULE_TEST__,p={title:`App/Team`,parameters:{layout:`fullscreen`}},m=i(`2028-06-15T21:00:00Z`),h=()=>f(document.body),g=async()=>(await h().findAllByRole(`dialog`)).find(e=>!e.hasAttribute(`data-toast`)),_={loaders:[a(`night`,m,{name:`team`,id:`CH`})],render:(e,{loaded:t})=>(0,c.jsx)(s,{loaded:t}),play:async({canvas:e,canvasElement:t})=>{await e.findByRole(`heading`,{level:1,name:`Switzerland`}),await l(e.getByRole(`link`,{name:`Back to Groups`})).toHaveAttribute(`href`,`#/matches/groups`),await l(e.getByRole(`region`,{name:`To win the Euro`})).toHaveTextContent(`Your champion`);let r=e.getByRole(`region`,{name:`Next match: pick here`});await l(f(r).getByRole(`region`,{name:`Belgium v Switzerland`})).toBeVisible(),await l(f(r).getByRole(`button`,{name:/^Scorers/})).toBeVisible(),await l(e.getByRole(`link`,{name:`All its players`})).toHaveAttribute(`href`,`#/picks/scorers?team=CH`),await l(e.getByRole(`link`,{name:/v Ukraine/})).toHaveAttribute(`href`,`#/match/E-2`),await l(e.getByRole(`table`,{name:`Group E`})).toBeVisible(),await n(t)}},v={loaders:[a(`night`,m,{name:`team`,id:`CH`})],render:(e,{loaded:t})=>(0,c.jsx)(s,{loaded:t}),play:async({canvas:e})=>{let t=await e.findByRole(`region`,{name:`Its scorers for the next match`});await u.click(f(t).getAllByRole(`button`,{name:/^Add /})[0]),await d(()=>l(document.querySelector(`[data-toast]`)).not.toBeNull()),await u.click(f(t).getAllByRole(`button`).filter(e=>!e.getAttribute(`aria-label`)?.startsWith(`Add `))[0]),await l(await g()).toHaveTextContent(`Switzerland ·`)}},y={loaders:[a(`night`,m,{name:`team`,id:`CH`})],render:(e,{loaded:t})=>(0,c.jsx)(s,{loaded:t}),play:async({canvas:e})=>{await u.click(await e.findByRole(`button`,{name:`Squad`}));let t=await g();await l(t).toHaveAccessibleName(`Switzerland's squad`),await u.click(f(t).getAllByRole(`button`).find(e=>e.textContent?.includes(`Xhaka`))),await d(async()=>l(await g()).toHaveAccessibleName(`Granit Xhaka`))}},b={loaders:[a(`knockouts`,i(`2028-06-23T22:00:00Z`),{name:`team`,id:`SI`})],render:(e,{loaded:t})=>(0,c.jsx)(s,{loaded:t}),play:async({canvas:e})=>{await e.findByRole(`heading`,{level:1,name:`Slovenia`}),await l(e.getByText(`Out in the groups`)).toBeVisible(),await l(e.queryByRole(`region`,{name:`Next match: pick here`})).toBeNull()}},x={loaders:[a(`night`,m,{name:`scorers`,team:`CH`})],render:(e,{loaded:t})=>(0,c.jsx)(s,{loaded:t}),play:async({canvas:e})=>{await e.findByRole(`heading`,{level:1,name:`Pick scorers`}),await l(e.queryByText(`Kevin De Bruyne`)).toBeNull(),await l(e.getAllByText(`Granit Xhaka`).length).toBeGreaterThan(0),await l(e.getByRole(`button`,{name:`Belgium v Switzerland`})).toHaveAttribute(`aria-pressed`,`true`),await l(e.getByRole(`button`,{name:`All`})).toHaveAttribute(`aria-pressed`,`false`),await u.click(e.getByRole(`button`,{name:`All`})),await d(()=>l(e.getAllByText(`Kevin De Bruyne`).length).toBeGreaterThan(0))}},S=[`Switzerland`,`Scorers`,`Squad`,`Out`,`AllItsPlayers`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  loaders: [at("night", night, {
    name: "team",
    id: "CH"
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
      name: "Switzerland"
    });
    await expect(canvas.getByRole("link", {
      name: "Back to Groups"
    })).toHaveAttribute("href", "#/matches/groups");
    await expect(canvas.getByRole("region", {
      name: "To win the Euro"
    })).toHaveTextContent("Your champion");
    const next = canvas.getByRole("region", {
      name: "Next match: pick here"
    });
    await expect(within(next).getByRole("region", {
      name: "Belgium v Switzerland"
    })).toBeVisible();
    await expect(within(next).getByRole("button", {
      name: /^Scorers/
    })).toBeVisible();
    await expect(canvas.getByRole("link", {
      name: "All its players"
    })).toHaveAttribute("href", "#/picks/scorers?team=CH");
    await expect(canvas.getByRole("link", {
      name: /v Ukraine/
    })).toHaveAttribute("href", "#/match/E-2");
    await expect(canvas.getByRole("table", {
      name: "Group E"
    })).toBeVisible();
    await noSidewaysScroll(canvasElement);
  }
}`,..._.parameters?.docs?.source},description:{story:`Switzerland on the night (the owner's 28 Oct mockup): the price to win with your champion, the next match to pick,
its likeliest scorers, its matches, its group, the squad. Landed on directly, Back is Groups.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  loaders: [at("night", night, {
    name: "team",
    id: "CH"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas
  }) => {
    const scorers = await canvas.findByRole("region", {
      name: "Its scorers for the next match"
    });
    await userEvent.click(within(scorers).getAllByRole("button", {
      name: /^Add /
    })[0]!);
    await waitFor(() => expect(document.querySelector("[data-toast]")).not.toBeNull());
    await userEvent.click(within(scorers).getAllByRole("button").filter(b => !b.getAttribute("aria-label")?.startsWith("Add "))[0]!);
    await expect(await sheet()).toHaveTextContent("Switzerland ·");
  }
}`,...v.parameters?.docs?.source},description:{story:`A scorer's + drafts him, or says why not (your four for the round are made that night); a name opens his sheet.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  loaders: [at("night", night, {
    name: "team",
    id: "CH"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas
  }) => {
    await userEvent.click(await canvas.findByRole("button", {
      name: "Squad"
    }));
    const squad = await sheet();
    await expect(squad).toHaveAccessibleName("Switzerland's squad");
    await userEvent.click(within(squad).getAllByRole("button").find(b => b.textContent?.includes("Xhaka"))!);
    await waitFor(async () => expect(await sheet()).toHaveAccessibleName("Granit Xhaka"));
  }
}`,...y.parameters?.docs?.source},description:{story:`Squad opens the team's squad; a player there opens his sheet.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  loaders: [at("knockouts", lastOpened("2028-06-23T22:00:00Z"), {
    name: "team",
    id: "SI"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas
  }) => {
    await canvas.findByRole("heading", {
      level: 1,
      name: "Slovenia"
    });
    await expect(canvas.getByText("Out in the groups")).toBeVisible();
    await expect(canvas.queryByRole("region", {
      name: "Next match: pick here"
    })).toBeNull();
  }
}`,...b.parameters?.docs?.source},description:{story:`A team out: where it went out, no next match.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  loaders: [at("night", night, {
    name: "scorers",
    team: "CH"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas
  }) => {
    await canvas.findByRole("heading", {
      level: 1,
      name: "Pick scorers"
    });
    await expect(canvas.queryByText("Kevin De Bruyne")).toBeNull();
    await expect(canvas.getAllByText("Granit Xhaka").length).toBeGreaterThan(0);
    // The filter shows: the team's match chosen, not All (the mockup review, finding 5); another chip lifts it.
    await expect(canvas.getByRole("button", {
      name: "Belgium v Switzerland"
    })).toHaveAttribute("aria-pressed", "true");
    await expect(canvas.getByRole("button", {
      name: "All"
    })).toHaveAttribute("aria-pressed", "false");
    await userEvent.click(canvas.getByRole("button", {
      name: "All"
    }));
    await waitFor(() => expect(canvas.getAllByText("Kevin De Bruyne").length).toBeGreaterThan(0));
  }
}`,...x.parameters?.docs?.source},description:{story:`All its players: Pick scorers filtered to the team.`,...x.parameters?.docs?.description}}}})))()}C();export{x as AllItsPlayers,b as Out,v as Scorers,y as Squad,_ as Switzerland,S as __namedExportsOrder,p as default};