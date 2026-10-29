import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{U as n,k as r,t as i}from"./src-Ca_r4w3v.js";import{i as a,r as o}from"./checks-C0Y16pbK.js";import{i as s,t as c}from"./moments-Bzx1n_TW.js";import{n as l,t as u}from"./PointsChart-pkLbWlUm.js";function d({s:e}){let t=r(e);return(0,f.jsx)(`div`,{className:`max-w-[390px] rounded-card bg-surface p-3`,children:(0,f.jsx)(u,{...t&&{race:t}})})}var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{i(),o(),c(),l(),f=t(),{expect:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Charts/PointsChart`,parameters:{layout:`padded`}},g=e=>e.s,_=e=>e.findByRole(`img`,{name:/The points race/}),v={loaders:[s(`night`)],render:(e,{loaded:t})=>(0,f.jsx)(d,{s:g(t)}),play:async({canvas:e,canvasElement:t})=>{let n=await _(e);await p(n.querySelectorAll(`[data-person]`)).toHaveLength(9),await p(n.querySelectorAll(`[data-named]`)).toHaveLength(3),await p(n).toHaveTextContent(`419`),await p(n).toHaveTextContent(`Mel`),await p(n).toHaveTextContent(`You`),await p(n).toHaveTextContent(`Ana`);let r=e.getByRole(`table`,{name:/The points race/});await p(m(r).getAllByRole(`row`)).toHaveLength(10),await a(t)}},y={loaders:[s(`knockouts`)],render:(e,{loaded:t})=>(0,f.jsx)(d,{s:g(t)}),play:async({canvas:e,canvasElement:t})=>{await p(await _(e)).toHaveTextContent(`653`),await a(t)}},b=e=>Date.parse(e),x={render:()=>(0,f.jsx)(d,{s:n(e=>{e.tableHistory=e.members.map((e,t)=>({at:b(`2028-06-09T21:00:00Z`),user:e.id,total:40-t*10,rank:t+1}))})}),play:async({canvas:e})=>{await p(await _(e)).toHaveTextContent(`40`)}},S={render:()=>(0,f.jsx)(d,{s:n(e=>{e.tableHistory=e.members.flatMap(e=>[{at:b(`2028-06-09T21:00:00Z`),user:e.id,total:0,rank:1},{at:b(`2028-06-14T21:00:00Z`),user:e.id,total:100,rank:1}])})}),play:async({canvas:e})=>{let t=await _(e);await p(t).toHaveTextContent(`Priya Shah`),await p(t.querySelectorAll(`[data-named]`)).toHaveLength(2)}},C={render:()=>(0,f.jsx)(d,{s:n(e=>{for(let t=1;t<=17;t++)e.members.push({id:`f${t}`,name:`Friend ${String(t).padStart(2,`0`)}`,active:!0});let t=[`2028-06-09`,`2028-06-12`,`2028-06-16`,`2028-06-20`,`2028-06-24`,`2028-06-28`];e.tableHistory=e.members.flatMap((e,n)=>t.map((t,r)=>({at:b(`${t}T21:00:00Z`),user:e.id,total:Math.round(r*(230+n*37%60)),rank:1})))})}),play:async({canvas:e,canvasElement:t})=>{let n=await _(e);await p(n.querySelectorAll(`[data-person]`)).toHaveLength(20);let r=[...n.querySelectorAll(`[data-named] text`)].map(e=>e.getBoundingClientRect());for(let e=0;e<r.length;e++)for(let t=e+1;t<r.length;t++)Math.abs(r[e].x-r[t].x)<30&&await p(Math.abs(r[e].y-r[t].y)).toBeGreaterThanOrEqual(11);await a(t)}},w={loaders:[s(`eve`)],render:(e,{loaded:t})=>(0,f.jsx)(d,{s:g(t)}),play:async({canvas:e})=>{await p(e.getByText(`The race starts after the first results are in`)).toBeVisible()}},T={loaders:[s(`night`)],render:(e,{loaded:t})=>(0,f.jsx)(d,{s:g(t)}),play:async({canvas:e})=>{let t=await _(e),n=t.getBoundingClientRect(),[r,i]=[n.x+n.width/2,n.y+n.height/2],a=document.elementFromPoint(r,i);await p(t.contains(a)).toBe(!0),a.dispatchEvent(new PointerEvent(`pointermove`,{clientX:r,clientY:i,bubbles:!0}));let o=await e.findByRole(`status`),s=o.querySelector(`[data-key='you']`);await p(getComputedStyle(s).backgroundColor).not.toBe(getComputedStyle(o).backgroundColor)}},E={loaders:[s(`night`)],render:(e,{loaded:t})=>(0,f.jsx)(`div`,{className:`max-w-[390px] rounded-card bg-surface p-3`,children:(0,f.jsx)(u,{race:r(g(t),[`raj`,`ana`,`mel`])})}),play:async({canvas:e})=>{await p(await e.findByRole(`img`,{name:`The points race: you, Mel, Raj and Ana`})).toBeVisible()}},D=[`Night`,`Knockouts`,`OneResult`,`EveryoneLevel`,`TwentyMembers`,`Eve`,`ScrubbedByPointer`,`Named`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("night")],
  render: (_, {
    loaded: l
  }) => <Race s={loaded(l)} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const img = await drawing(canvas);
    await expect(img.querySelectorAll("[data-person]")).toHaveLength(9);
    await expect(img.querySelectorAll("[data-named]")).toHaveLength(3);
    await expect(img).toHaveTextContent("419");
    await expect(img).toHaveTextContent("Mel");
    await expect(img).toHaveTextContent("You");
    await expect(img).toHaveTextContent("Ana");
    const table = canvas.getByRole("table", {
      name: /The points race/
    });
    await expect(within(table).getAllByRole("row")).toHaveLength(10);
    await noSidewaysScroll(canvasElement);
  }
}`,...v.parameters?.docs?.source},description:{story:`The night: you, the leader and the place above you named at the end, everyone else quiet (you 6th: Mel leads, Ana
is 5th).`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("knockouts")],
  render: (_, {
    loaded: l
  }) => <Race s={loaded(l)} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(await drawing(canvas)).toHaveTextContent("653");
    await noSidewaysScroll(canvasElement);
  }
}`,...y.parameters?.docs?.source},description:{story:`The knockouts: a longer race.`,...y.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Race s={buildSnapshot(s => {
    s.tableHistory = s.members.map((m, i) => ({
      at: at("2028-06-09T21:00:00Z"),
      user: m.id,
      total: 40 - i * 10,
      rank: i + 1
    }));
  })} />,
  play: async ({
    canvas
  }) => {
    await expect(await drawing(canvas)).toHaveTextContent("40");
  }
}`,...x.parameters?.docs?.source},description:{story:`One result in: one point each, a race of a single step.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Race s={buildSnapshot(s => {
    s.tableHistory = s.members.flatMap(m => [{
      at: at("2028-06-09T21:00:00Z"),
      user: m.id,
      total: 0,
      rank: 1
    }, {
      at: at("2028-06-14T21:00:00Z"),
      user: m.id,
      total: 100,
      rank: 1
    }]);
  })} />,
  play: async ({
    canvas
  }) => {
    const img = await drawing(canvas);
    await expect(img).toHaveTextContent("Priya Shah");
    await expect(img.querySelectorAll("[data-named]")).toHaveLength(2);
  }
}`,...S.parameters?.docs?.source},description:{story:`Everyone level: the leader named, nobody above you.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Race s={buildSnapshot(s => {
    for (let i = 1; i <= 17; i++) s.members.push({
      id: \`f\${i}\`,
      name: \`Friend \${String(i).padStart(2, "0")}\`,
      active: true
    });
    const days = ["2028-06-09", "2028-06-12", "2028-06-16", "2028-06-20", "2028-06-24", "2028-06-28"];
    s.tableHistory = s.members.flatMap((m, i) => days.map((d, k) => ({
      at: at(\`\${d}T21:00:00Z\`),
      user: m.id,
      total: Math.round(k * (230 + i * 37 % 60)),
      rank: 1
    })));
  })} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const img = await drawing(canvas);
    await expect(img.querySelectorAll("[data-person]")).toHaveLength(20);
    const labels = [...img.querySelectorAll<SVGTextElement>("[data-named] text")].map(t => t.getBoundingClientRect());
    for (let i = 0; i < labels.length; i++) for (let j = i + 1; j < labels.length; j++) if (Math.abs(labels[i]!.x - labels[j]!.x) < 30) await expect(Math.abs(labels[i]!.y - labels[j]!.y)).toBeGreaterThanOrEqual(11);
    await noSidewaysScroll(canvasElement);
  }
}`,...C.parameters?.docs?.source},description:{story:`Twenty members with totals past 1,000: the named ends kept apart.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("eve")],
  render: (_, {
    loaded: l
  }) => <Race s={loaded(l)} />,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("The race starts after the first results are in")).toBeVisible();
  }
}`,...w.parameters?.docs?.source},description:{story:`The eve: no result yet, so no race.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("night")],
  render: (_, {
    loaded: l
  }) => <Race s={loaded(l)} />,
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
    const tip = await canvas.findByRole("status");
    const key = tip.querySelector<HTMLElement>("[data-key='you']")!;
    await expect(getComputedStyle(key).backgroundColor).not.toBe(getComputedStyle(tip).backgroundColor);
  }
}`,...T.parameters?.docs?.source},description:{story:`By pointer or touch, as the odds chart (the final review); your line's key in the tooltip shows on its ink.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("night")],
  render: (_, {
    loaded: l
  }) => <div className="max-w-[390px] rounded-card bg-surface p-3">
      <PointsChart race={race(loaded(l), ["raj", "ana", "mel"])!} />
    </div>,
  play: async ({
    canvas
  }) => {
    await expect(await canvas.findByRole("img", {
      name: "The points race: you, Mel, Raj and Ana"
    })).toBeVisible();
  }
}`,...E.parameters?.docs?.source},description:{story:`History's Choose who (Plan 5e-2): the people you name, in place of the leader and the place above you.`,...E.parameters?.docs?.description}}}})))()}O();export{w as Eve,S as EveryoneLevel,y as Knockouts,E as Named,v as Night,x as OneResult,T as ScrubbedByPointer,C as TwentyMembers,D as __namedExportsOrder,h as default};