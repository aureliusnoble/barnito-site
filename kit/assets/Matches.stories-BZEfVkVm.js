import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./checks-C0Y16pbK.js";import{a as i,i as a,n as o,r as s,t as c}from"./app--B0L3gM3.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{r(),s(),l=t(),{expect:u,userEvent:d,waitFor:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`App/Matches`,parameters:{layout:`fullscreen`}},h=a(`2028-06-14T22:30:00Z`),g=()=>window.location.hash,_={loaders:[o(`morning`,h,{name:`matches`})],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvas:e,canvasElement:t})=>{await e.findByRole(`heading`,{level:1,name:`Matches`}),await u(e.getByRole(`button`,{name:`Schedule`})).toHaveAttribute(`aria-pressed`,`true`);let r=e.getByRole(`region`,{name:`Today`});await u(p(r).getAllByRole(`group`,{name:/^Match \d of 3$/})).toHaveLength(3),await u(p(r).getByRole(`link`,{name:/You: Draw/})).toHaveAttribute(`href`,`#/match/B-4`),await u(e.getByRole(`button`,{name:`Upcoming`})).toHaveAttribute(`aria-pressed`,`true`);let i=e.getByRole(`link`,{name:/^France v Hungary/});await u(i).toHaveAttribute(`href`,`#/match/D-3`),await u(p(i.closest(`article`)).getByRole(`link`,{name:`France`})).toHaveAttribute(`href`,`#/team/FR`),await n(t)}},v={loaders:[o(`morning`,h,{name:`matches`})],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvas:e})=>{await d.click(await e.findByRole(`button`,{name:`Past`})),await f(()=>u(g()).toBe(`#/matches?side=past`)),await u(e.getAllByRole(`link`,{name:/^England v Croatia/})).toHaveLength(1),await d.click(e.getByRole(`button`,{name:`Matchday 1`})),await f(()=>u(g()).toBe(`#/matches?side=past&round=MD1`)),await u(e.queryByRole(`link`,{name:/^England v Croatia/})).toBeNull()}},y={loaders:[o(`morning`,i,{name:`matches`,side:`past`})],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvas:e})=>{let t=(await e.findByRole(`link`,{name:/^Spain v Italy/})).closest(`article`);await u(t.querySelectorAll(`[data-goals]`)).toHaveLength(0)}},b={loaders:[o(`night`,a(`2028-06-15T21:00:00Z`),{name:`matches`,view:`groups`})],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvas:e,canvasElement:t})=>{await u(await e.findByRole(`table`,{name:`Group A`})).toBeVisible(),await u(e.getByRole(`table`,{name:`Third-placed teams`})).toBeVisible(),await u(p(e.getByRole(`table`,{name:`Group A`})).getByRole(`link`,{name:`Spain`})).toHaveAttribute(`href`,`#/team/ES`),await n(t)}},x={loaders:[o(`knockouts`,a(`2028-06-23T22:00:00Z`),{name:`matches`,view:`bracket`})],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvas:e})=>{await d.click(await e.findByRole(`button`,{name:/^Everyone's champion/}));let t=await p(document.body).findByRole(`dialog`,{name:`Everyone's champion`});await u(p(t).getByRole(`link`,{name:`France`})).toHaveAttribute(`href`,`#/team/FR`),await d.keyboard(`{Escape}`),await f(()=>u(document.querySelector(`[role=dialog]`)).toBeNull()),await d.click(e.getByRole(`button`,{name:/^Spain v Austria/})),await f(()=>u(g()).toBe(`#/match/M37`))}},S={loaders:[o(`night`,a(`2028-06-15T21:00:00Z`),{name:`matches`})],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvas:e})=>{await d.click(await e.findByRole(`button`,{name:`Groups`})),await f(()=>u(g()).toBe(`#/matches/groups`)),await d.click(e.getByRole(`button`,{name:`Bracket`})),await f(()=>u(g()).toBe(`#/matches/bracket`)),await d.click(e.getByRole(`button`,{name:`Schedule`})),await f(()=>u(g()).toBe(`#/matches`))}},C=[`Schedule`,`PastAndRounds`,`PastSealed`,`Groups`,`Bracket`,`Views`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  loaders: [at("morning", seen, {
    name: "matches"
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
      name: "Matches"
    });
    await expect(canvas.getByRole("button", {
      name: "Schedule"
    })).toHaveAttribute("aria-pressed", "true");
    const today = canvas.getByRole("region", {
      name: "Today"
    });
    await expect(within(today).getAllByRole("group", {
      name: /^Match \\d of 3$/
    })).toHaveLength(3);
    await expect(within(today).getByRole("link", {
      name: /You: Draw/
    })).toHaveAttribute("href", "#/match/B-4");
    await expect(canvas.getByRole("button", {
      name: "Upcoming"
    })).toHaveAttribute("aria-pressed", "true");
    const card = canvas.getByRole("link", {
      name: /^France v Hungary/
    });
    await expect(card).toHaveAttribute("href", "#/match/D-3");
    await expect(within(card.closest("article")!).getByRole("link", {
      name: "France"
    })).toHaveAttribute("href", "#/team/FR");
    await noSidewaysScroll(canvasElement);
  }
}`,..._.parameters?.docs?.source},description:{story:`Matches › Schedule on the morning (the owner's 28 Oct mockup): today's slides, Upcoming, the little cards. A card
opens its match, a team's name its page, a slide's strip the match.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  loaders: [at("morning", seen, {
    name: "matches"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas
  }) => {
    await userEvent.click(await canvas.findByRole("button", {
      name: "Past"
    }));
    await waitFor(() => expect(hash()).toBe("#/matches?side=past"));
    await expect(canvas.getAllByRole("link", {
      name: /^England v Croatia/
    })).toHaveLength(1);
    await userEvent.click(canvas.getByRole("button", {
      name: "Matchday 1"
    }));
    await waitFor(() => expect(hash()).toBe("#/matches?side=past&round=MD1"));
    await expect(canvas.queryByRole("link", {
      name: /^England v Croatia/
    })).toBeNull();
  }
}`,...v.parameters?.docs?.source},description:{story:`Past, latest first, with scores; a round chip filters, and both stay in the address.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  loaders: [at("morning", openedYesterday, {
    name: "matches",
    side: "past"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas
  }) => {
    const card = (await canvas.findByRole("link", {
      name: /^Spain v Italy/
    })).closest("article")!;
    await expect(card.querySelectorAll("[data-goals]")).toHaveLength(0);
  }
}`,...y.parameters?.docs?.source},description:{story:`A sealed morning: yesterday's matches are in the past with no score.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  loaders: [at("night", lastOpened("2028-06-15T21:00:00Z"), {
    name: "matches",
    view: "groups"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(await canvas.findByRole("table", {
      name: "Group A"
    })).toBeVisible();
    await expect(canvas.getByRole("table", {
      name: "Third-placed teams"
    })).toBeVisible();
    await expect(within(canvas.getByRole("table", {
      name: "Group A"
    })).getByRole("link", {
      name: "Spain"
    })).toHaveAttribute("href", "#/team/ES");
    await noSidewaysScroll(canvasElement);
  }
}`,...b.parameters?.docs?.source},description:{story:`Matches › Groups: the night's tables, the thirds; a team opens its page.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  loaders: [at("knockouts", lastOpened("2028-06-23T22:00:00Z"), {
    name: "matches",
    view: "bracket"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas
  }) => {
    await userEvent.click(await canvas.findByRole("button", {
      name: /^Everyone's champion/
    }));
    const sheet = await within(document.body).findByRole("dialog", {
      name: "Everyone's champion"
    });
    await expect(within(sheet).getByRole("link", {
      name: "France"
    })).toHaveAttribute("href", "#/team/FR");
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(document.querySelector("[role=dialog]")).toBeNull());
    await userEvent.click(canvas.getByRole("button", {
      name: /^Spain v Austria/
    }));
    await waitFor(() => expect(hash()).toBe("#/match/M37"));
  }
}`,...x.parameters?.docs?.source},description:{story:`Matches › Bracket: a tie opens its match; everyone's champion opens its sheet, a team in it its page.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  loaders: [at("night", lastOpened("2028-06-15T21:00:00Z"), {
    name: "matches"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas
  }) => {
    await userEvent.click(await canvas.findByRole("button", {
      name: "Groups"
    }));
    await waitFor(() => expect(hash()).toBe("#/matches/groups"));
    await userEvent.click(canvas.getByRole("button", {
      name: "Bracket"
    }));
    await waitFor(() => expect(hash()).toBe("#/matches/bracket"));
    await userEvent.click(canvas.getByRole("button", {
      name: "Schedule"
    }));
    await waitFor(() => expect(hash()).toBe("#/matches"));
  }
}`,...S.parameters?.docs?.source},description:{story:`The three views are tabs whose choice is in the address.`,...S.parameters?.docs?.description}}}})))()}w();export{x as Bracket,b as Groups,v as PastAndRounds,y as PastSealed,_ as Schedule,S as Views,C as __namedExportsOrder,m as default};