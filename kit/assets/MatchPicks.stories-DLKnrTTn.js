import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r,t as i}from"./checks-C0Y16pbK.js";import{i as a,n as o,r as s,t as c}from"./app--B0L3gM3.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{r(),s(),l=t(),{expect:u,userEvent:d,waitFor:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`App/MatchPicks`,parameters:{layout:`fullscreen`}},h={name:`match-picks`},g=a(`2028-06-14T22:30:00Z`),_=e=>p(e.ownerDocument.body),v=async e=>{let t=async()=>(await _(e).findAllByRole(`dialog`)).filter(e=>!e.hasAttribute(`data-toast`));return await f(async()=>u(await t()).toHaveLength(1)),(await t())[0]},y=e=>f(()=>u(_(e).queryAllByRole(`dialog`).filter(e=>!e.hasAttribute(`data-toast`))).toHaveLength(0)),b=(e,t)=>e.querySelector(`article[data-match="${t}"]`),x=(e,t,n)=>[...b(e,t).querySelectorAll(`button[data-look]`)].find(e=>e.textContent?.startsWith(n)),S=()=>window.location.hash,C={loaders:[o(`morning`,g,h)],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvas:e,canvasElement:t})=>{await e.findByRole(`heading`,{level:1,name:`Match picks`});let r=[...t.querySelectorAll(`section[aria-label]`)].map(e=>e.getAttribute(`aria-label`));await u(r.slice(0,2)).toEqual([`Today, 12:00`,`Tomorrow, 12:00`]);let i=t.querySelector(`section[aria-label="Today, 12:00"]`);await u([...i.querySelectorAll(`article`)].map(e=>e.dataset.match).sort()).toEqual([`B-4`,`C-3`,`C-4`]),await n(t)}},w={loaders:[o(`morning`,g,h)],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvasElement:e})=>{await f(()=>u(b(e,`C-4`)).not.toBeNull()),await d.click(x(e,`C-4`,`Germany`)),await u(await v(e)).toHaveAccessibleName(`Germany v Poland: Germany`),await d.click(p(await v(e)).getByRole(`button`,{name:`Draft`})),await y(e),await f(()=>u(x(e,`C-4`,`Germany`).dataset.look).toBe(`draft`)),await d.click(x(e,`C-4`,`Germany`)),await d.click(p(await v(e)).getByRole(`button`,{name:`Lock`})),await y(e),await f(()=>u(x(e,`C-4`,`Germany`).dataset.look).toBe(`locked`)),await d.click(x(e,`C-3`,`Austria`)),await d.click(p(await v(e)).getByRole(`button`,{name:`Remove draft`})),await y(e),await f(()=>u(x(e,`C-3`,`Austria`).dataset.look).toBe(`plain`)),await d.click(x(e,`C-3`,`Portugal`)),await d.click(p(await v(e)).getByRole(`button`,{name:`Draft`})),await y(e),await d.click(p(b(e,`C-3`)).getByRole(`button`,{name:`Lock Portugal v Austria`})),await f(()=>u(x(e,`C-3`,`Portugal`).dataset.look).toBe(`locked`))}},T={loaders:[o(`morning`,e=>({...g(e),priceHistory:e.priceHistory.filter(e=>e.fixture!==`D-3`)}),h)],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvas:e,canvasElement:t})=>{await f(()=>u(b(t,`C-4`)).not.toBeNull()),await d.click(x(t,`C-4`,`Poland`));let n=await v(t);await d.click(p(n).getByRole(`button`,{name:`History`})),await u(await p(n).findByRole(`img`,{name:/^The odds over time: /},{timeout:1e4})).toBeVisible(),await d.click(p(n).getByRole(`button`,{name:`Close`})),await y(t),await d.click(e.getByRole(`button`,{name:/^France v Hungary/})),await d.click(x(t,`D-3`,`France`)),n=await v(t),await u(p(n).queryByRole(`button`,{name:`History`})).toBeNull()}},E={loaders:[o(`morning`,g,h)],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvasElement:e})=>{await f(()=>u(b(e,`C-4`)).not.toBeNull()),await d.click(p(b(e,`C-4`)).getByRole(`button`,{name:/^Scorers/})),await f(()=>u(S()).toBe(`#/picks/scorers?match=C-4`)),window.location.hash=`#/picks/matches`,await f(()=>u(b(e,`C-4`)).not.toBeNull()),await d.click(p(b(e,`C-4`)).getByRole(`button`,{name:/^Tokens/})),await f(()=>u(S()).toBe(`#/picks/tokens?match=C-4`))}},D={loaders:[o(`morning`,e=>{let t=g(structuredClone(e));return t.fixtures.find(e=>e.id===`F-6`).draftingFrom=Date.parse(`2028-06-18T11:00:00Z`),t},h)],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvas:e,canvasElement:t})=>{let r=await e.findByRole(`listitem`,{name:`Czechia v Denmark`});await u(r).toHaveTextContent(`Opens when prices are available, by Sun 18 Jun, 12:00 at the latest`),await n(t)}},O={loaders:[o(`knockouts`,void 0,h)],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvasElement:e})=>{await f(()=>u(e.querySelectorAll(`button[aria-expanded]`).length).toBeGreaterThan(0));let t=i();for(let n of t?[390,360]:[0]){t&&await t.viewport(n,844),await new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e)));for(let t of e.querySelectorAll(`button[aria-expanded]`)){let e=t.querySelector(`[data-names]`);await u(e.scrollWidth,`${e.textContent} at ${n}`).toBeLessThanOrEqual(e.clientWidth)}}t&&await t.viewport(414,896),await n(e)}},k=[`Days`,`DraftLockRemove`,`OddsOverTime`,`Links`,`NotOpen`,`KnockoutRows`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  loaders: [at("morning", seen, ROUTE)],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await canvas.findByRole("heading", {
      level: 1,
      name: "Match picks"
    });
    const days = [...canvasElement.querySelectorAll<HTMLElement>("section[aria-label]")].map(d => d.getAttribute("aria-label"));
    await expect(days.slice(0, 2)).toEqual(["Today, 12:00", "Tomorrow, 12:00"]);
    const today = canvasElement.querySelector<HTMLElement>('section[aria-label="Today, 12:00"]')!;
    await expect([...today.querySelectorAll("article")].map(a => a.dataset.match).sort()).toEqual(["B-4", "C-3", "C-4"]);
    await noSidewaysScroll(canvasElement);
  }
}`,...C.parameters?.docs?.source},description:{story:`The morning's dates in order, today's matches as full cards first.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  loaders: [at("morning", seen, ROUTE)],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => expect(card(canvasElement, "C-4")).not.toBeNull());
    await userEvent.click(tile(canvasElement, "C-4", "Germany"));
    await expect(await sheet(canvasElement)).toHaveAccessibleName("Germany v Poland: Germany");
    await userEvent.click(within(await sheet(canvasElement)).getByRole("button", {
      name: "Draft"
    }));
    await sheetGone(canvasElement);
    await waitFor(() => expect(tile(canvasElement, "C-4", "Germany").dataset.look).toBe("draft"));
    await userEvent.click(tile(canvasElement, "C-4", "Germany"));
    await userEvent.click(within(await sheet(canvasElement)).getByRole("button", {
      name: "Lock"
    }));
    await sheetGone(canvasElement);
    await waitFor(() => expect(tile(canvasElement, "C-4", "Germany").dataset.look).toBe("locked"));
    // Portugal v Austria's draft (Austria): removed from its sheet, then Portugal drafted and locked from the card.
    await userEvent.click(tile(canvasElement, "C-3", "Austria"));
    await userEvent.click(within(await sheet(canvasElement)).getByRole("button", {
      name: "Remove draft"
    }));
    await sheetGone(canvasElement);
    await waitFor(() => expect(tile(canvasElement, "C-3", "Austria").dataset.look).toBe("plain"));
    await userEvent.click(tile(canvasElement, "C-3", "Portugal"));
    await userEvent.click(within(await sheet(canvasElement)).getByRole("button", {
      name: "Draft"
    }));
    await sheetGone(canvasElement);
    await userEvent.click(within(card(canvasElement, "C-3")).getByRole("button", {
      name: "Lock Portugal v Austria"
    }));
    await waitFor(() => expect(tile(canvasElement, "C-3", "Portugal").dataset.look).toBe("locked"));
  }
}`,...w.parameters?.docs?.source},description:{story:`An option's sheet: Draft gives its tile the draft look at once, Lock the lock look; Remove draft takes a draft off;
a card's own Lock locks its one pick.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  loaders: [at("morning", (s: Snapshot) => ({
    ...seen(s),
    priceHistory: s.priceHistory.filter(h => h.fixture !== "D-3")
  }), ROUTE)],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await waitFor(() => expect(card(canvasElement, "C-4")).not.toBeNull());
    await userEvent.click(tile(canvasElement, "C-4", "Poland"));
    let pick = await sheet(canvasElement);
    await userEvent.click(within(pick).getByRole("button", {
      name: "History"
    }));
    await expect(await within(pick).findByRole("img", {
      name: /^The odds over time: /
    }, {
      timeout: 10_000
    })).toBeVisible();
    await userEvent.click(within(pick).getByRole("button", {
      name: "Close"
    }));
    await sheetGone(canvasElement);
    // France v Hungary, tomorrow: its row opens into the card.
    await userEvent.click(canvas.getByRole("button", {
      name: /^France v Hungary/
    }));
    await userEvent.click(tile(canvasElement, "D-3", "France"));
    pick = await sheet(canvasElement);
    // No history: no History button (the owner, 28 Oct).
    await expect(within(pick).queryByRole("button", {
      name: "History"
    })).toBeNull();
  }
}`,...T.parameters?.docs?.source},description:{story:`History beside "Est. 18%" opens the option's odds over time, loaded when asked; a match without a history has no
History (the recording keeps every known match's history, 28 Oct, so France v Hungary's is dropped here).`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  loaders: [at("morning", seen, ROUTE)],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => expect(card(canvasElement, "C-4")).not.toBeNull());
    await userEvent.click(within(card(canvasElement, "C-4")).getByRole("button", {
      name: /^Scorers/
    }));
    await waitFor(() => expect(hash()).toBe("#/picks/scorers?match=C-4"));
    window.location.hash = "#/picks/matches";
    await waitFor(() => expect(card(canvasElement, "C-4")).not.toBeNull());
    await userEvent.click(within(card(canvasElement, "C-4")).getByRole("button", {
      name: /^Tokens/
    }));
    await waitFor(() => expect(hash()).toBe("#/picks/tokens?match=C-4"));
  }
}`,...E.parameters?.docs?.source},description:{story:`A match's scorer and token links open those screens, filtered to it.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  loaders: [at("morning", (s: Snapshot) => {
    const x = seen(structuredClone(s));
    x.fixtures.find(f => f.id === "F-6")!.draftingFrom = Date.parse("2028-06-18T11:00:00Z");
    return x;
  }, ROUTE)],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const row = await canvas.findByRole("listitem", {
      name: "Czechia v Denmark"
    });
    await expect(row).toHaveTextContent("Opens when prices are available, by Sun 18 Jun, 12:00 at the latest");
    await noSidewaysScroll(canvasElement);
  }
}`,...D.parameters?.docs?.source},description:{story:`A round's match not open yet says why.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  loaders: [at("knockouts", undefined, ROUTE)],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => expect(canvasElement.querySelectorAll("button[aria-expanded]").length).toBeGreaterThan(0));
    const run = controls();
    for (const width of run ? [390, 360] : [0]) {
      if (run) await run.viewport(width, 844);
      await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
      for (const row of canvasElement.querySelectorAll<HTMLElement>("button[aria-expanded]")) {
        const names = row.querySelector<HTMLElement>("[data-names]")!;
        await expect(names.scrollWidth, \`\${names.textContent} at \${width}\`).toBeLessThanOrEqual(names.clientWidth);
      }
    }
    if (run) await run.viewport(414, 896);
    await noSidewaysScroll(canvasElement);
  }
}`,...O.parameters?.docs?.source},description:{story:`The round of 16: each later row names its match in full, beside the longest picks ("Draw, then Netherlands
through"), at 390 and 360 px (the demo's review, I3).`,...O.parameters?.docs?.description}}}})))()}A();export{C as Days,w as DraftLockRemove,O as KnockoutRows,E as Links,D as NotOpen,T as OddsOverTime,k as __namedExportsOrder,m as default};