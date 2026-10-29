import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-DCluhXK3.js";import{n,t as r}from"./App-BOCROeKv.js";import{t as i}from"./Toaster-iUbVR2_Y.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{c as o,m as s,s as c}from"./Sheets-DkzTz-by.js";import{i as l,r as u}from"./checks-C0Y16pbK.js";import{a as d,i as f,n as p,r as m,t as h}from"./app--B0L3gM3.js";function g(){let[e,t]=(0,_.useState)(0);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`button`,{type:`button`,onClick:()=>t(e=>e+1),children:`Mount again`}),(0,v.jsx)(r,{},e)]})}var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{u(),_=t(),s(),n(),o(),m(),v=a(),{expect:y,fireEvent:b,userEvent:x,waitFor:S,within:C}=__STORYBOOK_MODULE_TEST__,w={title:`App/Home`,parameters:{layout:`fullscreen`}},T=e=>C(e.ownerDocument.body),E=async e=>{let t=async()=>(await T(e).findAllByRole(`dialog`)).filter(e=>!e.hasAttribute(`data-toast`));return await S(async()=>y(await t()).toHaveLength(1)),(await t())[0]},D=e=>T(e).queryAllByRole(`dialog`).some(e=>!e.hasAttribute(`data-toast`)),O=async e=>{await x.click(C(await E(e)).getByRole(`button`,{name:`Close`})),await S(()=>y(D(e)).toBe(!1))},k=()=>window.location.hash,A={loaders:[p(`morning`,f(`2028-06-14T22:30:00Z`))],render:(e,{loaded:t})=>(0,v.jsx)(h,{loaded:t}),play:async({canvas:e,canvasElement:t})=>{let n=await E(t);await y(C(n).getByText(/pts/)).toBeVisible(),await O(t);let r=e.getByRole(`button`,{name:/by 12:00 today|All locked for today/});await y(r).toHaveTextContent(`Draft 1 by 12:00 today`);let i=C(e.getByRole(`region`,{name:`Today`})).getAllByRole(`article`);await y(i.map(e=>e.getAttribute(`aria-label`))).toEqual([`Serbia v Türkiye`,`Portugal v Austria`,`Germany v Poland`]),await l(t),await x.click(C(i[1]).getByRole(`button`,{name:/Portugal v Austria/})),await S(()=>y(k()).toBe(`#/match/C-3`)),window.location.hash=`#/`,await x.click(await e.findByRole(`button`,{name:`Draft 1 by 12:00 today`})),await S(()=>y(k()).toBe(`#/picks`))}},j={loaders:[p(`morning`,d)],render:(e,{loaded:t})=>(0,v.jsx)(h,{loaded:t}),play:async({canvasElement:e})=>{let t=await E(e);await y(C(t).getByRole(`button`,{name:`I'm caught up`})).toBeVisible(),await y(e.ownerDocument.body.textContent).not.toMatch(/\d–\d/),await y(T(e).queryByText(/locked (themselves|itself)/)).toBeNull(),await x.click(C(t).getByRole(`button`,{name:`I'm caught up`})),await S(()=>y(t.textContent).toMatch(/\d–\d/)),await O(e);let n=await T(e).findByText(`8 drafts locked themselves yesterday at 12:00`);await y(n).toBeVisible(),await y(T(e).queryByRole(`button`,{name:`See`})).toBeNull(),await l(e)}},M={loaders:[p(`reveal`,f(`2028-06-15T07:00:00Z`))],render:(e,{loaded:t})=>(0,v.jsx)(h,{loaded:t}),play:async({canvasElement:e})=>{await y(await T(e).findByText(`1 draft locked itself at 12:00`)).toBeVisible(),await x.click(T(e).getByRole(`button`,{name:`See`})),await S(()=>y(k()).toBe(`#/picks`))}},N={loaders:[p(`night`)],render:(e,{loaded:t})=>(0,v.jsx)(h,{loaded:t}),play:async({canvas:e,canvasElement:t})=>{await O(t);let n=C(e.getByRole(`region`,{name:`Today`})).getAllByRole(`article`);await y(n.map(e=>e.dataset.phase)).toEqual([`full time`,`full time`,`full time`]);for(let e of n)for(let t of e.querySelectorAll(`[data-line]`))await y(t.querySelector(`[data-came-in]`)).not.toBeNull();await y(n.find(e=>e.dataset.match===`C-3`).querySelector(`[data-badge]`)).toBeNull(),await l(t)}},P={loaders:[p(`morning`,d)],render:(e,{loaded:t})=>(0,v.jsx)(h,{loaded:t}),play:async({canvas:e,canvasElement:t})=>{await x.click(C(await E(t)).getByRole(`button`,{name:`I haven't watched yet`})),await S(()=>y(D(t)).toBe(!1));let n=e.getByRole(`button`,{name:/^3 results hidden$/});await x.click(n);let r=await E(t);await y(C(r).getByRole(`button`,{name:`I'm caught up`})).toBeVisible(),await y(t.ownerDocument.body.textContent).not.toMatch(/\d–\d/)}},F={loaders:[p(`morning`,d)],render:(e,{loaded:t})=>{let{moment:n,s:r}=t;return(0,v.jsx)(i,{children:(0,v.jsx)(c,{initial:{moment:n,snapshot:r},children:(0,v.jsx)(g,{})})})},play:async({canvas:e,canvasElement:t})=>{await E(t),await b.click(e.getByRole(`button`,{name:`Mount again`,hidden:!0})),await new Promise(e=>setTimeout(e,300)),await y(T(t).queryByText(/locked (themselves|itself)/)).toBeNull(),await x.click(C(await E(t)).getByRole(`button`,{name:`I haven't watched yet`})),await y(await T(t).findByText(`8 drafts locked themselves yesterday at 12:00`)).toBeVisible()}},I=[`Morning`,`SealedMorning`,`AfterNoon`,`Night`,`HiddenResults`,`SealedMorningRemounted`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  loaders: [at("morning", lastOpened("2028-06-14T22:30:00Z"))],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const summary = await dialog(canvasElement);
    await expect(within(summary).getByText(/pts/)).toBeVisible();
    await closeSheet(canvasElement);
    const button = canvas.getByRole("button", {
      name: /by 12:00 today|All locked for today/
    });
    await expect(button).toHaveTextContent("Draft 1 by 12:00 today");
    const cards = within(canvas.getByRole("region", {
      name: "Today"
    })).getAllByRole("article");
    await expect(cards.map(c => c.getAttribute("aria-label"))).toEqual(["Serbia v Türkiye", "Portugal v Austria", "Germany v Poland"]);
    await noSidewaysScroll(canvasElement);
    await userEvent.click(within(cards[1]!).getByRole("button", {
      name: /Portugal v Austria/
    }));
    await waitFor(() => expect(hash()).toBe("#/match/C-3"));
    window.location.hash = "#/";
    await userEvent.click(await canvas.findByRole("button", {
      name: "Draft 1 by 12:00 today"
    }));
    await waitFor(() => expect(hash()).toBe("#/picks"));
  }
}`,...A.parameters?.docs?.source},description:{story:`The morning of Thu 15 Jun, last opened after last night's matches: the summary first (MS1), then the lock button
with what's due, and today's three matches by kickoff.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  loaders: [at("morning", openedYesterday)],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvasElement
  }) => {
    const summary = await dialog(canvasElement);
    await expect(within(summary).getByRole("button", {
      name: "I'm caught up"
    })).toBeVisible();
    // No score in the page: Spain 2–1 Italy would read "2–1".
    await expect(canvasElement.ownerDocument.body.textContent).not.toMatch(/\\d–\\d/);
    // What locked itself waits for the summary to close.
    await expect(body(canvasElement).queryByText(/locked (themselves|itself)/)).toBeNull();
    await userEvent.click(within(summary).getByRole("button", {
      name: "I'm caught up"
    }));
    await waitFor(() => expect(summary.textContent).toMatch(/\\d–\\d/));
    await closeSheet(canvasElement);
    // Yesterday's: said so, and no "See", since Picks no longer shows them (the demo's review, I10).
    const toast = await body(canvasElement).findByText("8 drafts locked themselves yesterday at 12:00");
    await expect(toast).toBeVisible();
    await expect(body(canvasElement).queryByRole("button", {
      name: "See"
    })).toBeNull();
    await noSidewaysScroll(canvasElement);
  }
}`,...j.parameters?.docs?.source},description:{story:`The first open of a sealed morning (spoiler-free mornings): the summary first, sealed, with no score anywhere
behind it; "I'm caught up" shows the scores; closed, the toast says what locked itself yesterday at noon (AL1).`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  loaders: [at("reveal", lastOpened("2028-06-15T07:00:00Z"))],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvasElement
  }) => {
    await expect(await body(canvasElement).findByText("1 draft locked itself at 12:00")).toBeVisible();
    await userEvent.click(body(canvasElement).getByRole("button", {
      name: "See"
    }));
    await waitFor(() => expect(hash()).toBe("#/picks"));
  }
}`,...M.parameters?.docs?.source},description:{story:`Just after noon, last opened this morning: today's draft that locked itself, and "See" opens Picks (AL1).`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  loaders: [at("night")],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await closeSheet(canvasElement);
    const cards = within(canvas.getByRole("region", {
      name: "Today"
    })).getAllByRole("article");
    await expect(cards.map(c => c.dataset.phase)).toEqual(["full time", "full time", "full time"]);
    for (const c of cards) for (const line of c.querySelectorAll("[data-line]")) await expect(line.querySelector("[data-came-in]")).not.toBeNull();
    await expect(cards.find(c => c.dataset.match === "C-3")!.querySelector("[data-badge]")).toBeNull();
    await noSidewaysScroll(canvasElement);
  }
}`,...N.parameters?.docs?.source},description:{story:`That night: at full time a card keeps only the calls that came in (CI1); none of tonight's did in this recording,
so Mel's hot take on the draw in Portugal v Austria has left its card (the kit's MatchCard story shows the tick).`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  loaders: [at("morning", openedYesterday)],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await userEvent.click(within(await dialog(canvasElement)).getByRole("button", {
      name: "I haven't watched yet"
    }));
    await waitFor(() => expect(sheetOpen(canvasElement)).toBe(false));
    const eye = canvas.getByRole("button", {
      name: /^3 results hidden$/
    });
    await userEvent.click(eye);
    const summary = await dialog(canvasElement);
    await expect(within(summary).getByRole("button", {
      name: "I'm caught up"
    })).toBeVisible();
    await expect(canvasElement.ownerDocument.body.textContent).not.toMatch(/\\d–\\d/);
  }
}`,...P.parameters?.docs?.source},description:{story:`Kept hidden ("I haven't watched yet"), the closed eye in the header with its count reopens the summary, which keeps
each row's eye and "I'm caught up".`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  loaders: [at("morning", openedYesterday)],
  render: (_, {
    loaded
  }) => {
    const {
      moment,
      s
    } = loaded as Loaded;
    return <Toaster>
        <MockProvider initial={{
        moment,
        snapshot: s
      }}>
          <Remount />
        </MockProvider>
      </Toaster>;
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await dialog(canvasElement);
    // Behind the open summary, as a programme would.
    await fireEvent.click(canvas.getByRole("button", {
      name: "Mount again",
      hidden: true
    }));
    await new Promise(r => setTimeout(r, 300));
    await expect(body(canvasElement).queryByText(/locked (themselves|itself)/)).toBeNull();
    // The sheet is drawn afresh by the remount.
    await userEvent.click(within(await dialog(canvasElement)).getByRole("button", {
      name: "I haven't watched yet"
    }));
    await expect(await body(canvasElement).findByText("8 drafts locked themselves yesterday at 12:00")).toBeVisible();
  }
}`,...F.parameters?.docs?.source},description:{story:`Home mounted again while the summary is open (as StrictMode's development build does, and Fast Refresh): still
the summary alone, and what locked itself only once it closes (the final review, I1).`,...F.parameters?.docs?.description}}}})))()}L();export{M as AfterNoon,P as HiddenResults,A as Morning,N as Night,j as SealedMorning,F as SealedMorningRemounted,I as __namedExportsOrder,w as default};