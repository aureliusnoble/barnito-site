import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{h as n,p as r,t as i}from"./src-Ckdztxlk.js";import{i as a,r as o}from"./checks-CKr9wmxM.js";import{i as s,t as c}from"./moments-Cjxlj8DI.js";import{n as l,t as u}from"./LockButton-BMN_kwAU.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{i(),o(),c(),l(),d=t(),{expect:f,fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Domain/LockButton`,parameters:{layout:`padded`}},h=p(),g=e=>r(e.s),_=e=>e.dataset.tone,v=e=>[...e.querySelectorAll(`.font-num`)].map(e=>e.textContent),y={loaders:[s(`eve`)],render:(e,{loaded:t})=>(0,d.jsx)(u,{due:g(t),onPress:h}),play:async({canvas:e,canvasElement:t,userEvent:n})=>{h.mockClear();let r=e.getByRole(`button`,{name:`Lock 2 by 12:00 tomorrow`});await f(_(r)).toBe(`tomorrow`),await f(v(r)).toEqual([`2`,`12:00`]),await n.click(r),await f(h).toHaveBeenCalledOnce(),await a(t)}},b={loaders:[s(`morning`)],render:(e,{loaded:t})=>(0,d.jsx)(u,{due:g(t),onPress:h}),play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`button`,{name:`Draft 1 by 12:00 today`});await f(_(n)).toBe(`today`),await f(n.querySelector(`[data-icon=draft]`)).not.toBeNull(),await a(t)}},x={loaders:[s(`reveal`)],render:(e,{loaded:t})=>(0,d.jsx)(u,{due:g(t),onPress:h}),play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Lock 3 by 12:00 tomorrow`});await f(t.querySelector(`[data-icon=lock]`)).not.toBeNull()}},S={loaders:[s(`morning`)],render:(e,{loaded:t})=>{let n=t.s,i={...n,picks:[...n.picks.map(e=>e.user===n.you&&e.fixture===`C-3`&&e.status===`draft`?{...e,status:`locked`}:e),{id:`c4`,user:n.you,kind:`result`,fixture:`C-4`,round:`MD2`,outcome:`draw`,status:`locked`}]};return(0,d.jsx)(u,{due:r(i),onPress:h})},play:async({canvas:e})=>{await f(_(e.getByRole(`button`,{name:`All locked for today`}))).toBe(`done`)}},C={loaders:[s(`morning`)],render:(e,{loaded:t})=>{let i=t.s,a={...i,now:Date.parse(`2028-06-16T07:10:00Z`),picks:i.picks.filter(e=>e.user!==i.you||e.kind!==`tokens`||e.fixture!==`A-3`||e.team!==`IT`)},o=n(a,`tokens`).pill;return(0,d.jsx)(u,{due:r(a),pace:[{kind:`tokens`,...o}],onPress:h})},play:async({canvas:e,canvasElement:t})=>{await f(e.getByRole(`button`,{name:`Lock 3 by 12:00 today`})).toBeVisible(),await f(t).toHaveTextContent(`Tokens: Behind`),await a(t)}},w=[`Eve`,`Morning`,`Reveal`,`AllLocked`,`Behind`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("eve")],
  render: (_, {
    loaded
  }) => <LockButton due={due(loaded)} onPress={pressed} />,
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    pressed.mockClear();
    const button = canvas.getByRole("button", {
      name: "Lock 2 by 12:00 tomorrow"
    });
    await expect(tone(button)).toBe("tomorrow");
    await expect(numbers(button)).toEqual(["2", "12:00"]);
    await userEvent.click(button);
    await expect(pressed).toHaveBeenCalledOnce();
    await noSidewaysScroll(canvasElement);
  }
}`,...y.parameters?.docs?.source},description:{story:`The eve: the champion and tomorrow's match drafted, in amber.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <LockButton due={due(loaded)} onPress={pressed} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const button = canvas.getByRole("button", {
      name: "Draft 1 by 12:00 today"
    });
    await expect(tone(button)).toBe("today");
    await expect(button.querySelector("[data-icon=draft]")).not.toBeNull();
    await noSidewaysScroll(canvasElement);
  }
}`,...b.parameters?.docs?.source},description:{story:`A match-day morning with a match still to pick: drafting comes first, in red.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("reveal")],
  render: (_, {
    loaded
  }) => <LockButton due={due(loaded)} onPress={pressed} />,
  play: async ({
    canvas
  }) => {
    const button = canvas.getByRole("button", {
      name: "Lock 3 by 12:00 tomorrow"
    });
    await expect(button.querySelector("[data-icon=lock]")).not.toBeNull();
  }
}`,...x.parameters?.docs?.source},description:{story:`After noon: tomorrow's three drafts.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => {
    const s = (loaded as Loaded).s;
    const locked: Snapshot = {
      ...s,
      picks: [...s.picks.map(p => p.user === s.you && p.fixture === "C-3" && p.status === "draft" ? {
        ...p,
        status: "locked" as const
      } : p), {
        id: "c4",
        user: s.you,
        kind: "result",
        fixture: "C-4",
        round: "MD2",
        outcome: "draw",
        status: "locked"
      }]
    };
    return <LockButton due={dueNext(locked)!} onPress={pressed} />;
  },
  play: async ({
    canvas
  }) => {
    await expect(tone(canvas.getByRole("button", {
      name: "All locked for today"
    }))).toBe("done");
  }
}`,...S.parameters?.docs?.source},description:{story:`Everything due locked: quiet.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => {
    const s = (loaded as Loaded).s;
    const short: Snapshot = {
      ...s,
      now: Date.parse("2028-06-16T07:10:00Z"),
      picks: s.picks.filter(p => !(p.user === s.you && p.kind === "tokens" && p.fixture === "A-3" && p.team === "IT"))
    };
    const pill = budget(short, "tokens")!.pill;
    return <LockButton due={dueNext(short)!} pace={[{
      kind: "tokens",
      ...pill
    }]} onPress={pressed} />;
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByRole("button", {
      name: "Lock 3 by 12:00 today"
    })).toBeVisible();
    await expect(canvasElement).toHaveTextContent("Tokens: Behind");
    await noSidewaysScroll(canvasElement);
  }
}`,...C.parameters?.docs?.source},description:{story:`Behind the pace on tokens: the pill under the button says so, in a word as well as a colour.`,...C.parameters?.docs?.description}}}})))()}T();export{S as AllLocked,C as Behind,y as Eve,b as Morning,x as Reveal,w as __namedExportsOrder,m as default};