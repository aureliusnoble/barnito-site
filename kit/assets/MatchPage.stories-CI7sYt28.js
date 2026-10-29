import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r,t as i}from"./checks-C0Y16pbK.js";import{i as a,n as o,r as s,t as c}from"./app--B0L3gM3.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{r(),s(),l=t(),{expect:u,userEvent:d,waitFor:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`App/MatchPage`,parameters:{layout:`fullscreen`}},h=a(`2028-06-14T22:30:00Z`),g=e=>p(e.getByRole(`tablist`,{name:`The match's parts`})).getAllByRole(`tab`).map(e=>e.textContent),_=()=>p(document.body).findAllByRole(`dialog`).then(e=>e.find(e=>!e.hasAttribute(`data-toast`))),v={loaders:[o(`morning`,h,{name:`match`,id:`C-4`})],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvas:e,canvasElement:t})=>{await e.findByRole(`heading`,{level:1,name:`Germany v Poland`});let r=e.getByRole(`region`,{name:`Germany v Poland`});await u(r.querySelector(`[data-centre]`)).toHaveTextContent(`20:00`),await u(r).toHaveTextContent(/of 9 locked/),await u(p(r).getByRole(`button`,{name:/^Scorers/})).toBeVisible(),await u(p(r).getByText(`No pick`)).toBeVisible(),await u(g(e)).toEqual([`Match`,`Line-ups`,`Odds`]),await u(e.getByRole(`region`,{name:`Form`})).toBeVisible(),await u(e.getByRole(`table`,{name:`Group C`})).toBeVisible(),await u(e.queryByRole(`region`,{name:`Your picks`})).toBeNull(),await u(p(r).getByRole(`link`,{name:`Germany`})).toHaveAttribute(`href`,`#/team/DE`),await n(t)}},y={loaders:[o(`morning`,h,{name:`match`,id:`C-4`})],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvas:e})=>{await e.findByRole(`heading`,{level:1,name:`Germany v Poland`});let t=e.getByRole(`region`,{name:`Germany v Poland`}),n=p(t).getAllByRole(`button`).filter(e=>e.hasAttribute(`data-state`));await d.click(n[2]),await _(),await u(n[2]).toHaveAttribute(`data-selected`),await d.keyboard(`{Escape}`),await f(()=>u(n[2]).not.toHaveAttribute(`data-selected`)),await d.click(p(t).getByRole(`button`,{name:/^Scorers/})),await f(()=>u(window.location.hash).toBe(`#/picks/scorers?match=C-4`))}},b={loaders:[o(`morning`,h,{name:`match`,id:`C-3`})],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvas:e})=>{await e.findByRole(`heading`,{level:1,name:`Portugal v Austria`}),await d.click(e.getByRole(`button`,{name:`Lock Portugal v Austria`})),await f(()=>u(document.querySelector(`[data-toast]`)).toHaveTextContent(`Locked`))}},x={loaders:[o(`reveal`,a(`2028-06-15T07:00:00Z`),{name:`match`,id:`C-4`})],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvas:e})=>{await e.findByRole(`heading`,{level:1,name:`Germany v Poland`}),await u(g(e)).toEqual([`Picks`,`Match`,`Line-ups`,`Odds`]),await u(e.getByRole(`tab`,{name:`Picks`})).toHaveAttribute(`aria-selected`,`true`);let t=e.getByRole(`region`,{name:`Who picked what`});await u(e.getByRole(`heading`,{name:`Who picked what`})).toBeVisible(),await u(e.getByText(/^\d+ of 9$/)).toBeVisible(),await u(t.querySelectorAll(`[data-pays]`).length).toBeGreaterThan(0),await u(t).toHaveTextContent(/No pick: You/)}},S={loaders:[o(`night`,void 0,{name:`match`,id:`A-1`})],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvas:e,canvasElement:t})=>{await e.findByRole(`heading`,{level:1,name:`Spain v Slovenia`}),await u(g(e)).toEqual([`Match`,`Line-ups`,`Picks`,`Odds`]);let r=e.getByRole(`list`,{name:`Timeline`}),i=p(r).getAllByRole(`listitem`).find(e=>e.textContent?.includes(`16′`));await u(p(i).getByRole(`img`,{name:`Picked by Ana, Jonny, Mel, Raj, Sam`})).toBeVisible(),await u(e.getByText(`Possession`)).toBeVisible(),await u(e.getByRole(`region`,{name:`Team news`})).toBeVisible(),await n(t),await d.click(e.getByRole(`tab`,{name:`Line-ups`})),await u(await e.findByRole(`region`,{name:`Line-ups`})).toBeVisible(),await d.click(e.getByRole(`tab`,{name:`Picks`}));let a=await e.findByRole(`table`,{name:`What each earned`});await u(a.compareDocumentPosition(e.getByRole(`region`,{name:`Who picked what`}))&Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()}},C={loaders:[o(`morning`,h,{name:`match`,id:`C-3`})],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvas:e})=>{await e.findByRole(`heading`,{level:1,name:`Portugal v Austria`}),await d.click(e.getByRole(`tab`,{name:`Line-ups`})),await d.click(await e.findByRole(`button`,{name:/Bruno Fernandes/}));let t=await _();await u(t).toHaveAccessibleName(`Bruno Fernandes`),await d.click(p(t).getByRole(`button`,{name:`Draft`})),await u(await p(t).findByRole(`alert`)).toHaveTextContent(/scorer picks/)}},w={loaders:[o(`morning`,h,{name:`match`,id:`C-4`})],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvas:e})=>{await e.findByRole(`heading`,{level:1,name:`Germany v Poland`}),await d.click(e.getByRole(`tab`,{name:`Odds`})),await u(await e.findByRole(`img`,{name:/^The odds over time: /},{timeout:1e4})).toBeVisible()}},T={loaders:[o(`morning`,h,{name:`match`,id:`Z-9`})],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvas:e})=>{await u(await e.findByText(`Match not found`)).toBeVisible()}},E={loaders:[o(`night`,void 0,{name:`match`,id:`B-4`})],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvas:e,canvasElement:t})=>{await e.findByRole(`list`,{name:`Timeline`}),await n(t);let r=i();for(let e of r?[390,360]:[]){await r.viewport(e,844),await new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e)));for(let n of t.querySelectorAll(`main section, main article`))await u(n.getBoundingClientRect().right,`${n.getAttribute(`aria-label`)??n.tagName} at ${e}`).toBeLessThanOrEqual(e-16+.5)}r&&await r.viewport(414,896)}},D={loaders:[o(`knockouts`,void 0,{name:`match`,id:`E-5`})],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvas:e,canvasElement:t})=>{await e.findByRole(`tablist`,{name:`The match's parts`}),await n(t)}},O={loaders:[o(`morning`,h,{name:`match`,id:`M37`})],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvas:e})=>{let t=await e.findByRole(`heading`,{level:1,name:/ v /});await u(t).not.toHaveTextContent(`Match not found`),await u(e.getByText(/^Opens when /)).toBeVisible(),await u(e.queryByText(`Match not found`)).toBeNull()}},k=[`Before`,`PickHere`,`Drafted`,`AfterLock`,`Played`,`SquadPlayer`,`OddsBefore`,`NotFound`,`LongLines`,`Knockout`,`TeamsToCome`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  loaders: [at("morning", seen, {
    name: "match",
    id: "C-4"
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
      name: "Germany v Poland"
    });
    const card = canvas.getByRole("region", {
      name: "Germany v Poland"
    });
    await expect(card.querySelector("[data-centre]")).toHaveTextContent("20:00");
    await expect(card).toHaveTextContent(/of 9 locked/);
    await expect(within(card).getByRole("button", {
      name: /^Scorers/
    })).toBeVisible();
    await expect(within(card).getByText("No pick")).toBeVisible();
    await expect(tabsOf(canvas)).toEqual(["Match", "Line-ups", "Odds"]);
    await expect(canvas.getByRole("region", {
      name: "Form"
    })).toBeVisible();
    await expect(canvas.getByRole("table", {
      name: "Group C"
    })).toBeVisible();
    await expect(canvas.queryByRole("region", {
      name: "Your picks"
    })).toBeNull();
    await expect(within(card).getByRole("link", {
      name: "Germany"
    })).toHaveAttribute("href", "#/team/DE");
    await noSidewaysScroll(canvasElement);
  }
}`,...v.parameters?.docs?.source},description:{story:`Before the lock (the owner's 28 Oct mockup): the header, the options with who has locked and "To pick", the
match's Scorers and Tokens, "No pick"; tabs Match · Line-ups · Odds, opening on Match with its facts.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  loaders: [at("morning", seen, {
    name: "match",
    id: "C-4"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas
  }) => {
    await canvas.findByRole("heading", {
      level: 1,
      name: "Germany v Poland"
    });
    const card = canvas.getByRole("region", {
      name: "Germany v Poland"
    });
    const tiles = within(card).getAllByRole("button").filter(b => b.hasAttribute("data-state"));
    await userEvent.click(tiles[2]!);
    await sheet();
    await expect(tiles[2]).toHaveAttribute("data-selected");
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(tiles[2]).not.toHaveAttribute("data-selected"));
    await userEvent.click(within(card).getByRole("button", {
      name: /^Scorers/
    }));
    await waitFor(() => expect(window.location.hash).toBe("#/picks/scorers?match=C-4"));
  }
}`,...y.parameters?.docs?.source},description:{story:`The match's Scorers and Tokens open their screens filtered to it; a tapped option is ringed while its sheet is
open (F79, note 4).`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  loaders: [at("morning", seen, {
    name: "match",
    id: "C-3"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas
  }) => {
    await canvas.findByRole("heading", {
      level: 1,
      name: "Portugal v Austria"
    });
    await userEvent.click(canvas.getByRole("button", {
      name: "Lock Portugal v Austria"
    }));
    await waitFor(() => expect(document.querySelector("[data-toast]")).toHaveTextContent("Locked"));
  }
}`,...b.parameters?.docs?.source},description:{story:`Your draft: Lock locks it, with a toast.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  loaders: [at("reveal", lastOpened("2028-06-15T07:00:00Z"), {
    name: "match",
    id: "C-4"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas
  }) => {
    await canvas.findByRole("heading", {
      level: 1,
      name: "Germany v Poland"
    });
    await expect(tabsOf(canvas)).toEqual(["Picks", "Match", "Line-ups", "Odds"]);
    await expect(canvas.getByRole("tab", {
      name: "Picks"
    })).toHaveAttribute("aria-selected", "true");
    const picked = canvas.getByRole("region", {
      name: "Who picked what"
    });
    // The heading with how many picked, each person with what the pick pays, you as "You" (the mockup review, 8).
    await expect(canvas.getByRole("heading", {
      name: "Who picked what"
    })).toBeVisible();
    await expect(canvas.getByText(/^\\d+ of 9$/)).toBeVisible();
    await expect(picked.querySelectorAll("[data-pays]").length).toBeGreaterThan(0);
    await expect(picked).toHaveTextContent(/No pick: You/);
  }
}`,...x.parameters?.docs?.source},description:{story:`At 12:05 (J3-2): Picks first, each person with their points.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  loaders: [at("night", undefined, {
    name: "match",
    id: "A-1"
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
      name: "Spain v Slovenia"
    });
    await expect(tabsOf(canvas)).toEqual(["Match", "Line-ups", "Picks", "Odds"]);
    const timeline = canvas.getByRole("list", {
      name: "Timeline"
    });
    const sixteenth = within(timeline).getAllByRole("listitem").find(r => r.textContent?.includes("16′"))!;
    await expect(within(sixteenth).getByRole("img", {
      name: "Picked by Ana, Jonny, Mel, Raj, Sam"
    })).toBeVisible();
    await expect(canvas.getByText("Possession")).toBeVisible();
    await expect(canvas.getByRole("region", {
      name: "Team news"
    })).toBeVisible();
    await noSidewaysScroll(canvasElement);
    await userEvent.click(canvas.getByRole("tab", {
      name: "Line-ups"
    }));
    await expect(await canvas.findByRole("region", {
      name: "Line-ups"
    })).toBeVisible();
    await userEvent.click(canvas.getByRole("tab", {
      name: "Picks"
    }));
    const earned = await canvas.findByRole("table", {
      name: "What each earned"
    });
    await expect(earned.compareDocumentPosition(canvas.getByRole("region", {
      name: "Who picked what"
    })) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  }
}`,...S.parameters?.docs?.source},description:{story:`That night, Spain v Slovenia: Match first, the timeline with each goal's backers (SF1) and the stats; then the
pitch, and at full time the Picks tab with what each earned first.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  loaders: [at("morning", seen, {
    name: "match",
    id: "C-3"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas
  }) => {
    await canvas.findByRole("heading", {
      level: 1,
      name: "Portugal v Austria"
    });
    await userEvent.click(canvas.getByRole("tab", {
      name: "Line-ups"
    }));
    await userEvent.click(await canvas.findByRole("button", {
      name: /Bruno Fernandes/
    }));
    const player = await sheet();
    await expect(player).toHaveAccessibleName("Bruno Fernandes");
    // Your four scorer picks for the round are already made that morning: Draft is refused, said in the sheet.
    await userEvent.click(within(player).getByRole("button", {
      name: "Draft"
    }));
    await expect(await within(player).findByRole("alert")).toHaveTextContent(/scorer picks/);
  }
}`,...C.parameters?.docs?.source},description:{story:`Before the line-ups, the squads; a player opens his sheet, and Draft from it works.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  loaders: [at("morning", seen, {
    name: "match",
    id: "C-4"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas
  }) => {
    await canvas.findByRole("heading", {
      level: 1,
      name: "Germany v Poland"
    });
    await userEvent.click(canvas.getByRole("tab", {
      name: "Odds"
    }));
    await expect(await canvas.findByRole("img", {
      name: /^The odds over time: /
    }, {
      timeout: 10_000
    })).toBeVisible();
  }
}`,...w.parameters?.docs?.source},description:{story:`Before the lock, the Odds tab draws the odds over time, only your own lock on it (decision e = B).`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  loaders: [at("morning", seen, {
    name: "match",
    id: "Z-9"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas
  }) => {
    await expect(await canvas.findByText("Match not found")).toBeVisible();
  }
}`,...T.parameters?.docs?.source},description:{story:`An id the moment doesn't have: said, never a blank page (the plan's Review Focus 1).`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  loaders: [at("night", undefined, {
    name: "match",
    id: "B-4"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await canvas.findByRole("list", {
      name: "Timeline"
    });
    await noSidewaysScroll(canvasElement);
    const run = controls();
    for (const width of run ? [390, 360] : []) {
      await run!.viewport(width, 844);
      await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
      for (const part of canvasElement.querySelectorAll<HTMLElement>("main section, main article")) await expect(part.getBoundingClientRect().right, \`\${part.getAttribute("aria-label") ?? part.tagName} at \${width}\`).toBeLessThanOrEqual(width - 16 + 0.5);
    }
    if (run) await run.viewport(414, 896);
  }
}`,...E.parameters?.docs?.source},description:{story:`Serbia v Türkiye that night, with long substitutions ("Lazar Samardžić for Aleksandar Mitrović"): nothing scrolls
sideways at 360 px, and every card keeps the 16 px gutter (the demo's review, I1).`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  loaders: [at("knockouts", undefined, {
    name: "match",
    id: "E-5"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await canvas.findByRole("tablist", {
      name: "The match's parts"
    });
    await noSidewaysScroll(canvasElement);
  }
}`,...D.parameters?.docs?.source},description:{story:`A round of 16 tie's page: nothing scrolls sideways (the demo's review, I1).`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  loaders: [at("morning", seen, {
    name: "match",
    id: "M37"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas
  }) => {
    const title = await canvas.findByRole("heading", {
      level: 1,
      name: / v /
    });
    await expect(title).not.toHaveTextContent("Match not found");
    await expect(canvas.getByText(/^Opens when /)).toBeVisible();
    await expect(canvas.queryByText("Match not found")).toBeNull();
  }
}`,...O.parameters?.docs?.source},description:{story:`A real match whose teams aren't known yet (the round of 16's first tie, on a group-stage morning): named by its
slots, with what it waits for, never "Match not found" (the final review, I3).`,...O.parameters?.docs?.description}}}})))()}A();export{x as AfterLock,v as Before,b as Drafted,D as Knockout,E as LongLines,T as NotFound,w as OddsBefore,y as PickHere,S as Played,C as SquadPlayer,O as TeamsToCome,k as __namedExportsOrder,m as default};