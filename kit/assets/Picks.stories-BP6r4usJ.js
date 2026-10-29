import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{r as n,t as r}from"./src-Ca_r4w3v.js";import{i,r as a}from"./checks-C0Y16pbK.js";import{i as o,n as s,r as c,t as l}from"./app--B0L3gM3.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{a(),r(),c(),u=t(),{expect:d,userEvent:f,waitFor:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`App/Picks`,parameters:{layout:`fullscreen`}},g={name:`picks`},_=e=>m(e.ownerDocument.body),v=async e=>{let t=async()=>(await _(e).findAllByRole(`dialog`)).filter(e=>!e.hasAttribute(`data-toast`));return await p(async()=>d(await t()).toHaveLength(1)),(await t())[0]},y=(e,t)=>_(e).findByText(t,{selector:`[data-toast] *`}),b=()=>window.location.hash,x=(e,t)=>e.querySelector(`[data-row="${t}"]`),S=e=>{let t=n(o(`2028-06-14T22:30:00Z`)(e),{kind:`result`,fixture:`C-4`,outcome:`home`});if(`refusal`in t)throw Error(t.refusal);return t.s},C={loaders:[s(`morning`,o(`2028-06-14T22:30:00Z`),g)],render:(e,{loaded:t})=>(0,u.jsx)(l,{loaded:t}),play:async({canvas:e,canvasElement:t})=>{await e.findByRole(`heading`,{level:1,name:`Picks`});let n=[...t.querySelectorAll(`[data-row]`)].map(e=>e.dataset.row);await d(n).toEqual([`Champion`,`Tokens`,`Scorers`,`Matches`]);let r=e.getByRole(`link`,{name:`Rules`}),a=e.getByRole(`heading`,{name:`When things lock`});await d(r.closest(`[data-rules]`).nextElementSibling).toBe(a),await d(e.getByRole(`region`,{name:`Matchday 2`})).toBeVisible(),await i(t),await f.click(r),await p(()=>d(b()).toBe(`#/rules`)),window.location.hash=`#/picks`,await f.click(await e.findByRole(`button`,{name:`Draft 1`})),await p(()=>d(b()).toBe(`#/picks/matches`))}},w={loaders:[s(`morning`,S,g)],render:(e,{loaded:t})=>(0,u.jsx)(l,{loaded:t}),play:async({canvas:e,canvasElement:t})=>{await f.click(m(x(t,`Matches`)).getByRole(`button`,{name:`Lock 2`}));let n=m(await v(t)).getByRole(`button`,{name:`Lock 2`});await f.dblClick(n),await d(await y(t,/^Locked$/)).toBeVisible(),await d(await y(t,/^Already locked$/)).toBeVisible(),await p(()=>d(m(x(t,`Matches`)).queryByRole(`button`,{name:/^(Lock|Draft) \d/})).toBeNull()),await d(x(t,`Matches`)).toHaveTextContent(`Locked`),await d(e.getByRole(`region`,{name:`Matchday 3`})).toHaveTextContent(`4 of 4 drafted`)}},T={loaders:[s(`eve`,void 0,g)],render:(e,{loaded:t})=>(0,u.jsx)(l,{loaded:t}),play:async({canvasElement:e})=>{await f.click(m(x(e,`Champion`)).getAllByRole(`button`)[0]);let t=await v(e);await d(m(t).getByRole(`radio`,{name:/Switzerland/})).toBeChecked(),await f.click(m(t).getByText(`Spain`));let n=await v(e);await d(n).toHaveAccessibleName(/Spain/),await f.click(m(n).getByRole(`button`,{name:`History`})),await d(await m(n).findByRole(`img`,{name:/^The odds over time: /},{timeout:1e4})).toBeVisible(),await f.click(m(n).getByRole(`button`,{name:`Back`})),await f.click(m(n).getByRole(`button`,{name:`Draft`})),await d(await y(e,/^Drafted$/)).toBeVisible(),await p(()=>d(x(e,`Champion`)).toHaveTextContent(`Spain`))}},E={loaders:[s(`morning`,o(`2028-06-14T22:30:00Z`),g)],render:(e,{loaded:t})=>(0,u.jsx)(l,{loaded:t}),play:async({canvasElement:e})=>{await f.click(m(x(e,`Champion`)).getAllByRole(`button`)[0]);let t=await v(e);await d(t).toHaveAccessibleName(/Your champion: Switzerland/),await f.click(m(t).getByRole(`button`,{name:`History`})),await d(await m(t).findByRole(`img`,{name:/^The odds over time: /},{timeout:1e4})).toBeVisible()}},D={loaders:[s(`morning`,o(`2028-06-14T22:30:00Z`),{name:`match-picks`})],render:(e,{loaded:t})=>(0,u.jsx)(l,{loaded:t}),play:async({canvas:e})=>{for(let[t,n]of[[`Match picks`,`#/picks/matches`],[`Spend tokens`,`#/picks/tokens`],[`Pick scorers`,`#/picks/scorers`],[`Rules`,`#/rules`]])window.location.hash=n,await e.findByRole(`heading`,{level:1,name:t}),await f.click(e.getByRole(`link`,{name:`Back to Picks`})),await e.findByRole(`heading`,{level:1,name:`Picks`}),await d(window.location.hash).toBe(`#/picks`)}},O=[`Morning`,`LockSheet`,`ChooseChampion`,`LockedChampion`,`BackToPicks`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  loaders: [at("morning", lastOpened("2028-06-14T22:30:00Z"), PICKS)],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await canvas.findByRole("heading", {
      level: 1,
      name: "Picks"
    });
    const rows = [...canvasElement.querySelectorAll<HTMLElement>("[data-row]")].map(r => r.dataset.row);
    await expect(rows).toEqual(["Champion", "Tokens", "Scorers", "Matches"]);
    const rules = canvas.getByRole("link", {
      name: "Rules"
    });
    const when = canvas.getByRole("heading", {
      name: "When things lock"
    });
    // Just above: nothing between the Rules row and the heading.
    await expect(rules.closest("[data-rules]")!.nextElementSibling).toBe(when);
    await expect(canvas.getByRole("region", {
      name: "Matchday 2"
    })).toBeVisible();
    await noSidewaysScroll(canvasElement);
    await userEvent.click(rules);
    await waitFor(() => expect(hash()).toBe("#/rules"));
    window.location.hash = "#/picks";
    await userEvent.click(await canvas.findByRole("button", {
      name: "Draft 1"
    }));
    await waitFor(() => expect(hash()).toBe("#/picks/matches"));
  }
}`,...C.parameters?.docs?.source},description:{story:`The morning's Picks: the four rows in order, the Rules row just above When things lock (PK4), then the round bands;
the Matches row's "Draft 1" opens Match picks.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  loaders: [at("morning", bothDrafted, PICKS)],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await userEvent.click(within(row(canvasElement, "Matches")).getByRole("button", {
      name: "Lock 2"
    }));
    const lock = within(await sheet(canvasElement)).getByRole("button", {
      name: "Lock 2"
    });
    await userEvent.dblClick(lock);
    await expect(await toastSays(canvasElement, /^Locked$/)).toBeVisible();
    await expect(await toastSays(canvasElement, /^Already locked$/)).toBeVisible();
    await waitFor(() => expect(within(row(canvasElement, "Matches")).queryByRole("button", {
      name: /^(Lock|Draft) \\d/
    })).toBeNull());
    await expect(row(canvasElement, "Matches")).toHaveTextContent("Locked");
    await expect(canvas.getByRole("region", {
      name: "Matchday 3"
    })).toHaveTextContent("4 of 4 drafted");
  }
}`,...w.parameters?.docs?.source},description:{story:`"Lock 2" opens the lock sheet; its Lock locks exactly the sheet's picks (matchday 3's drafts stay drafts), and a
second tap is refused, never counted twice (the plan's Review Focus 3).`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  loaders: [at("eve", undefined, PICKS)],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(row(canvasElement, "Champion")).getAllByRole("button")[0]!);
    const list = await sheet(canvasElement);
    await expect(within(list).getByRole("radio", {
      name: /Switzerland/
    })).toBeChecked();
    await userEvent.click(within(list).getByText("Spain"));
    const pick = await sheet(canvasElement);
    await expect(pick).toHaveAccessibleName(/Spain/);
    await userEvent.click(within(pick).getByRole("button", {
      name: "History"
    }));
    await expect(await within(pick).findByRole("img", {
      name: /^The odds over time: /
    }, {
      timeout: 10_000
    })).toBeVisible();
    await userEvent.click(within(pick).getByRole("button", {
      name: "Back"
    }));
    await userEvent.click(within(pick).getByRole("button", {
      name: "Draft"
    }));
    await expect(await toastSays(canvasElement, /^Drafted$/)).toBeVisible();
    await waitFor(() => expect(row(canvasElement, "Champion")).toHaveTextContent("Spain"));
  }
}`,...T.parameters?.docs?.source},description:{story:`Before the first deadline the Champion row opens the list; a team opens its pick sheet, with its chance to win over
time (PK2); Draft makes it your champion.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  loaders: [at("morning", lastOpened("2028-06-14T22:30:00Z"), PICKS)],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(row(canvasElement, "Champion")).getAllByRole("button")[0]!);
    const pick = await sheet(canvasElement);
    await expect(pick).toHaveAccessibleName(/Your champion: Switzerland/);
    await userEvent.click(within(pick).getByRole("button", {
      name: "History"
    }));
    await expect(await within(pick).findByRole("img", {
      name: /^The odds over time: /
    }, {
      timeout: 10_000
    })).toBeVisible();
  }
}`,...E.parameters?.docs?.source},description:{story:`Once locked, the Champion row opens your champion's sheet straight away (PK2).`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  loaders: [at("morning", lastOpened("2028-06-14T22:30:00Z"), {
    name: "match-picks"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas
  }) => {
    for (const [title, hash] of [["Match picks", "#/picks/matches"], ["Spend tokens", "#/picks/tokens"], ["Pick scorers", "#/picks/scorers"], ["Rules", "#/rules"]] as const) {
      window.location.hash = hash;
      await canvas.findByRole("heading", {
        level: 1,
        name: title
      });
      await userEvent.click(canvas.getByRole("link", {
        name: "Back to Picks"
      }));
      await canvas.findByRole("heading", {
        level: 1,
        name: "Picks"
      });
      await expect(window.location.hash).toBe("#/picks");
    }
  }
}`,...D.parameters?.docs?.source},description:{story:`Picks' own screens lead back to it (the boards' "‹ Picks"; the demo's review, I6).`,...D.parameters?.docs?.description}}}})))()}k();export{D as BackToPicks,T as ChooseChampion,w as LockSheet,E as LockedChampion,C as Morning,O as __namedExportsOrder,h as default};