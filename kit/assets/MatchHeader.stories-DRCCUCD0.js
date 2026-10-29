import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./CardBody-Bm1zVOij.js";import{i as r,n as i,r as a,t as o}from"./YourStrip-CcT5_z32.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{M as c,N as l,St as u,t as d}from"./src-Ca_r4w3v.js";import{i as f,r as p}from"./checks-C0Y16pbK.js";import{i as m,t as h}from"./moments-Bzx1n_TW.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{d(),p(),h(),t(),r(),i(),g=s(),{expect:_,fn:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Domain/MatchHeader`,parameters:{layout:`padded`}},x=e=>Date.parse(e),S=e=>`#/team/${e}`,C=(e,t)=>async()=>{let n=structuredClone((await m(e)()).s);return t(n),{s:n}},w=(e,t)=>e.fixtures.find(e=>e.id===t),T={loaders:[m(`morning`)],render:(e,{loaded:t})=>(0,g.jsx)(a,{header:c(t.s,`C-4`),teamHref:S}),play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`region`,{name:`Germany v Poland`});await _(n).toHaveTextContent(`Group C`),await _(n.querySelector(`[data-centre]`)).toHaveTextContent(`20:00`),await _(n).toHaveTextContent(`Thu 15 Jun · St. James' Park, Newcastle`),await _(e.getByRole(`link`,{name:`Germany`})).toHaveAttribute(`href`,`#/team/DE`),await _(e.getByRole(`link`,{name:`Poland`})).toHaveAttribute(`href`,`#/team/PL`),await f(t)}},E={loaders:[m(`live`)],render:(e,{loaded:t})=>(0,g.jsx)(a,{header:c(t.s,`C-3`)}),play:async({canvas:e})=>{let t=e.getByRole(`region`,{name:`Portugal v Austria`});await _(t).toHaveTextContent(`Live 67′`),await _(t.querySelector(`[data-centre]`)).toHaveTextContent(`0–1`),await _(e.queryByRole(`link`)).toBeNull()}},D={loaders:[C(`night`,e=>{w(e,`A-3`).weather={at:x(`2028-06-14T13:00:00Z`),observed:!0,code:63,tempC:16,windMph:22,roof:`closed`}})],render:(e,{loaded:t})=>(0,g.jsx)(a,{header:c(t.s,`A-3`)}),play:async({canvas:e})=>{await _(e.getByRole(`region`,{name:`Spain v Italy`}).querySelector(`[data-centre]`)).toHaveTextContent(`2–0`),await _(e.getByText(`FT · Wed 14 Jun, 14:00 · National Stadium of Wales, Cardiff`)).toBeVisible();let t=e.getByRole(`group`,{name:`Weather`});await _(t).toHaveTextContent(`16°`),await _(t).toHaveTextContent(`22 mph`),await _(t).toHaveTextContent(`Roof closed`),await _(t).toHaveTextContent(`Open-Meteo`)}},O={loaders:[C(`morning`,e=>{w(e,`C-4`).weather={at:x(`2028-06-15T19:00:00Z`),observed:!1,code:2,tempC:18,rainPct:10,windMph:6},w(e,`C-4`).channel=`ITV`})],render:(e,{loaded:t})=>(0,g.jsx)(a,{header:c(t.s,`C-4`)}),play:async({canvas:e})=>{await _(e.getByRole(`group`,{name:`Weather`})).toHaveTextContent(/18°.*10%/),await _(e.getByText(`Thu 15 Jun · ITV · St. James' Park, Newcastle`)).toBeVisible()}},k={loaders:[C(`knockouts`,e=>w(e,`M38`).status=`void`)],render:(e,{loaded:t})=>{let{s:n}=t;return(0,g.jsxs)(`div`,{className:`grid gap-3`,children:[(0,g.jsx)(a,{header:c(n,`M37`)}),(0,g.jsx)(a,{header:c(n,`M38`)})]})},play:async({canvas:e})=>{await _(e.getAllByText(`Round of 16`)).toHaveLength(2),await _(e.getByText(`Void`)).toBeVisible()}},A={loaders:[m(`morning`)],render:(e,{loaded:t})=>(0,g.jsx)(a,{header:c(t.s,`E-4`),teamHref:S}),play:async({canvas:e,canvasElement:t})=>{await _(e.getByRole(`link`,{name:`Bosnia & Herzegovina`})).toBeVisible(),await f(t)}},j={loaders:[m(`morning`)],render:(e,{loaded:t})=>{let{s:n}=t;return(0,g.jsx)(`div`,{className:`grid gap-3`,children:[`B-4`,`C-3`,`C-4`].map(e=>(0,g.jsx)(o,{strip:l(n,e),href:`#/match/${e}`},e))})},play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`link`,{name:/You: Draw/});await _(n).toHaveAttribute(`data-tone`,`locked`),await _(n).toHaveTextContent(`Locked · 34 pts`),await _(e.getByRole(`link`,{name:/Your draft: Austria/})).toHaveAttribute(`data-tone`,`draft`),await _(e.getByRole(`link`,{name:/No pick yet/})).toHaveTextContent(`locks 12:00 today`),await f(t)}},M={loaders:[m(`night`)],render:(e,{loaded:t})=>(0,g.jsx)(o,{strip:l(t.s,`A-3`)}),play:async({canvasElement:e})=>{await _(e.querySelector(`[data-tone]`)).toHaveTextContent(/You: Spain.*\+13/)}},N=v(),P={loaders:[m(`morning`)],render:(e,{loaded:t})=>{let{s:r}=t,i=u(r,w(r,`C-4`));return(0,g.jsx)(a,{header:c(r,`C-4`),children:(0,g.jsx)(n,{card:i,onOption:N,selected:i.options[2].selection})})},play:async({canvas:e,userEvent:t})=>{N.mockClear();let n=e.getAllByRole(`button`).filter(e=>e.hasAttribute(`data-state`));await _(n).toHaveLength(3),await _(n.filter(e=>e.hasAttribute(`data-selected`))).toEqual([n[2]]),await _(e.getByText(/of 9 locked/)).toBeVisible(),await t.click(n[0]),await _(N).toHaveBeenCalledOnce()}},F={loaders:[m(`night`)],render:(e,{loaded:t})=>{let{s:r}=t;return(0,g.jsx)(a,{header:c(r,`A-3`),children:(0,g.jsx)(n,{card:u(r,w(r,`A-3`))})})},play:async({canvas:e,canvasElement:t})=>{await _(e.getAllByRole(`img`).length).toBeGreaterThan(0),await _(e.getAllByRole(`listitem`).length).toBeGreaterThan(0),await f(t)}},I=[`Before`,`Live`,`FullTime`,`Forecast`,`KnockoutAndVoid`,`LongNames`,`Strips`,`StripResult`,`Body`,`BodyFullTime`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <MatchHeader header={matchHeader((loaded as Loaded).s, "C-4")!} teamHref={teamHref} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const header = canvas.getByRole("region", {
      name: "Germany v Poland"
    });
    await expect(header).toHaveTextContent("Group C");
    await expect(header.querySelector("[data-centre]")).toHaveTextContent("20:00");
    await expect(header).toHaveTextContent("Thu 15 Jun · St. James' Park, Newcastle");
    await expect(canvas.getByRole("link", {
      name: "Germany"
    })).toHaveAttribute("href", "#/team/DE");
    await expect(canvas.getByRole("link", {
      name: "Poland"
    })).toHaveAttribute("href", "#/team/PL");
    await noSidewaysScroll(canvasElement);
  }
}`,...T.parameters?.docs?.source},description:{story:`Before kickoff (M2): the stage, the two teams, the kickoff large, the date and the ground; each team a link.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("live")],
  render: (_, {
    loaded
  }) => <MatchHeader header={matchHeader((loaded as Loaded).s, "C-3")!} />,
  play: async ({
    canvas
  }) => {
    const header = canvas.getByRole("region", {
      name: "Portugal v Austria"
    });
    await expect(header).toHaveTextContent("Live 67′");
    await expect(header.querySelector("[data-centre]")).toHaveTextContent("0–1");
    // Without teamHref the teams are plain names.
    await expect(canvas.queryByRole("link")).toBeNull();
  }
}`,...E.parameters?.docs?.source},description:{story:`While played: the live pill and the score as it stands.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  loaders: [changed("night", s => {
    fixture(s, "A-3").weather = {
      at: t("2028-06-14T13:00:00Z"),
      observed: true,
      code: 63,
      tempC: 16,
      windMph: 22,
      roof: "closed"
    };
  })],
  render: (_, {
    loaded
  }) => <MatchHeader header={matchHeader((loaded as Loaded).s, "A-3")!} />,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole("region", {
      name: "Spain v Italy"
    }).querySelector("[data-centre]")).toHaveTextContent("2–0");
    await expect(canvas.getByText("FT · Wed 14 Jun, 14:00 · National Stadium of Wales, Cardiff")).toBeVisible();
    const weather = canvas.getByRole("group", {
      name: "Weather"
    });
    await expect(weather).toHaveTextContent("16°");
    await expect(weather).toHaveTextContent("22 mph");
    await expect(weather).toHaveTextContent("Roof closed");
    await expect(weather).toHaveTextContent("Open-Meteo");
  }
}`,...D.parameters?.docs?.source},description:{story:`Played (M1), with the conditions at kickoff and Cardiff's roof as the source gives it.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  loaders: [changed("morning", s => {
    fixture(s, "C-4").weather = {
      at: t("2028-06-15T19:00:00Z"),
      observed: false,
      code: 2,
      tempC: 18,
      rainPct: 10,
      windMph: 6
    };
    fixture(s, "C-4").channel = "ITV";
  })],
  render: (_, {
    loaded
  }) => <MatchHeader header={matchHeader((loaded as Loaded).s, "C-4")!} />,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole("group", {
      name: "Weather"
    })).toHaveTextContent(/18°.*10%/);
    await expect(canvas.getByText("Thu 15 Jun · ITV · St. James' Park, Newcastle")).toBeVisible();
  }
}`,...O.parameters?.docs?.source},description:{story:`A forecast: its chance of rain.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  loaders: [changed("knockouts", s => fixture(s, "M38").status = "void")],
  render: (_, {
    loaded
  }) => {
    const {
      s
    } = loaded as Loaded;
    return <div className="grid gap-3">
        <MatchHeader header={matchHeader(s, "M37")!} />
        <MatchHeader header={matchHeader(s, "M38")!} />
      </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getAllByText("Round of 16")).toHaveLength(2);
    await expect(canvas.getByText("Void")).toBeVisible();
  }
}`,...k.parameters?.docs?.source},description:{story:`A knockout names its round; a void match says so in the middle.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <MatchHeader header={matchHeader((loaded as Loaded).s, "E-4")!} teamHref={teamHref} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByRole("link", {
      name: "Bosnia & Herzegovina"
    })).toBeVisible();
    await noSidewaysScroll(canvasElement);
  }
}`,...A.parameters?.docs?.source},description:{story:`The longest names, at 390 and 360 px.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => {
    const {
      s
    } = loaded as Loaded;
    return <div className="grid gap-3">
        {["B-4", "C-3", "C-4"].map(id => <YourStrip key={id} strip={yourStrip(s, id)!} href={\`#/match/\${id}\`} />)}
      </div>;
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    const locked = canvas.getByRole("link", {
      name: /You: Draw/
    });
    await expect(locked).toHaveAttribute("data-tone", "locked");
    await expect(locked).toHaveTextContent("Locked · 34 pts");
    await expect(canvas.getByRole("link", {
      name: /Your draft: Austria/
    })).toHaveAttribute("data-tone", "draft");
    await expect(canvas.getByRole("link", {
      name: /No pick yet/
    })).toHaveTextContent("locks 12:00 today");
    await noSidewaysScroll(canvasElement);
  }
}`,...j.parameters?.docs?.source},description:{story:`Your strip in each state, a link to the match when given.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("night")],
  render: (_, {
    loaded
  }) => <YourStrip strip={yourStrip((loaded as Loaded).s, "A-3")!} />,
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector("[data-tone]")).toHaveTextContent(/You: Spain.*\\+13/);
  }
}`,...M.parameters?.docs?.source},description:{story:`Once your pick has points: what it earned, with its arrow.`,...M.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => {
    const {
      s
    } = loaded as Loaded;
    const card = matchCard(s, fixture(s, "C-4"));
    return <MatchHeader header={matchHeader(s, "C-4")!}>
        <CardBody card={card} onOption={picked} selected={card.options[2]!.selection} />
      </MatchHeader>;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    picked.mockClear();
    const tiles = canvas.getAllByRole("button").filter(b => b.hasAttribute("data-state"));
    await expect(tiles).toHaveLength(3);
    await expect(tiles.filter(b => b.hasAttribute("data-selected"))).toEqual([tiles[2]]);
    await expect(canvas.getByText(/of 9 locked/)).toBeVisible();
    await userEvent.click(tiles[0]!);
    await expect(picked).toHaveBeenCalledOnce();
  }
}`,...P.parameters?.docs?.source},description:{story:`The card's own parts under the header (the match page): the options, who has locked and your state; the option whose
sheet is open is ringed (F79, note 4).`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("night")],
  render: (_, {
    loaded
  }) => {
    const {
      s
    } = loaded as Loaded;
    return <MatchHeader header={matchHeader(s, "A-3")!}>
        <CardBody card={matchCard(s, fixture(s, "A-3"))} />
      </MatchHeader>;
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getAllByRole("img").length).toBeGreaterThan(0);
    // Who earned what, as Home's card draws it.
    await expect(canvas.getAllByRole("listitem").length).toBeGreaterThan(0);
    await noSidewaysScroll(canvasElement);
  }
}`,...F.parameters?.docs?.source},description:{story:`At full time the body is the split, who earned what and the badges, as Home's card.`,...F.parameters?.docs?.description}}}})))()}L();export{T as Before,P as Body,F as BodyFullTime,O as Forecast,D as FullTime,k as KnockoutAndVoid,E as Live,A as LongNames,M as StripResult,j as Strips,I as __namedExportsOrder,b as default};