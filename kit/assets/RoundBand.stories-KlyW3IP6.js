import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-DCluhXK3.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./RoundBand-DJwZz1I7.js";import{ct as a,et as o,st as s,t as c}from"./src-Ca_r4w3v.js";import{a as l,i as u,r as d}from"./checks-C0Y16pbK.js";import{i as f,t as p}from"./moments-Bzx1n_TW.js";import{i as m,n as h}from"./sealed-CI1Ph_WX.js";function g({s:e}){let[t,n]=(0,_.useState)(e);return(0,v.jsx)(`div`,{className:`grid gap-3`,children:o(a(t)).map(e=>(0,v.jsx)(i,{band:e,onRow:C,onReveal:e=>n({...t,catchUp:s(t,e)})},e.round))})}var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{c(),_=t(),d(),p(),h(),r(),v=n(),{expect:y,fn:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Domain/RoundBand`,parameters:{layout:`padded`}},C=b(),w=e=>(0,v.jsx)(`div`,{className:`grid gap-3`,children:o(e).map(e=>(0,v.jsx)(i,{band:e,onRow:C},e.round))}),T=e=>[...e.querySelectorAll(`button`)],E=b(),D={loaders:[f(`morning`)],render:(e,{loaded:t})=>w(t.s),play:async({canvas:e,canvasElement:t,userEvent:n})=>{C.mockClear();let r=e.getByRole(`region`,{name:`Matchday 2`});await y(r).toHaveTextContent(`ends Sat 17 Jun, 12:00`),await y(r).toHaveTextContent(`4 of 4 locked`);let[i,a,o]=T(r);await y(i.dataset.tone).toBe(`today`),await y(i).toHaveTextContent(`1 to pick, 1 draft, 1 locked`),await y(i).toHaveTextContent(`2 to lock`),await y(a.dataset.tone).toBe(`tomorrow`),await y(o.dataset.tone).toBe(`calm`),await y(e.getByRole(`region`,{name:`Matchday 3`})).toHaveTextContent(`4 of 4 drafted`),await y(e.getByRole(`region`,{name:`Round of 16`})).toHaveTextContent(`open once both teams are known`),await n.click(i),await y(C).toHaveBeenCalledWith(Date.parse(`2028-06-15T11:00:00Z`)),await u(t)}},O={loaders:[f(`eve`)],render:(e,{loaded:t})=>w(t.s),play:async({canvas:e,canvasElement:t})=>{await y(e.getAllByRole(`region`).map(e=>e.getAttribute(`aria-label`))).toEqual([`Matchday 1`,`Matchday 2`,`Matchday 3`,`Round of 16`]),await u(t)}},k={loaders:[f(`knockouts`)],render:(e,{loaded:t})=>w(t.s),play:async({canvas:e,canvasElement:t})=>{await y(e.getByRole(`region`,{name:`Quarter-finals`})).toHaveTextContent(`Fri 30 Jun to Sat 1 Jul`),await y(e.getByRole(`region`,{name:`Quarter-finals`})).toHaveTextContent(`2 tokens`),await u(t)}},A={loaders:[f(`morning`)],render:(e,{loaded:t})=>{let n=t.s;return w({...n,fixtures:n.fixtures.map(e=>e.id===`F-6`?{...e,draftingFrom:Date.parse(`2028-06-18T11:00:00Z`)}:e),picks:n.picks.filter(e=>e.user!==n.you||e.fixture!==`F-6`)})},play:async({canvas:e})=>{await y(e.getByRole(`region`,{name:`Matchday 3`})).toHaveTextContent(`3 drafts, 1 not open yet, draft now`)}},j={loaders:[f(`knockouts`)],render:(e,{loaded:t})=>(0,v.jsx)(`div`,{className:`grid gap-3`,children:o(a(m(t.s))).map(e=>(0,v.jsx)(i,{band:e,onRow:C,onReveal:E},e.round))}),play:async({canvas:e,canvasElement:t,userEvent:n})=>{C.mockClear(),E.mockClear();let r=e.getByRole(`region`,{name:`Quarter-finals`}),i=x(r).getByRole(`button`,{name:/^Fri 12:00/});await y(i).toHaveTextContent(/1 not open yet, hidden until noon today/);let a=x(r).getByRole(`button`,{name:`Show Croatia v Denmark`});await l(a),await y(e.getAllByRole(`button`,{name:/^Show /})).toEqual([a]),await n.click(i),await y(C).toHaveBeenCalledWith(Date.parse(`2028-06-30T11:00:00Z`)),await n.click(a),await y(E).toHaveBeenCalledWith([`M39`]),await u(t)}},M={loaders:[f(`knockouts`)],render:(e,{loaded:t})=>(0,v.jsx)(g,{s:m(t.s)}),play:async({canvas:e,canvasElement:t,userEvent:n})=>{let r=e.getByRole(`region`,{name:`Quarter-finals`});await n.click(x(r).getByRole(`button`,{name:`Show Croatia v Denmark`})),await y(x(r).getByRole(`button`,{name:/^Fri 12:00/})).toHaveTextContent(`1 to pick, draft now`),await y(t).not.toHaveTextContent(/hidden/i),await y(e.queryAllByRole(`button`,{name:/^Show /})).toEqual([]),await u(t)}},N=[`Morning`,`Eve`,`Knockouts`,`NotOpen`,`SealedTie`,`SealedTieShown`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => all((loaded as Loaded).s),
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    chosen.mockClear();
    const md2 = canvas.getByRole("region", {
      name: "Matchday 2"
    });
    await expect(md2).toHaveTextContent("ends Sat 17 Jun, 12:00");
    await expect(md2).toHaveTextContent("4 of 4 locked");
    const [today, tomorrow, saturday] = rowsOf(md2);
    await expect(today!.dataset.tone).toBe("today");
    await expect(today).toHaveTextContent("1 to pick, 1 draft, 1 locked");
    await expect(today).toHaveTextContent("2 to lock");
    await expect(tomorrow!.dataset.tone).toBe("tomorrow");
    await expect(saturday!.dataset.tone).toBe("calm");
    await expect(canvas.getByRole("region", {
      name: "Matchday 3"
    })).toHaveTextContent("4 of 4 drafted");
    await expect(canvas.getByRole("region", {
      name: "Round of 16"
    })).toHaveTextContent("open once both teams are known");
    await userEvent.click(today!);
    await expect(chosen).toHaveBeenCalledWith(Date.parse("2028-06-15T11:00:00Z"));
    await noSidewaysScroll(canvasElement);
  }
}`,...D.parameters?.docs?.source},description:{story:`The morning: matchday 2 locked, matchday 3 drafted, the round of 16 to come; each band with its own budget.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("eve")],
  render: (_, {
    loaded
  }) => all((loaded as Loaded).s),
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getAllByRole("region").map(x => x.getAttribute("aria-label"))).toEqual(["Matchday 1", "Matchday 2", "Matchday 3", "Round of 16"]);
    await noSidewaysScroll(canvasElement);
  }
}`,...O.parameters?.docs?.source},description:{story:`The eve: four bands, the longest list.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("knockouts")],
  render: (_, {
    loaded
  }) => all((loaded as Loaded).s),
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByRole("region", {
      name: "Quarter-finals"
    })).toHaveTextContent("Fri 30 Jun to Sat 1 Jul");
    await expect(canvas.getByRole("region", {
      name: "Quarter-finals"
    })).toHaveTextContent("2 tokens");
    await noSidewaysScroll(canvasElement);
  }
}`,...k.parameters?.docs?.source},description:{story:`The round of 16's first day, the quarter-finals to come.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => {
    const s = (loaded as Loaded).s;
    return all({
      ...s,
      fixtures: s.fixtures.map(f => f.id === "F-6" ? {
        ...f,
        draftingFrom: Date.parse("2028-06-18T11:00:00Z")
      } : f),
      picks: s.picks.filter(p => !(p.user === s.you && p.fixture === "F-6"))
    });
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole("region", {
      name: "Matchday 3"
    })).toHaveTextContent("3 drafts, 1 not open yet, draft now");
  }
}`,...A.parameters?.docs?.source},description:{story:`A match not open for drafting yet, counted in its day.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("knockouts")],
  render: (_, {
    loaded
  }) => <div className="grid gap-3">
      {bands(spoilerFree(quarterMorning((loaded as Loaded).s))).map(b => <RoundBand key={b.round} band={b} onRow={chosen} onReveal={revealed} />)}
    </div>,
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    chosen.mockClear();
    revealed.mockClear();
    const quarters = canvas.getByRole("region", {
      name: "Quarter-finals"
    });
    const friday = within(quarters).getByRole("button", {
      name: /^Fri 12:00/
    });
    // A pattern, not a string: the class check reads a lower-case string with "hidden" in it as a list of classes.
    await expect(friday).toHaveTextContent(/1 not open yet, hidden until noon today/);
    const eye = within(quarters).getByRole("button", {
      name: "Show Croatia v Denmark"
    });
    await thumbSized(eye);
    // One eye, on the sealed deadline only.
    await expect(canvas.getAllByRole("button", {
      name: /^Show /
    })).toEqual([eye]);
    await userEvent.click(friday);
    await expect(chosen).toHaveBeenCalledWith(Date.parse("2028-06-30T11:00:00Z"));
    await userEvent.click(eye);
    await expect(revealed).toHaveBeenCalledWith(["M39"]);
    await noSidewaysScroll(canvasElement);
  }
}`,...j.parameters?.docs?.source},description:{story:`Mon 26 Jun, 08:10 (spoiler-free mornings): Friday's quarter-final is fed by last night's Croatia v Denmark, hidden
until noon, so its row says so and has the eye that shows that match, as Match picks' row not open yet does.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("knockouts")],
  render: (_, {
    loaded
  }) => <Revealing s={quarterMorning((loaded as Loaded).s)} />,
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    const quarters = canvas.getByRole("region", {
      name: "Quarter-finals"
    });
    await userEvent.click(within(quarters).getByRole("button", {
      name: "Show Croatia v Denmark"
    }));
    await expect(within(quarters).getByRole("button", {
      name: /^Fri 12:00/
    })).toHaveTextContent("1 to pick, draft now");
    await expect(canvasElement).not.toHaveTextContent(/hidden/i);
    await expect(canvas.queryAllByRole("button", {
      name: /^Show /
    })).toEqual([]);
    await noSidewaysScroll(canvasElement);
  }
}`,...M.parameters?.docs?.source},description:{story:`The same morning once the eye is tapped: Croatia v Denmark shown, the tie opens and nothing says hidden.`,...M.parameters?.docs?.description}}}})))()}P();export{O as Eve,k as Knockouts,D as Morning,A as NotOpen,j as SealedTie,M as SealedTieShown,N as __namedExportsOrder,S as default};