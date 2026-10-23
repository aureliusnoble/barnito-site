import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,i as r,r as i,t as a}from"./checks-CKr9wmxM.js";import{n as o,t as s}from"./Button-DV5UdU4K.js";import{n as c,r as l,t as u}from"./Sheet-BayhnjeB.js";function d(){let e=l();return(0,m.jsx)(s,{variant:`quiet`,onClick:()=>e.push({title:`England's price`,body:(0,m.jsx)(`p`,{className:`font-num text-score font-bold`,children:`16 pts`})}),children:`Est. 61%`})}function f(){let e=l(),t=(0,m.jsx)(`ul`,{className:`grid gap-2`,children:Array.from({length:30},(e,t)=>(0,m.jsx)(`li`,{className:`h-12 rounded-tile bg-surface-sunken`},t))});return(0,m.jsx)(s,{variant:`quiet`,onClick:()=>e.push({title:`England's scorers`,body:t}),children:`All scorers`})}function p({rows:e=0,deep:t=!1,title:n=`England`}){return(0,m.jsxs)(u.Root,{children:[(0,m.jsx)(u.Trigger,{render:(0,m.jsx)(s,{}),children:`Open`}),(0,m.jsxs)(u.Content,{children:[(0,m.jsx)(u.Header,{children:n}),(0,m.jsxs)(u.Body,{children:[(0,m.jsx)(`p`,{className:`font-num text-hero font-bold`,children:`+16`}),!t&&(0,m.jsx)(d,{}),(0,m.jsx)(`ul`,{className:`grid gap-2`,children:Array.from({length:e},(e,t)=>(0,m.jsx)(`li`,{className:`h-12 rounded-tile bg-surface-sunken`},t))}),t&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`input`,{"aria-label":`Note`,className:`h-target rounded-tile border border-line-strong px-3 text-input`}),(0,m.jsx)(d,{}),(0,m.jsx)(f,{})]})]}),(0,m.jsx)(u.Footer,{children:(0,m.jsx)(s,{className:`w-full`,children:`Lock`})})]})]})}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{i(),o(),c(),m=t(),{expect:h,waitFor:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Components/Sheet`},y=()=>_(document.body),b={render:()=>(0,m.jsx)(p,{}),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Open`})),await h(await y().findByRole(`dialog`,{name:`England`})).toBeVisible(),await t.keyboard(`{Escape}`),await g(()=>h(y().queryByRole(`dialog`)).toBeNull()),await t.click(e.getByRole(`button`,{name:`Open`}));let n=await y().findByRole(`button`,{name:`Close`});await h(n.getBoundingClientRect().height).toBeGreaterThanOrEqual(44),await t.click(n),await g(()=>h(y().queryByRole(`dialog`)).toBeNull())}},x={render:()=>(0,m.jsx)(p,{}),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Open`})),await h(await y().findByRole(`dialog`,{name:`England`})).toBeVisible()}},S={render:()=>(0,m.jsx)(p,{}),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Open`})),await y().findByRole(`dialog`,{name:`England`}),await t.click(y().getByRole(`button`,{name:`Est. 61%`})),await h(await y().findByRole(`dialog`,{name:`England's price`})).toBeVisible();let r=y().getByRole(`button`,{name:`Back`});await n(r),await t.click(r),await h(await y().findByRole(`dialog`,{name:`England`})).toBeVisible(),await h(y().queryByRole(`button`,{name:`Back`})).toBeNull(),await t.click(y().getByRole(`button`,{name:`Est. 61%`})),await y().findByRole(`dialog`,{name:`England's price`}),await t.keyboard(`{Escape}`),await g(()=>h(y().queryByRole(`dialog`)).toBeNull()),await t.click(e.getByRole(`button`,{name:`Open`})),await h(await y().findByRole(`dialog`,{name:`England`})).toBeVisible()}},C=()=>document.querySelector(`[data-sheet-body]`),w={render:()=>(0,m.jsx)(p,{rows:20,deep:!0}),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Open`})),await y().findByRole(`dialog`,{name:`England`}),await t.type(y().getByRole(`textbox`,{name:`Note`}),`Kane starts`);let n=C();await h(n).not.toBeNull(),n.scrollTop=n.scrollHeight;let r=n.scrollTop;await h(r).toBeGreaterThan(0),await t.click(y().getByRole(`button`,{name:`All scorers`})),await h(await y().findByRole(`dialog`,{name:`England's scorers`})).toBeVisible(),await g(()=>h(C().scrollTop).toBe(0)),await h(document.activeElement).toHaveTextContent(`England's scorers`),await t.click(y().getByRole(`button`,{name:`Back`})),await y().findByRole(`dialog`,{name:`England`}),await h(y().getByRole(`textbox`,{name:`Note`})).toHaveValue(`Kane starts`),await g(()=>h(Math.abs(C().scrollTop-r)).toBeLessThanOrEqual(1)),await h(document.activeElement).toBe(y().getByRole(`button`,{name:`All scorers`}));let i=[...document.querySelectorAll(`[data-sheet-layer]`)].filter(e=>!e.hidden);await h(i).toHaveLength(1),await h(getComputedStyle(i[0]).animationName).toBe(`none`)}},T={render:()=>(0,m.jsx)(p,{}),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Open`})),await y().findByRole(`dialog`,{name:`England`});let n=document.querySelector(`[data-sheet-backdrop]`);await h(n).not.toBeNull(),await g(()=>h(Number(getComputedStyle(n).opacity)).toBeGreaterThanOrEqual(.45))}},E={render:()=>(0,m.jsx)(p,{}),play:async({canvas:e,userEvent:t})=>{let n=a();if(n){await n.reduceMotion(!0);try{await t.click(e.getByRole(`button`,{name:`Open`})),await y().findByRole(`dialog`,{name:`England`}),await t.click(y().getByRole(`button`,{name:`Est. 61%`}));let n=(await y().findByRole(`dialog`,{name:`England's price`})).querySelector(`[data-sheet-layer]:not([hidden])`);await h(n).not.toBeNull(),await h(parseFloat(getComputedStyle(n).animationDuration)*1e3).toBeLessThanOrEqual(.01)}finally{await n.reduceMotion(!1)}}}},D={render:()=>(0,m.jsx)(p,{title:`Bosnia and Herzegovina v Northern Ireland`}),play:async({canvas:e,canvasElement:t,userEvent:n})=>{await n.click(e.getByRole(`button`,{name:`Open`}));let i=await y().findByRole(`dialog`,{name:`Bosnia and Herzegovina v Northern Ireland`});await h(i.scrollWidth).toBeLessThanOrEqual(i.clientWidth),await r(t)}},O=[`OpenAndClose`,`Open`,`Depth`,`DepthKeepsYourPlace`,`Backdrop`,`ReducedMotion`,`LongTitle`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <PickSheet />,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: "Open"
    }));
    await expect(await page().findByRole("dialog", {
      name: "England"
    })).toBeVisible();
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(page().queryByRole("dialog")).toBeNull());
    await userEvent.click(canvas.getByRole("button", {
      name: "Open"
    }));
    const close = await page().findByRole("button", {
      name: "Close"
    });
    await expect(close.getBoundingClientRect().height).toBeGreaterThanOrEqual(44);
    await userEvent.click(close);
    await waitFor(() => expect(page().queryByRole("dialog")).toBeNull());
  }
}`,...b.parameters?.docs?.source},description:{story:`It opens from its trigger as a dialog named by its title; Escape closes it, and so does its Close button.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <PickSheet />,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: "Open"
    }));
    await expect(await page().findByRole("dialog", {
      name: "England"
    })).toBeVisible();
  }
}`,...x.parameters?.docs?.source},description:{story:`Left open, so the accessibility check runs on the sheet itself.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <PickSheet />,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: "Open"
    }));
    await page().findByRole("dialog", {
      name: "England"
    });
    await userEvent.click(page().getByRole("button", {
      name: "Est. 61%"
    }));
    await expect(await page().findByRole("dialog", {
      name: "England's price"
    })).toBeVisible();
    const back = page().getByRole("button", {
      name: "Back"
    });
    await thumbSized(back);
    await userEvent.click(back);
    await expect(await page().findByRole("dialog", {
      name: "England"
    })).toBeVisible();
    await expect(page().queryByRole("button", {
      name: "Back"
    })).toBeNull();
    await userEvent.click(page().getByRole("button", {
      name: "Est. 61%"
    }));
    await page().findByRole("dialog", {
      name: "England's price"
    });
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(page().queryByRole("dialog")).toBeNull());
    await userEvent.click(canvas.getByRole("button", {
      name: "Open"
    }));
    await expect(await page().findByRole("dialog", {
      name: "England"
    })).toBeVisible();
  }
}`,...S.parameters?.docs?.source},description:{story:`One layer deeper in the same sheet, a named Back to return; closing deep and reopening starts at the top.`,...S.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <PickSheet rows={20} deep />,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: "Open"
    }));
    await page().findByRole("dialog", {
      name: "England"
    });
    await userEvent.type(page().getByRole("textbox", {
      name: "Note"
    }), "Kane starts");
    const scroller = body();
    await expect(scroller).not.toBeNull();
    scroller!.scrollTop = scroller!.scrollHeight;
    const where = scroller!.scrollTop;
    await expect(where).toBeGreaterThan(0);
    await userEvent.click(page().getByRole("button", {
      name: "All scorers"
    }));
    await expect(await page().findByRole("dialog", {
      name: "England's scorers"
    })).toBeVisible();
    await waitFor(() => expect(body()!.scrollTop).toBe(0));
    await expect(document.activeElement).toHaveTextContent("England's scorers");
    await userEvent.click(page().getByRole("button", {
      name: "Back"
    }));
    await page().findByRole("dialog", {
      name: "England"
    });
    await expect(page().getByRole("textbox", {
      name: "Note"
    })).toHaveValue("Kane starts");
    await waitFor(() => expect(Math.abs(body()!.scrollTop - where)).toBeLessThanOrEqual(1));
    await expect(document.activeElement).toBe(page().getByRole("button", {
      name: "All scorers"
    }));
    const shown = [...document.querySelectorAll<HTMLElement>("[data-sheet-layer]")].filter(layer => !layer.hidden);
    await expect(shown).toHaveLength(1);
    await expect(getComputedStyle(shown[0]!).animationName).toBe("none");
  }
}`,...w.parameters?.docs?.source},description:{story:`Back returns you where you were (final review): the same scroll, what you'd typed, and focus on what you tapped;
a new layer opens at its top with its title focused, and only a new layer slides in.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <PickSheet />,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: "Open"
    }));
    await page().findByRole("dialog", {
      name: "England"
    });
    const backdrop = document.querySelector<HTMLElement>("[data-sheet-backdrop]");
    await expect(backdrop).not.toBeNull();
    await waitFor(() => expect(Number(getComputedStyle(backdrop!).opacity)).toBeGreaterThanOrEqual(0.45));
  }
}`,...T.parameters?.docs?.source},description:{story:`The backdrop is dark enough to set the sheet apart (the owner, 19 Oct).`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <PickSheet />,
  play: async ({
    canvas,
    userEvent
  }) => {
    const run = controls();
    if (!run) return;
    await run.reduceMotion(true);
    try {
      await userEvent.click(canvas.getByRole("button", {
        name: "Open"
      }));
      await page().findByRole("dialog", {
        name: "England"
      });
      await userEvent.click(page().getByRole("button", {
        name: "Est. 61%"
      }));
      const layer = (await page().findByRole("dialog", {
        name: "England's price"
      })).querySelector<HTMLElement>("[data-sheet-layer]:not([hidden])");
      await expect(layer).not.toBeNull();
      await expect(parseFloat(getComputedStyle(layer!).animationDuration) * 1000).toBeLessThanOrEqual(0.01);
    } finally {
      await run.reduceMotion(false);
    }
  }
}`,...E.parameters?.docs?.source},description:{story:`With reduced motion, the next layer arrives without moving.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <PickSheet title="Bosnia and Herzegovina v Northern Ireland" />,
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: "Open"
    }));
    const sheet = await page().findByRole("dialog", {
      name: "Bosnia and Herzegovina v Northern Ireland"
    });
    await expect(sheet.scrollWidth).toBeLessThanOrEqual(sheet.clientWidth);
    await noSidewaysScroll(canvasElement);
  }
}`,...D.parameters?.docs?.source},description:{story:`A long title wraps beside the Close button.`,...D.parameters?.docs?.description}}}})))()}k();export{T as Backdrop,S as Depth,w as DepthKeepsYourPlace,D as LongTitle,x as Open,b as OpenAndClose,E as ReducedMotion,O as __namedExportsOrder,v as default};