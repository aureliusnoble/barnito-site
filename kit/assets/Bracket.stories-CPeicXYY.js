import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-DCluhXK3.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,i,n as a,r as o,t as s}from"./ChampionsSheet-59OAS103.js";import{At as c,Dt as l,Ot as u,b as d,t as f,x as p}from"./src-Ca_r4w3v.js";import{i as m,r as h}from"./checks-C0Y16pbK.js";import{i as g,t as _}from"./moments-Bzx1n_TW.js";var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{l(),f(),v=t(),h(),_(),r(),o(),y=n(),{expect:b,fn:x,waitFor:S,within:C}=__STORYBOOK_MODULE_TEST__,w={title:`Domain/Bracket`,parameters:{layout:`padded`}},T=e=>Date.parse(e),E=x(),D=(e,t)=>async()=>{let n=structuredClone((await g(e)()).s);return t(n),{s:n}},O=(e,t)=>e.fixtures.find(e=>e.id===t),k={loaders:[D(`knockouts`,e=>{e.now=T(`2028-06-25T09:00:00Z`),Object.assign(O(e,`M37`),{status:`finished`,score:{home:2,away:0},result:{ft:{home:2,away:0}}}),Object.assign(O(e,`M38`),{status:`finished`,score:{home:1,away:1},result:{ft:{home:1,away:1},aet:{home:1,away:1},pens:{home:3,away:4}}})})],render:(e,{loaded:t})=>(0,y.jsx)(i,{bracket:d(t.s),onTie:E,teamHref:e=>`#/team/${e}`}),play:async({canvas:e,canvasElement:t,userEvent:n})=>{E.mockClear(),await b(e.getAllByRole(`link`,{name:`Spain`})[0]).toHaveAttribute(`href`,`#/team/ES`),await b(e.getByRole(`button`,{name:`Top half`})).toHaveAttribute(`aria-pressed`,`true`),await b(e.getByText(`Quarter-finals`)).toBeVisible();let r=e.getByRole(`button`,{name:`Spain 2, Austria 0`});await n.click(r),await b(E).toHaveBeenCalledWith(`M37`),await b(e.getByRole(`button`,{name:/^Croatia v Denmark/})).toBeVisible(),await b(e.getByRole(`group`,{name:`Final`})).toHaveTextContent(/Sun 9 Jul, 20:00.*SF 1 v SF 2/),await b(e.getByRole(`button`,{name:`Final: SF 1 v SF 2, Sun 9 Jul, 20:00`})).toBeVisible(),await n.click(e.getByRole(`button`,{name:`Bottom half`})),await S(()=>b(e.getByRole(`button`,{name:`Italy 1, England 1, England through on penalties`})).toBeVisible()),await b(e.getByRole(`button`,{name:`Italy 1, England 1, England through on penalties`}).parentElement).toHaveTextContent(`1p`),await m(t);for(let e of t.querySelectorAll(`[data-code]`))await b(e.scrollWidth,e.textContent).toBeLessThanOrEqual(e.clientWidth)}},A={loaders:[g(`eve`)],render:(e,{loaded:t})=>(0,y.jsx)(i,{bracket:d(t.s),onTie:E}),play:async({canvasElement:e})=>{await b([...e.querySelectorAll(`[data-code]`)].some(e=>e.textContent===`3ADEF`)).toBe(!0);for(let t of e.querySelectorAll(`[data-code]`))await b(t.scrollWidth,t.textContent).toBeLessThanOrEqual(t.clientWidth)}},j={loaders:[D(`eve`,e=>{let t=u(`wc-2026`);e.game.tournament=`wc-2026`,e.rounds=[`R32`,`R16`,`QF`,`SF`,`F`].map((e,t)=>({id:e,label:{R32:`Round of 32`,R16:`Round of 16`,QF:`Quarter-finals`,SF:`Semi-finals`,F:`Final`}[e],position:t+4,scorerPicks:4,tokens:4,scorerStake:1,tokenStake:1})),e.fixtures=c(t).filter(e=>e.stage!==`group`).map((e,t)=>({id:e.id,round:e.round,stage:e.stage,kickoff:T(`2026-06-28T16:00:00Z`)+t*864e5,status:`scheduled`,resultStake:1,knockoutStake:1.5,deadline:T(`2026-06-28T11:00:00Z`)}))})],render:(e,{loaded:t})=>(0,y.jsx)(i,{bracket:d(t.s),onTie:E}),play:async({canvas:e,canvasElement:t})=>{await b(e.getByRole(`group`,{name:`Third-place play-off`})).toBeVisible(),await b(e.getByText(`Round of 32`)).toBeVisible(),await m(t)}},M={loaders:[D(`knockouts`,e=>{e.picks.find(e=>e.kind===`champion`&&e.user===`mel`).team=`SI`})],render:function(e,{loaded:t}){let n=p(t.s),[r,i]=(0,v.useState)(!1);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s,{faces:n.faces,onOpen:()=>i(!0)}),(0,y.jsx)(a,{champions:n,open:r,onOpenChange:i,teamHref:e=>`#/team/${e}`})]})},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:/Everyone's champion/}));let n=await C(document.body).findByRole(`dialog`,{name:`Everyone's champion`});await b(C(n).getByRole(`link`,{name:`France`})).toHaveAttribute(`href`,`#/team/FR`);let r=C(n).getByRole(`listitem`,{name:/Slovenia/});await b(r).toHaveTextContent(`Out in the groups`),await b(r).toHaveAttribute(`data-out`)}},N=[`Knockouts`,`GroupStage`,`ThirdPlace`,`Champions`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  loaders: [changed("knockouts", s => {
    s.now = t("2028-06-25T09:00:00Z");
    Object.assign(fixture(s, "M37"), {
      status: "finished",
      score: {
        home: 2,
        away: 0
      },
      result: {
        ft: {
          home: 2,
          away: 0
        }
      }
    });
    Object.assign(fixture(s, "M38"), {
      status: "finished",
      score: {
        home: 1,
        away: 1
      },
      result: {
        ft: {
          home: 1,
          away: 1
        },
        aet: {
          home: 1,
          away: 1
        },
        pens: {
          home: 3,
          away: 4
        }
      }
    });
  })],
  render: (_, {
    loaded
  }) => <Bracket bracket={bracket((loaded as Loaded).s)!} onTie={tie} teamHref={id => \`#/team/\${id}\`} />,
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    tie.mockClear();
    // A team opens its page, the rest of the tie its match (the mockup review, finding 7).
    await expect(canvas.getAllByRole("link", {
      name: "Spain"
    })[0]).toHaveAttribute("href", "#/team/ES");
    await expect(canvas.getByRole("button", {
      name: "Top half"
    })).toHaveAttribute("aria-pressed", "true");
    await expect(canvas.getByText("Quarter-finals")).toBeVisible();
    const played = canvas.getByRole("button", {
      name: "Spain 2, Austria 0"
    });
    await userEvent.click(played);
    await expect(tie).toHaveBeenCalledWith("M37");
    await expect(canvas.getByRole("button", {
      name: /^Croatia v Denmark/
    })).toBeVisible();
    await expect(canvas.getByRole("group", {
      name: "Final"
    })).toHaveTextContent(/Sun 9 Jul, 20:00.*SF 1 v SF 2/);
    await expect(canvas.getByRole("button", {
      name: "Final: SF 1 v SF 2, Sun 9 Jul, 20:00"
    })).toBeVisible();
    await userEvent.click(canvas.getByRole("button", {
      name: "Bottom half"
    }));
    await waitFor(() => expect(canvas.getByRole("button", {
      name: "Italy 1, England 1, England through on penalties"
    })).toBeVisible());
    await expect(canvas.getByRole("button", {
      name: "Italy 1, England 1, England through on penalties"
    }).parentElement).toHaveTextContent("1p");
    await noSidewaysScroll(canvasElement);
    // Every code whole, at 360 px too (the mockup review, finding 6).
    for (const code of canvasElement.querySelectorAll<HTMLElement>("[data-code]")) await expect(code.scrollWidth, code.textContent!).toBeLessThanOrEqual(code.clientWidth);
  }
}`,...k.parameters?.docs?.source},description:{story:`The round of 16 under way (BR1): two ties played (one on penalties), the rest to come; each tie opens its match.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("eve")],
  render: (_, {
    loaded
  }) => <Bracket bracket={bracket((loaded as Loaded).s)!} onTie={tie} />,
  play: async ({
    canvasElement
  }) => {
    await expect([...canvasElement.querySelectorAll("[data-code]")].some(c => c.textContent === "3ADEF")).toBe(true);
    for (const code of canvasElement.querySelectorAll<HTMLElement>("[data-code]")) await expect(code.scrollWidth, code.textContent!).toBeLessThanOrEqual(code.clientWidth);
  }
}`,...A.parameters?.docs?.source},description:{story:`Before the groups end: the slots' names.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  loaders: [changed("eve", s => {
    const wc = getTournament("wc-2026");
    s.game.tournament = "wc-2026";
    s.rounds = ["R32", "R16", "QF", "SF", "F"].map((id, i) => ({
      id,
      label: {
        R32: "Round of 32",
        R16: "Round of 16",
        QF: "Quarter-finals",
        SF: "Semi-finals",
        F: "Final"
      }[id]!,
      position: i + 4,
      scorerPicks: 4,
      tokens: 4,
      scorerStake: 1,
      tokenStake: 1
    }));
    s.fixtures = buildFixtures(wc).filter(d => d.stage !== "group").map((d, i): SnapshotFixture => ({
      id: d.id,
      round: d.round,
      stage: d.stage,
      kickoff: t("2026-06-28T16:00:00Z") + i * 86_400_000,
      status: "scheduled",
      resultStake: 1,
      knockoutStake: 1.5,
      deadline: t("2026-06-28T11:00:00Z")
    }));
  })],
  render: (_, {
    loaded
  }) => <Bracket bracket={bracket((loaded as Loaded).s)!} onTie={tie} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByRole("group", {
      name: "Third-place play-off"
    })).toBeVisible();
    await expect(canvas.getByText("Round of 32")).toBeVisible();
    await noSidewaysScroll(canvasElement);
  }
}`,...j.parameters?.docs?.source},description:{story:`A tournament with a third-place play-off (BR3, the World Cup): it sits under the final; four columns still fit.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  loaders: [changed("knockouts", s => {
    s.picks.find(p => p.kind === "champion" && p.user === "mel")!.team = "SI";
  })],
  render: function Render(_, {
    loaded
  }) {
    const v = champions((loaded as Loaded).s)!;
    const [open, setOpen] = useState(false);
    return <>
        <ChampionsRow faces={v.faces} onOpen={() => setOpen(true)} />
        <ChampionsSheet champions={v} open={open} onOpenChange={setOpen} teamHref={id => \`#/team/\${id}\`} />
      </>;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: /Everyone's champion/
    }));
    const sheet = await within(document.body).findByRole("dialog", {
      name: "Everyone's champion"
    });
    await expect(within(sheet).getByRole("link", {
      name: "France"
    })).toHaveAttribute("href", "#/team/FR");
    const slovenia = within(sheet).getByRole("listitem", {
      name: /Slovenia/
    });
    await expect(slovenia).toHaveTextContent("Out in the groups");
    await expect(slovenia).toHaveAttribute("data-out");
  }
}`,...M.parameters?.docs?.source},description:{story:`Everyone's champion (CH3): a row of faces above the bracket opens a sheet; a team out greyed.`,...M.parameters?.docs?.description}}}})))()}P();export{M as Champions,A as GroupStage,k as Knockouts,j as ThirdPlace,N as __namedExportsOrder,w as default};