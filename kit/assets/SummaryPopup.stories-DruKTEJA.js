import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./SummaryPopup-BluoSL4b.js";import{U as i,ct as a,it as o,ot as s,t as c,vt as l}from"./src-Ca_r4w3v.js";import{a as u,i as d,r as f}from"./checks-C0Y16pbK.js";import{i as p,t as m}from"./moments-Bzx1n_TW.js";import{a as h,n as g}from"./sealed-CI1Ph_WX.js";var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{c(),f(),m(),g(),n(),_=t(),{expect:v,fn:y,waitFor:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Domain/SummaryPopup`,parameters:{layout:`padded`}},C=()=>x(document.body),w=(e,t)=>x(e).getAllByRole(`listitem`).find(e=>e.textContent?.includes(t)),T=y(),E=y(),D={loaders:[p(`morning`)],render:(e,{loaded:t})=>(0,_.jsx)(r,{recap:l(t.s),open:!0,onOpenChange:T,onOpen:E}),play:async({userEvent:e})=>{T.mockClear(),E.mockClear();let t=await C().findByRole(`dialog`,{name:`Yesterday`});await v(t).toHaveTextContent(`+61 pts`),await v(w(t,`England`)).toHaveTextContent(`England 0–0 Croatia`),await v(w(t,`England`)).toHaveTextContent(`+60`),await v(w(t,`Slovenia`)).toHaveTextContent(`=0`),await v(x(t).getByText(`6th`).parentElement).toHaveTextContent(`6th=level`),await e.click(x(w(t,`England`)).getByRole(`button`)),await v(E).toHaveBeenCalledWith(`B-3`);let n=x(t).getByRole(`button`,{name:`Close`});await u(n),await e.click(n),await b(()=>v(T).toHaveBeenCalledWith(!1,v.anything()))}},O=y(),k={loaders:[p(`morning`)],render:(e,{loaded:t})=>{let n=l(t.s);return(0,_.jsx)(r,{recap:{...n,you:{place:`3rd`,total:212,moved:2}},open:!0,onOpenChange:()=>{},onTable:O})},play:async({userEvent:e,canvasElement:t})=>{O.mockClear();let n=await C().findByRole(`dialog`,{name:`Yesterday`}),r=x(n).getByRole(`button`,{name:/3rd/});await v(r).toHaveTextContent(`3rd`),await v(r).toHaveTextContent(`3rd▲up 2`),await u(r),await e.click(r),await v(O).toHaveBeenCalledOnce(),await d(t)}},A={loaders:[p(`night`)],render:(e,{loaded:t})=>(0,_.jsx)(r,{recap:l(t.s),open:!0,onOpenChange:()=>{}}),play:async()=>{let e=await C().findByRole(`dialog`,{name:`Today`});await v(e).toHaveTextContent(`=0 pts`),await v(w(e,`Germany`)).toHaveTextContent(`No pick`)}},j={render:()=>{let e=[`A-3`,`A-4`,`B-3`],t=i(t=>t.picks=t.picks.filter(n=>n.user!==t.you||!e.includes(n.fixture??``)));return(0,_.jsx)(r,{recap:l(t),open:!0,onOpenChange:()=>{}})},play:async()=>{let e=await C().findByRole(`dialog`);await v(x(e).getAllByText(`No pick`)).toHaveLength(3)}},M={loaders:[p(`morning`)],render:(e,{loaded:t})=>(0,_.jsx)(r,{recap:{...l(t.s),points:1240},open:!0,onOpenChange:()=>{}}),play:async()=>{await v(await C().findByRole(`dialog`,{name:`Yesterday`})).toHaveTextContent(`+1,240 pts`)}},N={loaders:[p(`morning`)],render:(e,{loaded:t})=>(0,_.jsx)(r,{recap:l(t.s),open:!1,onOpenChange:()=>{}}),play:async()=>{await v(C().queryByRole(`dialog`)).toBeNull()}},P=y(),F=y(),I=y(),L=e=>(0,_.jsx)(r,{recap:l(a(e)),question:s(e),open:!0,onOpenChange:T,onReveal:P,onKeepHidden:F,onCaughtUp:I}),R={loaders:[p(`morning`)],render:(e,{loaded:t})=>L(h(t.s)),play:async({userEvent:e})=>{for(let e of[T,P,F,I])e.mockClear();let t=await C().findByRole(`dialog`,{name:`Yesterday`});await v(w(t,`Spain`)).toHaveTextContent(`Spain 2–0 Italy`),await v(t).toHaveTextContent(`+1 pts`),await v(t).not.toHaveTextContent(`6th`);for(let[e,n]of[[`Slovenia`,`Sweden`],[`England`,`Croatia`]]){let r=w(t,e);await v(r).toHaveTextContent(`${e}`),await v(r).toHaveTextContent(`${n}`),await v(r.textContent).not.toMatch(/\d/),await u(x(r).getByRole(`button`,{name:`Show ${e} v ${n}`}))}let n=x(t).getByRole(`checkbox`,{name:`Don't ask me again`});await v(n).not.toBeChecked(),await e.click(x(w(t,`England`)).getByRole(`button`,{name:`Show England v Croatia`})),await v(P).toHaveBeenCalledWith(`B-3`),await e.click(x(t).getByRole(`button`,{name:`Close`})),await b(()=>v(F).toHaveBeenCalledWith(!1)),F.mockClear(),await e.click(n),await v(n).toBeChecked(),await e.click(x(t).getByRole(`button`,{name:`I haven't watched yet`})),await v(F).toHaveBeenCalledWith(!0),await v(F).toHaveBeenCalledOnce(),await e.click(x(t).getByRole(`button`,{name:`I'm caught up`})),await v(I).toHaveBeenCalledWith(!0)}},z={loaders:[p(`morning`)],render:(e,{loaded:t})=>L(h(t.s,[`A-4`])),play:async()=>{let e=await C().findByRole(`dialog`,{name:`Yesterday`});await v(w(e,`England`)).toHaveTextContent(`England 0–0 Croatia`),await v(w(e,`England`)).toHaveTextContent(`+60`),await v(w(e,`Slovenia`).textContent).not.toMatch(/\d/),await v(x(e).getByRole(`button`,{name:`Show Slovenia v Sweden`})).toBeVisible(),await v(e).toHaveTextContent(`+61 pts`),await v(x(e).getByRole(`button`,{name:`I'm caught up`})).toBeVisible()}},B={loaders:[p(`morning`)],render:(e,{loaded:t})=>{let n=h(t.s),i={...n,now:Date.parse(`2028-06-15T09:00:00Z`),catchUp:o(n,!1)};return(0,_.jsx)(r,{recap:l(a(i)),...s(i)&&{question:s(i)},open:!0,onOpenChange:T,onReveal:P,onKeepHidden:F,onCaughtUp:I})},play:async({userEvent:e})=>{for(let e of[T,P,F,I])e.mockClear();let t=await C().findByRole(`dialog`,{name:`Yesterday`});await v(x(t).queryByRole(`button`,{name:`I haven't watched yet`})).toBeNull(),await v(x(t).queryByRole(`checkbox`)).toBeNull(),await v(x(t).getByRole(`button`,{name:`Show England v Croatia`})).toBeVisible(),await e.click(x(t).getByRole(`button`,{name:`I'm caught up`})),await v(P).toHaveBeenCalledWith(`all`),await e.click(x(t).getByRole(`button`,{name:`Close`})),await b(()=>v(T).toHaveBeenCalled()),await v(F).not.toHaveBeenCalled()}},V=[`Morning`,`WithPlace`,`Night`,`AllMissed`,`BigDay`,`Closed`,`Sealed`,`PartlyRevealed`,`Reopened`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <SummaryPopup recap={recap((loaded as Loaded).s)!} open onOpenChange={closed} onOpen={opened} />,
  play: async ({
    userEvent
  }) => {
    closed.mockClear();
    opened.mockClear();
    const dialog = await page().findByRole("dialog", {
      name: "Yesterday"
    });
    await expect(dialog).toHaveTextContent("+61 pts");
    await expect(row(dialog, "England")).toHaveTextContent("England 0–0 Croatia");
    await expect(row(dialog, "England")).toHaveTextContent("+60");
    await expect(row(dialog, "Slovenia")).toHaveTextContent("=0");
    // Your place and its move beside the day's points (MS1, the owner, 27 Oct): level here, "=".
    await expect(within(dialog).getByText("6th").parentElement).toHaveTextContent("6th=level");
    await userEvent.click(within(row(dialog, "England")).getByRole("button"));
    await expect(opened).toHaveBeenCalledWith("B-3");
    const close = within(dialog).getByRole("button", {
      name: "Close"
    });
    await thumbSized(close);
    await userEvent.click(close);
    await waitFor(() => expect(closed).toHaveBeenCalledWith(false, expect.anything()));
  }
}`,...D.parameters?.docs?.source},description:{story:`The first open on a match-day morning: yesterday's points and results only (the redesign).`,...D.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => {
    const r = recap((loaded as Loaded).s)!;
    return <SummaryPopup recap={{
      ...r,
      you: {
        place: "3rd",
        total: 212,
        moved: 2
      }
    }} open onOpenChange={() => {}} onTable={table} />;
  },
  play: async ({
    userEvent,
    canvasElement
  }) => {
    table.mockClear();
    const dialog = await page().findByRole("dialog", {
      name: "Yesterday"
    });
    const place = within(dialog).getByRole("button", {
      name: /3rd/
    });
    await expect(place).toHaveTextContent("3rd");
    await expect(place).toHaveTextContent("3rd▲up 2");
    await thumbSized(place);
    await userEvent.click(place);
    await expect(table).toHaveBeenCalledOnce();
    await noSidewaysScroll(canvasElement);
  }
}`,...k.parameters?.docs?.source},description:{story:`Your place and move beside the day's points (MS1): "3rd ▲2", a tap to the Table.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("night")],
  render: (_, {
    loaded
  }) => <SummaryPopup recap={recap((loaded as Loaded).s)!} open onOpenChange={() => {}} />,
  play: async () => {
    const dialog = await page().findByRole("dialog", {
      name: "Today"
    });
    await expect(dialog).toHaveTextContent("=0 pts");
    await expect(row(dialog, "Germany")).toHaveTextContent("No pick");
  }
}`,...A.parameters?.docs?.source},description:{story:`That night, once the day's last match is over.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const missed = ["A-3", "A-4", "B-3"];
    const s = buildSnapshot(s => s.picks = s.picks.filter(p => p.user !== s.you || !missed.includes(p.fixture ?? "")));
    return <SummaryPopup recap={recap(s)!} open onOpenChange={() => {}} />;
  },
  play: async () => {
    const dialog = await page().findByRole("dialog");
    await expect(within(dialog).getAllByText("No pick")).toHaveLength(3);
  }
}`,...j.parameters?.docs?.source},description:{story:`A day you missed entirely.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <SummaryPopup recap={{
    ...recap((loaded as Loaded).s)!,
    points: 1240
  }} open onOpenChange={() => {}} />,
  play: async () => {
    await expect(await page().findByRole("dialog", {
      name: "Yesterday"
    })).toHaveTextContent("+1,240 pts");
  }
}`,...M.parameters?.docs?.source},description:{story:`A big day: four digits.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <SummaryPopup recap={recap((loaded as Loaded).s)!} open={false} onOpenChange={() => {}} />,
  play: async () => {
    await expect(page().queryByRole("dialog")).toBeNull();
  }
}`,...N.parameters?.docs?.source},description:{story:`Closed: nothing on the page.`,...N.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => sealedPopup(sealedMorning((loaded as Loaded).s)),
  play: async ({
    userEvent
  }) => {
    for (const f of [closed, revealed, kept, caught]) f.mockClear();
    const dialog = await page().findByRole("dialog", {
      name: "Yesterday"
    });
    await expect(row(dialog, "Spain")).toHaveTextContent("Spain 2–0 Italy");
    // Only the match you saw counts: Spain v Italy earned you 1 (England v Croatia's +60 stays hidden).
    await expect(dialog).toHaveTextContent("+1 pts");
    // No place or move while a match is hidden: it would tell (MS1, spoiler-free mornings).
    await expect(dialog).not.toHaveTextContent("6th");
    for (const [home, away] of [["Slovenia", "Sweden"], ["England", "Croatia"]] as const) {
      const sealed = row(dialog, home);
      await expect(sealed).toHaveTextContent(\`\${home}\`);
      await expect(sealed).toHaveTextContent(\`\${away}\`);
      await expect(sealed.textContent).not.toMatch(/\\d/);
      await thumbSized(within(sealed).getByRole("button", {
        name: \`Show \${home} v \${away}\`
      }));
    }
    const box = within(dialog).getByRole("checkbox", {
      name: "Don't ask me again"
    });
    await expect(box).not.toBeChecked();
    await userEvent.click(within(row(dialog, "England")).getByRole("button", {
      name: "Show England v Croatia"
    }));
    await expect(revealed).toHaveBeenCalledWith("B-3");
    await userEvent.click(within(dialog).getByRole("button", {
      name: "Close"
    }));
    await waitFor(() => expect(kept).toHaveBeenCalledWith(false));
    kept.mockClear();
    await userEvent.click(box);
    await expect(box).toBeChecked();
    await userEvent.click(within(dialog).getByRole("button", {
      name: "I haven't watched yet"
    }));
    await expect(kept).toHaveBeenCalledWith(true);
    await expect(kept).toHaveBeenCalledOnce();
    await userEvent.click(within(dialog).getByRole("button", {
      name: "I'm caught up"
    }));
    await expect(caught).toHaveBeenCalledWith(true);
  }
}`,...R.parameters?.docs?.source},description:{story:`A morning you haven't watched (spoiler-free mornings): the matches you haven't seen sealed, each with its eye; the
one you saw end with its score; the two answers and "Don't ask me again". × counts as "I haven't watched yet".`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => sealedPopup(sealedMorning((loaded as Loaded).s, ["A-4"])),
  play: async () => {
    const dialog = await page().findByRole("dialog", {
      name: "Yesterday"
    });
    await expect(row(dialog, "England")).toHaveTextContent("England 0–0 Croatia");
    await expect(row(dialog, "England")).toHaveTextContent("+60");
    await expect(row(dialog, "Slovenia").textContent).not.toMatch(/\\d/);
    await expect(within(dialog).getByRole("button", {
      name: "Show Slovenia v Sweden"
    })).toBeVisible();
    await expect(dialog).toHaveTextContent("+61 pts");
    await expect(within(dialog).getByRole("button", {
      name: "I'm caught up"
    })).toBeVisible();
  }
}`,...z.parameters?.docs?.source},description:{story:`After showing England v Croatia from the pop-up: its score and your points, the other still sealed.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => {
    const sealed = sealedMorning((loaded as Loaded).s);
    const s = {
      ...sealed,
      now: Date.parse("2028-06-15T09:00:00Z"),
      catchUp: keepHidden(sealed, false)
    };
    return <SummaryPopup recap={recap(spoilerFree(s))!} {...question(s) && {
      question: question(s)!
    }} open onOpenChange={closed} onReveal={revealed} onKeepHidden={kept} onCaughtUp={caught} />;
  },
  play: async ({
    userEvent
  }) => {
    for (const f of [closed, revealed, kept, caught]) f.mockClear();
    const dialog = await page().findByRole("dialog", {
      name: "Yesterday"
    });
    await expect(within(dialog).queryByRole("button", {
      name: "I haven't watched yet"
    })).toBeNull();
    await expect(within(dialog).queryByRole("checkbox")).toBeNull();
    await expect(within(dialog).getByRole("button", {
      name: "Show England v Croatia"
    })).toBeVisible();
    await userEvent.click(within(dialog).getByRole("button", {
      name: "I'm caught up"
    }));
    await expect(revealed).toHaveBeenCalledWith("all");
    await userEvent.click(within(dialog).getByRole("button", {
      name: "Close"
    }));
    await waitFor(() => expect(closed).toHaveBeenCalled());
    await expect(kept).not.toHaveBeenCalled();
  }
}`,...B.parameters?.docs?.source},description:{story:`Reopened from the closed eye at 10:00, after "I haven't watched yet" at 08:00 (the review): the question is
answered, so no second asking and no checkbox, but each row's eye and "I'm caught up" still show them, one or all.`,...B.parameters?.docs?.description}}}})))()}H();export{j as AllMissed,M as BigDay,N as Closed,D as Morning,A as Night,z as PartlyRevealed,B as Reopened,R as Sealed,k as WithPlace,V as __namedExportsOrder,S as default};