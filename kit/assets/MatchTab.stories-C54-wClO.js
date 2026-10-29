import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,i as n,n as r,o as i,r as a,s as o,t as s}from"./Pitch-B8dYohQI.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{E as l,_ as u,ct as d,t as f,y as p}from"./src-Ca_r4w3v.js";import{i as m,r as h}from"./checks-C0Y16pbK.js";import{i as g,t as _}from"./moments-Bzx1n_TW.js";var v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{f(),h(),_(),o(),a(),t(),v=c(),{expect:y,fn:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Domain/MatchTab`,parameters:{layout:`padded`}},C=e=>Date.parse(e),w=b(),T=(e,t)=>async()=>{let n=structuredClone((await g(e)()).s);return t(n),{s:n}},E={loaders:[T(`morning`,e=>{e.fixtures.find(e=>e.id===`C-4`).lastMet={at:C(`2024-06-07T18:45:00Z`),home:`DE`,away:`PL`,score:{home:2,away:0},competition:`friendly`}})],render:(e,{loaded:t})=>(0,v.jsx)(i,{facts:l(t.s,`C-4`).facts,teamHref:e=>`#/team/${e}`}),play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`region`,{name:`Form`});await y(x(n).getAllByRole(`img`,{name:/^Form:/})).toHaveLength(2),await y(e.getByRole(`table`,{name:`Group C`})).toBeVisible(),await y(e.getByRole(`region`,{name:`Team news`})).toHaveTextContent(/Germany.*No one out.*Poland.*No one out/),await y(e.getByRole(`region`,{name:`Last met`})).toHaveTextContent(`2024 Germany 2–0 Poland · friendly`),await m(t)}},D={loaders:[g(`morning`)],render:(e,{loaded:t})=>(0,v.jsx)(i,{facts:l(t.s,`C-3`).facts}),play:async({canvas:e})=>{await y(e.getByRole(`region`,{name:`Team news`})).toHaveTextContent(/Portugal.*Nuno Mendes · suspended.*Austria.*No one out/),await y(e.queryByRole(`region`,{name:`Last met`})).toBeNull()}},O={loaders:[g(`morning`)],render:(e,{loaded:t})=>(0,v.jsx)(n,{squads:p(t.s,`C-3`),onPlayer:w}),play:async({canvas:e,canvasElement:t,userEvent:n})=>{w.mockClear();let r=e.getByRole(`region`,{name:`Portugal`});await y(x(r).getByRole(`heading`,{name:`Defenders`})).toBeVisible();let i=x(r).getByRole(`button`,{name:/Nuno Mendes/});await y(i).toHaveTextContent(`Suspended`),await n.click(i),await y(w).toHaveBeenCalledWith(`pt-nuno-mendes`),await y(x(e.getByRole(`region`,{name:`Austria`})).getAllByRole(`button`,{name:/1 yellow card/}).length).toBeGreaterThan(0),await m(t)}},k={loaders:[g(`night`)],render:(e,{loaded:t})=>{let n=u(t.s,`A-3`);return(0,v.jsxs)(`div`,{className:`grid gap-3`,children:[(0,v.jsx)(r,{pitch:n,onPlayer:w}),(0,v.jsx)(s,{benches:n.benches,onPlayer:w})]})},play:async({canvas:e,canvasElement:t,userEvent:n})=>{w.mockClear(),await y(e.getByText(`4-4-2`)).toBeVisible(),await y(e.getByText(`4-5-1`)).toBeVisible();let r=e.getByRole(`button`,{name:/Oyarzabal, 1 goal, off 67′/});await n.click(r),await y(w).toHaveBeenCalledWith(`es-mikel-oyarzabal`),await y(e.getByRole(`button`,{name:/Frattesi, yellow card, off 90\+3′/})).toBeVisible(),await y(e.getByRole(`button`,{name:/Ferran Torres, 1 goal, on 84′/})).toBeVisible(),await m(t)}},A={loaders:[T(`morning`,e=>{e.catchUp={seenAt:C(`2028-06-14T10:00:00Z`),ask:!0,hidden:{fixtures:[`A-3`,`A-4`,`B-3`],revealed:[],answered:[],until:C(`2028-06-15T11:00:00Z`)}}})],render:(e,{loaded:t})=>(0,v.jsx)(r,{pitch:u(d(t.s),`A-3`),onPlayer:w}),play:async({canvas:e})=>{await y(e.queryAllByRole(`button`,{name:/goal|card|off|on \d/})).toEqual([]),await y(e.getAllByRole(`button`)).toHaveLength(22)}},j=[`Facts`,`News`,`SquadsBefore`,`PitchFullTime`,`PitchHidden`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  loaders: [changed("morning", s => {
    s.fixtures.find(f => f.id === "C-4")!.lastMet = {
      at: t("2024-06-07T18:45:00Z"),
      home: "DE",
      away: "PL",
      score: {
        home: 2,
        away: 0
      },
      competition: "friendly"
    };
  })],
  render: (_, {
    loaded
  }) => <MatchFacts facts={matchPage((loaded as Loaded).s, "C-4")!.facts} teamHref={id => \`#/team/\${id}\`} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const form = canvas.getByRole("region", {
      name: "Form"
    });
    await expect(within(form).getAllByRole("img", {
      name: /^Form:/
    })).toHaveLength(2);
    await expect(canvas.getByRole("table", {
      name: "Group C"
    })).toBeVisible();
    await expect(canvas.getByRole("region", {
      name: "Team news"
    })).toHaveTextContent(/Germany.*No one out.*Poland.*No one out/);
    await expect(canvas.getByRole("region", {
      name: "Last met"
    })).toHaveTextContent("2024 Germany 2–0 Poland · friendly");
    await noSidewaysScroll(canvasElement);
  }
}`,...E.parameters?.docs?.source},description:{story:`The Match tab before kickoff (the owner's 28 Oct mockup): form, the group, team news, last met.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <MatchFacts facts={matchPage((loaded as Loaded).s, "C-3")!.facts} />,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole("region", {
      name: "Team news"
    })).toHaveTextContent(/Portugal.*Nuno Mendes · suspended.*Austria.*No one out/);
    await expect(canvas.queryByRole("region", {
      name: "Last met"
    })).toBeNull();
  }
}`,...D.parameters?.docs?.source},description:{story:`Who's out, and no Last met without a source.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <Squads squads={squads((loaded as Loaded).s, "C-3")!} onPlayer={player} />,
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    player.mockClear();
    const portugal = canvas.getByRole("region", {
      name: "Portugal"
    });
    await expect(within(portugal).getByRole("heading", {
      name: "Defenders"
    })).toBeVisible();
    const mendes = within(portugal).getByRole("button", {
      name: /Nuno Mendes/
    });
    await expect(mendes).toHaveTextContent("Suspended");
    await userEvent.click(mendes);
    await expect(player).toHaveBeenCalledWith("pt-nuno-mendes");
    // Austrians booked on matchday 1 carry a yellow into this match.
    await expect(within(canvas.getByRole("region", {
      name: "Austria"
    })).getAllByRole("button", {
      name: /1 yellow card/
    }).length).toBeGreaterThan(0);
    await noSidewaysScroll(canvasElement);
  }
}`,...O.parameters?.docs?.source},description:{story:`Until the line-ups come, each squad by line; each player opens his sheet (the owner's 28 Oct mockup).`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("night")],
  render: (_, {
    loaded
  }) => {
    const v = pitch((loaded as Loaded).s, "A-3")!;
    return <div className="grid gap-3">
        <Pitch pitch={v} onPlayer={player} />
        <Benches benches={v.benches} onPlayer={player} />
      </div>;
  },
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    player.mockClear();
    await expect(canvas.getByText("4-4-2")).toBeVisible();
    await expect(canvas.getByText("4-5-1")).toBeVisible();
    const scorer = canvas.getByRole("button", {
      name: /Oyarzabal, 1 goal, off 67′/
    });
    await userEvent.click(scorer);
    await expect(player).toHaveBeenCalledWith("es-mikel-oyarzabal");
    await expect(canvas.getByRole("button", {
      name: /Frattesi, yellow card, off 90\\+3′/
    })).toBeVisible();
    await expect(canvas.getByRole("button", {
      name: /Ferran Torres, 1 goal, on 84′/
    })).toBeVisible();
    await noSidewaysScroll(canvasElement);
  }
}`,...k.parameters?.docs?.source},description:{story:`Once played: the pitch by formation, with goals, cards and who went off, then the benches.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  loaders: [changed("morning", s => {
    s.catchUp = {
      seenAt: t("2028-06-14T10:00:00Z"),
      ask: true,
      hidden: {
        fixtures: ["A-3", "A-4", "B-3"],
        revealed: [],
        answered: [],
        until: t("2028-06-15T11:00:00Z")
      }
    };
  })],
  render: (_, {
    loaded
  }) => <Pitch pitch={pitch(spoilerFree((loaded as Loaded).s), "A-3")!} onPlayer={player} />,
  play: async ({
    canvas
  }) => {
    await expect(canvas.queryAllByRole("button", {
      name: /goal|card|off|on \\d/
    })).toEqual([]);
    await expect(canvas.getAllByRole("button")).toHaveLength(22);
  }
}`,...A.parameters?.docs?.source},description:{story:`A match hidden this morning: its line-ups only.`,...A.parameters?.docs?.description}}}})))()}M();export{E as Facts,D as News,k as PitchFullTime,A as PitchHidden,O as SquadsBefore,j as __namedExportsOrder,S as default};