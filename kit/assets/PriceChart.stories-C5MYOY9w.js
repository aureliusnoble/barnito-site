import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{A as n,O as r,t as i}from"./src-Ca_r4w3v.js";import{i as a,r as o}from"./checks-C0Y16pbK.js";import{i as s,t as c}from"./moments-Bzx1n_TW.js";import{n as l,t as u}from"./PriceChart-C4JwFZ9M.js";function d({s:e,fixture:t}){let n=r(e,t);return(0,p.jsx)(`div`,{className:`max-w-[390px] rounded-card bg-surface p-3`,children:n?(0,p.jsx)(u,{chart:n}):(0,p.jsx)(`p`,{children:`No history`})})}function f({s:e,selection:t}){let r=n(e,t);return(0,p.jsx)(`div`,{className:`max-w-[390px] rounded-card bg-surface p-3`,children:r?(0,p.jsx)(u,{chart:r}):(0,p.jsx)(`p`,{children:`No history`})})}var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{i(),o(),c(),l(),p=t(),{expect:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Charts/PriceChart`,parameters:{layout:`padded`}},_=e=>e.s,v=e=>e.findByRole(`img`,{name:/The odds over time/}),y={loaders:[s(`night`)],render:(e,{loaded:t})=>(0,p.jsx)(d,{s:_(t),fixture:`C-4`}),play:async({canvas:e,canvasElement:t})=>{let n=await v(e);await m(n.querySelectorAll(`[data-face]`)).toHaveLength(8),await m(e.getByRole(`list`,{name:`Lines`})).toHaveTextContent(`Germany`);let r=[...n.querySelectorAll(`[data-face] text`)].map(e=>e.textContent);await m(r).toContain(`PS`);for(let e of r)await m(e).toMatch(/^(You|[A-Z]{1,2})$/);await m(n.querySelector(`[data-period='drafting']`)).toHaveTextContent(`Drafts open`),await m(n.querySelector(`[data-period='locked']`)).not.toBeNull();let i=[...n.querySelectorAll(`[data-face] [data-place]`)].map(e=>e.getBoundingClientRect());for(let e=0;e<i.length;e++)for(let t=e+1;t<i.length;t++)await m(Math.hypot(i[e].x-i[t].x,i[e].y-i[t].y)).toBeGreaterThanOrEqual(19.5);await a(t)}},b={loaders:[s(`morning`)],render:(e,{loaded:t})=>(0,p.jsx)(d,{s:_(t),fixture:`B-4`}),play:async({canvas:e})=>{let t=await v(e);await m(t.querySelectorAll(`[data-face]`)).toHaveLength(1),await m(t.querySelector(`[data-face][data-you]`)).not.toBeNull()}},x={loaders:[async()=>{let e=structuredClone(_(await s(`night`)()));for(let t of e.priceHistory)t.fixture===`C-4`&&(t.series=t.series.slice(0,1));return e.picks=e.picks.filter(e=>e.fixture!==`C-4`),{s:e}}],render:(e,{loaded:t})=>(0,p.jsx)(d,{s:_(t),fixture:`C-4`}),play:async({canvas:e,canvasElement:t})=>{await m((await v(e)).querySelectorAll(`[data-end]`)).toHaveLength(3),await a(t)}},S={loaders:[async()=>{let e=structuredClone(_(await s(`night`)()));for(let t of e.priceHistory)t.fixture===`C-4`&&(t.series=t.series.map(e=>({...e,figures:t.series[0].figures})));return{s:e}}],render:(e,{loaded:t})=>(0,p.jsx)(d,{s:_(t),fixture:`C-4`}),play:async({canvas:e})=>{await m(await v(e)).toHaveTextContent(`56%`)}},C={loaders:[async()=>{let e=structuredClone(_(await s(`night`)())),t=Date.parse(`2028-06-14T09:05:00Z`);for(let n=1;n<=12;n++)e.members.push({id:`f${n}`,name:`Friend ${String(n).padStart(2,`0`)}`,active:!0}),e.picks.push({id:`x${n}`,user:`f${n}`,kind:`result`,fixture:`C-4`,round:`MD2`,outcome:n%3==0?`away`:`home`,status:`locked`,lockedBy:`self`,lockedAt:t,version:1,numbers:n%3==0?{prob:.2026,points:49}:{prob:.5315,points:19}});return{s:e}}],render:(e,{loaded:t})=>(0,p.jsx)(d,{s:_(t),fixture:`C-4`}),play:async({canvas:e,canvasElement:t})=>{await m((await v(e)).querySelectorAll(`[data-face]`)).toHaveLength(20),await a(t)}},w={loaders:[s(`knockouts`)],render:(e,{loaded:t})=>(0,p.jsx)(d,{s:_(t),fixture:`M37`}),play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`list`,{name:`Lines`});await m(h(n).getAllByRole(`listitem`).map(e=>e.textContent)).toEqual([`Spain in 90 minutes`,`Draw, then Spain through`,`Draw, then Austria through`,`Austria in 90 minutes`]),await m((await v(e)).querySelectorAll(`[data-dashed]`)).toHaveLength(1),await a(t)}},T={loaders:[s(`night`)],render:(e,{loaded:t})=>(0,p.jsx)(d,{s:_(t),fixture:`C-4`}),play:async({canvas:e,userEvent:t})=>{(await e.findByRole(`slider`,{name:`The odds over time`})).focus(),await t.keyboard(`{Home}`);let n=await e.findByRole(`status`);await m(n).toHaveTextContent(`Wed 10 May, 20:00`),await m(n).toHaveTextContent(`56%Germany`),await m(e.getByRole(`table`,{name:/The odds over time/})).toBeInTheDocument();let r=[...e.getByRole(`table`,{name:/The odds over time/}).querySelectorAll(`tbody tr`)],i=r.findIndex(e=>(e.lastElementChild?.textContent??``)!==``);await m(i).toBeGreaterThan(-1);for(let e=0;e<i;e++)await t.keyboard(`{ArrowRight}`);let a=r[i].lastElementChild.textContent.split(`; `).map(e=>e.split(`:`)[0]);await m(await e.findByRole(`status`)).toHaveTextContent(`Locked: ${a.join(`, `)}`)}},E={loaders:[s(`night`)],render:(e,{loaded:t})=>(0,p.jsx)(d,{s:_(t),fixture:`C-4`}),play:async({canvas:e})=>{let t=await v(e),n=t.getBoundingClientRect(),[r,i]=[n.x+n.width/2,n.y+n.height/2],a=document.elementFromPoint(r,i);await m(t.contains(a)).toBe(!0),a.dispatchEvent(new PointerEvent(`pointermove`,{clientX:r,clientY:i,bubbles:!0})),await m(await e.findByRole(`status`)).toBeVisible();let o=e.getByRole(`slider`,{name:`The odds over time`});await m(getComputedStyle(o).outlineOffset).toBe(`-2px`)}},D={loaders:[s(`morning`)],render:(e,{loaded:t})=>(0,p.jsx)(f,{s:_(t),selection:{kind:`scorer`,round:`MD3`,player:`si-jure-balkovec`}}),play:async({canvas:e,canvasElement:t})=>{let n=await v(e);await m(e.getByRole(`list`,{name:`Lines`})).toHaveTextContent(`Jure Balkovec`),await m(n.querySelector(`[data-period='drafting']`)).toHaveTextContent(`Drafts open`),await m(n.querySelector(`[data-period='locked'] rect`)).not.toBeNull(),await a(t)}},O={loaders:[s(`knockouts`)],render:(e,{loaded:t})=>(0,p.jsx)(f,{s:_(t),selection:{kind:`champion`,team:`ES`}}),play:async({canvas:e,canvasElement:t})=>{let n=await v(e);await m(e.getByRole(`list`,{name:`Lines`})).toHaveTextContent(`Spain`),await m(n.querySelector(`[data-period='drafting']`)).not.toBeNull(),await m(n.querySelector(`[data-period='locked']`)).toHaveTextContent(`Locked`),await a(t)}},k={loaders:[s(`morning`)],render:(e,{loaded:t})=>(0,p.jsx)(`div`,{className:`max-w-[240px]`,children:(0,p.jsx)(f,{s:_(t),selection:{kind:`scorer`,round:`MD3`,player:`si-jure-balkovec`}})}),play:async({canvas:e,canvasElement:t})=>{let n=await v(e);for(let e of n.querySelectorAll(`[data-period]`)){let t=e.querySelector(`rect`).getBoundingClientRect(),n=e.querySelector(`text`);n&&await m(n.getBoundingClientRect().width).toBeLessThanOrEqual(t.width)}await a(t)}},A=[`Night`,`MorningOnlyYours`,`OneVersion`,`FlatLines`,`TwentyFaces`,`KnockoutEndings`,`Scrubbed`,`ScrubbedByPointer`,`ScorerPeriods`,`ChampionPeriods`,`NarrowPeriods`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("night")],
  render: (_, {
    loaded: l
  }) => <Chart s={loaded(l)} fixture="C-4" />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const img = await drawing(canvas);
    await expect(img.querySelectorAll("[data-face]")).toHaveLength(8);
    await expect(canvas.getByRole("list", {
      name: "Lines"
    })).toHaveTextContent("Germany");
    // Two initials on a friend's face (F75): Priya Shah is PS, Tom is T; you are You.
    const initials = [...img.querySelectorAll("[data-face] text")].map(t => t.textContent);
    await expect(initials).toContain("PS");
    for (const x of initials) await expect(x).toMatch(/^(You|[A-Z]{1,2})$/);
    // Three periods (the owner, 27 Oct): unshaded before drafts open, then "Drafts open", then "Locked" from noon.
    await expect(img.querySelector("[data-period='drafting']")).toHaveTextContent("Drafts open");
    await expect(img.querySelector("[data-period='locked']")).not.toBeNull();
    const faces = [...img.querySelectorAll<SVGGElement>("[data-face] [data-place]")].map(c => c.getBoundingClientRect());
    for (let i = 0; i < faces.length; i++) for (let j = i + 1; j < faces.length; j++) await expect(Math.hypot(faces[i]!.x - faces[j]!.x, faces[i]!.y - faces[j]!.y)).toBeGreaterThanOrEqual(19.5);
    await noSidewaysScroll(canvasElement);
  }
}`,...y.parameters?.docs?.source},description:{story:`The night after Germany v Poland's deadline: three lines, the windows, eight locks; five faces at one point step aside.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded: l
  }) => <Chart s={loaded(l)} fixture="B-4" />,
  play: async ({
    canvas
  }) => {
    const img = await drawing(canvas);
    await expect(img.querySelectorAll("[data-face]")).toHaveLength(1);
    await expect(img.querySelector("[data-face][data-you]")).not.toBeNull();
  }
}`,...b.parameters?.docs?.source},description:{story:`The morning, Serbia v Türkiye before its deadline: only your lock shows.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  loaders: [async (): Promise<Loaded> => {
    const s = structuredClone(loaded(await withMoment("night")()));
    for (const h of s.priceHistory) if (h.fixture === "C-4") h.series = h.series.slice(0, 1);
    s.picks = s.picks.filter(p => p.fixture !== "C-4");
    return {
      s
    };
  }],
  render: (_, {
    loaded: l
  }) => <Chart s={loaded(l)} fixture="C-4" />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect((await drawing(canvas)).querySelectorAll("[data-end]")).toHaveLength(3);
    await noSidewaysScroll(canvasElement);
  }
}`,...x.parameters?.docs?.source},description:{story:`One price version so far: a dot per line, nothing to scrub between.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  loaders: [async (): Promise<Loaded> => {
    const s = structuredClone(loaded(await withMoment("night")()));
    for (const h of s.priceHistory) if (h.fixture === "C-4") h.series = h.series.map(p => ({
      ...p,
      figures: h.series[0]!.figures
    }));
    return {
      s
    };
  }],
  render: (_, {
    loaded: l
  }) => <Chart s={loaded(l)} fixture="C-4" />,
  play: async ({
    canvas
  }) => {
    await expect(await drawing(canvas)).toHaveTextContent("56%");
  }
}`,...S.parameters?.docs?.source},description:{story:`A price that never moved: flat lines.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  loaders: [async (): Promise<Loaded> => {
    const s = structuredClone(loaded(await withMoment("night")()));
    const at = Date.parse("2028-06-14T09:05:00Z");
    for (let i = 1; i <= 12; i++) {
      s.members.push({
        id: \`f\${i}\`,
        name: \`Friend \${String(i).padStart(2, "0")}\`,
        active: true
      });
      s.picks.push({
        id: \`x\${i}\`,
        user: \`f\${i}\`,
        kind: "result",
        fixture: "C-4",
        round: "MD2",
        outcome: i % 3 === 0 ? "away" : "home",
        status: "locked",
        lockedBy: "self",
        lockedAt: at,
        version: 1,
        numbers: i % 3 === 0 ? {
          prob: 0.2026,
          points: 49
        } : {
          prob: 0.5315,
          points: 19
        }
      });
    }
    return {
      s
    };
  }],
  render: (_, {
    loaded: l
  }) => <Chart s={loaded(l)} fixture="C-4" />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect((await drawing(canvas)).querySelectorAll("[data-face]")).toHaveLength(20);
    await noSidewaysScroll(canvasElement);
  }
}`,...C.parameters?.docs?.source},description:{story:`Twenty members locked: every face placed, none overlapping.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("knockouts")],
  render: (_, {
    loaded: l
  }) => <Chart s={loaded(l)} fixture="M37" />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const lines = canvas.getByRole("list", {
      name: "Lines"
    });
    await expect(within(lines).getAllByRole("listitem").map(x => x.textContent)).toEqual(["Spain in 90 minutes", "Draw, then Spain through", "Draw, then Austria through", "Austria in 90 minutes"]);
    await expect((await drawing(canvas)).querySelectorAll("[data-dashed]")).toHaveLength(1);
    await noSidewaysScroll(canvasElement);
  }
}`,...w.parameters?.docs?.source},description:{story:`A knockout's four endings: the two draws in the draw's colour, the second dashed.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("night")],
  render: (_, {
    loaded: l
  }) => <Chart s={loaded(l)} fixture="C-4" />,
  play: async ({
    canvas,
    userEvent
  }) => {
    const slider = await canvas.findByRole("slider", {
      name: "The odds over time"
    });
    slider.focus();
    await userEvent.keyboard("{Home}");
    const tip = await canvas.findByRole("status");
    await expect(tip).toHaveTextContent("Wed 10 May, 20:00");
    await expect(tip).toHaveTextContent("56%Germany");
    await expect(canvas.getByRole("table", {
      name: /The odds over time/
    })).toBeInTheDocument();
    // At a time when friends locked, the tooltip names them (F75), as the table's Locked column does.
    const rows = [...canvas.getByRole("table", {
      name: /The odds over time/
    }).querySelectorAll("tbody tr")];
    const j = rows.findIndex(r => (r.lastElementChild?.textContent ?? "") !== "");
    await expect(j).toBeGreaterThan(-1);
    for (let k = 0; k < j; k++) await userEvent.keyboard("{ArrowRight}");
    const who = rows[j]!.lastElementChild!.textContent!.split("; ").map(x => x.split(":")[0]!);
    await expect(await canvas.findByRole("status")).toHaveTextContent(\`Locked: \${who.join(", ")}\`);
  }
}`,...T.parameters?.docs?.source},description:{story:`Scrubbed by the keyboard: the crosshair's tooltip reads each line at that time, value first.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("night")],
  render: (_, {
    loaded: l
  }) => <Chart s={loaded(l)} fixture="C-4" />,
  play: async ({
    canvas
  }) => {
    const img = await drawing(canvas);
    const box = img.getBoundingClientRect();
    const [x, y] = [box.x + box.width / 2, box.y + box.height / 2];
    const hit = document.elementFromPoint(x, y)!;
    await expect(img.contains(hit)).toBe(true);
    hit.dispatchEvent(new PointerEvent("pointermove", {
      clientX: x,
      clientY: y,
      bubbles: true
    }));
    await expect(await canvas.findByRole("status")).toBeVisible();
    const slider = canvas.getByRole("slider", {
      name: "The odds over time"
    });
    await expect(getComputedStyle(slider).outlineOffset).toBe("-2px");
  }
}`,...E.parameters?.docs?.source},description:{story:`By pointer or touch (the final review: the keyboard target covered the drawing, so the pointer never reached it): a
point on the drawing is the drawing, and moving there opens the tooltip; the keyboard's focus ring shows inside.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded: l
  }) => <PickChart s={loaded(l)} selection={{
    kind: "scorer",
    round: "MD3",
    player: "si-jure-balkovec"
  }} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const img = await drawing(canvas);
    await expect(canvas.getByRole("list", {
      name: "Lines"
    })).toHaveTextContent("Jure Balkovec");
    await expect(img.querySelector("[data-period='drafting']")).toHaveTextContent("Drafts open");
    await expect(img.querySelector("[data-period='locked'] rect")).not.toBeNull();
    await noSidewaysScroll(canvasElement);
  }
}`,...D.parameters?.docs?.source},description:{story:`A scorer's chance to score over time (PK1): drafts open, then locked from noon to kickoff, a few hours that show by
their tint. Jure Balkovec, one of your matchday 3 scorers, so his history is recorded.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("knockouts")],
  render: (_, {
    loaded: l
  }) => <PickChart s={loaded(l)} selection={{
    kind: "champion",
    team: "ES"
  }} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const img = await drawing(canvas);
    await expect(canvas.getByRole("list", {
      name: "Lines"
    })).toHaveTextContent("Spain");
    await expect(img.querySelector("[data-period='drafting']")).not.toBeNull();
    await expect(img.querySelector("[data-period='locked']")).toHaveTextContent("Locked");
    await noSidewaysScroll(canvasElement);
  }
}`,...O.parameters?.docs?.source},description:{story:`The champion's chance to win over time (PK2), at the round of 16: drafting before the first deadline, locked since,
to now.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded: l
  }) => <div className="max-w-[240px]">
      <PickChart s={loaded(l)} selection={{
      kind: "scorer",
      round: "MD3",
      player: "si-jure-balkovec"
    }} />
    </div>,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const img = await drawing(canvas);
    for (const band of img.querySelectorAll<SVGGElement>("[data-period]")) {
      const rect = band.querySelector("rect")!.getBoundingClientRect();
      const word = band.querySelector("text");
      if (word) await expect(word.getBoundingClientRect().width).toBeLessThanOrEqual(rect.width);
    }
    await noSidewaysScroll(canvasElement);
  }
}`,...k.parameters?.docs?.source},description:{story:`A narrow period shows by its tint alone: its word only where it fits.`,...k.parameters?.docs?.description}}}})))()}j();export{O as ChampionPeriods,S as FlatLines,w as KnockoutEndings,b as MorningOnlyYours,k as NarrowPeriods,y as Night,x as OneVersion,D as ScorerPeriods,T as Scrubbed,E as ScrubbedByPointer,C as TwentyFaces,A as __namedExportsOrder,g as default};